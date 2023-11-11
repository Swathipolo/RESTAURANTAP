import {Component} from 'react'
import ListItem from '../ListItem'

class ListContainer extends Component {
  state = {listData: []}

  componentDidMount() {
    this.listBlogData()
  }

  listBlogData = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )

    const data = response.json()

    const updatedData = data.map(eachItem => ({
      restaurantId: eachItem.restaurant_id,
      restaurantName: eachItem.restaurant_name,
      restaurantImage: eachItem.restaurant_image,
    }))
    this.setState({listData: updatedData})
  }

  render() {
    const {listData} = this.state

    return (
      <div>
        <h1>UNI Resto Cafe</h1>
        {listData.map(eachList => (
          <ListItem listData={eachList} key={eachList.id} />
        ))}
      </div>
    )
  }
}
export default ListContainer
