# react-fade-image

Simple react lazy fade image component. 
Every Image component has its own listener that is removed on componeWillunmount and once the image was loaded.
The image loads when 1/4 of it become visible while scrolling. 
The Obstruction of the image is precalculate thanks to the [padding bottom trick](http://davidecalignano.it/lazy-loading-with-responsive-images-and-unknown-height/) 

## Usage

Includes this in your page (of course React should be already present)

```javascript
<link rel="stylesheet" type="text/css" href="node_modules/react-fade-image/dist/fade-image.css">
<script src="node_modules/react-fade-image/dist/fade-image.js"></script>
```

```javascript
<FadeImage width={640} height={480} src='https://placeimg.com/640/480/animals' blur={true}/>
<FadeImage ratio='16:9' src='https://placeimg.com/640/320/animals/sepia' />
```

## Contribute :)
- yarn
- npm run build
- npm run start
- npm run test:watch