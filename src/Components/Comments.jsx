import { Modal, Button, Row, Container, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Comments({ post }) {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [postText, setPostText] = useState('')
  const currentUserData = useSelector((state) => state.user.currentUser)

  return (
    <div className="commentsContainer">
      <img className="commentsAvatar mt-3" src={post.user.image} />
    </div>
  )
}

export default Comments
