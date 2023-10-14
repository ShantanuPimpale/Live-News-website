import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            (
                <div className='my-3'>
                    <div className="card">
                        <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyzOGZzI92UReZg9aeBpqVA-HZRrk1LSUhpgK5_dHVw&s" : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}....</h5>
                            <p className="card-text">{description}....</p>
                            <p className='card-tect'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default NewsItem;
