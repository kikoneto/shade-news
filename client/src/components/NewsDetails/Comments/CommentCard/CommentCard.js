import "./CommentCard.css";

export const CommentCard = ({ comment }) => {
    return (
        <div className="comment-box">
            <img src={comment.avatarUrl} />
            <div className="user-comment">
                <span>{comment.email}</span>
                <p>{comment.content}</p>
            </div>
        </div>
    );
}