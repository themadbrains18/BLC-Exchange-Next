import multer from 'multer';

// const upload = multer({ dest: process.cwd()+'/public/' })



const fileUpload = (folderPath, mimeType) => {
   try {
    return multer({
        storage: multer.diskStorage({
            destination: process.cwd() + '/public/'+folderPath,
            filename: (req, file, cb) => { 
              
                cb(null, file.originalname)
            }
            
        }),
        // fileFilter: (req, file, cb) => {
        //     console.log(file.originalname, 'test')
        //     // if (file.mimetype == "image/jpeg") {
        //     //   cb(null, true);
        //     // } else {
        //     //   cb(null, false);
        //     // //   return res.status(401).send({error : {messgae : "'Only .png, .jpg and .jpeg format allowed!'"}})
        //     //   return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        //     // }
        // }
    });
   } catch (error) {
     
   } 
  
}

export default fileUpload