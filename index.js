const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const jimp = require('jimp');

readline.question('Enter the url to the image to be processed', url => {
    jimp.read(url, (err,profile) => {
        if(err) throw err;
        profile
            .resize(256,256) //set the size
            .quality(60) //set the quality
            .greyscale() //changes the photo to greyscale
            .write("updated.jpg")
    })
})
