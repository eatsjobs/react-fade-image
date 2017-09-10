import isInViewport from '../isInViewport';

describe('isInViewport tests', function () {
    it('isInviewport test', function () {
        const element = {
            getBoundingClientRect: function () {
                return {
                    bottom: 768,
                    height: 44,
                    left: 20,
                    right: 64,
                    top: 532,
                    width: 44
                }
            }
        }
        expect(isInViewport(element)).toEqual(true);
    });
});