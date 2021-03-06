// Referencing HTML elements:
const strokeColorInput = document.querySelector('#stroke');
const fillColorInput = document.querySelector('#fill');
const pathColorInput = document.querySelector('#path');
const dlBtn = document.querySelector('.download button');
const randomBtn = document.querySelector('.random button');

// Referencing SVG elements:
const cloud = document.querySelector('#cloud');
const paths = document.querySelectorAll('#writing > path');

// Events listener for the 3 color inputs:
strokeColorInput.addEventListener('input', applyStroke);
fillColorInput.addEventListener('input',applyFill);
pathColorInput.addEventListener('input', applyPath);

/* Defining the functions that applies
the selected color to specific areas
of the SVG: */
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

/* ----- EXPORTING THE CUSTOM COLORED SVG -----
When the Export button is clicked: 
download the updated version of the SVG. */
let svg = document.querySelector('svg');
dlBtn.addEventListener('click',function(){
    download('customHelloWorld.svg', svg.outerHTML);
});
//Create the download function:
function download(filename, data){
    let link = document.createElement('a');
    link.setAttribute('href','data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data)); 
    link.setAttribute('download', filename);
    link.style.display = 'none';
    link.click();
}


// ----- RANDOM color generation -----
randomBtn.addEventListener('click', applyRandomColors);


function applyRandomColors(){
    let uniquePathcolor = '#'+((1<<24)*Math.random()|0).toString(16); // Generating random hexadecimal color codes.
    let strokeColor = '#'+((1<<24)*Math.random()|0).toString(16);
    let fillColor = '#'+((1<<24)*Math.random()|0).toString(16);

    // Apply the Hex color codes to the SVG areas.
    cloud.setAttribute('stroke',strokeColor);
    strokeColorInput.value = strokeColor;

    cloud.setAttribute('fill', fillColor);
    fillColorInput.value = fillColor;

    for(let i = 0; i<paths.length; i++){
        paths[i].setAttribute('stroke', uniquePathcolor);
    }
    pathColorInput.value = uniquePathcolor;

}


// ------ Applying random colors everytime the page loads: -----
applyRandomColors();
