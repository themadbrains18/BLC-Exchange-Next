import multer from 'multer';
import path from 'path';
import fs from 'fs'



const multer2 = (folderPath,userID) => {
  return  multer({
        storage: multer.diskStorage({
            // destination: process.cwd() + '/public/' + folderPath,
            destination:(req, file, callback) => {
                let type = (file.mimetype === 'application/pdf') ? '/statement' :'/documents' ;
                let path = process.cwd() + '/public' + folderPath + type;
                if (!fs.existsSync(path)) {
                    // Do something
                    fs.mkdirSync(path);

                }
                callback(null, path);
              }, 
            filename: (req, file, cb) => {
                let fileName = `${Date.now()}-${file.fieldname}-${userID}-${file.originalname}`
                req.name = fileName
                req.fileuserid = userID;
                cb(null, fileName) //Appending extension
            }
        }),
      
        fileFilter: (req, file, cb) => {
            if(file.fieldname!== 'statement'){
                if ( file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                    cb(null, true);
                } else {
                    req.errortype = 'Only .png, .jpg and .jpeg format allowed!'
                    cb(null, false);
                }
            }
            else{
                if ( file.mimetype == "application/pdf" ) {
                    cb(null, true);
                } else {
                    req.errortype = 'Only .pdf format allowed!'
                    cb(null, false);
                   
                }
            }
            
        }

    })
}

const fileUpload = (folderPath, userID ) => {
    try {
        let upload = multer2(folderPath,userID);
        return upload;
    } catch (error) {

    }
}




export default fileUpload