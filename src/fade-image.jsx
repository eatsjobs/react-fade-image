import React, { Component } from 'react';
import style from './fade-image.css';

export default class FadeImage extends Component {
    constructor(props){
        super(props);
        this.onImgLoad = this.onImgLoad.bind(this);
        this.onImgError = this.onImgError.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.state = { loaded: false };
    }

    onImgLoad(){
        this.setState({ loaded: true });
    }

    onImgError(){
        this.setState({ loaded: false });
    }

    componentDidMount(){
        this.scrollHandler();
        //TODO add throttle function
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler(scrollEvent) {
        let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        const { top, height } = this.refs.container.getBoundingClientRect();
        let offsetTop = this.refs.container.offsetTop;
        
        offsetTop += (height / 4);
        scrollTop += window.innerHeight;
        
        //console.log("top of img:", offsetTop, "scrollTop:", scrollTop);
        if (scrollTop >= offsetTop && !this.state.loaded) {
            //console.log("Append img src", this.props.src);
            this.refs.image.src = this.props.src;
            window.removeEventListener('scroll', this.scrollHandler);
        }
    }

    render(){
        let imageClasses = [style.fadeImg];
        let loaded = this.state.loaded ? style.imgLoaded : null;
        let blur = this.props.blur ? style.blur : null;
        imageClasses = imageClasses.concat([loaded, blur]);
        
        /**
         * Padding bottom image is a trick to calculate the space
         * that the image will cover in document
         * http://davidecalignano.it/lazy-loading-with-responsive-images-and-unknown-height/
         */
        let theStyle = {};
        let w, h;
        if (this.props.ratio) {
            [w, h] = this.props.ratio.split(':');
        } else if (this.props.height && this.props.width) {
            w = this.props.width;
            h = this.props.height;
        }

        theStyle = { paddingBottom: `${(h / w) * 100}%` }
        return (
            <div ref='container' className={style.container} style={theStyle}>
                <img ref='image' className={imageClasses.filter(v => v).join(' ')}
                     onLoad={this.onImgLoad} 
                     onError={this.onImgError} 
                     style={this.props.style} 
                     />
            </div>
        )
    }
}
