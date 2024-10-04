'use client';

import React, { useState, useEffect } from 'react';
import { FileText, List, MessageSquare, ChevronRight, Zap, X } from 'lucide-react';

interface TocItem {
  title: string;
  content: string;
}

const AIAnalysisApp = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleFileUpload = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setToc([
        { title: "1. 사업 개요", content: "본 사업은 중소기업의 디지털 전환을 지원하기 위한 정부 주도 프로그램입니다. 4차 산업혁명 시대에 맞춰 기업의 경쟁력을 높이고 새로운 비즈니스 모델을 창출하는 것을 목표로 합니다." },
        { title: "2. 지원 대상", content: "중소기업기본법 제2조에 따른 중소기업 중 제조업, IT서비스업 등을 영위하는 기업이 대상입니다. 단, 사업 개시일로부터 1년 이상 경과한 기업에 한합니다." },
        { title: "3. 지원 내용", content: "선정된 기업에는 최대 5천만원의 사업화 자금과 함께 전문 컨설팅, 기술 멘토링, 네트워킹 기회 등이 제공됩니다. 자금은 설비 구축, 소프트웨어 도입, 마케팅 등에 사용 가능합니다." },
        { title: "4. 신청 방법", content: "신청은 온라인으로만 가능하며, 중소기업 지원사업 통합관리시스템을 통해 접수합니다. 사업계획서, 재무제표 등의 필수 서류를 준비하여 제출 기간 내에 신청해야 합니다." },
        { title: "5. 선정 기준", content: "선정은 서류평가와 대면평가를 거쳐 이루어집니다. 주요 평가 항목은 기술성, 사업성, 시장성, 추진 역량 등입니다. 최종 선정은 평가 점수와 지원 예산을 고려하여 결정됩니다." },
      ]);
    }, 3000);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setIsChatOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 왼쪽 패널 */}
      <div className="w-1/2 p-6 bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">PDF 업로드</h2>
        <div className="border-dashed border-2 border-gray-300 rounded-lg p-12 text-center">
          <FileText className="mx-auto mb-4" size={48} />
          <p className="mb-4">정부지원사업 PDF 파일을 여기에 드래그하거나</p>
          <button
            onClick={handleFileUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            파일 선택
          </button>
        </div>
      </div>

      {/* 오른쪽 패널 */}
      <div className="w-1/2 p-6 bg-gray-50 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">AI 분석 결과</h2>
        {isAnalyzing ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg font-semibold">AI가 PDF를 분석 중입니다...</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Zap className="text-yellow-500 mr-2" />
                <span>자연어 처리 중</span>
              </div>
              <div className="flex items-center">
                <List className="text-green-500 mr-2" />
                <span>목차 구조화 중</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="text-blue-500 mr-2" />
                <span>핵심 내용 추출 중</span>
              </div>
            </div>
          </div>
        ) : toc.length > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-3">AI 생성 목차 (TOC)</h3>
            <ul className="space-y-2">
              {toc.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between bg-white p-3 rounded shadow">
                    <span>{item.title}</span>
                    <button 
                      onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  {expandedItem === index && (
                    <div className="mt-2 p-3 bg-gray-100 rounded">
                      <p>{item.content}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsChatOpen(true)}
              className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              AI와 대화하기
            </button>
          </div>
        ) : (
          <p>PDF를 업로드하면 AI 분석 결과가 여기에 표시됩니다.</p>
        )}
      </div>

      {/* AI 채팅 모달 */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-2/3 h-2/3 relative">
            <button 
              onClick={() => setIsChatOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold mb-4">AI 채팅</h3>
            <div className="h-4/5 overflow-y-auto border border-gray-200 rounded p-4 mb-4">
              {/* 채팅 메시지들이 여기에 표시됩니다 */}
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="메시지를 입력하세요..."
                className="flex-grow border border-gray-300 rounded-l px-4 py-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r">전송</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAnalysisApp;