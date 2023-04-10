const fs = require("fs");
const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function fetchCloudinaryAssets(config) {
  const result = [];
  await listResources(config, result);
}

async function listResources(config, result, next_cursor) {
  if (next_cursor) {
    config.options["next_cursor"] = next_cursor;
  }
  await cloudinary.v2.api.resources(
    config.options,
    async function (error, res) {
      const more = res?.next_cursor;
      const resources = res?.resources;

      for (var res in resources) {
        res = resources[res];
        const resultTemp = [];
        resultTemp.push({
          src: config.height
            ? res.secure_url.replace("/upload/", `/upload/h_${config.height}/`)
            : res.secure_url,
          height: config.height || res.height,
          width: config.height
            ? +(res.width * (config.height / res.height)).toFixed(0)
            : res.width,
        });
        result.push(resultTemp);
      }

      if (more) {
        await listResources(config, result, more);
      } else {
        console.info("Done 🎉");
        fs.writeFile(
          config.save_path,
          `export const images = ${JSON.stringify(
            result.map((url) => url[0])
          )}`,
          function (err) {
            if (err) {
              return console.log(err);
            }
            console.log("The file was saved!");
          }
        );
      }
    }
  );
}

const options = {
  type: "upload",
  max_results: 200,
};

fetchCloudinaryAssets({
  save_path: "./src/constants/wfc-album.ts",
  height: 350,
  options: {
    ...options,
    prefix: "Community Solidarity/Whole Foods Commack",
  },
});

fetchCloudinaryAssets({
  save_path: "./src/constants/photo-album.ts",
  options: {
    ...options,
    prefix: "Community Solidarity/CS Lite Album",
  },
});
