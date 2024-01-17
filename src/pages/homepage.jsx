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



const projects = [
	{
		title: "Bonsai Management",
		description: "SAAS platform for condo management.",
		url: "https://app.gestionbonsai.com",
		img: INFO.main.bonsai,
		time: "2022-2024",
		tech: [
			{name: "react", icon: INFO.technology.react},
			{name: "MUI", icon: INFO.technology.materialui},
			{name: "redux", icon: INFO.technology.redux}
		]
	},
	{
		title: "Pro-Plex",
		description: "Quebec Lease signing platform",
		url: "https://app.pro-plex.com",
		img: INFO.main.proplex,
		time: "2023-Present",
		tech: [
			{name:"react", icon: INFO.technology.react},
			{name: "MUI", icon: INFO.technology.materialui},
			{name: "redux", icon: INFO.technology.redux}
		]
	},
	{
		title: "BitRivals",
		description: "Platform to earn $Rival rewards. Win rewards & raffles by playing games.",
		url: "https://token.bitrivals.app/",
		img: INFO.main.bitrival,
		time: "2021-2022",
		tech: [
			{name: "react", icon: INFO.technology.react},
			{name: "tailwindcss", icon: INFO.technology.tailwindcss},
			{name: "axios", icon: INFO.technology.axios}
		]
	},
	{
		title: "Embr",
		description: "Token empowering payment gateways",
		url: "https://www.embr.org/",
		img: INFO.main.embr,
		time: "2021-2022",
		tech: [
			{name:"Nextjs", icon: INFO.technology.nextjs},
			{name:"tailwindcss", icon: INFO.technology.tailwindcss},
		]
	}
]

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
			
			<div className="page-content" style={{minHeight:"100vh", display:"flex", alignContent:"center", alignItems:"center"}}>
				
				<div className="content-wrapper">
				

					<div className="homepage-container">
					<div style={{display:"flex", justifyContent:"center", marginTop:"10em", flexDirection:"column", alignItems:"center"}}>
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
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<div style={{backgroundColor:"#919191", width:"100%", margin:"2em 0 2px 0", height:"0.009em"}}/>
						<div className="myProjects">
							<h1 style={{color:"white", marginTop:"3em", marginBottom:"2em", textAlign:"center"}}>My Contributions</h1>
							<div style={{
								display:"flex",
								flexWrap:"wrap",
								gap:"1em",
								
								justifyContent:"center"
							}}>
							{projects.map((project, index) => <div onClick={()=> window.open(project.url)} id={index} className={"projectCard"} style={{ backgroundColor:"#262c28", borderRadius:30,  cursor:"pointer" }}>
									<img src={project.img ?? INFO.main.logo} width={"100%"} height={"200px"} style={{objectFit:"cover", objectPosition:"top", borderTopLeftRadius:30, borderTopRightRadius:30}}/>
									<div style={{padding:"20px", marginTop:"1em", marginBottom:"2em"}}>
									<h2 style={{color:"white", lineHeight:0}}>{project.title}</h2>
									<h4 style={{color:"white"}}>{project.description}</h4>
									<p style={{color:"#ffffff"}}>{project.time}</p>
									<div style={{display:"flex", alignContent:"flex-end", }}>
									<div style={{display:"flex", flexDirection:"row", gap:5, alignContent:"flex-end"}}>
									{
											project.tech.map((tech, index) => <img key={`${index}img`} width={25} height={25} style={{objectFit:"fill"}} src={tech.icon}/>)
									}
									</div>
									</div>
									
									
									</div>
									
							</div>)}
							</div>
							<div style={{display:"flex", justifyContent:"center", marginTop:"5em", marginBottom:"1em"}}>
								<p style={{color:"gray", fontSize:"15px"}}>@ {new Date().getFullYear()}</p>
							</div>
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
