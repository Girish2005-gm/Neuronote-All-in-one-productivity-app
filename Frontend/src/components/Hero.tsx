import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-16 sm:py-24 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto z-10">
        <div className="inline-block mb-5 sm:mb-6 bg-[#ffd6d648] text-[#E85A5A] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm border border-[#E85A5A]">
          🚀 Your Second Brain Awaits
        </div>

        <h1 className="text-3xl sm:text-6xl font-bold text-gray-800 leading-snug sm:leading-tight mb-5 sm:mb-6">
          Be productive, Be more with <span className="text-[#E85A5A]">Brainly</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
          We are Brainly – All in One Knowledge App. Not only a productivity app — we help you think, save, and share smarter.
        </p>

        {/* Button Stack on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#E85A5A] font-semibold text-white px-6 py-2 rounded-xl text-base hover:bg-[#d54848] transition flex items-center justify-center gap-1"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
              <path fill="#fff" fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={() => navigate("/features")}
            className="border font-semibold px-6 py-2 rounded-xl text-base hover:bg-[#e0e0e043] transition flex items-center justify-center gap-1"
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
              <path fill="#000" fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating shapes hidden on mobile */}
      <div className="hidden sm:block absolute top-16 left-36 w-16 h-16 bg-yellow-100 rounded-full" />
      <div className="hidden sm:block absolute top-32 right-40 w-12 h-12 bg-blue-100 rounded-md rotate-45" />
    </section>
  );
}

export default Hero;
