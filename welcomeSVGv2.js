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
const colorKeywords = ['black',
'silver',
'gray',
'white',
'maroon',
'red',
'purple',
'fuchsia',
'green',
'lime',
'olive',
'yellow',
'navy',
'blue',
'teal',
'aqua',
'orange',
'aliceblue',
'antiquewhite',
'aquamarine',
'azure',
'beige',
'bisque',
'blanchedalmond',
'blueviolet',
'brown',
'burlywood',
'cadetblue',
'chartreuse',
'chocolate',
'coral',
'cornflowerblue',
'cornsilk',
'crimson',
'cyan',
'darkblue',
'darkcyan',
'darkgoldenrod',
'darkgray',
'darkgreen',
'darkgrey',
'darkkhaki',
'darkmagenta',
'darkolivegreen',
'darkorange',
'darkorchid',
'darkred',
'darksalmon',
'darkseagreen',
'darkslateblue',
'darkslategray',
'darkslategrey',
'darkturquoise',
'darkviolet',
'deeppink',
'deepskyblue',
'dimgray',
'dimgrey',
'dodgerblue',
'firebrick',
'floralwhite',
'forestgreen',
'gainsboro',
'ghostwhite',
'gold',
'goldenrod',
'greenyellow',
'grey',
'honeydew',
'hotpink',
'indianred',
'indigo',
'ivory',
'khaki',
'lavender',
'lavenderblush',
'lawngreen',
'lemonchiffon',
'lightblue',
'lightcoral',
'lightcyan',
'lightgoldenrodyellow',
'lightgray',
'lightgreen',
'lightgrey',
'lightpink',
'lightsalmon',
'lightseagreen',
'lightskyblue',
'lightslategray',
'lightslategrey',
'lightsteelblue',
'lightyellow',
'limegreen',
'linen',
'magenta',
'mediumaquamarine',
'mediumblue',
'mediumorchid',
'mediumpurple',
'mediumseagreen',
'mediumslateblue',
'mediumspringgreen',
'mediumturquoise',
'mediumvioletred',
'midnightblue',
'mintcream',
'mistyrose',
'moccasin',
'navajowhite',
'oldlace',
'olivedrab',
'orangered',
'orchid',
'palegoldenrod',
'palegreen',
'paleturquoise',
'palevioletred',
'papayawhip',
'peachpuff',
'peru',
'pink',
'plum',
'powderblue',
'rosybrown',
'royalblue',
'saddlebrown',
'salmon',
'sandybrown',
'seagreen',
'seashell',
'sienna',
'skyblue',
'slateblue',
'slategray',
'slategrey',
'snow',
'springgreen',
'steelblue',
'tan',
'thistle',
'tomato',
'turquoise',
'violet',
'wheat',
'whitesmoke',
'yellowgreen',
'rebeccapurple'];
randomBtn.addEventListener('click', applyRandomColors);

function randFromArray(a){
    let index = Math.floor(Math.random()*a.length);
    return a[index];
}

function applyRandomColors(){
    let uniquePathcolor = randFromArray(colorKeywords);
    cloud.setAttribute("stroke",randFromArray(colorKeywords));
    cloud.setAttribute("fill",randFromArray(colorKeywords));
    
    for(let i = 0; i<paths.length; i++){
        paths[i].setAttribute("stroke", uniquePathcolor);
    }
}

