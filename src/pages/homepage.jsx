import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(160);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	
	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			
			<div className="page-content" style={{height:"100vh", display:"flex", alignContent:"center", alignItems:"center"}}>
				
				<div className="content-wrapper">
				

					<div className="homepage-container">
					<div style={{display:"flex", justifyContent:"center", marginTop:"2rm", flexDirection:"column", alignItems:"center"}}>
					<Logo width={90} />
					<h1 style={{color:"white"}}>Hi! I'm Liam Bigras 👋</h1>
					<h2 style={{maxWidth:"500px", textAlign:"center", color:"white", fontWeight:"400", lineHeight:"2em", fontSize:"1.7em"}}>I help architect & develop SAAS & Mobile applications for the web</h2>
					
				</div>
						

						<div className="homepage-socials">
							
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<div style={{backgroundColor:"#919191", width:"100%", margin:"2em 0 2px 0", height:"0.009em"}}/>
						<div className="myProjects">
							
						</div>
						{/*<div className="homepage-projects">
							<AllProjects />
	</div>*/}

						

						
					</div>
				{/*	<div className="page-footer">
							<Footer />
</div>*/}
				</div>
				
			</div>
			
		</React.Fragment>
	);
};

export default Homepage;
