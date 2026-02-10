import EasyMunchImg from "public/assets/projects/easy-munch/munch.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const EasyMunch = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | EasyMunch Project</title>
				<meta
					name="description"
					content="Welcome to our one-of-a-kind food delivery service website, crafted with love and expertise using the powerful React framework."
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
						src={EasyMunchImg}
						alt="/"
						priority
					/>
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">CH4US Methane Leak Detection Tool</h2>
						<h3>Javascript / Python / HTML / CSS / JSCharting / Pandas </h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
							Won 2nd Place at HackUTD (2nd largest hackathon in US, 1st largest in TX, 1000+ participants) for EOG Resources.

						</p>
						<p className="text-lg mt-2">
							Built a leak detection tool in a team of 4 designed to track and identify methane leakage zones using data from 18 sensors at a given facility (ch4us.co).

						</p>
						<p className="text-lg mt-2">
							Learned and applied Javascript and JSCharting (1st time) within 24 hours, developing a professional tool to increase environmental monitoring efforts.

						</p>

						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
							<li>Methane Concentration Monitoring</li>
							<li>Actual vs. Predicted Emissions Visualization</li>
							<li>Wind-Based Methane Dispersion Mapping</li>
							<li>Gaussian Plume Model Integration</li>
							<li>Visual Data Analysis Dashboard</li>
						</ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* HERE */}
							<a
								href="hhttps://github.com/hacksolutions/hacksolutions.github.io"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Github</button>
							</a>
							<a href="https://devpost.com/software/ch4-us" target="_blank" rel="noreferrer">
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
										<RiRadioButtonFill className="pr-1" /> Javascript
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Python
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> HTML
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> CSS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> JSCharting
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Pandas
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

export default EasyMunch;
