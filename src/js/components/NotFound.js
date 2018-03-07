import React, {Component} from "react";
import ReactDOM from "react-dom";

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notFoundWrapper container">
                <div className="notFoundWrapper-content row">
                    <h2>404: Not Found</h2>
                </div>
            </div>
        );
    }
}
export default NotFound;
