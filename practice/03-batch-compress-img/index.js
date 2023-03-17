const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDirectory = process.argv[2];
const outputDirectory = process.argv[3];

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

const supportedExtensions = [".png", ".jpg", ".jpeg" /* , ".svg" */];

function compressImage(inputPath, outputPath) {
  const extension = path.extname(inputPath).toLowerCase();

  if (supportedExtensions.includes(extension)) {
    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);

    let pipeline = sharp();

    if (extension === ".svg") {
      pipeline = pipeline.svg();
    }

    pipeline.resize({ width: 800 }).toFormat("jpeg", { quality: 80 }).pipe(writeStream);

    readStream.pipe(pipeline);
  } else {
    fs.copyFileSync(inputPath, outputPath);
  }
}

function compressDirectory(directoryPath, outputDirectoryPath) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const inputPath = path.join(directoryPath, file);
    const outputPath = path.join(outputDirectoryPath, file);

    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
      }

      return compressDirectory(inputPath, outputPath);
    }

    compressImage(inputPath, `${inputPath}-compress`);
  });
}

compressDirectory(inputDirectory, outputDirectory);
console.log(`All images compressed successfully in ${outputDirectory}`);
