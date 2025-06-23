import { useEffect, useState } from "react";
import { Youtube } from "../icons/Youtube";
import { Twitter } from "../icons/Twitter";
import { Shareicon } from "../icons/Shareicon";
import Docicon from "../icons/Docicon";
import LinkIcon from "../icons/LinkIcon";
import Deleteicon from "../icons/Deleteicon";

interface CardsProps {
  title: string;
  link: string;
  type: "youtube" | "twitter" | "document" | "link";
  onDelete?: () => void;
  onShare?: () => void;
  createdAt?: string;
  readOnly?: boolean;
}

export function Card({
  title,
  link,
  type,
  onDelete,
  onShare,
  readOnly,
}: CardsProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (type === "twitter" && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
  }, [link, type]);

  const renderIcon = () => {
    if (type === "youtube") return <Youtube />;
    if (type === "twitter") return <Twitter />;
    if (type === "document") return <Docicon />;
    if (type === "link") return <LinkIcon />;
    return null;
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const renderEmbed = () => {
    if (type === "youtube") {
      const embedUrl = getYouTubeEmbedUrl(link);
      if (!embedUrl) {
        return <p className="text-red-500 text-sm">Invalid YouTube URL</p>;
      }
      return (
        <iframe
          width="100%"
          height="185"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      );
    }

    if (type === "twitter") {
      const tweetLink = link.replace("x.com", "twitter.com");
      return (
        <blockquote className="twitter-tweet">
          <a href={tweetLink}></a>
        </blockquote>
      );
    }

    if (type === "link") {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e85a5acb] text-xs hover:underline mt-2 font-semibold"
        >
          Visit Link
        </a>
      );
    }

    return null;
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 w-full max-w-sm p-4 transition-all duration-200 ease-in-out hover:shadow-xl flex flex-col justify-between break-words group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          {renderIcon()}
          <span className="font-semibold text-sm text-gray-800 capitalize">
            {type}
          </span>
        </div>

        {/* Buttons on hover */}
        {!readOnly && (
          <div
            className={`flex items-center gap-2 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <button onClick={onShare} title="Share">
              <Shareicon />
            </button>
            <button onClick={onDelete} title="Delete">
              <Deleteicon />
            </button>
          </div>
        )}
      </div>

      <h2 className="font-bold text-sm text-gray-700 break-words mb-1">
        {title}
      </h2>
      <p className="text-gray-600 text-xs break-words mb-2 whitespace-pre-wrap">
        {link}
      </p>

      {renderEmbed()}
    </div>
  );
}
