import React from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className={"right floated content"}>
          <Link
            to={`/streams/edit/${stream.id}`}
            className={"ui button primary"}
          >
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className={"ui button negative"}
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((s) => {
      return (
        <div className={"item"} key={s.id}>
          {this.renderAdmin(s)}
          <i className={"large middle aligned icon camera"} />

          <div className={"content"}>
            <Link to={`/streams/${s.id}`} className={"header"}>
              {s.title}
            </Link>
            <div className={"description"}>{s.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to={"/streams/new"} className={"ui button primary"}>
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className={"ui celled list"}>{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
