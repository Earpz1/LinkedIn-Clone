import { Badge, Row } from 'react-bootstrap'
import { BsDot, BsDash } from 'react-icons/bs'
import { FcLike, FcRating } from 'react-icons/fc'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { IoIosSend } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Comments from './Comments'

const NewsFeedItem = ({ post }) => {
  const likes = Math.floor(Math.random() * 200)

  const [Likes, setLikes] = useState(likes)
  const [liked, setliked] = useState(false)
  const [showComments, setshowComments] = useState(false)

  const handleShowComments = () => {
    if (showComments === true) {
      setshowComments(false)
    } else {
      setshowComments(true)
    }
  }

  const handleLikes = () => {
    if (liked) {
      setLikes(Likes - 1)
      setliked(false)
    } else {
      setLikes(Likes + 1)
      setliked(true)
    }
  }

  return (
    <>
      <div className="news-feed-post mt-3">
        <Row>
          <div>
            <Link to={'/profile'}>
              <img
                className="news-post-profile-image ml-2"
                src={post.user.image}
              />
            </Link>
          </div>

          <div className="">
            <div>
              <small>
                <strong>
                  {post.user.name} {post.user.surname}
                </strong>
              </small>{' '}
              <BsDot className="mt-1" /> <small>3rd+</small>
            </div>
            <div>
              <small>{post.user.title}</small> <BsDash className="mt-1" />{' '}
              <small>{post.user.email}</small>
            </div>
          </div>
        </Row>
        <Row>
          <div
            className="d-flex flex-column px-2 pb-2"
            /*style={{ paddingLeft: ".5em", paddingRight: ".5em" }}*/
          >
            {post.text}
          </div>

          {post.image !== '' && (
            <div style={{ width: '100%' }}>
              <img
                className="mb-3 img-fluid"
                src={`${post.image}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          <div className="d-flex mt-2 ml-2 justify-content-between w-100">
            <div>
              <AiFillLike className="like-icon" />
              {Likes}
            </div>
            <div>
              <div className="commentLink" onClick={handleShowComments}>
                <small className="mr-3">
                  {post.comments.length} comment(s)
                </small>
              </div>
            </div>
          </div>
          <hr className="bottom-post-divider" />
          <div className="post-action-buttons d-flex justify-content-between w-100 mx-3">
            <span className="footer-icons-new-post" onClick={handleLikes}>
              {liked ? <AiFillLike /> : <AiOutlineLike />} Like
            </span>
            <span
              className="footer-icons-new-post"
              onClick={handleShowComments}
            >
              <FaRegCommentDots /> Comment
            </span>
            <span className="footer-icons-new-post">
              <BiRepost /> Repost
            </span>
            <span className="footer-icons-new-post">
              <IoIosSend /> Send
            </span>
          </div>
        </Row>
        {showComments && <Comments post={post} />}
      </div>
    </>
  )
}

export default NewsFeedItem
