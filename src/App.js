import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
var uuid=require('uuid');
// var firebase=require('firebase');

// var config = {
//   apiKey: "AIzaSyBF23hOulrSNxTJD4a7SrQuKdeiLwhAfx0",
//   authDomain: "simplesurvey-371ce.firebaseapp.com",
//   databaseURL: "https://reactdata-5f8b5.firebaseio.com/",
//   projectId: "simplesurvey-371ce",
//   storageBucket: "simplesurvey-371ce.appspot.com",
//   messagingSenderId: "968873690005"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

// var ref = database.ref();
// ref.on("value", function(snapshot) {
//   let data=JSON.stringify(snapshot.val().sugar);
//    console.log(snapshot.val().sugar);
//    this.setState({resumeData: data});
// }.bind(this), function (error) {
//    console.log("Error: " + error.code);
// });
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
    // ref.on("value", function(snapshot) {
    //   let data=snapshot.val().sugar;
    //    console.log(snapshot.val().sugar);
    //    this.setState({resumeData: data});
    // }.bind(this), function (error) {
    //    console.log("Error: " + error.code);
    // }); 
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
