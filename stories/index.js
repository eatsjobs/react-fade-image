import React from 'react';
import 'intersection-observer';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import FadeImage from '../src/index';

const fadeImageStory = storiesOf('FadeImage', module)
fadeImageStory.addDecorator(withKnobs);

fadeImageStory.add('opacity', () => {
  const inline = { width: '50%', margin: '0 auto' };
  const spacer = { width: '100%', display: 'block', height: '768px', };
  return (
    <div style={{ margin: '0 auto', width: '60%' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome</h1>
      <div style={spacer}>
        This is a simple and little component for loading an image more smoothly
        in you application even if you don't know the height.
        You can use it if:
        <ul>
          <li> - You don't know the height of the image but the ratio</li>
          <li>- You want to precalculate the image obstruction in your UI</li>
          <li>- You want to lazy load the image as you scroll</li>
        </ul>

        You can also pass to it only the <strong>ratio</strong> string like this: '16:9' or '4:3' or any ratio you like.
        <br />
        <strong>Scroll down</strong> to see the images loading.
      </div>
      <div style={inline}>
        <FadeImage src={text('Image src', 'https://placeimg.com/400/300/animals')}
          width={number('Width', 400)}
          height={number('Height', 300)}
          ratio={text('Ratio', '4:3')}
        />
      </div>
    </div>
  )
});

fadeImageStory.add('horizontal scroll', () => {
  const overflowScrollStyle = { 
    display: "flex",
    minWidth: "100%",
    minHeight: "200px",
    overflowX: "auto"
  };
  const arr = new Array(10).fill(1);
  console.log(arr)
  return (
    <div style={overflowScrollStyle}>
      {arr.map((_, i) => {
        return (
          <div style={{ minWidth: '300px', margin: '5px' }} key={`${i}_item_XVC`}>
            <FadeImage src={text('Image src', 'https://placeimg.com/400/300/animals')}
              width={number('Width', 400)}
              height={number('Height', 300)}
              ratio={text('Ratio', '4:3')}
            />
          </div>)
      })}
    </div>
  )
});

fadeImageStory.add('vertical scroll', () => {
  const overflowScrollStyle = {
    margin: '0 auto',
    display: "flex",
    flexDirection: "column",
    width: "30%",
    minHeight: "200px",
    overflowY: "auto"
  }
  const arr = new Array(10).fill(1);
  console.log(arr)
  return (
    <div style={overflowScrollStyle}>
      {arr.map((_, i) => {
        return (
          <div style={{ minWidth: '300px', margin: '5px' }} key={`${i}_item_CVX`}>
            <FadeImage src={text('Image src', i === 2 ? 'https://asd.placeimg.com/400/300/somenthingnotexists' : 'https://placeimg.com/400/300/animals')}
              width={number('Width', 400)}
              height={number('Height', 300)}
              ratio={text('Ratio', '4:3')}
              loaderComponent={<div style={{ position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', height: '100%', background: 'lightgrey' }}>Loading...</div>}
              errorComponent={<div style={{ position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'red', width: '100%', height: '100%' }}>Error...</div>}
            />
          </div>)
      })}
    </div>
  )
});