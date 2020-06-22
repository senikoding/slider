let numSlide = 1;
displaySlide(numSlide)

function nextSlide(){
    numSlide += 1
    displaySlide(numSlide)
}
function prefSlide(){
    numSlide -= 1
    displaySlide(numSlide)
}

function displaySlide(num){
    let $slide = Array.from(document.getElementsByClassName('slide'));
    console.log(numSlide)
    $slide.forEach( e => e.style.display='none' )

    if(num > $slide.length) {
        numSlide = 1
    }
    if(num < 1){
        numSlide = $slide.length
    }

    $slide[numSlide-1].style.display = 'block'
}