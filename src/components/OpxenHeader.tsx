const OpxenHeader = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <h1 className="text-white text-xl font-semibold">OPXEN</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Игры
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Поддержка
          </a>
        </nav>
      </div>
    </header>
  );
};

export default OpxenHeader;
