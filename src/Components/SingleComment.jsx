function SingleComment({ comment }) {
  console.log(comment)
  return (
    <div className="commentsList">
      <div className="d-flex comment mt-3">
        <img
          className="commentsAvatar mt-2 mr-2"
          src="https://www.scotsman.com/webimg/b25lY21zOjU4N2VlNjM2LTMzYWQtNGM0OS1hMWEzLTBlOTk1NGUyZmVjZDpkNjE5MGE2OS1mOWYyLTQxYmMtOGI4Ny00YzhlMWUxYmM2NzI=.jpg?crop=61:45,smart&width=800"
          alt="Avatar"
        />
        <div className="commentBox">
          <p className="pl-3 pt-1 commentName">
            {comment.userId.name} {comment.userId.surname}
          </p>
          <span className="pl-3 pt-1 mb-3 commentText">{comment.comment}</span>
        </div>
      </div>
      <div className="ml-5 mt-2 commentActions">
        <a href="#" className="mr-1">
          Like
        </a>
        |
        <a href="#" className="ml-1">
          Reply
        </a>
      </div>
    </div>
  )
}

export default SingleComment
