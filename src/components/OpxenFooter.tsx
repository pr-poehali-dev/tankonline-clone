const OpxenFooter = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center space-x-6 text-gray-400 text-sm">
          <span>© 2024 OPXEN</span>
          <a href="#" className="hover:text-white transition-colors">
            Пользовательское соглашение
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Политика конфиденциальности
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Техническая поддержка
          </a>
        </div>
      </div>
    </footer>
  );
};

export default OpxenFooter;
