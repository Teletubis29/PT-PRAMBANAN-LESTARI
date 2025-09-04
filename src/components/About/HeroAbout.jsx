import React, { useEffect, useState } from "react";

export default function HeroAbout() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => setAnimate(true), 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<section
			className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-start bg-cover bg-center"
			style={{
				backgroundImage:
					'url("https://images.pexels.com/photos/981916/pexels-photo-981916.jpeg")',
			}}
		>
			{/* Overlay putih transparan */}
			<div className="absolute inset-0 bg-white bg-opacity-70" />
			{/* Konten */}
					<div className="relative z-10 max-w-2xl ml-8 md:ml-16 p-6 rounded-lg">
						<h1
							className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-700 mb-4 leading-tight transition-all duration-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}
						>
							Memaksimalkan Aspek Visual & Fungsional Arsitektur
						</h1>
				{/* <p className="text-gray-700 text-base md:text-lg font-medium">
					Prambanan Lestari adalah perusahaan jasa konstruksi, konsultan arsitektur dan desain interior, yang berdiri dan mulai beroperasi di Jakarta sejak tahun 1997. Perusahaan yang berpengalaman mengerjakan berbagai proyek bangunan komersial hingga residensial seperti
				</p> */}
			</div>
		</section>
	);
}
