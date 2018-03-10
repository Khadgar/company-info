import React, {Component} from "react";
import ReactDOM from "react-dom";

class BodyItem extends Component {
    constructor(props) {
        super(props);
        console.log("BodyItem props", props);
        this.title = props.content.title;
        this.imageSrc = props.content.image;
        this.text = props.content.text;
        this.randomImageUrls = [];
    }

    renderImage(imgSrc){
        return (<img src={imgSrc} className="img-fluid rounded mx-auto d-block"/>);
    }

    render() {
        console.log("BodyIem-render");
        return (
            <div className="bodyItem">
                <div className="bodyItem-title"><h1>{this.title}</h1></div>
                <div className="bodyItem-image">{this.renderImage(this.imageSrc)}</div>
                <div className="bodyItem-info">
                    <p className="text-justify font-weight-light">{this.text}</p>
                </div>
            </div>
        );
    }
}
export default BodyItem;
