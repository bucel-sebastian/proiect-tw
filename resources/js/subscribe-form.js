let subscribeForm = document.getElementById("subscribe-form");

subscribeForm.addEventListener("submit",e=>{
    e.preventDefault();

    const data = new FormData();
    for(const p of new FormData(subscribeForm)){
        data.append(p[0],p[1]);
    }
    fetch("/includes/new-subscriber.php",{
        method:"POST",
        body: data
    }).then(response=>response.json()).then(response=>{
        console.log(response);

        if(response.status==="success"){
            
        }
    })
})