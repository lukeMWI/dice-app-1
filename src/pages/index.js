import React from "react";
import Header from "../components/Header";
import Die from "../components/Die";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";

export default function Home() {
  return (
  	<div className="container">
  	<Header />
  		<div className="dice-flex">
			  <Die sideCount={ 6 } />
			  <Die sideCount={ 8 } />
			  <Die sideCount={ 12 } />
			  <Die sideCount={ 20 } />
		  </div>
	  </div>
  );
}
