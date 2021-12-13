import React from 'react';
import { Link } from 'react-router-dom';

function SingleDropdownComponent({title, desc}) {
  return (
      <li className="nav-item dropdown dropdown-menu-block pb-1">
          <Link className="nav-link dropdown-toggle text-white" to="#" id="mega-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">{title} </Link>
          <ul className="dropdown-menu dropdown-mega-menu-block bg-dark p-5" aria-labelledby="mega-menu">
            <h3 className="text-white">Buy and Sell from our Categories</h3>
            <div className="row" >
            <li className="col-lg-3  col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> appliances </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> arts+crafts </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}>  atv/utv/sno </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> auto parts </u> </Link> </li>  
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> aviation </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> baby+kid </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> barter </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> beauty+hlth </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> bike parts </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> bikes </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> boat parts </u> </Link> </li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>           
            <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> boats </u> </Link> </li>  
            <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> books </u> </Link> </li>
            <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> business </u> </Link> </li>
            <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> cars+trucks </u> </Link> </li>
            <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> cds/dvd/vhs </u> </Link> </li>
            <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> cell phones </u> </Link> </li>
             <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> clothes+acc </u> </Link> </li>
            <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}>  collectibles </u> </Link> </li>
             <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> computer parts </u> </Link> </li>
             <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> computers </u> </Link> </li>
             <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> electronics </u> </Link> </li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> farm+garden </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> free </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> furniture </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> garage sale </u> </Link> </li> 
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> general </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> heavy equip </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> household </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> jewelry </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> materials </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> motorcycle parts </u> </Link> </li>
                      <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> motorcycles </u> </Link> </li>                      
                </ul>
            </li>
            <li className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> music instr </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> photo+video </u> </Link> </li>
     <              li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}>  rvs+camp </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> sporting </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> tickets </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> tools </u> </Link> </li>                  
                     <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> toys+games </u> </Link> </li>
                     <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}> trailers </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}>  video gaming </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}>  wanted </u> </Link> </li>
                    <li><Link className="dropdown-item text-white bg-transparent" to="#"><u style={{textDecoration:"none"}}>  wheels+tires </u> </Link> </li>
                </ul>
            </li>
            </div>
          </ul>
      </li>
  );
}

export default SingleDropdownComponent;