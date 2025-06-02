const OpxenHeader = () => {
  return (
    <header className="bg-[#0f0f0f] border-b border-[#333] py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#ff6b35] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <h1 className="text-white text-2xl font-bold">OPXEN</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-[#ccc] hover:text-white text-sm font-medium transition-colors"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-[#ccc] hover:text-white text-sm font-medium transition-colors"
          >
            Игры
          </a>
          <a
            href="#"
            className="text-[#ccc] hover:text-white text-sm font-medium transition-colors"
          >
            Поддержка
          </a>
        </nav>
      </div>
    </header>
  );
};

export default OpxenHeader;
