import multer from 'multer'
import path from 'path'

export const storage = multer.diskStorage({
    destination: (req, file, callback ) => {
        callback(null, path.resolve( __dirname, '../public/images' ))
    }, //donde almacenamos los archivos cuando un usuario sube un archivo
    filename: (req, file, callback) => {
        callback( null, file.originalname )
    } //nombre que va a tener ese archivo
})
