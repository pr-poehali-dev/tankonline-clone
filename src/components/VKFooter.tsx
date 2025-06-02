const VKFooter = () => {
  return (
    <footer className="bg-white/5 border-t border-white/10 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center space-x-6 text-white/70 text-xs">
          <span>© 2010 ВКонтакте</span>
          <a href="#" className="hover:text-white">
            Правила
          </a>
          <a href="#" className="hover:text-white">
            Конфиденциальность
          </a>
          <a href="#" className="hover:text-white">
            Условия
          </a>
          <a href="#" className="hover:text-white">
            Поддержка
          </a>
        </div>
      </div>
    </footer>
  );
};

export default VKFooter;
