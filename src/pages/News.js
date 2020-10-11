import React, { Component } from 'react'
import axios from "axios";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

class News extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
    console.log("change: " + e.target.value)
  }

  postContent = (data) => {
    data.preventDefault();
    console.log("hello")
    //console.log("postted " + JSON.stringify(data))
    //const textAreaValue = this.textArea.value;
    //console.log("textAreaValue : ", textAreaValue);
    axios({
      method: 'post',
      url: 'http://localhost:8080/stats',
      data: {
        news: this.state.text
      }
    }).then(() => {
      this.deleteText()
    })
  }

  deleteText = () => {
    this.setState({ text: "" })
  }

  render() {
    return (
      <div className="news">
        <Form onSubmit={this.postContent}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Haber giriniz:</Form.Label>
            <Form.Control
              componentClass="textarea" defaultValue={this.state.text} onChange={this.handleChange} as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Gönder
        </Button>
        </Form>
      </div>
    )
  }
}

export default News

{/* <div className="home">
<labe> Haber Girişi: </labe>
<input type="text" value={this.state.text} onChange={this.handleChange} style={{width: "500px", height: "500px"}}/>
<Button variant="outline-primary" onClick={this.postContent}>Vaka</Button>{' '}
</div> */}

// return(
//   <div className="home">
//    <textarea type="text" value={this.state.text} onChange={this.handleChange}></textarea> 
//    <button onClick={this.postContent}>post</button>
//   </div>
// )