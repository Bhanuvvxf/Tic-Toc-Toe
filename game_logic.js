let playerText = document.querySelector("#playertext");
let restart =  document.querySelector("#Restart");
let boxs = Array.from(document.getElementsByClassName("box"));

let spaces = Array(9).fill(null);

let X_text = "X";
let O_text = "O";
let currentplayer = X_text;


const Startgame = () => {
    boxs.forEach(box => box.addEventListener("click",boxsclicked))
}

function boxsclicked(e) {
    let id  = e.target.id ;

    if(!spaces[id]){
        spaces[id] = currentplayer ;
        boxs[id].innerHTML = currentplayer ;

        if(boxs[0].innerHTML == X_text && boxs[1].innerHTML == X_text ){
            if(boxs[2].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[3].innerHTML == X_text && boxs[4].innerHTML == X_text ){
            if(boxs[5].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[6].innerHTML == X_text && boxs[7].innerHTML == X_text ){
            if(boxs[8].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[0].innerHTML == X_text && boxs[3].innerHTML == X_text ){
            if(boxs[6].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }


        if(boxs[1].innerHTML == X_text && boxs[4].innerHTML == X_text ){
            if(boxs[7].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[2].innerHTML == X_text && boxs[5].innerHTML == X_text ){
            if(boxs[8].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }
        

        if(boxs[0].innerHTML == X_text && boxs[4].innerHTML == X_text ){
            if(boxs[8].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[2].innerHTML == X_text && boxs[4].innerHTML == X_text ){
            if(boxs[6].innerHTML == X_text){
                playerText.innerHTML = X_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }


        if(boxs[0].innerHTML == O_text && boxs[1].innerHTML == O_text ){
            if(boxs[2].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[3].innerHTML == O_text && boxs[4].innerHTML == O_text ){
            if(boxs[5].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[6].innerHTML == O_text && boxs[7].innerHTML == O_text ){
            if(boxs[8].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }


        if(boxs[0].innerHTML == O_text && boxs[3].innerHTML == O_text ){
            if(boxs[6].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }
        

        if(boxs[1].innerHTML == O_text && boxs[4].innerHTML == O_text ){
            if(boxs[7].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[2].innerHTML == O_text && boxs[5].innerHTML == O_text ){
            if(boxs[8].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[0].innerHTML == O_text && boxs[4].innerHTML == O_text ){
            if(boxs[8].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }

        if(boxs[2].innerHTML == O_text && boxs[4].innerHTML == O_text ){
            if(boxs[6].innerHTML == O_text){
                playerText.innerHTML = O_text + " "+ "has won !";
                playerText.setAttribute('class','win');
            }
        }







        currentplayer = currentplayer == X_text ? O_text : X_text 

    }
}

Startgame()

restart.addEventListener('click',restartbtn);

function restartbtn(){

    spaces.fill(null);
    boxs.forEach(box => {
        box.innerHTML = " ";
    })
    currentplayer = X_text
    playerText.innerHTML = "Tic toc toe" ;
    playerText.removeAttribute('class');
}