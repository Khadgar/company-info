import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../../style/galleryStyle.less";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.images = props.content.images;
        this.state = {backgroundIndex: 0};
        this.animDuration = props.content.animDuration;
        this.headline = props.content.coverHeadline;
        this.text = props.content.coverText;
        
        this.changeBackground = this.changeBackground.bind(this);
        this.handleNextClick = this.showNext.bind(this);
        this.handlePrevClick = this.showPrev.bind(this);
    }

    componentDidMount() {
        this.moveProgress();
        this.timeout = setTimeout(this.changeBackground, this.animDuration);
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
        if (this.progreesBarIntervalId)
            clearTimeout(this.progreesBarIntervalId);
    }

    changeBackground() {
        this.setState(
            function({backgroundIndex}) {
                const nextBackgroundIndex =
                    ++backgroundIndex % this.images.length;
                return {backgroundIndex: nextBackgroundIndex};
            },
            function() {
                this.timeout = setTimeout(
                    this.changeBackground,
                    this.animDuration
                );
            }
        );
        this.moveProgress();
    }

    showNext() {
        this.setState(function({backgroundIndex}) {
            let nextBackgroundIndex = ++backgroundIndex % this.images.length;
            return {backgroundIndex: nextBackgroundIndex};
        });
    }

    showPrev() {
        this.setState(function({backgroundIndex}) {
            let nextBackgroundIndex = Math.abs(
                --backgroundIndex % this.images.length
            );
            return {
                backgroundIndex: nextBackgroundIndex
            };
        });
    }

    moveProgress() {
        let elem = document.querySelector(".imgContainer-progress-bar");
        let width = 0;
        this.progreesBarIntervalId = setInterval(
            frame,
            this.animDuration / 100
        );
        function frame() {
            if (width >= 100) {
                clearInterval(this.progreesBarIntervalId);
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }

    render() {
        let divStyle = {
            backgroundImage:
                "url(" + this.images[this.state.backgroundIndex] + ")"
        };
        return (
            <div className="gallery row">
                <div className="imgContainer" style={divStyle}>
                    <div className="imgContainer-text">
                        <h1 className="display-4">{this.headline}</h1>
                        <p className="align-middle text-justify font-weight-light lead">
                            {this.text}
                        </p>
                    </div>
                    <div className="imgContainer-arrowContainer">
                        <div
                            className="imgContainer-arrowContainer-arrowLeft"
                            onClick={this.handlePrevClick}
                        />
                        <div
                            className="imgContainer-arrowContainer-arrowRight"
                            onClick={this.handleNextClick}
                        />
                    </div>
                    <div className="imgContainer-progress">
                        <div className="imgContainer-progress-bar" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Gallery;
