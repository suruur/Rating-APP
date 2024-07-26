
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRating: 0,
        handleLike: () => {
            this.setState((prev) => ({
                likes: prev.likes + 1,
                totalRating: prev.totalRating + 1
            }))
        },
        handleDisLike: () => {
            this.setState((prev) => ({
                dislikes: prev.dislikes + 1,
                totalRating: prev.totalRating + 1

            }))
        }
       
    }
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>

     <button className="rating-button" onClick={this.state.handleLike}>
        Like ({this.state.likes})
     </button>

     <button className="rating-button" onClick={this.state.handleDisLike}>
        DisLike ({this.state.dislikes})
    </button>
    <h3>Total number of rating: {this.state.totalRating}</h3>
     </>
    );
  }
}

export default ContentRating;
