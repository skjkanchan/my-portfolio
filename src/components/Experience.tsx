import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const FCMBExperience = {
		companyName: "Walmart Global Tech",
		role: "Software Engineer Intern",
		duration: "June 2025 - August 2025",
		activities: [
			"Developed the 1st dynamic filtering system for the Compliance Lookup and Management Portal, a platform that manages rules for handling items during returns and merchandise shipments, resulting in optimized querying of 600+ rules for Walmart associates. Deployed using Kubernetes and Docker",
			"Created a Spring Boot API endpoint with PostgreSQL and Swagger.UI to fetch rules based on service tag, and built a system in Java that dynamically filters rules across any parameter while synchronizing results with search queries.",
			"Built custom reusable UI components in React and Typescript – a state-aware filtering module and dynamic dropdown menu.",
			"Implemented and executed comprehensive unit, functional, integration, and end-to-end tests across backend services and UI components using JUnit, Spring Test, and Jest to ensure code quality and system reliability.",
		],
	};


	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={["Walmart Global Tech"]}
						tabPanel={[
							<Details key={"Walmart Global Tech"} experienceDetails={FCMBExperience} />,
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
