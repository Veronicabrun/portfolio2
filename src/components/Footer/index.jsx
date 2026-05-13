function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Left side */}
        <div className="text-center md:text-left">
          <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-2xl font-extrabold text-transparent">
            Veronica Brun-pedersen
          </h2>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
            Frontend developer passionate about creating modern,
            responsive and user-friendly web experiences.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-black transition duration-300 hover:border-pink-500 hover:text-pink-500"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-black transition duration-300 hover:border-pink-500 hover:text-pink-500"
          >
            LinkedIn
          </a>

          <a
            href="/contact"
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © 2026 Veronica Brun-pedersen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;