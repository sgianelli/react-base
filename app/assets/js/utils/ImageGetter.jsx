
let ImageGetter = {
    base: ENV.ImageBasePath,
    path: name => {
        return ENV.ImageBasePath + name;
    }
};

export default ImageGetter;
