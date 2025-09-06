export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex w-full justify-between items-center shadow-lg">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="h-20 w-20 rounded-full" />
        <h1 className="text-lg font-bold">Get Well Soon</h1>
      </div>
      <nav className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-blue-300">Home</a>
        <a href="#card" className="hover:text-blue-300">Services</a>
        <a href="#footer" className="hover:text-blue-300">Contact</a>
      </nav>
    </header>
  );
}
