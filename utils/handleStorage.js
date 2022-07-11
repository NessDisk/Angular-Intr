const multer = require("multer")

const storage = multer.diskStorage({
    destination:function(req, file, cb)
    {
    const pathStorage = `${__dirname}/../storage`
     
    cb( null, pathStorage )

    },
    filename:function(req, file, cb){
    // TODO: mi-cv.pdf mi-foto.png mi-video.mp4

    const ext = file.originalname.split(".").pop(); //To do ["name","png"]
    const filename = `file-${Date.now()}.${ext}`; //Todo
    cb(null, filename)
    }

}

)


const UploadMiddleware = multer({storage})


module.exports = UploadMiddleware