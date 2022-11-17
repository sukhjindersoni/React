import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props

        return (
            <div className= 'p-4' >
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl?imageUrl:"https://www.reuters.com/resizer/vw5LUa1a6Yti_HK0JhCmXz-sAkw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TBSQPPOZCNNOFAAZZCMXA2JOKQ.jpg"} className="card-img-top " alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn-sm btn btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem 