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
  max_results: 300,
};

v.fetchCloudinaryAssets({
  ...config,
  ...options,
  prefix: "Community Solidarity/Pickups",
  out_dir: "./src/cloudinary/output/pickups.ts",
  height: 800,
});

v.fetchCloudinaryAssets({
  ...config,
  ...options,
  prefix: "Community Solidarity/Slideshow",
  out_dir: "./src/cloudinary/output/slideshow.ts",
  height: 540,
});
