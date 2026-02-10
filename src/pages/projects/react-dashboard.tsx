import DashboardImg from "public/assets/projects/react-dashboard/dashboard.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const ReactDashboard = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | React Dashboard Project</title>
				<meta
					name="description"
					content="A simple frontend admin dashboard application built using syncfusion UI components"
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="w-full overflow-x-hidden">
				<div className="w-screen h-[50vh] relative">
					<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
					<Image
						className="absolute z-1"
						layout="fill"
						objectFit="cover"
						src={DashboardImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">Catch Up</h2>
						<h3>Flutter SDK / Dart / FFmpeg / Firebase / Git / Github / Figma </h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							Created a mobile application with a team of 4 through the software development lifecycle to break the barrier between reality
and fiction in social media and enhance communication among friends through group vlog-style movies.
						</p>
						<p className="text-lg mt-2">
							Integrated Firebase authentication, storage (1 GB), and real-time database with a Flutter SDK frontend and Dart
backend to support secure video uploads, daily video recording, group communication, and user authentication
						</p>
						<p className="text-lg mt-2">
							Integrated FFmpeg for multi-video processing/concatenation with robust error handling and testing to ensure system reliability.
						</p>
						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
							<li>User Authentication</li>
							<li>Video Upload</li>
							<li>Video Recording</li>
							<li>Group Formation and Communication</li>
							<li>Video Concatenation</li>
							<li>Daily Prompts</li>
							<li>Video Release</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* HERE */}
							<a
								href="https://github.com/acm-projects/Catch-Up"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github</button>
							</a>
							<a
								href="https://www.youtube.com/watch?v=sY_RsbvHzk4&t=2889s"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Live Demo</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Flutter SDK
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Dart
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> FFmpeg
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Firebase
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Git
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Github
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Figma
									</p>
								</div>
							</div>
						</div>
					</div>
					<Link href="/#projects">
						<p className="underline cursor-pointer text-lg hover:text-primary">Back</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ReactDashboard;
