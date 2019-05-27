import React from 'react'
import {Link} from 'react-router-dom'
import './index.css';

export default class App extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "#f5e6cc"}} class="nav-link active"> 
               <div id="meni">
                   <ul>
                    <li className="meni2"><Link className="link-stil" to={`/`}> Home </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/about-me`}> About </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/projects`}> Projects </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/contact`}> Contact </Link></li>
                    </ul>
               </div>
            </div>
        )
    }
}