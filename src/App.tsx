import Header from "./components/Home/Header";
import BackgroundLight from "./components/ui/BackgroundLight";
import TextPressure from "./components/ui/Bits/TextPressure";
import TrueFocus from "./components/ui/Bits/TrueFocus";
import Lanyard from "./components/ui/Lanyard";

function App() {
  return (
    <div className="relative min-h-screen m-0 p-0 bg-ajans-bg text-white">
      <BackgroundLight />
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-20 w-full ">
        {/* Hit area: sadece sağ taraf; burada tıklama aktif */}
        <div
          className="ml-auto h-full w-[40vw] min-w-[320px] max-w-[640px] pointer-events-auto
                  [mask-image:linear-gradient(to_left,black,transparent_75%)]"
        >
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-16 w-full">
          <div className=" h-full mb-8 w-[calc(100%-10rem)]">
            <TextPressure
              text="AJANS RATEL"
              italic={false}
              textColor="#ffffff"
              weight={false}
              strokeColor="#6366f1"
              minFontSize={60}
              strokeWidth={2}
            />
          </div>

          <TrueFocus
            sentence="Digital Innovation Agency"
            manualMode={false}
            blurAmount={5}
            borderColor="#a855f7"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
