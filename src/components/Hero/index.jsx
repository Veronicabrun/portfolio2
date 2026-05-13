import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-6 py-20">
      <div className="absolute left-10 top-28 h-40 w-40 rounded-full bg-pink-200"></div>
      <div className="absolute right-10 top-32 h-56 w-56 rounded-full bg-purple-200"></div>
      <div className="absolute bottom-20 left-1/2 h-32 w-32 rounded-full bg-indigo-100"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pt-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-pink-500">
            Frontend Developer
          </p>

          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-black sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Veronica
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            I create responsive, modern and user-friendly web experiences using
            React, JavaScript and thoughtful design.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-center font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Let&apos;s Talk
            </Link>

            <Link
              to="/about"
              className="rounded-full border-2 border-purple-600 px-8 py-4 text-center font-semibold text-purple-700 transition duration-300 hover:bg-purple-600 hover:text-white"
            >
              More About Me
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] bg-pink-300"></div>
          <div className="absolute -right-6 -bottom-6 h-full w-full rounded-[2rem] bg-purple-300"></div>

          <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl">
            <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
              <p className="text-center text-lg font-semibold text-purple-700">
                Add your image here
              </p>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-8 left-0 w-full text-pink-300"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 70 C250 10 420 120 700 65 C980 10 1120 100 1440 40"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}

export default Hero;