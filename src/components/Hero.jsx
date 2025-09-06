export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] w-full flex items-center justify-center text-center text-white">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/HeroVid.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">AI Diagnostic & Therapeutic Consultant</h2>
        <p className="mt-4 text-lg text-white">Describe your symptoms & let AI guide you</p>
      </div>
    </section>
  );
}
