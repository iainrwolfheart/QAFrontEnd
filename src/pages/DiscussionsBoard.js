import React from 'react';
import '../discussionsboard.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import datefunction from '../components/datefunction';

class discussionsboard extends React.Component {

  constructor(props){
    super(props);
    let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let separator = '-';
let newdatefunction = new datefunction();
let zerofunction = newdatefunction.zerofunction();
let alldates = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${zerofunction}${date}`

    this.state = {
        discussion: [],
        isLoaded: false,
        uname:'',
        movie:'',
        comm:'',
        rate: '',
        datepost: alldates
    }
  }

  refreshPage(){ 
    window.location.reload(); 
}

    componentDidMount() {
      axios.get(`http://35.246.125.69:8000/discussion`)
      .then(response => {
          this.setState({
              discussion: response.data,
              isLoaded: true,
          });
      })
      console.log(this.state.discussion);
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
    console.log(e);
  }


  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { uname, movie, comm, rate, datepost } = this.state;
    var Filter = require('bad-words'),
    filter = new Filter();
    axios.post(`http://35.246.125.69:8000/discussion`, { userName:filter.clean(uname), movieName:filter.clean(movie), comments:filter.clean(comm), rating:rate, datePosted:datepost })
      .then((result) => {
        

        console.log(result);
      });
  }

    
  



  render() { 
    const { uname, movie, comm, rate } = this.state;
 return (
  <div><h1 className="discussheader">Discussions Board</h1>
    <Table striped bordered hover variant="dark" className="table" style={{width: 1200}}>
  
    <tr> <thead>
    <tr>
      
      <th style={{width: 200}}>Username</th>
      <th style={{width: 250}}>Movie Name</th>
      <th style={{width: 550}}>Comments</th>
      <th style={{width: 100}}>Rating</th>
      <th style={{width: 100}}>Date Posted</th>
    </tr>
  </thead>
    { this.state.discussion.map(item => { 
      return (
    <div>
  <tbody>
    
    
      <td style={{width: 200}}>  {item.userName} </td>
      <td style={{width: 250}}> {item.movieName} </td>
      <td style={{width: 550}}> {item.comments} </td>
      <td style={{width: 100}}> {item.rating} </td>
      <td style={{width: 100}}> {item.datePosted} </td>
    </tbody>
</div>
    )})}</tr>
  
</Table>
<div>
  
    <form onSubmit={this.onSubmit}>
    <label className="userlabel">Username :</label>
    <input className="username" maxlength="14" onChange={this.onChange} value={uname} name="uname"></input>
    <label className="movielabel">Movie Name :</label>
    <input className="moviename" maxlength="60" onChange={this.onChange} value={movie} name="movie"></input>
    <label className="rating">Rating :</label>
    <textarea className="post" placeholder="Post something..." maxlength="150" onChange={this.onChange} value={comm} name="comm"></textarea>
    <button type="submit" className="submitpost" onClick={this.refreshPage}>POST</button>
    
    <ul class="rate-area">
        
      <input type="radio" id="5-star" name="rate" value="5" onChange={this.onChange}/><label for="5-star" title="Amazing">5 stars</label>
      <input type="radio" id="4-star" name="rate" value="4" onChange={this.onChange}/><label for="4-star" title="Good">4 stars</label>
      <input type="radio" id="3-star" name="rate" value="3" onChange={this.onChange}/><label for="3-star" title="Average">3 stars</label>
      <input type="radio" id="2-star" name="rate" value="2" onChange={this.onChange}/><label for="2-star" title="Not Good">2 stars</label>
      <input type="radio" id="1-star" name="rate" value="1" onChange={this.onChange}/><label for="1-star" title="Bad">1 star</label>
      
  </ul>
    </form>
      </div> 
    
    </div>
 )}}

  

export default discussionsboard;