// Referencing the HTML elements
const strokeColorInput = document.querySelector('#stroke');
const fillColorInput = document.querySelector('#fill');
const pathColorInput = document.querySelector('#path');


// Referencing SVG elements
const cloud = document.querySelector('#cloud');
const paths = document.querySelectorAll('#writing > path');

// Events listener for the 3 color inputs:
strokeColorInput.addEventListener('input', applyStroke);
fillColorInput.addEventListener('input',applyFill);
pathColorInput.addEventListener('input', applyPath);

// Functions applying the selected color to specific areas
// of the SVG:
function applyStroke(){
    cloud.setAttribute("stroke",strokeColorInput.value);
}
function applyFill(){
    cloud.setAttribute("fill", fillColorInput.value);
}
function applyPath(){
    for(let i = 0; i<paths.length; i++){
        paths[i].setAttribute("stroke", pathColorInput.value);
    }
}

