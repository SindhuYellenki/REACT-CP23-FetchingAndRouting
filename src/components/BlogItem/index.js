import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, author, imageUrl, topic, avatarUrl} = details
  return (
    <Link to={`/blogs/${id}`}>
      <li className="listContainer">
        <img className="avatar" src={avatarUrl} alt="avatar" />
        <p>{topic}</p>
        <h1>{title}</h1>
        <img className="profileImage" src={imageUrl} alt="profile" />
        <p className="author">{author}</p>
      </li>
    </Link>
  )
}

export default BlogItem
