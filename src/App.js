import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor (props) {
    super(props)
    this.state={
      email: "",
      fullName: "",
      phoneNumber: "",
      kin: "",
      fee: "",
      fees: "",
      location: "",
      school: "",
      join: "",
      about: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target =e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value ;

    this.setState({[name]:value});
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state);
    
    this.setState({
      email: "",
      fullName: "",
      phoneNumber: "",
      kin: "",
      fee: "",
      fees: "",
      location: "",
      school: "",
      join: "",
      about: ""
    });
  }
  render() {
    return (
      <form className="registration" onSubmit={this.handleSubmit}>
        <div className="head">
        <h1> Codetrain Registration Form </h1>
        
        <p> This form is the first step to register for Codetrain's program starting on 25th July 2020. Our admissions team will reach out to you after successfully submitting your form.</p>
        <br/>
        <span>* Required</span>
      </div>

      <div className="email">
      <label>Email address*</label>
      <br/><br/>
      <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder={" Your email"}/>
      </div>

      <div className="name">
        <label> Full Name<span>*</span></label>
        <br/><br/>
        <input type="text" name="fullName" id="Full Name" onChange={this.handleChange} value={this.state.fullName} placeholder={"Full Name"}/>
      </div>

      <div className="number">
        <label>Phone Number <span>*</span></label>
        <br/>
        <input type="text" name="phoneNumber"  onChange={this.handleChange} value={this.state.phoneNumber} placeholder={"Your answer"}/>
      </div>

      <div className="kin">
        <label> Phone number of next of kin</label>
        <p>Phone number of someone we can reach out to in case your phone is off or not reachable. Eg, your parent, guardian or sibling, or spouse</p>
        <br/>
        <input type="text" name="kin"  onChange={this.handleChange} value={this.state.kin} placeholder={"Your answer"}/>
      </div>

      <div className="fee">
        <p>Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 for international applicants) <span>*</span> </p>
        
        <input type="checkbox" name="No"  onChange={this.handleChange} value={this.state.fee}/>
        <label>No</label>
        <br/>
        
        <input type="checkbox" name="Yes"  onChange={this.handleChange} value={this.state.fee}/>
        <label>Yes</label> 
      </div>

      <div className="fees">
        <p>Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 for international applicants) <span>*</span></p>
        <input type="checkbox" name="yourself"  onChange={this.handleChange} value={this.state.fees}/>
        <label>Yourself</label>
        <br/>
        <input type="checkbox" name="parentSponsor"  onChange={this.handleChange} value={this.state.fees}/>
        <label>Parent / Sponser</label>
        <br/>
        <input type="checkbox" name="organization"  onChange={this.handleChange} value={this.state.fees}/>
        <label>Organization</label>
      </div>

      <div className="location">
        <label>Location <span>*</span></label>
        <br/>
        <input type="text" name="location"  onChange={this.handleChange} value={this.state.location} placeholder={"Your answer"}/>
      </div>

      <div className="school">
        <label> Current or previous school <span>*</span></label>
        <br/>
        <input type="text" name="school"  onChange={this.handleChange} value={this.state.school} placeholder={"Your answer"}/>
      </div><br/>

      <div className="join">
        <label>Why do you want to join Codetrain <span>*</span></label>
        <br/>
        <input type="text" name="join"  onChange={this.handleChange} value={this.state.join} placeholder={"Your answer"}/>
      </div><br/>

      <div className="about">
        <label>How did you hear about Codetrain ?<span>*</span></label>
        <br/>
        <input type="text" name="about"  onChange={this.handleChange} value={this.state.about} placeholder={"Your answer"}/>
      </div>
      <br/><br/>

      <section id="footer">
          <h5 style={{color: "grey"}}>A copy of your repones will be emailed to the adree you provided</h5>
          <input type="submit" name="submit"/>
        <div className="page">
          <ul>
          <li>
            <label> Page 1 of 1</label>
          </li>
          <li>
          <progress  id="file" value="100" max="100">100% </progress> 
          </li>
        </ul>
        </div> <br/>  
      </section>
      </form>
    );
  }
}

export default App;
