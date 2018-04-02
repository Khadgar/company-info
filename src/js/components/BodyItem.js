import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Parallax, Background} from "react-parallax";

class BodyItem extends Component {
    constructor(props) {
        super(props);
        // console.log("BodyItem props", props);
        this.title = props.content.title;
        this.imageSrc = props.content.image;
        this.text = props.content.text;
        this.type = props.content.type;
        this.headline = props.content.headline;
        this.randomImageUrls = [];
        this.redirect = props.content.redirect;
    }

    renderImage(imgSrc) {
        return (
            <img src={imgSrc} className="img-fluid rounded mx-auto d-block" />
        );
    }

    render() {
        // console.log("BodyIem-render");
        return (
            <div className="bodyItem">
                <Parallax
                    strength={300}
                    className={"imageClass"}
                    bgImage={this.imageSrc}
                >
                    <div className="bodyItem-info">
                        <h1 className="display-4">{this.title}</h1>
                        {this.type === "pagetitle" && (
                            <h2>
                                <small className="text-muted">
                                    {this.headline}
                                </small>
                            </h2>
                        )}
                        <p className="align-middle text-justify font-weight-light lead">
                            {this.text}
                        </p>
                        {this.redirect && (
                            <p className="align-middle text-justify font-weight-light lead">
                                <a href={this.redirect}>Learn more</a>
                            </p>
                        )}
                    </div>
                    <div style={{height: "200px"}} />
                </Parallax>
            </div>
        );
    }
}
export default BodyItem;
