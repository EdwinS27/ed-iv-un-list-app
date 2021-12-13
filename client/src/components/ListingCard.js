import React from 'react';
import { Link } from 'react-router-dom';
import listPict from '../images/demo.jpg';
import {FiShare, FiHeart} from 'react-icons/fi';
import {VscLocation} from 'react-icons/vsc';

function ListingCard(props) {
  return (
    <div className="container-fluid ">
        <div className=" container-sm p-5" >
            <div className="row p-2 border rounded-3 bg-light">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-2  ">
                <Link className="" href="#" > <img class="img-thumbnail float-start " src={listPict} alt="" /> </Link>
                </div>
                <div className="col-lg-9 col-xl-10 col-md-8  col-xs-12">
                    <div className="row ">
                        <h2 className="mb-4"><Link href="#" className="text-secondary ">Apple iPhone 11 Pro - 512 GB - Silver - Unlocked - CDMA/GSM</Link></h2>
                        <p> <span className="text-primary">$350.00</span>  &bull; This is from iva charles  <Link href="#" className="text-black"><VscLocation /> Staten Island, NY</Link></p>
                        <p  className="d-none d-lg-block" >A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in ...</p>
                        <p> <h6 className="text-muted"> Avril 20, 2021  &bull; <Link href="#"><FiShare /></Link> &bull; <Link href="#"><FiHeart /></Link></h6> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ListingCard;