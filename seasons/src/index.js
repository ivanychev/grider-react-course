import React from "react";
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ""
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        } else {
            return <Spinner message={"Please accept request"}/>
        }
    }
}


ReactDOM.render(<App/>, document.getElementById("root"))