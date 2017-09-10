import React from 'react';
import FadeImage from '../fade-image';
import { mount } from 'enzyme';
import * as deps from '../isInViewport';

describe('FadeImage tests', function () {
    it('FadeImage: in viewport should render', function () {
        deps.default = () => true;
        const src = "https://placeimg.com/640/480/any";
        const wrapper = mount(<FadeImage src={src} ratio='16:9' />);
        expect(wrapper.state().src).toEqual(src);
        //wrapper.instance().scrollHandler();
        expect(wrapper.state().isLoaded).toEqual(true);

        wrapper.setProps({ src: src + '?a=1' })
        wrapper.update();
        expect(wrapper.state().src).toEqual(src + '?a=1');
        expect(wrapper.state().isLoaded).toEqual(true);

    });

    it('FadeImage: when not in viewport then in viewport', function (done) {
        deps.default = () => false;
        const src = "https://placeimg.com/640/480/any";
        const wrapper = mount(<FadeImage src={src} ratio='16:9' />);

        expect(wrapper.state().src).toEqual(src);
        wrapper.instance().scrollHandler();
        expect(wrapper.state().isLoaded).toEqual(false);

        deps.default = () => true;
        setTimeout(() => {
            wrapper.instance().scrollHandler();
            expect(wrapper.state().isLoaded).toEqual(true);
            //console.log(wrapper.debug())
            done()
        }, 300);

    });
});