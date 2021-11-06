function getRndNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function isStartWithHttp(url) {
    var pattern = /^((http|https|ftp):\/\/)/;

    return pattern.test(url);
}

function convertPhotoUrl(url) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        if (!isStartWithHttp(url)) url = "http://localhost:8000/photos/" + url;
    } else if (isStartWithHttp(url)) {
        url = "/photos/" + url;
    }

    return url;
}

export { getRndNumber, isStartWithHttp, convertPhotoUrl };
