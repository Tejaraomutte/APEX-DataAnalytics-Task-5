const texts = [
    "Data Analyst",
    "Power BI Developer",
    "Python Enthusiast",
    "Business Intelligence Learner"
];

let speed = 100;

const textElement = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

    if(charIndex < texts[textIndex].length){

        textElement.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, speed);

    }
    else{

        setTimeout(eraseText, 1500);

    }

}

function eraseText(){

    if(textElement.innerHTML.length > 0){

        textElement.innerHTML =
        textElement.innerHTML.slice(0,-1);

        setTimeout(eraseText,50);

    }
    else{

        textIndex++;

        if(textIndex >= texts.length){
            textIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeWriter,500);

    }

}

window.onload = typeWriter;