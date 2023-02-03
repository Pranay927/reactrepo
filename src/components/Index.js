import React from 'react'
import './css/index.css'
import { NavLink } from 'react-router-dom';
import rs from "../assets/images/rs.jpg";
import lg from "../assets/images/lg.jpg";


function Index() {
  return (
    <>
      
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src={lg} alt="Logo" width="40" height="35" className="d-inline-block align-text-top" >
                        </img>
                    </NavLink>
                </div>

            </nav>
            <NavLink className="navbar-brand" to="#"> <strong>Research Grants Portal</strong> </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/grants">GRANTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/download">DOWNLOAD</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/upload">UPLOAD</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search this website"
                        aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <h3 id="m1">Welcome username!</h3>

    <p className="msg1"> Research Grants, the ultimate online destination for all of your research needs. Whether you're a
        student, professor, or professional researcher, Research Grants has everything you need to stay ahead of the
        curve. Our website is packed with valuable resources, including grants, scholarships, and funding
        opportunities.<br />
        With our user-friendly interface and powerful search tools, it's never been easier to find the funding you need
        to take your research to the next level. </p>
    <div className="card" style={{width: "18rem"}}>
        <img src={rs} alt="Myimg" className="card-img-top"/>
        <div className="card-body">
            <h3 className="card-title">Recent Announcements</h3>
            <p className="card-text">New grants are uploaded related to nutrition</p>
            <NavLink to="#" className="btn btn-success">Explore</NavLink>
        </div>
    </div>
    <h3 style={{textAlign: "right", color: "whitesmoke", paddingLeft:" 10px", fontFamily:"\'Ubuntu Mono\', monospace "}}>
        <strong> FAQ's......</strong>
    </h3>
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    What is the purpose of a research grant?
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Sharing of scientific findings and thus help in scientific advancement is
                    the ultimate goal of any research project. Publication of findings is the part of any research grant
                    and many funding agencies have certain restrictions on publications and presentation of the project
                    completed out of research funds.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    What are the main components of a grant?
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <strong>Basic Elements of a Grant Proposal</strong>
                    <br/>1.Who is making the application. <br/>
                    2.Need or problem being addressed. <br/>
                    3.Objectives. <br/>
                    4.Methods. <br/>
                    5.Costs.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How long does it take for a research grant to be approved?
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Each foundation has its own timeline and can vary anywhere from 30 days to
                    18 months. Meanwhile, federal and state government funding generally lists the processing times
                    publicly on their website. The chance of winning a grant can vary depending on how many people apply
                    and the caliber of your proposal.</div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Index
