import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Sai Kanchan Javalkar | Software Developer</title>
				<meta
					name="description"
					content="I’m a full-stack software engineer with a backend focus, building production-ready web and mobile applications and scalable systems end to end."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="overflow-x-clip">
				<Main />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
