for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var bt= this.innerHTML;
        mkso(bt);
        anim(bt);
    }
    );
}

document.addEventListener("keypress",function(event){
    mkso(event.key);
    anim(event.ckey);
})

function mkso(key){
    switch(key){
        case "w": var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                break;
        case "a": var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                break;
        case "s": var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                break;
        case "d": var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                break;
        case "j": var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                break;
        case "k": var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                break;
        case "l": var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                break;
    }
}

function anim(ckey){
    var act=document.querySelector("."+ckey);
    act.classList.add("pressed");
    
    setTimeout(function(){
        act.classList.remove("pressed");
    },100);
}