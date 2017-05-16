import React from 'react';
import { shallow, mount } from 'enzyme';
import FadeImage from '../fade-image'

test('FadeImage: test first scrollHandler call', () => {
  
  spyOn(FadeImage.prototype, 'scrollHandler');
  
  const ratio = '16:9';
  const src = 'https://placeimg.com/640/480/animals';
  const wrapper = mount(
    <FadeImage ratio={ratio} src={src} />
  );

  expect(wrapper.find('img').length).toEqual(1);
  expect(FadeImage.prototype.scrollHandler).toHaveBeenCalled();
  expect(wrapper.prop('ratio')).toEqual(ratio);
  expect(wrapper.prop('src')).toEqual(src);
  
});