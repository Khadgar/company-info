import React, {Component} from "react";
import ReactDOM from "react-dom";

class EventItem extends Component {
    constructor(props) {
        super(props);
        this.title = props.content.title;
        this.imageSrc = props.content.image;
        this.description = props.content.description;
        this.location = props.content.location;
        this.date = props.content.date;
        this.embedUrl = props.content.embedUrl;
    }

    createMapsItem(mapsContent) {
        return (
            <iframe
                src={mapsContent}
                width="400"
                height="220"
                frameBorder="0"
                style={{border : 0}}
                allowFullScreen
            />
        );
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
            <div className="eventItem border rounded">
                <div className="eventItem-title">
                    <h2>
                        <small className="text-muted text-center">
                            {this.title}
                        </small>
                    </h2>
                </div>
                <div className="eventItem-image">
                    {this.createMapsItem(this.embedUrl)}
                </div>
                <div className="eventItem-location">
                    <a href={this.location} target="_blank">
                        {this.description}
                    </a>
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
