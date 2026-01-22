import React from 'react';

function PlaqueModal({ title, description, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg relative">
        {/* 关闭按钮 */}
        <button
          onClick={onClose} // 调用传入的 onClose 函数
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close Modal"
        >
          ✕
        </button>

        <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">
          {title}
        </h2>

        <div className="mt-4">
          <p className="text-pretty text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlaqueModal;