import React, {Component} from "react";
import ReactDOM from "react-dom";

import EventItem from "./EventItem.js";
import {Row, Col} from "reactstrap";

class Events extends Component {
    constructor(props) {
        super(props);
        // console.log("Events props", props);
        this.content = props.Content.events;
    }

    generateContent(content) {
        return content.map((el, index) => {
            return (
                <Col key={index}>
                    <EventItem content={el} />
                </Col>
            );
        });
    }

    render() {
        return (
            <div className="eventsWrapper container-fluid">
                <h1 className="display-3">Find us</h1>
                <h2>
                    <small className="text-muted">
                        We will participate on the following Farmers Markets and
                        Festivals this year. Please check our Calendar for the
                        accurate event days.
                    </small>
                </h2>

                <div className="eventsWrapper-eventContent row">
                    <Row>{this.generateContent(this.content)}</Row>
                </div>
            </div>
        );
    }
}
export default Events;
