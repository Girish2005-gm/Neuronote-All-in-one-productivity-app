import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Shareicon } from "../icons/Shareicon";
import { Crossicon } from "../icons/Crossicon";

export function SharePage({ itemCount = 0 }: { itemCount?: number }) {
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggleShare = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: !enabled },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!enabled) {
        const hash = res.data.hash || res.data.message?.replace("/share", "");
        setShareLink(`${window.location.origin}/share/${hash}`);
        setEnabled(true);
      } else {
        setShareLink(null);
        setEnabled(false);
      }
    } catch (err) {
      alert("Failed to toggle share link");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (shareLink) {
      await navigator.clipboard.writeText(shareLink);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      {/* Main Button */}
      <button
        onClick={() => setOpen(true)}
        className=" hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-xl font-medium shadow flex items-center gap-2"
      >
        <Shareicon /> Share Brain
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative shadow-lg">
            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-black">
              <Crossicon/>
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Share Your Neuronote</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-5">
              Share your entire collection of notes, documents, tweets, and videos with others.
            </p>

            {/* Share button */}
            <button
              onClick={handleToggleShare}
              className="w-full bg-[#E85A5A] hover:bg-[#d54848]  text-white font-medium px-4 py-2 rounded-xl flex justify-center items-center gap-2"
              disabled={loading}
            >
              {loading ? "Please wait..." : <><Shareicon /> Share Brain</>}
            </button>

            {/* Footer text */}
            <p className="text-center text-gray-700 text-xs mt-4">{itemCount} items will be shared</p>

            {/* Link + Copy */}
            {enabled && shareLink && (
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  readOnly
                  value={shareLink}
                  className="border border-gray-300 px-3 py-2 rounded w-full text-sm shadow-sm focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className="bg-gray-50 hover:bg-gray-200 px-3 py-2 rounded text-sm font-medium border shadow"
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
