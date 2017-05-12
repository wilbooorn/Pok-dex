import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <ul>
          <h1>{this.props.item.name}</h1>
          <p>{this.props.item.happiness}</p>
          <p>{this.props.item.price}</p>
        </ul>
      </div>
    );
  }
}

export default ItemDetail;
