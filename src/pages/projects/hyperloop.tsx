import DashboardImg from "public/assets/projects/hyperloop/hyp3.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const Hyperloop = () => {
	return (
		<>
			<Head>
				<title>Nosarumen | Insyte</title>
				<meta
					name="description"
					content="HyperloopFT is a high-frequency trading platform built with Next JS, offering automated trades, a guaranteed 84% annual ROI, zero-risk investing, and USDT (TRC20) payouts."
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
						<h2 className="py-2">Insyte</h2>
						<h3>React JS/ Next JS / Typescript / Flask / Python / AWS Lambda / AWS DynamoDB / Claude Anthropic LLM / Open AI / LangGraph </h3>
					</div>
				</div>

				<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
					<div className="col-span-4">
						<p className="text-lg">Project</p>
						<h2>Overview</h2>
						<p className="text-lg mt-2">
						Insyte is an intelligent real-estate analysis platform powered by Agentic-AI that enables property managers and clients to explore commercial properties, automate insights, and make data-driven decisions. The system blends geospatial search, document intelligence, and conversational AI into a single interface, providing instant, context-aware answers about properties, locations, and investment factors. It features agentic AI workflows for natural-language queries, geolocation parsing, and map-based property visualization. Users can interact with an AI assistant powered by OpenAI and Anthropic models to analyze documents, compare sites, and retrieve information in real time, ensuring faster and more accurate decision-making.						</p>
						<p className="text-lg mt-4">🌟 key features:</p>
						<ol className="text-lg mt-2">
                            <li>Agentic-AI Powered Property Search</li>
                            <li>Interactive Map Visualization for Queried Properties</li>
                            <li>AI Chatbot for Real-Time Property and Real-Estate Insights</li>
                            <li>Document Analysis and Contextual Information Retrieval</li>
                            <li>Agent-AI Powered Graph Visualization from Queries</li>
                        </ol>
						<div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-4 ">
							{/* <a
								href="https://hyperloopft.com"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Live Site</button>
							</a> */}
							<a
								href="https://hyperloopft.com/resources?tab=user_guide"
								target="_blank"
								rel="noreferrer"
							>
								<button className="px-8 py-2 tracking-widest">Project Demo</button>
							</a>
						</div>
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div className="shadow-xl shadow-gray-400 rounded-xl py-4 ">
							<div className="p-2 text-md">
								<p className="text-center font-bold pb-2">Technologies</p>
								<div className="grid grid-cols-3 md:grid-cols-1 ">
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> React JS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Next JS
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Typescript
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Flask
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Python
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> AWS Lambda
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> AWS DynamoDB
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> Claude Anthropic LLM
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> OpenAI
									</p>
									<p className="text-gray-600 py-2 flex items-center">
										<RiRadioButtonFill className="pr-1" /> LangGraph
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

export default Hyperloop;
