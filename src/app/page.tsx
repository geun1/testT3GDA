"use client";

import React, { useState } from "react";
import FileUpload from "@/components/FileUpload";
import AIAnalysisResult from "@/components/AIAnalysisResult";
import AIChat from "@/components/AIChat";
import useEscapeKey from "@/hooks/useEscapeKey";

export interface TocItem {
  title: string;
  content: string;
}

const AIAnalysisApp = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleFileUpload = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setToc([
        {
          title: "1. 사업 개요",
          content:
            "본 사업은 중소기업의 디지털 전환을 지원하기 위한 정부 주도 프로그램입니다. 4차 산업혁명 시대에 맞춰 기업의 경쟁력을 높이고 새로운 비즈니스 모델을 창출하는 것을 목표로 합니다.",
        },
        {
          title: "2. 지원 대상",
          content:
            "중소기업기본법 제2조에 따른 중소기업 중 제조업, IT서비스업 등을 영위하는 기업이 대상입니다. 단, 사업 개시일로부터 1년 이상 경과한 기업에 한합니다.",
        },
        {
          title: "3. 지원 내용",
          content:
            "선정된 기업에는 최대 5천만원의 사업화 자금과 함께 전문 컨설팅, 기술 멘토링, 네트워킹 기회 등이 제공됩니다. 자금은 설비 구축, 소프트웨어 도입, 마케팅 등에 사용 가능합니다.",
        },
        {
          title: "4. 신청 방법",
          content:
            "신청은 온라인으로만 가능하며, 중소기업 지원사업 통합관리시스템을 통해 접수합니다. 사업계획서, 재무제표 등의 필수 서류를 준비하여 제출 기간 내에 신청해야 합니다.",
        },
        {
          title: "5. 선정 기준",
          content:
            "선정은 서류평���와 대면평가를 거쳐 이루어집니다. 주요 평가 항목은 기술성, 사업성, 시장성, 추진 역량 등입니다. 최종 선정은 평가 점수와 지원 예산을 고려하여 결정됩니다.",
        },
      ]);
    }, 3000);
  };

  useEscapeKey(() => setIsChatOpen(false));

  return (
    <div className="flex h-screen bg-gray-100">
      <FileUpload onFileUpload={handleFileUpload} />
      <AIAnalysisResult
        isAnalyzing={isAnalyzing}
        toc={toc}
        onChatOpen={() => setIsChatOpen(true)}
      />
      {isChatOpen && <AIChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default AIAnalysisApp;
