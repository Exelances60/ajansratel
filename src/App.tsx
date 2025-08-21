import Header from "./components/Home/Header";
import BackgroundLight from "./components/ui/BackgroundLight";
import TextPressure from "./components/ui/Bits/TextPressure";
import TrueFocus from "./components/ui/Bits/TrueFocus";

function App() {
  return (
    <div className="relative min-h-screen m-0 p-0 bg-ajans-bg text-white">
      <BackgroundLight />
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/30 pointer-events-none" />

      {/* Sayfa düzeni */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 w-full">
          <div className="w-full h-[300px]">
            <TextPressure
              text="Hello!"
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={10}
            />
          </div>
          <TrueFocus
            sentence="True Focus"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
