import React from "react";
import {Link} from "react-router-dom";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="main-div">
        Heej, u AboutMe formi siii
        <Link to="/"><button type="button" className="btn btn-outline-secondary" style={{color: "white"}}>Back</button></Link>
      </div>
    );
  }
}

export default AboutMe;