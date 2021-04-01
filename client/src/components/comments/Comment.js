import Comments from "./Comments";
const Comment = ({ title, body, rating, deleteComment}) => {
    return (
        <>
            <h1>{title}</h1>
            <h3>what is your rating? </h3>
            <p>{body}</p>
            <button onClick={() => deleteComment()}>
                Delete
            </button>
        </>
    )
}

export default Comment;