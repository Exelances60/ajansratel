import Header from "./components/Home/Header";
import BackgroundLight from "./components/ui/BackgroundLight";
import GlitchText from "./components/ui/Bits/Glitch";

function App() {
  return (
    <div className="relative min-h-screen m-0 p-0 bg-ajans-bg text-white">
      <BackgroundLight />
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/30 pointer-events-none" />

      {/* Sayfa düzeni */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <GlitchText
            speed={5}
            enableShadows={true}
            enableOnHover={false}
            className="custom-class"
          >
            React Bits
          </GlitchText>
        </main>
      </div>
    </div>
  );
}

export default App;
