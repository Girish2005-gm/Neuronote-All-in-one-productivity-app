import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/Card";

interface SharedContent {
  _id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter" | "document" | "link";
}

export default function PublicBrain() {
  const { shareId } = useParams();
  const [content, setContent] = useState<SharedContent[]>([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSharedContent = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/brain/${shareId}`);
        setContent(res.data.content);
        setUsername(res.data.username);
      } catch (err) {
        alert("Invalid or expired link");
      } finally {
        setLoading(false);
      }
    };

    fetchSharedContent();
  }, [shareId]);

  if (loading) {
    return <div className="p-10 text-xl text-center">Loading shared brain...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 text-[#E85A5A]">{username}'s <span className="text-gray-800">Neuronote</span></h1>
        <p className="text-gray-600 text-sm">
          A public view of notes, videos, tweets, and documents shared from Second Brain.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 text-[#e85a5adf] hover:underline text-sm font-semibold"
        >
          Back to Home
        </Link>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto">
        {content.length === 0 ? (
          <div className="text-gray-600 text-center text-lg mt-20">
            No content has been shared yet.
          </div>
        ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {content.map((item) => (
              <Card
                key={item._id}
                title={item.title}
                link={item.link}
                type={item.type}
                onDelete={() => {}}
                onShare={() => {}}
                readOnly
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
