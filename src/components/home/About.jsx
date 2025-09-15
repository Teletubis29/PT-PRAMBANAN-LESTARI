const About = () => {
  return (
    <section className="py-20 border-t border-b border-gray-400 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            <span className="text-gray-500">PT Prambanan Lestari</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed mb-6">
            Prambanan Lestari adalah perusahaan jasa konstruksi, arsitektur dan
            interior, yang berdiri dan beroperasi di Jakarta sejak tahun 2001.
            Perusahaan yang berpengalaman mengerjakan berbagai proyek bangunan
            komersial hingga residensial seperti rumah keluarga, dan mengerjakan
            interior. Selalu update mengikuti perkembangan jaman dengan harga &
            material yang modern serta berkualitas . . . 
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition ml-auto block">
            Read More
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About PT Prambanan Lestari"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
