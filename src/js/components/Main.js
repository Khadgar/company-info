import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {AnimatedSwitch} from "react-router-transition";

import Events from "./Events.js";
import Body from "./Body.js";
import NotFound from "./NotFound.js";
import Ingredients from "./Ingredients.js";
import ArtOfMaking from "./ArtOfMaking.js";
import ShapesAndFlavors from "./ShapesAndFlavors.js";

class Main extends Component {
    constructor(props) {
        super(props);
        // console.log("Main-props", props);
        this.content = props.content;
    }

    render() {
        // console.log("Main-render");
        return (
            <main>
                <Switch>
                    <AnimatedSwitch
                        atEnter={{opacity: 0}}
                        atLeave={{opacity: 0}}
                        atActive={{opacity: 1}}
                        className="switch-wrapper"
                    >
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return <Body Content={this.content} />;
                            }}
                        />

                        <Route
                            path="/events"
                            render={() => {
                                return <Events Content={this.content} />;
                            }}
                        />
                        <Route
                            path="/ingredients"
                            render={() => {
                                return <Ingredients Content={this.content} />;
                            }}
                        />
                        <Route
                            path="/artofmaking"
                            render={() => {
                                return <ArtOfMaking Content={this.content} />;
                            }}
                        />
                        <Route
                            path="/shapesandflavors"
                            render={() => {
                                return <ShapesAndFlavors Content={this.content} />;
                            }}
                        />
                    </AnimatedSwitch>
                </Switch>
            </main>
        );
    }
}
export default Main;
