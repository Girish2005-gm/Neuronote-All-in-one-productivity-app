import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { CreateContent } from "../components/CreateContent";
import { Pluseicon } from "../icons/Pluseicon";
import Sidebar from "../components/Sidebar";
import { Card } from "../components/Card";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { SharePage } from "./SharePage";

interface ContentItem {
  _id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter" | "document" | "link";
  createdAt?: string;
}

function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const [content, setContent] = useState<ContentItem[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContent(res.data.content);
    } catch (error) {
      console.error("Failed to load content", error);
    }
  };

  const deleteContent = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/api/v1/content/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchContent();
    } catch (err) {
      console.error("Failed to delete content", err);
    }
  };

  const filteredContent =
    filter === "all" ? content : content.filter((item) => item.type === filter);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar content={content} setFilter={setFilter} />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Modal for content creation */}
        <CreateContent
          open={modelOpen}
          onClose={() => setModelOpen(false)}
          onAdd={fetchContent}
        />

        {/* Top Right Controls */}
        <div className="flex flex-wrap justify-end gap-4 mb-6">
          <Button
            onClick={() => setModelOpen(true)}
            variant="primary"
            text="Add Content"
            startIcon={<Pluseicon />}
          />
          <SharePage itemCount={filteredContent.length} />

        </div>

        {/* Content Cards */}
        <div className="flex flex-wrap gap-6">
          {filteredContent.map((item) => (
            <div key={item._id} className="w-full sm:w-[calc(33.333%-1rem)]">
              <Card
                title={item.title}
                link={item.link}
                type={item.type}
                onDelete={() => deleteContent(item._id)}
                onShare={() =>
                  navigator.clipboard.writeText(
                    `${item.link}`
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



