import type React from "react";

const ContentCard: React.FC = () => {
  return (
    <div className="bg-[#E2E8F0] h-70 width-auto rounded-md p-2 shadow-md text-gray-700">
        <div>
            <h2 className="text-center bg-[#29D39C] rounded-md font-semibold py-1 text-[#242525]">Title</h2>
            <p className="pt-2 text-center text-[#242525]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde quia, nesciunt, mollitia qui et saepe quo aperiam quidem doloremque fuga.</p>
        </div>
    </div>
  );
};

export default ContentCard;
