import React, {Component} from "react";
import ReactDOM from "react-dom";

class Events extends Component {
    constructor(props) {
        super(props);
        console.log("Events props", props);
        console.log(props);
    }

    render() {
        return (
            <div className="eventsWrapper container">
                <div className="eventsWrapper-eventContent row">
                    <h2>Events</h2>
                </div>
            </div>
        );
    }
}
export default Events;
