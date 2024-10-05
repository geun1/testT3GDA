import React from "react";
import { FileText } from "lucide-react";

interface FileUploadProps {
  onFileUpload: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  return (
    <div className="w-1/2 bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">PDF 업로드</h2>
      <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
        <FileText className="mx-auto mb-4" size={48} />
        <p className="mb-4">정부지원사업 PDF 파일을 여기에 드래그하거나</p>
        <button
          onClick={onFileUpload}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          파일 선택
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
