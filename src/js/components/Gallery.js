import React, {Component} from "react";
import ReactDOM from "react-dom";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.images = props.content.images;
        this.state = {backgroundIndex: 0};
        this.animDuration = props.content.animDuration;
        this.changeBackground = this.changeBackground.bind(this);
        this.headline = props.content.coverHeadline;
        this.text = props.content.coverText;
    }

    componentDidMount() {
        this.timeout = setTimeout(this.changeBackground, this.animDuration);
    }

    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
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
                </div>
            </div>
        );
    }
}
export default Gallery;
