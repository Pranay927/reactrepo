import React from 'react'
import './css/upload.css'
import { NavLink } from 'react-router-dom';

import lg from "../assets/images/lg.jpg";

function Upload() {
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
                    <li className="nav-item">
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
    <div className="container">
        <h1>Upload Research Grant Details</h1>
        <form action="/upload" method="post" enctype="multipart/form-data">

            <div className="form-group">
                <label for="grant-title">Grant Title:</label>
                <input type="text" id="grant-title" name="grant-title" />
            </div>

            <div className="form-group">
                <label for="grant-file">Upload Research Grant:</label>
                <input type="file" id="grant-file" name="grant-file" accept=".pdf,.doc,.docx,.csv"/>
            </div>

            <div className="form-group">
                <label for="grant-category">Grant Category:</label>
                <select id="grant-category" name="grant-category">
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                    <option value="arts">Arts</option>
                    <option value="humanities">Humanities</option>
                </select>
            </div>

            <div className="form-group">
                <label for="grant-amount">Grant Amount:</label>
                <input type="text" id="grant-amount" name="grant-amount" />
            </div>

            <div className="form-group">
                <button type="submit">Upload</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Upload
