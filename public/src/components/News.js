import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  constructor(props) {

    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
      
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - SP NEWS`
  }

  capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }


  async componentDidMount() {
    this.updateNews()
  }

  async updateNews() {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc59af244d9b46f4bd7ccd96bc1510c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    
    let parseddata = await data.json()
    
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })
    
  }

  handelPreviousClick = async () => {

    this.setState({ page: this.state.page - 1 })
    this.updateNews();
  }

  handelNextClick = async () => {

    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }

  fetchMoreData = async () => {
   
    this.setState({
      page:this.state.page +1,
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc59af244d9b46f4bd7ccd96bc1510c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url);
    let parseddata = await data.json()
    
    this.setState({ articles: this.state.articles.concat(parseddata.articles) , 
      totalResults: parseddata.totalResults, 
       })
  };



  render() {


    return (
      <>
        <h1 className='text-center' style={{ margin: '35px',marginTop:'90px' }}>SP News - Top {this.capitalizeFirstLetter(this.props.category)} headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row'>
        
         
          {this.state.articles.map((element) => {
            return (

              <div className='col-md-4' key={element.url}  >
                <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>

            )
          })
          }

        </div>
        </div>
        </InfiniteScroll>
        



</>
      




    )
  }
}


export default News
