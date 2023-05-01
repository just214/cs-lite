const v = require("./fetchCloudinary");

require("dotenv").config();

const config = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
};

const options = {
  type: "upload",
  max_results: 200,
};

v.fetchCloudinaryAssets(
  config,
  {
    ...options,
    prefix: "Community Solidarity/Whole Foods Commack",
  },
  {
    savePath: "./src/constants/wfc-album.ts",
  }
);

v.fetchCloudinaryAssets(
  config,
  { ...options, prefix: "Community Solidarity/CS Lite Album" },
  {
    savePath: "./src/constants/photo-album.ts",
    height: 350,
  }
);
