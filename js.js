document.addEventListener('DOMContentLoaded', function () {


    let box = document.querySelectorAll(".Styledbutton");
    
    box.forEach(function(Styledbutton){
    Styledbutton.addEventListener("click", function(){
            
    if(Styledbutton.style.backgroundColor === "pink"){
    Styledbutton.style.backgroundColor = "lightyellow";
    Styledbutton.style.margin = '5vw';
    console.log("change color");
    }
    
    else{
        Styledbutton.style.backgroundColor = "pink";
        Styledbutton.style.margin = '3vw';
    }
    });
    });
    
    }); 

