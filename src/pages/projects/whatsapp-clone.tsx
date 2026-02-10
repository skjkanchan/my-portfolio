import WhatsappImg from "public/assets/projects/whatsapp-web-clone/whatsapp.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const WhatsappClone = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | CH4US </title>
				<meta
					name="description"
					content="This is a clone of the whatsapp web application featuring some of its amazing functionalities such as:
					1. User Authentication.
					2. Real-time Messaging.
					3. Voice / Audio Messaging
					4. Voice / Video Call.
					5. File Sharing.
					6. Responsive Design.
					7. User Online / Offline Status.
					8. AI Chat Bot."
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
						src={WhatsappImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">ToborFairy Schedueler </h2>
						<h3>HTML / CSS / JS / Google Calendar API / Google Chrome Extension </h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							Developed a Google Chrome Extension using Javascript, HTML/CSS, and the Google Calendar API, that recommends
events based on Google Calendar availability and seamlessly adds those events to the back to your calendar.
						</p>
						<p className="text-lg mt-2">
							Implemented HTML/CSS (for 1st time) within 24 hours, creating a fully functional and responsive frontend for an extension to
improve campus engagement and career success for 90.1% of engineering students.
						</p>
						<p className="text-lg mt-2">
							Won 1st place overall and 3rd place for L3Harris Challenge at WEHack (Dallas’ Largest Inclusive Hackathon).
						</p>
						{/* <p className="text-lg mt-2">
							The frontend is hosted on vercel and the backend using sockets is hosted on railway.
						</p> */}
						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
							<li>Google Chrome Extension</li>
							<li>Real-time Event Tracking for Google Calendar</li>
							<li>Event Reccomendation based on Google Calendar Availability</li>
							<li>Event Adding to Calendar</li>
							<li>Manage and Explore Upcoming Events</li>
							<li>Responsive Design</li>
							{/* <li>
								AI Chat Bot using Eden AI-powered assistant ( utilizes OpenAI’s GPT-3 model )
							</li> */}
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* HERE */}
							<a
								href="https://github.com/realkarinab/ToborFairy"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github</button>
							</a>
							{/* <a
								href="https://whatsapp-web-clone-client.vercel.app"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a> */}
							<a
								href="https://devpost.com/software/toborfairy"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Video Demo</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> HTML
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> CSS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Javascript
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Google Calendar API
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Google Chrome Extension
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

export default WhatsappClone;
