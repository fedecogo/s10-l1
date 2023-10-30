import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  // state = {
  //   selected: false,
  // }

  render() {
    return (
      <>
        <Card
          onClick={() => this.props.setBooklistState(this.props.book.asin)}style={{
            border:
              this.props.bookAsin === this.props.book.asin
                ? '3px solid red'
                : 'none',
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
