import React from 'react'
import './css/d.css'
import { NavLink } from 'react-router-dom';
import lg from "../assets/images/lg.jpg";
function D() {
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
                        <NavLink className="nav-link " to="/grants">GRANTS</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/download">DOWNLOAD</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/upload">UPLOAD</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
   
    <div className="srch">
        <label for="grant-title">Grant Title:</label>
        <input type="text" id="grant-title" name="grant-title"/>
    
        <label for="grant-category">Grant Category:</label>
        <select id="grant-category" name="grant-category">
            <option value=""></option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
        </select>

        <button type="submit">Search</button>
    </div>
    <br />

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
                <td><NavLink to="Research on Climate Change.pdf" download>download</NavLink></td>
            </tr>
            <tr>
                <td>G0002</td>
                <td>Development of Renewable Energy</td>
                <td>₹75,000</td>
                <td><NavLink to="Development of Renewable Energy.pdf" download>download</NavLink></td>
            </tr>
            <tr>
                <td>G0003</td>
                <td>Cancer Research</td>
                <td>₹10,000</td>
                <td><NavLink to="Cancer Research.pdf" download>download</NavLink></td>
            </tr>
            <tr>
                <td>G0004</td>
                <td>Research on Protein Synthesis</td>
                <td>₹5,000</td>
                <td><NavLink to="Research on Protein Synthesis.pdf" download>download</NavLink></td>
            </tr>
            <tr>
                <td>G0005</td>
                <td>Builing Drone Research</td>
                <td>₹75,000</td>
                <td><NavLink to="Builing Drone Research.pdf" download>download</NavLink></td>
            </tr>
            <tr>
                <td>G0006</td>
                <td>Mental Health</td>
                <td>₹10,000</td>
                <td><NavLink to="Mental Health.pdf" download>download</NavLink></td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default D
