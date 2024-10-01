import multer from "multer";
const storage = multer.diskStorage({
  msg : console.log("Ihdiede edeode....."),
    destination: function (req, file, cb) {
      cb(null, './Public/temp')
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  file.originalname)
    }
  })
   const upload = multer({ storage: storage ,
    limits: { fileSize: 1024 * 1024 * 5 }
   })
  export default upload;
 