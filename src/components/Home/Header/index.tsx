const Header = () => {
  return (
    <header className="z-30 w-full flex items-center justify-center pt-4 md:pt-6 px-4">
      <div className="flex items-center justify-between w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full border border-orange-400/30 bg-gradient-to-r from-orange-900/20 via-amber-900/15 to-orange-900/20 backdrop-blur-xl shadow-2xl shadow-orange-500/10">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs md:text-sm">R</span>
          </div>
          <span className="font-bold text-lg md:text-xl tracking-wide bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent">
            Ratel
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
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

        <nav className="flex lg:hidden items-center gap-4 md:gap-6">
          <a
            href="#"
            className="text-text-secondary font-medium text-xs md:text-sm tracking-wide"
          >
            Hizmetler
          </a>
          <a
            href="#"
            className="text-text-secondary font-medium text-xs md:text-sm tracking-wide"
          >
            Referans
          </a>
          <a
            href="#"
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium text-xs md:text-sm tracking-wide"
          >
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
