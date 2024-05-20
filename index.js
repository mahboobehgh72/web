const nextBtn= document.querySelector('.next-btn');
const prevBtn= document.querySelector('.prev-btn');
const saides= document.querySelectorAll('.said');
const numberOfSaides = saides.length;
let saidNumber=0;


/////

nextBtn.onclick = () => {
    saides.forEach((said) => {
        said.classList.remove('active');
    });


    saidNumber++;

    if(saidNumber > (numberOfSaides - 1)){
        saidNumber =0;
    }
    saides[saidNumber].classList.add('active');
}

//////
prevBtn.onclick = () => {
    saides.forEach((said) => {
        said.classList.remove('active');
    });


    saidNumber--;

    if(saidNumber < 0){
        saidNumber =numberOfSaides - 1;
    }
    saides[saidNumber].classList.add('active');
}