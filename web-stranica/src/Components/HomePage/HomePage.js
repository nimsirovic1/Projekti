import React from "react";
import './ZajednickiStil.css';


class HomePage extends React.Component {
  render() {
    return (
      <div className="main-div">
        
        <div className="table-responsive" id="tabelica-div">
            <table className="table table-hover" id="tabelica">
              <thead>
                <tr>
                  <th scope="col">NEJRA IMŠIROVIĆ</th>
                </tr>
              </thead>
            </table>
            <br />
          </div>
          <br />
          <p id="info">Welcome! I'm bachelor electrical engineer specialized for Computer Science and Informatics (soon aBd).
             If you want to know more about me, please <a href="/about-me" style={{color: "rgb(56, 204, 192)"}}>click here.</a>
          </p>
          <br />
          <button type="button" id="dugmic" className="btn btn-outline-secondary">Download my CV</button>
      </div>
    );
  }
}

export default HomePage;