const Header = () => {
  return (
    <header className="z-30 w-full flex items-center justify-center pt-6">
      <div className="flex items-center justify-between w-[900px] max-w-[95%] px-8 py-4 rounded-full border border-orange-400/30 bg-gradient-to-r from-orange-900/20 via-amber-900/15 to-orange-900/20 backdrop-blur-xl shadow-2xl shadow-orange-500/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent">
            Ratel
          </span>
        </div>

        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="text-text-secondary font-medium text-sm tracking-wide"
          >
            Biz Kimiz
          </a>
          <a
            href="#"
            className="text-text-secondary font-medium text-sm tracking-wide"
          >
            Neler Yapıyoruz
          </a>
          <a
            href="#"
            className="text-text-secondary font-medium text-sm tracking-wide"
          >
            Referanslar
          </a>
          <a
            href="#"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium text-sm tracking-wide"
          >
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
