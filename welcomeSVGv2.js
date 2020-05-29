// Referencing the HTML elements
const strokeColorInput = document.querySelector('#stroke');
const fillColorInput = document.querySelector('#fill');
const pathColorInput = document.querySelector('#path');

const exportBtn = document.querySelector('.export button');
const randomBtn = document.querySelector('.random button');


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


//-----EXPORTING THE CUSTOM COLORED SVG -----
//When the Export button is clicked: download the updated version of the SVG.
let svg = document.querySelector('svg');
exportBtn.addEventListener('click',function(){
    download('customHelloWorld.svg', svg.outerHTML);
});
//Create the download function:
function download(filename, data){
    let link = document.createElement('a');
    link.setAttribute('href','data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data)); // What is the difference between data:text/html or data:image/svg+xml here both works the same.
    link.setAttribute('download', filename);
    link.style.display = 'none';
    link.click();
}


// ----- RANDOM color generation -----
randomBtn.addEventListener('click', applyRandomColors);

function applyRandomColors(){
    let uniquePathcolor = '#'+((1<<24)*Math.random()|0).toString(16);
    let strokeColor = '#'+((1<<24)*Math.random()|0).toString(16);
    let fillColor = '#'+((1<<24)*Math.random()|0).toString(16);

    cloud.setAttribute('stroke',strokeColor);
    strokeColorInput.setAttribute('value',strokeColor);

    cloud.setAttribute('fill', fillColor);
    fillColorInput.setAttribute('value',fillColor);

    for(let i = 0; i<paths.length; i++){
        paths[i].setAttribute('stroke', uniquePathcolor);
    }
    pathColorInput.setAttribute('value', uniquePathcolor);

}
// Applying random colors everytime the page loads:
applyRandomColors();
