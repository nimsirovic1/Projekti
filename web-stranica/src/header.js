import React from 'react'
import {Link} from 'react-router-dom'
import './index.css';
import github from './github.png';


export default class App extends React.Component {
    render() {
        return (
            <div className="nav-link active"> 
               <div id="meni">
               <Link onClick={() => window.open( 'https://github.com/nimsirovic1/Projekti')}><img src={github} alt={"Github logo"} className="logo" /></Link>
              <Link onClick={() => window.open( 'https://linkedin.com')} className="fa fa-linkedin"></Link>
                   <ul>
                    <li className="meni2"><Link className="link-stil" to={`/`}><i className="fa fa-fw fa-home"></i> Home </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/about-me`}><i className="fa fa-fw fa-user"></i> About </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/projects`}><i className="fa fa-folder"></i> Projects </Link></li>
                    <li className="meni2"><Link className="link-stil" to={`/contact`}><i className="fa fa-fw fa-envelope"></i> Contact </Link></li>
                    </ul>
               </div>
            </div>
        )
    }
}