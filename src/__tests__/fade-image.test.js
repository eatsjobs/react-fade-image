import React from 'react';
import { mount } from 'enzyme';
import FadeImage from '../fade-image'

describe('FadeImage tests', function(){
    it('FadeImage: test first scrollHandler call', () => {
    
        spyOn(FadeImage.prototype, 'scrollHandler');
        spyOn(FadeImage.prototype, 'componentWillUnmount');
        
        const ratio = '16:9';
        const src = 'https://placeimg.com/640/480/animals';
        const wrapper = mount(
            <FadeImage ratio={ratio} src={src} />
        );

        expect(wrapper.find('img')).toHaveLength(1);
        expect(FadeImage.prototype.scrollHandler).toHaveBeenCalled();
        expect(wrapper.prop('ratio')).toEqual(ratio);
        expect(wrapper.prop('src')).toEqual(src);
        
        wrapper.instance().onImgLoad();
        expect(wrapper.state('loaded')).toBe(true);

        wrapper.unmount();
        expect(FadeImage.prototype.componentWillUnmount).toHaveBeenCalled();
        
    });
});