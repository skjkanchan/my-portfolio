import ReactImg from "public/assets/skills/react.png";
import NextJS from "public/assets/skills/nextjs.png";
import Javascript from "public/assets/skills/javascript.png";
import Typescript from "public/assets/skills/typescript.png";
import Node from "public/assets/skills/node.png";
import Git from "public/assets/skills/git.png";
import Docker from "public/assets/skills/docker.png";
import Tailwind from "public/assets/skills/tailwind.png";
//
import WhatsappClone from "public/assets/projects/whatsapp-web-clone/Screenshot 2026-02-10 at 4.35.56 PM.png";
import Easymunch from "public/assets/projects/easy-munch/Screenshot 2026-02-10 at 4.34.05 PM.png";
import ReactDashboard from "public/assets/projects/react-dashboard/16DC60E1-DBE8-4087-960C-D1CE2E7DA61C_4_5005_c.jpeg";
import MovieApp from "public/assets/projects/react-movie-app/movie.png";
import Hyperloop from "public/assets/projects/hyperloop/hyperloop.png";

export const skills = [
	{
		name: "React JS",
		image: ReactImg,
	},
	{
		name: "Next JS",
		image: NextJS,
	},
	{
		name: "Tailwind CSS",
		image: Tailwind,
	},
	{
		name: "Typescript",
		image: Typescript,
	},
	{
		name: "Javascript",
		image: Javascript,
	},
	{
		name: "Node JS",
		image: Node,
	},
	{
		name: "Git",
		image: Git,
	},
	{
		name: "Docker",
		image: Docker,
	},
];

export const projects = [
	{
		name: "Insyte",
		image: Hyperloop,
		projectUrl: "/projects/hyperloop",
		tech: "Next JS",
	},
	{
		name: "ToborFairy",
		image: WhatsappClone,
		projectUrl: "/projects/whatsapp-clone",
		tech: "Next JS",
	},
	{
		name: "CH4Us",
		image: Easymunch,
		projectUrl: "/projects/easy-munch",
		tech: "React JS",
	},
	{
		name: "Catch Up",
		image: ReactDashboard,
		projectUrl: "/projects/react-dashboard",
		tech: "React JS",
	},
	// {
	// 	name: "React Movie App",
	// 	image: MovieApp,
	// 	projectUrl: "/projects/movie-app",
	// 	tech: "React JS",
	// },
];

export const emConfig = {
	serviceID: "service_8hxsh8z",
	templateID: "template_zcj3nzr",
	publicID: "Thia5QgjBtrZ0NeIR",
};
