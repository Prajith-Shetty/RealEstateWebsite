export const sliderSettings = {
    slidesPerView : 1,
    spaceBetween: 50, //50px
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        }
    }
    //breakpoints is for different screens like 480px
};

export const updateFavourites = (id, favourites) => {
    if(favourites.includes(id)){
        return favourites.filter((resId)=>resId!==id)
    }
    else{
        return [...favourites, id]
    }
}

export const checkFavourites = (id, favourites)=> {
    return favourites.includes(id)? "#fa3e5f" : "white";
}