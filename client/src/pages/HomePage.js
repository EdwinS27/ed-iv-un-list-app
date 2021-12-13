import React from 'react';
import { Link } from 'react-router-dom';
import DealsFeature from '../components/DealsFeature';
import MainSection from '../components/MainSection';
import SingleDropdownComponent from '../components/SingleDropdownComponent';
import imgPlaceholder from '../images/looking_4_jobs.jpg'
import imgsell from '../images/looking_4_sell.jpg'
import imgTrades from '../images/looking_4_trades.jpg'
import airMax from '../images/air-max-1.png';
import phone1 from '../images/phone-1.jfif';
import phone2 from '../images/phone-2.jfif';
import imghousing from '../images/housing_bubble.jpeg'
import '../App.css';
import AuthButton from '../components/AuthButton';
import CreatePostButton from '../components/CreatePost';
function HomePage(props) {
  return (
    <div className="container-fluid">
      <Showcase />
      <TodaysDealSection />
    </div>
  );
}

export { HomePage, Footer, Menu, SubMenu};

function Menu() {
  return (
    <div className="container-fluid bg-secondary">

      <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className="container-md px-5">

          <Link className="navbar-brand" to="/">EdIvUnList</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex mx-auto ">
              <input className="col-lg-8 form-control me-2 d-none d-lg-block text-nowrap" type="search" placeholder="Search for everything here..." aria-label="Search" />
              <button className="col-lg-4 btn btn-outline-light d-none d-lg-block" type="submit">Search</button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <CreatePostButton />
              <li className="nav-item">
                <AuthButton />
                {/* <Link className="nav-link text-nowrap text-white" to="/login" >account</Link> */}
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Francais</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Spanish</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


function SubMenu() {
  return (
    <div className="container-fluid sub-menu-bock  bg-dark" >
      <nav className="d-flex justify-content-center">
        <ul className="nav nav-pills" id="bvnodslcmal" >
          <SingleDropdownComponent title="For Sales" desc="jobs" />
          <SingleDropdownComponent title="Trade in" desc="" />
          <SingleDropdownComponent title="Jobs" desc="" />
          <SingleDropdownComponent title="Housing" desc="" />
          <SingleDropdownComponent title="Forums" desc="" />
        </ul>
      </nav>
    </div>
  );
}

function Showcase() {
  return (
    <div className="container-md px-5">
      <div className="row d-flex justify-content-evenly py-4" >
        <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here" />
        <MainSection img={imghousing} title="Housing" desc="find any jobs that you want here" />
        <MainSection img={imgsell} title="For Sell" desc="find any jobs that you want here" />
        <MainSection img={imgTrades} title="trade In" desc="find any jobs that you want here" />
      </div>
    </div>
  );
}


function TodaysDealSection() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Today's Latest Posts -All from safe sellers</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <DealsFeature img={airMax} title="Nike Air Max 97" desc="Featuring the original ripple design inspired by Japanese bullet trains." />
        <DealsFeature img={phone1} title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature img={phone2} title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature img={airMax} title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature img={phone1} title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature img={phone2} title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature img={airMax} title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature img={airMax} title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
      </div>
    </div>
  );
}


function Footer() {
  return (
    <div className="container-fluid  bg-dark footerClass" >
      <footer className="  py-0">
      <nav className="  py-0">
        <ul className="nav nav-pills d-flex justify-content-center">
          <li className="nav-item"><Link to="/ReportUser" className="nav-link text-white" >Report User </Link></li>
          <li className="nav-item"><Link to="/Help" className="nav-link text-white" >Help </Link></li>
          <li className="nav-item"><Link to="/Safety" className="nav-link text-white">Safety</Link></li>
          <li className="nav-item"><Link to="/Privacy" className="nav-link text-white">Privacy</Link></li>
          <li className="nav-item "><Link to="/Feedback" className="nav-link text-white">Feedback</Link></li>
          <li className="nav-item"><Link to="/ToS" className="nav-link text-white">Terms</Link></li>
          <li className="nav-item "><Link to="/About" className="nav-link text-white">About</Link></li>
          <li className="nav-item"><Link to="/Abuse" className="nav-link text-white">Abuse</Link></li>
          <li className="nav-item"><Link to="/PersonalSafety" className ="nav-link text-white">Personal Safety Tips</Link></li> 
          {/* <li className="nav-item"><Link to="#" className="nav-link text-white">Privacy</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">FAQ</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">Safety</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">Privacy</Link></li>
          <li className="nav-item "><Link to="#" className="nav-link text-white">Feedback</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">Terms</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">Privacy</Link></li>
          <li className="nav-item "><Link to="#" className="nav-link text-white">About</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">FAQ</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">Abuse</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">Abuse</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">Legal Private Policies</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white">System Staus</Link></li>
          <li className="nav-item"><Link to="#" className="nav-link text-white" >Help </Link></li>
          <li className="nav-item"><Link to="#" className ="nav-link text-white">Personal Safety Tips</Link></li> */}
        </ul>
      </nav>
      </footer>
      <div className="container-fluid">
      <p className="text-muted text-center p-3 mb-3">&copy; Ed-Iv-Un - 2021</p> 
      </div>
    </div>
  );
}