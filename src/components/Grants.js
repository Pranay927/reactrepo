import React from 'react'
import "./css/grants.css"
import { NavLink } from 'react-router-dom';
import lg from "../assets/images/lg.jpg";

function Grants() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src={lg} alt="Logo" width="40" height="35" className="d-inline-block align-text-top"/>
                    </NavLink>
                </div>
            </nav>
            <NavLink className="navbar-brand" to="index.html">Research Grants Portal</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/grants">GRANTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/download">DOWNLOAD</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/upload">UPLOAD</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <form className="form1">
        <label for="grant-type">Select Grant Type:</label>
        <select id="grant-type" name="grant-type">
            <option value="all" selected>All</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="arts">Arts</option>
            <option value="humanities">Humanities</option>
        </select>
    </form>
    <form className="f2">
        <label for="search-grants">Search for grants by title or ID</label>
        <input type="text" id="search-grants" placeholder="Search "/>
        <button type="submit">Search</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>Grant ID</th>
                <th>Grant Title</th>
                <th>Amount</th>
                <th>View Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>G0001</td>
                <td>Research on Climate Change</td>
                <td>₹50,000</td>
                <td><NavLink to="#">View</NavLink></td>
            </tr>
            <tr>
                <td>G0002</td>
                <td>Development of Renewable Energy</td>
                <td>₹75,000</td>
                <td><NavLink to="#">View</NavLink></td>
            </tr>
            <tr>
                <td>G0003</td>
                <td>Cancer Research</td>
                <td>₹10,000</td>
                <td><NavLink to="#">View</NavLink></td>
            </tr>
            <tr>
                <td>G0004</td>
                <td>₹Research on Protein Synthesis</td>
                <td>₹5,000</td>
                <td><NavLink to="#">View</NavLink></td>
            </tr>
            <tr>
                <td>G0005</td>
                <td>Builing Drone Research</td>
                <td>₹75,000</td>
                <td>
                    <details>
                        <summary>View</summary>
                        <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                            international pavilions, award-winning fireworks and seasonal special events.</p>
                    </details>
                </td>
            </tr>
            <tr>
                <td>G0006</td>
                <td>Mental Health</td>
                <td>₹10,000</td>
                <td><NavLink to="#">View</NavLink></td>
            </tr>
        </tbody>
    </table>

      
    </>
  )
}

export default Grants
