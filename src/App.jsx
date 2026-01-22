import { useState } from 'react'; // 确保引入 useState
import './tw-styles.css';
import TitleBar from './components/TitleBar';
import MapDisplay from './components/MapDisplay';
import PlaqueModal from './components/PlaqueModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 初始值为 false，模态框默认隐藏

  return (
    <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
      <TitleBar title="📚 OpenPlaques Reading Recommendations" />
      <MapDisplay longitude={-2.78479} latitude={54.05213} zoom={16} />

      {/* 添加一个按钮来显示模态框 */}
      <button
        onClick={() => setIsModalOpen(true)} // 点击时设置 isModalOpen 为 true
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>

      {/* 条件渲染模态框 */}
      {isModalOpen && (
        <PlaqueModal
          title="Plaque Information"
          description="This plaque commemorates an important historical event in this location."
          onClose={() => setIsModalOpen(false)} // 关闭模态框
        />
      )}
    </div>
  );
}

export default App;