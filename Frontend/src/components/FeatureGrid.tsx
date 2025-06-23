// src/components/FeatureGrid.tsx
import { motion } from "framer-motion";

export function FaSave() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 448 512">
      <path
        fill="#2563eb"
        d="m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64s28.654-64 64-64s64 28.654 64 64s-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A12 12 0 0 1 320 111.48"
      />
    </svg>
  );
}

export function FaTags() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
      <path
        fill="#16a34a"
        d="M10.238 4.827a3 3 0 0 1 2.122.878l6.485 6.486a3 3 0 0 1 0 4.242l-4.243 4.243a3 3 0 0 1-4.242 0l-6.486-6.485a3 3 0 0 1-.878-2.122V7.327a2.5 2.5 0 0 1 2.5-2.5zm0 2H5.496a.5.5 0 0 0-.5.5v4.742a1 1 0 0 0 .292.707l6.486 6.486a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 0 0 0-1.414L10.945 7.12a1 1 0 0 0-.707-.293M7.531 9.362a1.5 1.5 0 1 1 2.121 2.122a1.5 1.5 0 0 1-2.121-2.122M11.652 2a3 3 0 0 1 2.122.878l7.192 7.193a1 1 0 0 1-1.414 1.414L12.36 4.29a1 1 0 0 0-.708-.29H7a1 1 0 0 1 0-2z"
      />
    </svg>
  );
}

export function FaShareAlt() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
      <g fill="none" stroke="#9333ea" strokeWidth={1.5}>
        <path d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
        <path strokeLinecap="round" d="M14 6.5L9 10m5 7.5L9 14" />
        <path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
      </g>
    </svg>
  );
}

export function FaThLarge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
      <path
        fill="#d53f3f"
        d="M13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-6q-.425 0-.712-.288T13 8M3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13H4q-.425 0-.712-.288T3 12m10 8v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20"
      />
    </svg>
  );
}

const features = [
  {
    title: "Save Anything",
    description:
      "Capture tweets, articles, videos, and any content from the web with a single click.",
    icon: <FaSave />,
    bgColor: "bg-blue-50", // soft blue
  },
  {
    title: "Tag & Categorize",
    description:
      "Organize your content with smart tags and categories for instant retrieval.",
    icon: <FaTags />,
    bgColor: "bg-green-50", // soft green
  },
  {
    title: "One-Click Share",
    description:
      "Share your curated collections with teammates or make them public.",
    icon: <FaShareAlt />,
    bgColor: "bg-purple-50", // soft purple
  },
  {
    title: "Clean Dashboard",
    description:
      "Beautiful, intuitive interface that makes managing your knowledge effortless.",
    icon: <FaThLarge />,
    bgColor: "bg-red-50", // soft red
  },
];


function FeatureGrid() {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Everything you need to organize your knowledge
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg p-2">
          Powerful features designed to make capturing and organizing information
          effortless and enjoyable.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow hover:shadow-lg transition text-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className={`w-14 h-14 ${feature.bgColor} rounded-xl  flex justify-center items-center mb-4`}
            >
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-[15px] mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeatureGrid;