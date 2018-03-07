import React, {Component} from "react";
import ReactDOM from "react-dom";
import ScrollableAnchor, {
    configureAnchors,
    goToTop
} from "react-scrollable-anchor";

class Body extends Component {
    constructor(props) {
        super(props);
        console.log("Body props", props);
        configureAnchors({
            offset: -56,
            scrollDuration: 400
        });
    }

    render() {
        console.log("Body-render");
        return (
            <div className="bodyWrapper container">
                <div className="bodyWrapper-bodyItem row">
                    <h2> Home </h2>
                </div>
                <ScrollableAnchor id={"bodyItem1"}>
                    <div className="bodyWrapper-bodyItem row">
                        <h2> bodyItem 1 </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"bodyItem2"}>
                    <div className="bodyWrapper-bodyItem row">
                        <h2> bodyItem 2 </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"bodyItem3"}>
                    <div className="bodyWrapper-bodyItem row">
                        <h2> bodyItem 3 </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"bodyItem4"}>
                    <div className="bodyWrapper-bodyItem row">
                        <h2> bodyItem 4 </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"bodyItem5"}>
                    <div className="bodyWrapper-bodyItem row">
                        <h2> bodyItem 5 </h2>
                    </div>
                </ScrollableAnchor>
            </div>
        );
    }
}
export default Body;
