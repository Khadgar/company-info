import React, {Component} from "react";
import ReactDOM from "react-dom";

class Ingredients extends Component {
    constructor(props) {
        super(props);
        console.log("Ingedients props", props);
        console.log(props);
    }

    render() {
        return (
            <div className="ingredientsWrapper container">
                <div className="ingredientsWrapper-eventContent row">
                    <h2>Ingredients</h2>
                </div>
            </div>
        );
    }
}
export default Ingredients;
