import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogList from '../BlogList'

import UserInfo from '../UserInfo'
import './index.css'

class Home extends Component {
  state = {isFetching: true, blogsList: []}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      author: each.author,
      title: each.title,
      topic: each.topic,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
    }))

    this.setState({isFetching: false, blogsList: updatedData})
  }

  getSpinner = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isFetching, blogsList} = this.state
    console.log(blogsList)
    return (
      <div className="bg-container">
        <UserInfo />
        {isFetching && this.getSpinner()}
        {!isFetching && <BlogList blogsList={blogsList} />}
      </div>
    )
  }
}

export default Home
