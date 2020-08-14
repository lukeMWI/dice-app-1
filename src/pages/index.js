import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container'
import Header from "../components/Header";
import Die from "../components/Die";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";

export default function Home() {
  return (
  	<div class="page-wrap">
	  	<Container>
		  	<Header />
	  		<div className="dice-flex">
				  <Die sides={ 6 } />
				  <Die sides={ 8 } />
				  <Die sides={ 12 } />
				  <Die sides={ 20 } />
			  </div>
		  </Container>
	  </div>
  );
}
