let burguer = document.getElementById("burguer");
let btnLink = document.getElementById('nav-btn-links');

function menuOpenClose(){
   
    if(btnLink.style.display == 'flex'){
        btnLink.style.display = 'none'
    }else{
        btnLink.style.display = 'flex'
    }
}

