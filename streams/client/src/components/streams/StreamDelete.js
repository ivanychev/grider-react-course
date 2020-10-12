import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className={"ui button negative"}
        >
          Delete
        </button>
        <Link to={"/"} className={"ui button"}>
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    const name = this.props.stream ? this.props.stream.title : "";
    return (
      <div>
        StreamDelete
        <Modal
          onDismiss={() => history.push("/")}
          title={"Delete stream"}
          content={`Are you sure you want to delete the stream - ${name}?`}
          actions={this.renderActions()}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
