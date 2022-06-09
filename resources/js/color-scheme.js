console.log(sessionStorage.getItem("colorScheme"));
let colorScheme;
if(sessionStorage.getItem("colorScheme")){
    colorScheme = sessionStorage.getItem("colorScheme");

    setColorScheme(colorScheme);

}
else{
    colorScheme = "light";
    sessionStorage.setItem("colorScheme",colorScheme);
    setColorScheme(colorScheme);

}
console.log(colorScheme);

function colorSchemeSwitch(){
    if(colorScheme === "light"){
        colorScheme="dark";
    }
    else{
        colorScheme="light";
    }
    sessionStorage.setItem("colorScheme",colorScheme);
    console.log(colorScheme,sessionStorage.getItem("colorScheme"));
    setColorScheme(colorScheme);
}


function setColorScheme(scheme){
    let switchBullet = document.querySelectorAll(".dark-light-mode-point");
    let switchContainer = document.querySelectorAll(".dark-light-mode-switcher");

    if(scheme==="dark"){
        switchContainer.forEach(switcher =>{
            switcher.classList.remove("light-mode");
            switcher.classList.add("dark-mode");
        })
        switchBullet.forEach(bullet => {
            bullet.classList.remove("light-mode");
            bullet.classList.add("dark-mode");
        });

        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    }
    else{
        switchContainer.forEach(switcher => {
            switcher.classList.add("light-mode");
            switcher.classList.remove("dark-mode");
        });
        switchBullet.forEach(bullet => {
            bullet.classList.add("light-mode");
            bullet.classList.remove("dark-mode");
        });

        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }

}