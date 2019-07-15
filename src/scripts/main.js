import style from "../styles/main.sass"
import createSlideshow from "./slideshow.js"

/*
    Timing functions:
    Linear      : t => t
    Ease-in     : t => t * t
    Ease-out    : t => t * ( 2 - t )
    Ease-in-out : t => ( t < .5 ? 2 * t * t : -1 + ( 4 - 2 * t ) * t )
*/

function scrollToSmooth(targetY, duration) {  
    const timingFunc = t => ( t < .5 ? 2 * t * t : -1 + ( 4 - 2 * t ) * t )
    let start = null
    const step = timestamp => {
        start = start || timestamp
        const progress = timestamp - start,
              // Growing from 0 to 1
              time = Math.min(1, ((timestamp - start) / duration))

        window.scrollTo(0, timingFunc(time) * targetY)
        if (progress < duration) {
            window.requestAnimationFrame(step)
        }
    }
    window.requestAnimationFrame(step)
}
var current = document.querySelector('body').dataset
if (current.pagetype == "index") {
    document.querySelector('#getintouch')
        .addEventListener( "click", ( e ) => {
            let contact = document.querySelector('#contact')
            let scrollTarget = contact.offsetTop + contact.offsetHeight + 120 - window.innerHeight
            let duration = Math.floor(scrollTarget / 5)

            e.preventDefault()
            scrollToSmooth(scrollTarget, duration)
        })


    let filters = document.querySelectorAll('.filter li')
    filters.forEach(filter => {
        filter.addEventListener( "click", ( e ) => {
            let current = document.querySelector('body').dataset
            current.filter = filter.firstChild.innerHTML.toLowerCase().replace(/\W/g, '')

            document.querySelectorAll('.filter .active')
                .forEach(active => active.classList.remove('active'))
            filter.classList.add('active')
        })
    })

}

function getBackY() {
    let yPos = window.pageYOffset
    let maxY = 193
    let minY = 50
    let yOffset = maxY - yPos
    return (yPos > maxY - minY) ? minY : yOffset
}

function getBackX() {
    let maxWidth = 1170
    let margins = 120 * 2
    let xOffset = (window.innerWidth - maxWidth - margins) / 2
    return (xOffset > 0) ? xOffset : 0
}






if (current.pagetype == "project" || current.pagetype == "meta") {
    let backButton = document.querySelector("#back")

    window.onresize = () => {
        backButton.style.top  = getBackY() + "px"
        backButton.style.left = getBackX() + "px"
    }
    window.onscroll = () => {
        backButton.style.top = getBackY() + "px"
    }
    backButton.style.top  = getBackY() + "px"
    backButton.style.left = getBackX() + "px"

    createSlideshow()

    let circles = document.querySelectorAll('.circles circle')
    if (circles) {
        scaleCircles(circles)
        setInterval(() => scaleCircles(circles), 2000);
    }
}


// ast
function scaleCircles(circles) {
    circles.forEach(circle => {
        let factor = getRandomFactor(0.3, 1)
        let cx     = circle.cx.baseVal.value
        let cy     = circle.cy.baseVal.value

        let translate = `translate(${-cx * (factor - 1)}, ${-cy * (factor - 1)})`
        let scale     = `scale(${factor})`
        circle.setAttribute("transform", `${translate}, ${scale}`)
    })
}

function getRandomFactor(min, max) {
    return Math.random() * (max - min) + min
}