import React from 'react';
// import { Glyphicon } from 'react-bootstrap';
import "./starRating.css";

interface StarRatingProps {
  stars: number
}

class StarRating extends React.Component<StarRatingProps> {
  starText(stars: number) {
    var text = '';
    switch (stars) {
      case 1:
        text = 'one star';
        break;
      case 2: 
        text = 'two stars';
        break;
      case 3: 
        text = 'three stars';
        break;
      case 4: 
        text = 'four stars';
        break;
      case 5: 
        text = 'five stars';
        break;
    }
    return text;
  }
  
  render() { 
    console.log(this.props.stars, this.starText(this.props.stars))
    return (
      <span> 
        <p>{this.starText(this.props.stars)}</p>
        {/* <Glyphicon glyph={this.props.stars >= 1 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 2 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 3 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 4 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 5 ? "star" : "star-empty"} />                           */}
      </span>
    );
  }
}

export default StarRating;