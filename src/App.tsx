import Header from "./components/Home/Header";
import BackgroundLight from "./components/ui/BackgroundLight";

function App() {
  return (
    <div className="relative min-h-screen m-0 p-0 bg-ajans-bg text-white">
      <BackgroundLight />
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/30 pointer-events-none" />

      {/* Sayfa düzeni */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header /> {/* pt-5 varsa çok istemiyorsan azaltabilirsin */}
        {/* Hero: kalan alanı kapla ve ortala */}
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-200 text-5xl font-bold mb-6 tracking-tight text-center">
            Welcome to AjansRatel
          </h1>
          <p className="text-indigo-300 text-xl mb-8 text-center max-w-2xl leading-relaxed">
            Your source for the latest news and updates.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8" />
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started
          </button>
        </main>
      </div>
    </div>
  );
}

export default App;
