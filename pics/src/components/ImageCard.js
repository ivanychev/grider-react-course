import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }
    render() {

        const {description, urls} = this.props.image;

        return <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
            <img ref={this.imageRef} src={urls.regular} alt={description}/>
        </div>;
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10);
        this.setState({ spans })
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
}

export default ImageCard;