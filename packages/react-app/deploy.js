const fs = require("fs");
const skynet = require("skynet-js");

// Build our directory object, we're just including the file for our webpage.
const webDirectory = {
  "index.html": fs.readFileSync("./build/index.html").toString(),
};

const client = new skynet.SkynetClient();

// Upload user's webpage
(async function () {
  const { skylink: dirSkylink } = await client.uploadDirectory(webDirectory, "certificate");

  const dirSkylinkUrl = await client.getSkylinkUrl(dirSkylink, {
    subdomain: true,
  });

  console.log("Web Page Uploaded:", dirSkylinkUrl);
})();
