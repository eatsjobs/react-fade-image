# react-fade-image

Simple react lazy fade image component. 
The image loads when it's in viewport by listening to scroll event (with throttled function every 200ms)
The Obstruction of the image is precalculate thanks to the [padding bottom trick](http://davidecalignano.it/lazy-loading-with-responsive-images-and-unknown-height/) 

## Usage

Install via package manager

```javascript
npm install react-fade-image --save
OR
yarn add react-fade-image
```
```javascript
<FadeImage width={640} height={480} src='https://placeimg.com/640/480/animals' />
<FadeImage width={640} height={480} src='https://placeimg.com/640/480/animals' loaderComponent={<div>Loading...</div>}/>
<FadeImage ratio='16:9' src='https://placeimg.com/640/320/animals/sepia' />
```

## Contribute :)
- yarn
- npm run build OR npm run build:prod
- npm run test:watch