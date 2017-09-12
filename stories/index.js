import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import FadeImage from '../src/index';
const fadeImageStoy = storiesOf('FadeImage', module)
fadeImageStoy.addDecorator(withKnobs);
fadeImageStoy.add('opacity', () => {
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
})