import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron"
import Card from "./Card";
import Footer from "./Footer";
//include images into your bundle
//create your first component
const Home = () => {
	return (
	<div className="container-fluid p-0 m-0 flex-column bg-white">	
		<div className="row pb-2 ">
			<Navbar  />
		</div>
		<div className="row p-5  justify-content-center ">
			<Jumbotron className="jumbotron  col-12 col-md-12 col-lg-4" />
		</div>
		<div className="row p-2 d-flex justify-content-center text-center ">
            <Card className="col-sm-12  col-md-12  col-lg-3  col-xl-3" />
            <Card className="col-sm-12  col-md-12  col-lg-3  col-xl-3" />
            <Card className="col-sm-12  col-md-12  col-lg-3  col-xl-3" />
            <Card className="col-sm-12  col-md-12  col-lg-3  col-xl-3" />
        </div>
		<div className="row  justify-content-center">
			<Footer className="Footer  col-12 col-md-12 col-lg-12"/>
		</div>

	</div>
	);
};

export default Home;