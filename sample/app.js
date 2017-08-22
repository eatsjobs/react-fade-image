var FadeImage = FadeImage.__esModule && FadeImage.default ? FadeImage.default : FadeImage;

var maxWidth = window.innerWidth;
var elements = [], 
    howManyImages = 1000,
    types = ['animals', 'tech', 'arch', 'people', 'any', 'nature'],
    j = 0;

for (var i = 0; i < howManyImages; i++) {
    if (j > types.length - 1) { j = 0 }
    elements[elements.length] = React.createElement(FadeImage, { ratio: '16:9', src: 'https://placeimg.com/' + maxWidth + '/320/' + types[j] });
    j += 1;
}

ReactDOM.render(React.createElement(
    'div',
    null,
    elements
), document.querySelector('#root'));