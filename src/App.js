//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Alert  from "./components/Alert";
import {Component, useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import N from "./components/N"
import NewNav from "./components/NewNav";
import FinalHeader from "./components/finalHeader";

export default class App extends Component {
  render() {

    return (
        <>
          <FinalHeader/>
            <div className="c-header__video">


                <video autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsinline">
                    <source src="/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4" type="video/mp4"/>
                </video>
            </div>
          <NewNav/>
          <Footer/>

        </>
    );
  }
};
