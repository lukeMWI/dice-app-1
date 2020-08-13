import React from "react";
import Header from "../components/Header";
import Die from "../components/Die-fc";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";

export default function Home() {
  return (
  	<div className="container">
  	<Header />
  		<div className="dice-flex">
			  <Die sides={ 6 } />
			  <Die sides={ 8 } />
			  <Die sides={ 12 } />
			  <Die sides={ 20 } />
		  </div>
	  </div>
  );
}
