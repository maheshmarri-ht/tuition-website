export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 font-bold text-white">T</span>
              <span className="font-semibold text-gray-900">TotalTutor</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Personalized tutoring across core subjects and IIT foundation coaching, focused on real understanding.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-blue-700">About</a></li>
              <li><a href="#subjects" className="hover:text-blue-700">Subjects</a></li>
              <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          © {year} TotalTutor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
