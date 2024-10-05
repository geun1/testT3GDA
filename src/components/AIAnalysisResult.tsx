import React, { useState } from "react";
import { Zap, List, MessageSquare } from "lucide-react";
import TocItem from "@/components/TocItem";
import { TocItem as TocItemType } from "@/app/page";

interface AIAnalysisResultProps {
  isAnalyzing: boolean;
  toc: TocItemType[];
  onChatOpen: () => void;
}

const AIAnalysisResult: React.FC<AIAnalysisResultProps> = ({
  isAnalyzing,
  toc,
  onChatOpen,
}) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <div className="w-1/2 overflow-y-auto bg-gray-50 p-6">
      <h2 className="mb-4 text-2xl font-bold">AI 분석 결과</h2>
      {isAnalyzing ? (
        <div className="text-center">
          <div className="mx-auto mb-4 h-32 w-32 animate-spin rounded-full border-b-2 border-blue-500"></div>
          <p className="text-lg font-semibold">AI가 PDF를 분석 중입니다...</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <Zap className="mr-2 text-yellow-500" />
              <span>자연어 처리 중</span>
            </div>
            <div className="flex items-center">
              <List className="mr-2 text-green-500" />
              <span>목차 구조화 중</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-2 text-blue-500" />
              <span>핵심 내용 추출 중</span>
            </div>
          </div>
        </div>
      ) : toc.length > 0 ? (
        <div>
          <h3 className="mb-3 text-xl font-semibold">AI 생성 목차 (TOC)</h3>
          <ul className="space-y-2">
            {toc.map((item, index) => (
              <TocItem
                key={index}
                item={item}
                isExpanded={expandedItem === index}
                onToggle={() =>
                  setExpandedItem(expandedItem === index ? null : index)
                }
              />
            ))}
          </ul>
          <button
            onClick={onChatOpen}
            className="mt-6 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            AI와 대화하기
          </button>
        </div>
      ) : (
        <p>PDF를 업로드하면 AI 분석 결과가 여기에 표시됩니다.</p>
      )}
    </div>
  );
};

export default AIAnalysisResult;
