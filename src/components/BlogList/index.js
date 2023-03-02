import BlogItem from '../BlogItem'

const BlogList = props => {
  console.log('blogList')
  const {blogsList} = props
  console.log(`BlogList Component ${blogsList}`)
  return (
    <ul className="listContainer">
      {blogsList.map(each => (
        <BlogItem details={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
