const colorPalette = () => {
  let colorArr = [
    'blue',
    'purple',
    'orange',
    'cyan',
    'yellow',
    'red',
    'green',
    'brown',

    'darkblue',
    'pink',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'rebeccapurple',
    'oldlace',
    'navy',
    'olive',
    'olivedrab',
    'orangered',
    'orchild',
    'palegreen',
    'palegoldenerod',
    'paleturquoise',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'blanchedalmond',
    'blueviolet',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'darkorchid',
    'darkolivegreen',
    'cholocate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'floralwhite',
    'fuschia',
    'gainsboro',
    'hotpink',
    'ivory',
    'honeydew',
    'indianred',
    'khaki',
    'lavender',
    'lawngreen',
    'lavenderblush',
    'lemonchiffon',
    'lightcoral',
    'firebrick',
    'forestgreen',
  ];

  let clickMe = document.querySelector('.btn');
  let colorDisplay = document.querySelector('.color-display');
  let container = document.querySelector('.container');

  clickMe.addEventListener('click', () => {
    let randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

    let displayColor = (colorDisplay.style.backgroundColor = randomColor);
    colorDisplay.textContent = `This background color is ${randomColor}, do you like it?`;
    return displayColor;
  });
};

colorPalette();
