import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import FadeImage from '../src/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const fadeImageStoy = storiesOf('FadeImage', module)
fadeImageStoy.addDecorator(withKnobs);
fadeImageStoy.add('opacity', () => {
  const inline = { width: '50%', margin: '0 auto' };
  const spacer = { width: '100%', display: 'block', height: '768px' };
  return (
    <div>
      <div style={spacer}> Scroll down to see the images loading</div>
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