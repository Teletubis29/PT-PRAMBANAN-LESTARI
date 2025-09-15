import React from "react";

export default function InfoSection() {
	return (
		<section className="bg-gray-600 py-12 md:py-20">
			<div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
				{/* Kiri: Teks */}
				<div className="flex-1 text-white">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">Anda harus tahu tentang kami</h2>
					<ul className="space-y-2 mb-4 text-base md:text-lg text-gray-100">
						<li>Kami telah mengelola lebih dari 100 properti di berbagai lokasi strategis.</li>
						<li>+50 pelanggan telah melakukan pembelian dan puas dengan layanan kami.</li>
						<li>+50 mitra telah mempercayakan proyek mereka kepada kami.</li>
						<li>Kami terus berkembang, membangun mitra property, dan menyediakan properti bernilai tinggi</li>
					</ul>
					<p className="italic text-gray-200 text-sm md:text-base">Saatnya Anda bergabung dengan kami dan menjadi bagian dari kesuksesan ini!</p>
				</div>

				{/* Kanan: Statistik */}
				<div className="flex-1 flex flex-row gap-4 md:gap-6 justify-center w-full">
					{/* Card 1 */}
					<div className="flex flex-col items-center justify-center rounded-2xl bg-yellow-100 w-40 h-40 md:w-48 md:h-48 p-4">
						<span className="text-5xl md:text-6xl font-bold text-gray-700 mb-2">100+</span>
						<span className="text-gray-700 text-base md:text-lg text-center">selected buildings</span>
					</div>
					{/* Card 2 */}
					<div className="flex flex-col items-center justify-center rounded-2xl bg-yellow-200 w-40 h-40 md:w-48 md:h-48 p-4">
						<span className="text-5xl md:text-6xl font-bold text-gray-700 mb-2">50+</span>
						<span className="text-gray-700 text-base md:text-lg text-center">clients have purchased</span>
					</div>
					{/* Card 3 */}
					<div className="flex flex-col items-center justify-center rounded-2xl bg-white w-40 h-40 md:w-48 md:h-48 p-4">
						<span className="text-5xl md:text-6xl font-bold text-gray-700 mb-2">40+</span>
						<span className="text-gray-700 text-base md:text-lg text-center">clients have Partnership</span>
					</div>
				</div>
			</div>
		</section>
	);
}
