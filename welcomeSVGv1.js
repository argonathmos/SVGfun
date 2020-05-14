// List of all CSS color keywords 
// (as of level 4 specifications - 5 May 2020)
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
'rebeccapurple']

// Referencing the HTML elements
const colorMenu = document.querySelector('select');
const strokeButton = document.querySelector('#stroke');
const fillButton = document.querySelector('#fill');
const pathButton = document.querySelector('#path');
const randomButton = document.querySelector('#random');

// Referencing SVG elements
const cloud = document.querySelector('#cloud');
const paths = document.querySelectorAll('#writing > path');

// Add each color from the list inside the <select> HTML element on the web page 
// (148 values)
for(let i = 0; i < colorKeywords.length;i++){
    let optItem = document.createElement('option');
    optItem.textContent = colorKeywords[i];
    colorMenu.appendChild(optItem);
}
// Events listener for the first 3 buttons.
strokeButton.addEventListener('click', applyStroke);
fillButton.addEventListener('click',applyFill);
pathButton.addEventListener('click', applyPath);

// Functions applying the selected color to specific areas of the SVG.
function applyStroke(){
    cloud.setAttribute("stroke",colorMenu.value);
}
function applyFill(){
    cloud.setAttribute("fill", colorMenu.value);
}
function applyPath(){
    for(let i = 0; i<paths.length; i++){
        paths[i].setAttribute("stroke", colorMenu.value);
    }
}

// Random button Event listener and Function
randomButton.addEventListener('click', applyRandomColors);

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


