import multer from 'multer';
import path from 'path';

// const upload = multer({ dest: process.cwd()+'/public/' })



const fileUpload = (folderPath, name) => {
    try {
        return multer({
            storage: multer.diskStorage({
                destination: process.cwd() + '/public/' + folderPath,
                filename: (req, file, cb) => {
                    let fileName = `${Date.now()}-${file.originalname}`
                    req.name = fileName
                    cb(null, fileName) //Appending extension
                }
            }),
          
            fileFilter: (req, file, cb) => {
                console.log(file);
                if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                    cb(null, true);
                } else {
                    req.errortype = 'Only .png, .jpg and .jpeg format allowed!'
                    cb(null, false);
                   
                }
            }

        });
    } catch (error) {

    }

}




export default fileUpload