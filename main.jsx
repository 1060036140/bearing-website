import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function BearingHomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">BearPro 轴承专家</h1>
          <nav className="space-x-6 text-base font-medium">
            <a href="#" className="hover:text-blue-600">首页</a>
            <a href="#about" className="hover:text-blue-600">关于我们</a>
            <a href="#products" className="hover:text-blue-600">产品中心</a>
            <a href="#solutions" className="hover:text-blue-600">解决方案</a>
            <a href="#news" className="hover:text-blue-600">新闻动态</a>
            <a href="#contact" className="hover:text-blue-600">联系我们</a>
          </nav>
        </div>
      </header>

      <section className="bg-blue-900 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">精密传动，从 BearPro 开始！</h2>
        <p className="text-lg">全球领先的工业轴承解决方案提供商</p>
      </section>

      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">关于我们</h3>
        <p>BearPro 是一家专业从事高性能工业轴承研发、制造与销售的企业，致力于为客户提供可靠、高效的传动解决方案。</p>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BearingHomePage />);
