const VKHeader = () => {
  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">В</span>
          </div>
          <h1 className="text-white text-xl font-normal">ВКонтакте</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white/90 hover:text-white text-sm">
            О проекте
          </a>
          <a href="#" className="text-white/90 hover:text-white text-sm">
            Реклама
          </a>
          <a href="#" className="text-white/90 hover:text-white text-sm">
            Помощь
          </a>
        </nav>
      </div>
    </header>
  );
};

export default VKHeader;
