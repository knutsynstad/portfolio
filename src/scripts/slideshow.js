module.exports = () => {
    let slideshows = document.querySelectorAll(".slideshow")
    if (slideshows.length) {
        slideshows.forEach(slideshow => {
            let slideCount = slideshow.querySelector(".slides").children.length
            let counter    = slideshow.querySelector(".currentSlide")

            slideshow.querySelector('.control-next')
                .addEventListener('click', e => {
                    let slide     = Number(slideshow.dataset.slide)
                    let nextSlide = (slide === slideCount) ? 1 : slide + 1

                    slideshow.dataset.slide = nextSlide
                    counter.innerText       = nextSlide
                })

            slideshow.querySelector('.control-prev')
                .addEventListener('click', e => {
                    let slide     = Number(slideshow.dataset.slide)
                    let nextSlide = (slide === 1) ? slideCount : slide - 1

                    slideshow.dataset.slide = nextSlide
                    counter.innerText       = nextSlide
                })
        })
    }
}