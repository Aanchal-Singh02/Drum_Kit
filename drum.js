var key=addEventListener("keydown",function(e){

    const arr=["A","S","D","F","G","H","J","K","L","a","s","d","f","g","h","j","k","l"];

    for(let i=0;i<18;i++){
        if(e.key===arr[i]){
            if(i>8){
                i=i-9;
            }
            sound(i+1);
            break;
        }
    }
  
});


function sound(id){
    // console.log(id);

    var audio=document.createElement("audio");
    audio.setAttribute("autoplay","True");

    switch(+id){
        case 1:
            audio.setAttribute("src","./sounds/A_clap.wav");
            break;
        case 2:audio.setAttribute("src","./sounds/S_hihat.wav");
            break;
        case 3:audio.setAttribute("src","./sounds/D_kick.wav");
            break;
        case 4:audio.setAttribute("src","./sounds/F_openhat.wav");
            break;
        case 5:audio.setAttribute("src","./sounds/G_boom.wav");
            break;
        case 6:audio.setAttribute("src","./sounds/H_ride.wav");
            break;
        case 7:audio.setAttribute("src","./sounds/J_snare.wav");
            break;
        case 8:audio.setAttribute("src","./sounds/K_tom.wav");
            break; 
        case 9:audio.setAttribute("src","./sounds/L_tink.wav");
            break;
    }

    document.getElementById(id).appendChild(audio);
    var change=setTimeout(() => {
        document.getElementById(id).style.fontSize="30px";
       

    }, 100);
        document.getElementById(id).style.fontSize="50px";
}


