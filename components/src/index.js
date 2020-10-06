import React from "react";
import ReactDOM from 'react-dom';
import ApprovalCard from "./ApprovalCard"
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
    return <div className="ui container comments">
        <ApprovalCard >
            <CommentDetail author={"Sam"}
                           timeAgo={"Today at 4:45PM"}
                           avatarUrl={faker.image.avatar()}
                           commentText={"Hey"}/>
        </ApprovalCard>

        <ApprovalCard >
        <CommentDetail author={"Alex"}
                       timeAgo={"Today at 3:45PM"}
                       avatarUrl={faker.image.avatar()}
                       commentText={"There"}/>
        </ApprovalCard>
        <ApprovalCard >
        <CommentDetail author={"Jane"}
                       timeAgo={"Today at 2:45PM"}
                       avatarUrl={faker.image.avatar()}
                       commentText={"There"}/>
        </ApprovalCard>
    </div>
};

ReactDOM.render(<App />, document.getElementById("root"))