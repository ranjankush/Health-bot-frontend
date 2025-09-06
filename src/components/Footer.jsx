

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-footer-bg bg-cover bg-opacity-60 bg-center text-gray-300 w-full py-10 mt-auto"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">GetWellSoon AI</h2>
          <p className="mt-2 text-white text-m">
            Your AI-powered diagnostic & therapeutic companion.  
            Helping you track, analyze, and improve your health.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <a href="#home" className="hover:text-blue-400 text-white  transition">Home</a>
          <a href="#services" className="hover:text-blue-400 text-white transition">Services</a>
          <a href="#contact" className="hover:text-blue-400 text-white transition">Contact</a>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold  content-center items-center text-white">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            <a href="#">
              <img
                src="/facebook.png"
                alt="Facebook"
                className="h-6 hover:scale-110 transition"
              />
            </a>
            <a href="#">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="h-6 hover:scale-110 transition"
              />
            </a>
            <a href="#">
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="h-6 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-white font-bold">
        &copy; {new Date().getFullYear()} GetWellSoon AI. All rights reserved.
      </div>
    </footer>
  );
}
