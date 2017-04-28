ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(FadeImage, { width: 640, height: 480, src: 'https://placeimg.com/640/480/animals', blur: true }),
    React.createElement(FadeImage, { ratio: '16:9', src: 'https://placeimg.com/640/320/tech' }),
    React.createElement(FadeImage, { width: 340, height: 120, src: 'https://placeimg.com/340/120/arch' }),
    React.createElement(FadeImage, { ratio: '16:9', src: 'https://placeimg.com/640/320/animals/sepia' }),
    React.createElement(FadeImage, { ratio: '16:9', src: 'https://placeimg.com/800/600/animals/sepia' }),
    React.createElement(FadeImage, { ratio: '16:9', src: 'https://placeimg.com/800/600/arch/sepia' })
), document.querySelector('#root'));