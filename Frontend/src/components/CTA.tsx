import { useNavigate } from "react-router-dom";

const CTA = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#E85A5A] text-white text-center py-20 relative overflow-hidden h-2/3 flex justify-center items-center">
            {/* Optional subtle background shapes */}
            <div className="absolute  bottom-20 left-28 w-8 h-8 bg-white opacity-20 rounded-lg rotate-45"></div>
            <div className="absolute bottom-8 right-10 w-10 h-10 bg-white opacity-10 rounded-full"></div>

            <div className="max-w-3xl mx-auto px-6 z-10 relative">
                <div className="flex justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 24 24">
                        <path fill="#FFFFFF" d="M9 4a2 2 0 0 1 2 2v6.827c-.894-.69-2.034-1.097-3.336-1.313l-.328 1.972c1.38.23 2.261.667 2.804 1.255c.53.574.86 1.426.86 2.759a2.5 2.5 0 0 1-5 0v-.35c.43.143.876.26 1.336.336l.328-1.972c-.743-.124-1.489-.4-2.235-.754A2.5 2.5 0 0 1 4 12.5c0-.835.208-1.492.559-1.974c.345-.476.883-.856 1.684-1.056L7 9.28V6a2 2 0 0 1 2-2m3-.646A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5a4.49 4.49 0 0 0 2 3.742V17.5a4.5 4.5 0 0 0 8 2.829a4.5 4.5 0 0 0 8-2.829v-1.258a4.49 4.49 0 0 0 2-3.742c0-1.165-.292-2.258-.941-3.15c-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-7-2.646m6 13.795v.351a2.5 2.5 0 0 1-5 0c0-1.333.33-2.185.86-2.76c.543-.587 1.424-1.024 2.804-1.254l-.328-1.972c-1.302.216-2.442.623-3.336 1.313V6a2 2 0 1 1 4 0v3.28l.758.19c.8.2 1.338.58 1.683 1.056c.351.482.559 1.14.559 1.974c0 .999-.582 1.857-1.43 2.26c-.745.354-1.492.63-2.234.754l.328 1.972A9 9 0 0 0 18 17.149" />
                    </svg>
                </div>

                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                    Ready to build your second brain?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of knowledge workers who trust Neuronote to organize their digital life and boost their productivity.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => navigate("/signup")}
                        className="bg-white text-[#E85A5A] font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 transition"
                    >
                        Get Started Now →
                    </button>
                    <button
                        onClick={() => navigate("/features")}
                        className="border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-[#E85A5A] transition"
                    >
                        Learn More
                    </button>
                </div>

                <p className="text-sm mt-6 opacity-80">
                    No credit card required • Free forever plan available • Setup in 2 minutes
                </p>
            </div>
        </section>
    );
};

export default CTA;
