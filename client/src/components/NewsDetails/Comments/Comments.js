import "./Comments.css";
import { CommentCard } from "./CommentCard/CommentCard";

export const Comments = ({ comments }) => {

    return (
        <div className="comments-container">
            <h1 className="comments-title">Comments</h1>
            {
                comments ?
                    Object.values(comments).map(x => <CommentCard comment={x} key={x.content} />)
                    : <h1>Loading</h1>
            }

        </div>
    );
}