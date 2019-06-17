import React from "react";
import "./ContactStil.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="main-div">
        <div className="container" id="kontakt">
          <form>          
            <div className="row">
              <div className="col-25"> 
                <label htmlFor="firstNameInput" id="firstNameLabel"  className="labele">First name:*</label>
              </div>
              <div className="col-75">
                  <input type="text" className="form-control" placeholder="Your first name here..." id="firstNameInput"/>
              </div>
            </div> 
            <div className="row">
              <div className="col-25">
                <label htmlFor="LastNameInput" id="LastNameLabel" className="labele">Last name:*</label>
              </div>  
              <div className="col-75">
                  <input type="text" className="form-control" id="LastNameInput"  placeholder="Your last name here..."/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="EmailInput" id="EmailLabel"  className="labele">E-mail:*</label>
              </div>
              <div className="col-75">
                <input type="text" className="form-control" id="EmailInput"  placeholder="Your e-mail here..."/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="SubjectInput" id="SubjectLabel" className="labele">Subject:*</label>
              </div>
              <div className="col-75">
                <input type="text" className="form-control" id="SubjectInput" placeholder="Subject here..."/>
              </div>
            </div>
            <div className="row">                
              <div className="col">           
                <textarea className="form-control" id="MessageInput" style={{padding:"15%"}} placeholder="Please enter your message here..."></textarea>
              </div>
            </div>
            <div className="row">                 
              <button type="button" id="dugmic2" className="btn btn-outline-secondary">Send</button>
            </div>
         </form>
        </div>
      </div>
    );
  }
}

export default Contact;