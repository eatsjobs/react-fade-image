import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isIntersecting } from './intersectionObserver';
import style from './index.css';

export default class FadeImage extends Component {
    static get propTypes() {
        return {
            src: PropTypes.string,
            ratio: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number,
            loaderComponent: PropTypes.element
        }
    }

    static get defaultProps() {
        return {
            src: '',            
            ratio: null,
            loaderComponent: null
        }
    }
    constructor(props) {
        super(props);

        this.onImgLoad = this.onImgLoad.bind(this);
        this.onImgError = this.onImgError.bind(this);       

        this.state = {
            src: this.props.src,
            loaded: false,
            error: false,
        };
    }

    onImgLoad() {
        this.setState({ src: this.state.src, loaded: true });        
    }

    onImgError() {
        this.setState({ src: this.state.src, loaded: false, error: true });
    }

    componentDidMount() {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: .2
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (isIntersecting(entry)) {
                    this.loadImage();
                    this.observer.unobserve(this.refs.container);
                }                
            });
        }, options);
        this.observer.observe(this.refs.container);        
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.unobserve(this.refs.container);
        }   
    }

    loadImage() {
        this.imageElement.src = this.state.src;
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.src !== nextProps.src) {
            this.setState({ loaded: false, src: nextProps.src }, this.loadImage);
        }
    }

    render() {       
        
        let imageClasses = [style.Img, style.fade1s];
        let loaded = this.state.loaded ? style.fadeIn : null;
        imageClasses.push(loaded);
        
        let theStyle = {};
        let width, height;
        if (this.props.ratio) {
            [width, height] = this.props.ratio.split(':');
        } else if (this.props.height && this.props.width) {
            width = this.props.width;
            height = this.props.height;
        }

        const result = ((height / width) * 100);
        theStyle = { paddingBottom: `${result}%` };
        /*{this.state.error && !this.state.loaded ? this.props.errorComponent : null}                
        {this.state.loaded || this.state.error ? null : this.props.loaderComponent}*/
        const loaderComponentClasses = [style.fadeBase, style.fade1s, this.state.loaded ? style.fadeOut : '' ];        
        return (
            <div ref='container' className={style.container} style={theStyle}>                
                <div className={loaderComponentClasses.join(' ')}>
                    {this.props.loaderComponent}
                </div>
                <img ref={(image) => this.imageElement = image} className={imageClasses.join(' ')}
                    onLoad={this.onImgLoad}
                    onError={this.onImgError}
                    style={this.props.style}
                    alt={this.props.alt}
                />
            </div>
        )
    }
}
