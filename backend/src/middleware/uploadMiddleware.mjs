import multer from "multer";
import path from "path";

const imageStorage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "src/uploads/images/");
  },
  filename: (request, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});

const imageFilter = (request, file, callback) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);

  if (ext && mime) {
    callback(null, true);
  } else {
    callback(new Error("Only images (jpeg, jpg, png, gif) are allowed"), false);
  }
};

const imageUpload = multer({
  storage: imageStorage,
  limits: { fileSize: 1024 * 1024 * 5 }, //max 5 mb
  fileFilter: imageFilter,
});

export default imageUpload;
