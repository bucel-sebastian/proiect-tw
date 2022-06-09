function toggleMenu(x){
    x.classList.toggle('opened');
    x.setAttribute('aria-expanded', x.classList.contains('opened'));

    if(x.classList.contains('opened')){
        document.getElementById("mobile-navigation").style.transform="translateX(0)";
    }
    else{
        document.getElementById("mobile-navigation").style.transform="translateX(100%)";

    }
}

// function turnSwitch(){
//     let switchBullet = document.querySelectorAll(".dark-light-mode-point");
//     switchBullet.forEach(bullet => {
//         bullet.classList.toggle("light-mode");
//         bullet.classList.toggle("dark-mode");
//     });
//     document.body.classList.toggle("light-mode")
//     document.body.classList.toggle("dark-mode");
// }