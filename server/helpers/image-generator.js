const DEFAULT_IMAGES = [
    "https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg",
    "https://storage.needpix.com/rsynced_images/background-4232859_1280.png",
    "https://www.publicdomainpictures.net/pictures/250000/velka/abstract-background-watercolor-15231659844OC.jpg",
    "https://cdn.pixabay.com/photo/2016/04/19/01/00/chalkboard-1337809_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/18/18/03/filter-1990470_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/02/05/03/58/moon-1180345_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/11/07/01/35/wood-2925399_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/03/10/13/clouds-310110_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/06/30/21/28/landscape-2459857_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/05/18/07/01/dog-3410511_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/08/11/11/46/bike-4398781_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/03/10/23/34/jellyfish-1249509_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/05/31/10/59/headphones-791077_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/08/01/12/02/railway-2564771_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/12/18/18/59/paragliders-4704674_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/06/13/50/wallpaper-1957738_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/02/27/08/28/fields-651829_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/10/13/18/coffee-839169_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/02/10/18/06/bubbles-2055872_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/02/09/10/kaleidoscope-1790851_960_720.jpg"
]

const getRandomImageURL = () => {
    let length = DEFAULT_IMAGES.length;
    let index = Math.floor(Math.random() * length);
    console.log("Index: ", index);
    const randomImage = DEFAULT_IMAGES[index];
    console.log("Random Image: ", randomImage);
    return randomImage;
}

module.exports = getRandomImageURL;
