import React from 'react';
import FadeImage from '../index';
import { mount } from 'enzyme';

describe('FadeImage tests', function () {
    it('FadeImage: in viewport should render', function () {        
        const src = "https://placeimg.com/640/480/any";
        const wrapper = mount(<FadeImage src={src} ratio='16:9' />);
        wrapper.instance().onImgLoad();
        expect(wrapper.state().src).toEqual(src);
        expect(wrapper.state().isLoaded).toEqual(true);
        wrapper.setProps({ src: src + '?a=1' })
        wrapper.update();
        expect(wrapper.state().src).toEqual(src + '?a=1');
        expect(wrapper.state().isLoaded).toEqual(true);

    });

    it('FadeImage: when not in viewport then in viewport', function (done) {        
        const src = "https://placeimg.com/640/480/any";
        const wrapper = mount(<FadeImage src={src} ratio='16:9' />);
        
        expect(wrapper.state().src).toEqual(src);
        expect(wrapper.state().isLoaded).toEqual(false);
        wrapper.instance().onImgLoad();
        setTimeout(() => {            
            expect(wrapper.state().isLoaded).toEqual(true);
            //console.log(wrapper.debug())
            done()
        }, 300);

    });
});