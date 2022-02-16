
let croc = document.querySelector('.croc-blur')
if(window.innerWidth>900){
    document.querySelector('.preloader').classList.add('show');
    croc.innerHTML = '<div class="croc" data-w-id="ee0dfb00-8829-c091-ad03-92e8d1ef2e6e" data-animation-type="lottie" data-src="documents/animation.json" data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg" data-default-duration="2" data-duration="0"></div>\n';
} else {
    croc.innerHTML = '<img src="images/background.jpg" alt="Background" class="croc-img">\n';
}

setTimeout(function(){
    document.body.classList.add('finish');
},400)



// let requestURL = '../documents/crocodile_blue.json';
// let request = new XMLHttpRequest();
// request.open('GET',requestURL)
// request.responseType = 'json';
// request.send();
// request.onload =  function() {
//     let preloader = document.querySelector('.preloader');
//     preloader.classList.add('done')
// }