window.onscroll = function(e) {
    // console.log(e);
    // console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop < 1000){
        let headerOpacity = (document.documentElement.scrollTop/1)/1000;
        document.getElementById("header").style.background = "rgba(33, 180, 108, "+headerOpacity+")";
    }
    else{
        document.getElementById("header").style.background = "rgba(33, 180, 108, 0.85)";
    }
}

document.get
    