const ExperienceSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      {/* Breadcrumb (kiri) */}
      <div className="mb-11">
        <p className="text-gray-400 text-2xl mb-10 pl-2 font-bold">
          Kategori / Our Experience
        </p>
      </div>

      {/* Title Button Style (center) */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold my-12 text-slate-800">
          Galeri <span className="text-orange-500">Properti</span>
        </h1>
      </div>

      {/* Content (center) */}
      <div className="space-y-5 text-black leading-relaxed text-center mt-6">
        <p className="text-black">
          Kami tidak hanya membangun dan menjual bangunan; kami juga menciptakan
          ruang yang estetis, optimal secara fungsional, dan tahan lama. Dari
          hunian pribadi yang nyaman dan bangunan komersial hingga pusat bisnis
          yang megah, setiap detail dirancang untuk memenuhi standar kualitas
          tertinggi.
        </p>

        <p className="text-black">
          Setiap foto menunjukkan proses yang kami jalankan dengan penuh
          tanggung jawab, mulai dari konsep desain dan pemilihan material hingga
          pengerjaan yang presisi dan penyelesaian akhir yang sempurna.
        </p>

        <p className="text-black">
          Kepercayaan yang diberikan kepada klien kami adalah motivasi utama
          kami untuk terus berinovasi dan profesionalisme di setiap tahap
          proyek.
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
