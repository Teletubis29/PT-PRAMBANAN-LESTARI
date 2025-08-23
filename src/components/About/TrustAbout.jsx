import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

export default function TrustAbout() {
	return (
		<section className="bg-gray-200 py-10">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-0">
				{/* Kiri: Video Dummy */}
				<div className="flex justify-center">
					<div className="bg-white border border-gray-400 w-full max-w-xl aspect-video flex items-center justify-center">
						<FaPlayCircle size={90} className="text-gray-400" />
					</div>
				</div>
				{/* Kanan: Judul, deskripsi, checklist */}
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Percayakan<br />Kami Sekarang</h2>
					<div className="font-semibold text-gray-800 mb-4 leading-tight">
						mengapa memilih kami untuk<br />Gedung, rumah dan jasa<br />layanan kebutuhan anda?
					</div>
					<div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6">
						{[...Array(2)].map((_, col) => (
							<div key={col} className="flex flex-col gap-3">
								<div className="flex items-center gap-2">
									<FaCheckCircle className="text-gray-700" />
									<span className="text-gray-700">Waktu Fleksibel</span>
								</div>
								<div className="flex items-center gap-2">
									<FaCheckCircle className="text-gray-700" />
									<span className="text-gray-700">Pekerjaan Sempurna</span>
								</div>
								<div className="flex items-center gap-2">
									<FaCheckCircle className="text-gray-700" />
									<span className="text-gray-700">Prioritas Klien</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
