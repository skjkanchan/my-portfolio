import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "public/assets/SaiKanchan_Javalkar_Headshot.jpg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
					<p className="uppercase text-xl tracking-widest text-primary">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
						I’m a double major in Computer Science and Cognitive Science at the University of Texas at Dallas, where I approach learning through hands-on work, collaboration, and tackling challenging problems. Outside the classroom, I stay involved in student organizations and leadership roles that allow me to learn alongside others, take initiative, and apply what I’m learning in real-world settings.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						I focus on building end-to-end applications that connect mobile-responsive interfaces with reliable backend systems and APIs. I enjoy working across the stack and learning new technologies as needed, recognizing that there are often multiple ways to solve a problem. Rather than centering on a single language or framework, I prioritize choosing the right tools for the task and building solutions that are maintainable, scalable, and effective in real-world use.
					</p>
					<div className="w-[50%]">
						<Link href="/#projects">
							<p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
								Check out some of my latest projects.
							</p>
						</Link>
					</div>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<div data-aos="fade-up" data-aos-duration="1000">
						<Image src={AboutImg} className="rounded-xl object-cover" alt="/" loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
