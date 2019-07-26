import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      itemName: "",
      lastSeenLocation: "",
      lastSeenTime: ""
    };
    
    this.submitNewItem = this.submitNewItem.bind(this)
  }

  componentDidMount() {
    axios
      .get("/api/items")
      .then(res => {
        this.setState({
          items: res.data
        });
      })
      .catch(err => alert(err));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitNewItem(){
    const { 
      itemName: item_name , 
      lastSeenLocation: last_seen_location, 
      lastSeenTime: last_seen_time } = this.state
    axios.post('/api/items',
    {item_name,last_seen_location,last_seen_time})
    .then( res =>{
      this.setState({items: res.data})
    })
  }

  render() {
    let itemList = this.state.items.map(item => (
      <div>
        <span>Item:{item.item_name}</span>
        <span>Last Place Seen:{item.last_seen_location}</span>
        <span>Last Time Seen: {item.last_seen_time}</span>
      </div>
    ));
    return (
      <div className="App">
        <h1>Where my stuff at?</h1>
        {itemList}
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="item name"
            name="itemName"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            placeholder="last place seen"
            name="lastSeenLocation"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            placeholder="last time seen"
            name="lastSeenTime"
            onChange={e => this.handleChange(e)}
          />
          <button onClick={this.submitNewItem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
