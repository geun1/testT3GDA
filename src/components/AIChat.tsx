import React from "react";
import { X } from "lucide-react";

interface AIChatProps {
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-2/3 w-2/3 rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h3 className="mb-4 text-xl font-bold">AI 채팅</h3>
        <div className="mb-4 h-4/5 overflow-y-auto rounded border border-gray-200 p-4">
          {/* 채팅 메시지들이 여기에 표시됩니다 */}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            className="flex-grow rounded-l border border-gray-300 px-4 py-2"
          />
          <button className="rounded-r bg-blue-500 px-4 py-2 text-white">
            전송
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
