fetch("/resources/modules/header.html").then(response=>response.text()).then(response=>{
    document.getElementById("header").innerHTML=response;
});


fetch("/resources/modules/footer.html").then(response=>response.text()).then(response=>{
    document.getElementById("footer").innerHTML=response;
})

let allDestinations = [];
let featuredDestinations = [];
let listOfNames = [];
fetch("/resources/js/destinatii.json").then(response=>response.json()).then(response=>{

    allDestinations = response;
    if(document.getElementById("best-offer-carousel")){
        document.getElementById("best-offer-carousel").innerHTML="";
    }


    for(i=0;i<response.length;i++){
        if(response[i].feature==="true"){
                // document.getElementById("best-offer-carousel").innerHTML+='<div class="best-offer-carousel-item"><div class="best-offer-carousel-item-img"  style="background-image:url("/resources/img/'+response[i].img+'")"></div><div class="best-offer-carousel-item-content"><h3>'+response[i].nume+'</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit explicabo nostrum autem necessitatibus aspernatur! Fuga voluptatem iusto eveniet recusandae distinctio? Rem, quod esse minima libero nemo ratione quibusdam dolores.</p><div class="best-offer-carousel-item-btns"><span>'+response[i].pret+' RON</span><a href="/destinatii/destinatie?id='+response[i].id+'">Rezervă acum</a></div></div></div>';
                // featureItems++;
                featuredDestinations.push(response[i]);
        }
        listOfNames.push(response[i].nume);
        document.getElementById("destinationsList").innerHTML+="<option value='"+response[i].nume+"'>";
        





        // if(response[i].feature==="true"){
        //     document.getElementById("best-offer-carousel").innerHTML+='<div class="best-offer-carousel-item"><div class="best-offer-carousel-item-img"  style="background-image:url("/resources/img/'+response[i].img+'")"></div><div class="best-offer-carousel-item-content"><h3>'+response[i].nume+'</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit explicabo nostrum autem necessitatibus aspernatur! Fuga voluptatem iusto eveniet recusandae distinctio? Rem, quod esse minima libero nemo ratione quibusdam dolores.</p><div class="best-offer-carousel-item-btns"><span>'+response[i].pret+'</span><a href="/destinatii/destinatie?id='+response[i].id+'">Rezervă acum</a></div></div></div>';
        // }


        
        // console.log('<div class="best-offer-carousel-item"><div class="best-offer-carousel-item-img"  style="background-image:url("/resources/img/'+response[i].img+'")"></div><div class="best-offer-carousel-item-content"><h3>'+response[i].nume+'</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit explicabo nostrum autem necessitatibus aspernatur! Fuga voluptatem iusto eveniet recusandae distinctio? Rem, quod esse minima libero nemo ratione quibusdam dolores.</p><div class="best-offer-carousel-item-btns"><span>'+response[i].pret+'</span><a href="/destinatii/destinatie?id='+response[i].id+'">Rezervă acum</a></div></div></div>');
    }
    renderFeaturedDestinations(featuredDestinations);
    renderOtherDestinations(allDestinations);

});

function renderFeaturedDestinations(list){
    listOfUsed=[];
    if(document.getElementById("best-offer-carousel")){
        for(i=0;i<4;i++){
            isUsed=true;
            let index;
            while(isUsed===true){
                index = Math.floor(Math.random() * list.length);
                if(!listOfUsed.includes(list[index])){
                    isUsed=false;
                    listOfUsed.push(list[index]);
                    document.getElementById("best-offer-carousel").innerHTML+="<div class='best-offer-carousel-item'><div class='best-offer-carousel-item-img'  style='background-image:url(/resources/img/"+list[index].img+")'></div><div class='best-offer-carousel-item-content'><h3>"+list[index].nume+"</h3><p>"+list[index].descriere+"</p><div class='best-offer-carousel-item-btns'><span>"+list[index].pret+" RON</span><a href='/destinatii/destinatie?id="+list[index].id+"'>Rezervă acum</a></div></div></div>";
                    // console.log("<div class='best-offer-carousel-item'><div class='best-offer-carousel-item-img'  style='background-image:url(\'/resources/img/"+list[index].img+"\')'></div><div class='best-offer-carousel-item-content'><h3>"+list[index].nume+"</h3><p>"+list[index].descriere+"</p><div class='best-offer-carousel-item-btns'><span>"+list[index].pret+" RON</span><a href='/destinatii/destinatie?id="+list[index].id+"'>Rezervă acum</a></div></div></div>");
                }
            }        
        }
    }
    


    let index = Math.floor(Math.random() * list.length);
    document.getElementById("best-offer-section").innerHTML="<div id='best-offer-content'><div><h2 style='margin:0'>"+list[index].nume+"</h2><p>"+list[index].descriere+"</p><a href='/destinatii/destinatie/?id="+list[index].id+"'>Rezervă acum!</a></div></div></div>";
    document.getElementById("best-offer-section").style.backgroundImage="url(\"/resources/img/"+list[index].img+"\")";
}


function renderOtherDestinations(list){
    listOfUsed=[];
    document.getElementById("other-offers-list").innerHTML="";
    for(i=0;i<8;i++){
        isUsed=true;
        let index;
        while(isUsed===true){
            index = Math.floor(Math.random() * list.length);
            if(!listOfUsed.includes(list[index])){
                isUsed=false;
                listOfUsed.push(list[index]);
                document.getElementById("other-offers-list").innerHTML+='<div class="other-offer-container"><div class="other-offer-img" style="background-image:url(\'\/resources\/img\/'+list[index].img+'\')"></div><div class="other-offer-content"><h3>'+list[index].nume+'</h3> <p>'+list[index].descriere+'</p> <div> <span>'+list[index].pret+' RON</span> <a href="/destinatii/destinatie/?id='+list[index].id+'">Află mai multe</a> </div></div></div>';
            }
        }
    }
}
