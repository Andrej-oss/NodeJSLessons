const { ErroreHandler, errores } = require('../../error/index');
const { DOCS_MIMETYPES, IMAGE_MIMETYPES, FILE_MAX_SIZE, IMAGE_MAX_SIZE } = require('../../config/const/constants');

module.exports = (req, res, next) => {
    try {
        const { files } = req;

        console.log('------------');
        console.log(files);
        console.log('------------');

        const docs = [];
        const photos = [];

        const allFiles = Object.values(files);
        for (let i = 0; i < allFiles.length; i++) {
            const { mimetype, size } = allFiles[i];
            if (DOCS_MIMETYPES.includes(mimetype)) {
                if (size > FILE_MAX_SIZE) throw new ErroreHandler(errores.TOO_BIG_FILE.message, errores.TOO_BIG_FILE.code);
                docs.push(allFiles[i]);
            }
            else if (IMAGE_MIMETYPES.includes(mimetype)) {
                if (size > FILE_MAX_SIZE) throw new ErroreHandler(errores.TOO_BIG_FILE.message, errores.TOO_BIG_FILE.code);
                photos.push(allFiles[i]);
            }
            else throw new ErroreHandler(errores.NOT_VALID_FILE.message, errores.NOT_VALID_FILE.code);
        }
        req.images = photos;
        req.docs = docs;
        next();
    } catch (e) {
        next(e);
    }
}
