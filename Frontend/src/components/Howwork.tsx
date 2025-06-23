// src/components/FeatureGrid.tsx

export function FaLogin() {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 24 24">
	<path fill="#2563eb" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"></path>
</svg>
  );
}

export function FaPlus() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 24 24">
	<path fill="#16a34a" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"></path>
</svg>
  );
}

export function FaShareAlt() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 24 24">
	<path fill="#9333ea" d="M5.5 9.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1 0-1.5h2.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V9.75C4 8.784 4.784 8 5.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25m7.03-8.53l3.25 3.25a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-1.97-1.97v10.69a.75.75 0 0 1-1.5 0V3.56L9.28 5.53a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0"></path>
</svg>
  );
}

const features = [
  {
    title: "Sign Up",
    description:
      "Create your free account in seconds and start building your second brain instantly.",
    icon: <FaLogin />,
    bgColor: "bg-blue-50", // soft blue
  },
  {
    title: "Add Content",
    description:
      "Save anything from the web - tweets, articles, videos, or your own brilliant notes.",
    icon: <FaPlus />,
    bgColor: "bg-green-50", // soft green
  },
  {
    title: "Organize & Share",
    description:
      "Tag, categorize, and share your knowledge with the world or keep it private.",
    icon: <FaShareAlt />,
    bgColor: "bg-purple-50", // soft purple
  },
 
];


export function Howwork() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-md">
          Get started with Neuronote in three simple steps and transform how you manage knowledge.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 text-center relative rounded-2xl">
            {/* Step Number Badge - Top Right */}
            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#E85A5A] text-white font-bold text-sm flex items-center justify-center shadow-sm">
              {index + 1}
            </div>

            {/* Icon */}
            <div
              className={`w-24 h-24 ${feature.bgColor} rounded-3xl shadow-xl flex justify-center items-center mb-10 mx-auto`}
            >
              {feature.icon}
            </div>

            {/* Text */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-[16px] mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
