import React, {Component} from "react";
import ReactDOM from "react-dom";

class EventItem extends Component {
    constructor(props) {
        super(props);
        // console.log("BodyItem props", props);
        this.title = props.content.title;
        this.imageSrc = props.content.image;
        this.description = props.content.description;
        this.location = props.content.location;
        this.date = props.content.date;
    }

    renderImage(imgSrc) {
        return (
            <img
                src={imgSrc}
                className="eventImage img-fluid rounded mx-auto d-block"
            />
        );
    }

    render() {
        // console.log("EventItem-render");
        return (
            <div className="eventItem border">
                <div className="eventItem-title">
                    <h2>
                    <small className="text-muted text-center">{this.title}</small></h2>
                </div>
                <div className="eventItem-image">
                    {this.renderImage(this.imageSrc)}
                </div>
                <div className="eventItem-location">
                    <a href={this.location} target="_blank">{this.description}</a>
                </div>
                <div className="eventItem-date">
                    <p className="text-justify font-weight-light">
                        {this.date}
                    </p>
                </div>
            </div>
        );
    }
}
export default EventItem;
