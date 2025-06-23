import { useState } from "react";
import axios from "axios";
import { Crossicon } from "../icons/Crossicon";
import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube";
import { BACKEND_URL } from "../config";
import Docicon from "../icons/Docicon";
import LinkIcon from "../icons/LinkIcon";

interface CreateContentProps {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const typeIcons: Record<string, React.ReactNode> = {
  document: <Docicon />,
  youtube: <Youtube />,
  twitter: <Twitter />,
  link: <LinkIcon />
};

export function CreateContent({ open, onClose, onAdd }: CreateContentProps) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("document");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!title || !link) {
        alert("Title and content are required");
        return;
      }

      let cleanedLink = link.trim();

      // YouTube validation
      if (type === "youtube") {
        const youtubeRegex = /^(https:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&\S*)?$/;
        if (!youtubeRegex.test(cleanedLink)) {
          alert("Please enter a valid YouTube URL.");
          return;
        }

        // ✅ Remove "&t=..." or other query params for embedding
        cleanedLink = cleanedLink.split("&")[0];
      }

      // Twitter validation
      if (type === "twitter") {
        const twitterRegex = /^https:\/\/(www\.)?(twitter\.com|x\.com)\/[^\/]+\/status\/\d+$/;
        if (!twitterRegex.test(cleanedLink)) {
          alert("Please enter a valid Twitter/X post URL.");
          return;
        }
      }

      setLoading(true);

      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        { title, link: cleanedLink, type },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setLoading(false);
      onClose();
      setTitle("");
      setLink("");
      onAdd();
    } catch (e) {
      setLoading(false);
      alert("Failed to add content");
      console.error(e);
    }
  };


  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-xl p-6 z-10 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Content</h2>
          <button onClick={onClose}><Crossicon /></button>
        </div>

        <label className="font-medium text-sm text-gray-700 mb-1 block">Content Type</label>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {Object.keys(typeIcons).map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium transition ${type === item
                ? "bg-[#fdeaea] border-[#b22d2d] text-[#b22d2d]"
                : "border-gray-300 hover:bg-gray-100 text-gray-800"
                }`}
            >
              {typeIcons[item]}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <label className="block font-medium text-sm mb-1 text-gray-700">Title</label>
          <input
            placeholder={`Enter ${type} title...`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-0 focus:border-[#b22d2d]"
          />

        </div>

        <div className="mb-4">
          {type == "document" ? (
            <div>
              <label className="block font-medium text-sm mb-1 text-gray-700">Content</label>

              <textarea
                placeholder="Enter your content..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-sm h-24 resize-none focus:outline-none focus:ring-0 focus:border-[#b22d2d]"
              />

            </div>) : (<div>
              <label className="block font-medium text-sm mb-1 text-gray-700">URL</label>
              <input
                placeholder="Enter your link..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-0 focus:border-[#b22d2d]"
              />

            </div>)}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-[#e85a5a] text-white rounded-md text-sm font-semibold hover:bg-[#d94848] disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Content"}
          </button>
        </div>
      </div>
    </div>
  );
}
