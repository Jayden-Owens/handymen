const Comment = ({ title, body, rating}) => {
    return (
        <>
            <h1>{title}</h1>
            <h3>what is your rating? </h3>
            <p>{body}</p>
            <button onClick={() => deletePost(id)}>
                Delete
            </button>
        </>
    )
}

export default Comment;