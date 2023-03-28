const fs = require("fs");
require("dotenv").config();
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function fetchCloudinaryAssets(prefix, save_path) {
  const options = {
    type: "upload",
    prefix,
    max_results: 200,
  };
  const result = [];
  await listResources(options, save_path, result);
}

async function listResources(options, save_path, result, next_cursor) {
  if (next_cursor) {
    options["next_cursor"] = next_cursor;
  }
  await cloudinary.v2.api.resources(options, async function (error, res) {
    const more = res?.next_cursor;
    const resources = res?.resources;

    for (var res in resources) {
      res = resources[res];
      var resultTemp = [];
      resultTemp.push({
        url: res.secure_url,
        height: res.height,
        width: res.width,
      });
      result.push(resultTemp);
    }

    if (more) {
      await listResources(options, save_path, result, more);
    } else {
      console.info("done");
      fs.writeFile(
        save_path,
        `export const images = ${JSON.stringify(result.map((url) => url[0]))}`,
        function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        }
      );
    }
  });
}

fetchCloudinaryAssets(
  "Community Solidarity/Whole Foods Commack",
  "./src/constants/wfc-album.ts"
);

fetchCloudinaryAssets(
  "Community Solidarity/CS Lite Album",
  "./src/constants/photo-album.ts"
);
