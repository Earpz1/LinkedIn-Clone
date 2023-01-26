import { useSelector } from 'react-redux'

function SingleComment({ comment, postID }) {
  const currentUserData = useSelector((state) => state.user.currentUser)

  const deleteComment = async (commentID) => {
    const options = {
      method: 'DELETE',
    }
    const fetchURL = `https://fs0422-epicode-build-week-4-production.up.railway.app/posts/${postID}/comment/${commentID}`

    try {
      let response = await fetch(fetchURL, options)
    } catch (error) {
      console.log(error)
    }
  }

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
        <span className="ml-1 mr-1 commentAction">Like</span>|
        <span className="ml-1 mr-1 commentAction">Reply</span>
        {currentUserData._id === comment.userId._id && (
          <span
            className="ml-1 commentAction"
            onClick={() => {
              deleteComment(comment._id)
            }}
          >
            | Delete
          </span>
        )}
      </div>
    </div>
  )
}

export default SingleComment
