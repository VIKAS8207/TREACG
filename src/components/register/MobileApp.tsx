import Image from "next/image";
import platform from "../../../public/images/platform-mockup.png";

export default function MobileApp() {
  // Configuration for the floating squares
  const squares = [
    { left: "10%", size: "w-8 h-8", delay: "0s", duration: "7s" },
    { left: "25%", size: "w-12 h-12", delay: "2s", duration: "9s" },
    { left: "40%", size: "w-6 h-6", delay: "4s", duration: "6s" },
    { left: "55%", size: "w-16 h-16", delay: "1s", duration: "10s" },
    { left: "70%", size: "w-10 h-10", delay: "5s", duration: "8s" },
    { left: "85%", size: "w-14 h-14", delay: "3s", duration: "11s" },
    { left: "20%", size: "w-7 h-7", delay: "6s", duration: "7s" },
    { left: "80%", size: "w-9 h-9", delay: "7s", duration: "9s" },
  ];

  return (
    <section className="relative w-full bg-[#fafafa] py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      
      {/* --- ANIMATED BACKGROUND START --- */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100px) scale(0.5) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.15; /* Subtle visibility */
          }
          80% {
            opacity: 0.05;
          }
          100% {
            transform: translateY(-800px) scale(1.2) rotate(90deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: floatUp linear infinite;
        }
      `}</style>

      {/* Squares Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {squares.map((sq, i) => (
          <div
            key={i}
            className={`absolute bottom-[-50px] bg-green-500 rounded-md animate-float ${sq.size}`}
            style={{
              left: sq.left,
              animationDelay: sq.delay,
              animationDuration: sq.duration,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay to create the "fade out at top" effect */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-transparent via-[#fafafa]/60 to-[#fafafa]"></div>
      {/* --- ANIMATED BACKGROUND END --- */}


      {/* Main Content (Wrapped in z-10 to stay above background) */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Text Content (Left Side on Desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-sm font-bold uppercase tracking-widest text-[#d97706] mb-4">
            / DOWNLOAD OUR APP
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-extrabold tracking-tight text-black mb-6">
            Connect & Register <br className="hidden lg:block" />
            On The Go
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-lg mb-8">
            Get your tickets, network with international buyers and millers, and stay updated with the India International Rice Summit 2027 directly from your phone.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium w-full sm:w-auto">
              Download App
              <span className="bg-[#fbbf24] p-2.5 rounded-full flex items-center justify-center ml-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3L19 12L5 21V3Z" />
                </svg>
              </span>
            </button>
            <button className="bg-white border-2 border-gray-200 text-black px-8 py-3 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all font-medium w-full sm:w-auto">
              Register Now
            </button>
          </div>
        </div>

        {/* 3D Graphic Mockup Area (Right Side on Desktop) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl flex justify-center items-center">
            
            {/* Decorative background glow matching the summit theme colors */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-green-200 rounded-full blur-[80px] opacity-40 transform scale-90 -z-10"></div>
            
            <Image
              src={platform}
              alt="Event Mobile App Mockup"
              priority
              className="w-full h-auto max-h-[800px] object-contain drop-shadow-2xl scale-110 lg:scale-125 origin-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}