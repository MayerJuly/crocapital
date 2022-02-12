
let croc = document.querySelector('.croc-blur')
if(window.innerWidth>900){
    document.querySelector('.preloader').classList.add('show');
    croc.innerHTML = '<div class="croc" data-w-id="1c5a339c-9750-5e3e-4290-8d385408a326" data-animation-type="lottie" data-src="documents/crocodile_blue.json" data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg" data-default-duration="1.9602937966296492" data-duration="0"></div>\n';
} else {
    croc.innerHTML = '<img src="images/background.jpg" alt="Background" class="croc-img">\n';
}
// let requestURL = '../documents/crocodile_blue.json';
// let request = new XMLHttpRequest();
// request.open('GET',requestURL)
// request.responseType = 'json';
// request.send();
// request.onload =  function() {
//     let preloader = document.querySelector('.preloader');
//     preloader.classList.add('done')
// }