const Header = () => {
  return (
    <header className="z-30 w-full flex items-center justify-center pt-5">
      <div className="flex items-center justify-between w-[800px] max-w-[90%] px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-2 text-text-primary font-medium">
          <span>Ratel</span>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <a
            href="#"
            className="text-text-primary hover:text-white transition-colors"
          >
            Biz Kimiz
          </a>
          <a
            href="#"
            className="text-text-primary hover:text-white transition-colors"
          >
            Neler Yapıyoruz
          </a>
          <a
            href="#"
            className="text-text-primary hover:text-white transition-colors"
          >
            Referanslar
          </a>
          <a
            href="#"
            className="text-text-primary hover:text-white transition-colors"
          >
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
