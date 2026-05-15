import { useEffect, useRef, useState } from "react";

const timelineItems = [
  {
    period: "2006 – 2008",
    title: "Drawing, Form and Colour",
    place: "Åssiden Upper Secondary School",
    points: [
      "Developed a creative foundation in visual expression, colour theory, composition and layout.",
      "Built an early interest in aesthetics, design and visual communication.",
    ],
  },

  {
    period: "2016 – 2017",
    title: "Certificate of Apprenticeship in Sales and Service",
    place: "Folkeuniversitetet",
    points: [
      "Completed a certificate of apprenticeship in sales and service.",
      "Developed strong communication and customer service skills.",
      "Worked with customer interaction, product presentation and daily store routines.",
    ],
  },

  {
    period: "2008 – Present",
    title: "Retail & Visual Merchandising",
    place: "Extra-leker Krokstad AS",
    points: [
      "Long experience in retail with focus on visual presentation and customer experience.",
      "Worked with product placement, seasonal departments and inspiring store displays.",
      "Handled product ordering, stock management and daily store operations.",
      "Worked with product ordering, stock management and seasonal planning.",
      "Developed strong structure, responsibility and multitasking skills.",
    ],
  },

  {
    period: "2021 – 2022",
    title: "Assistant Store Manager",
    place: "Extra-leker Krokstad AS",
    points: [
      "Followed up employees and supported daily store operations.",
      "Planned and administered shift schedules.",
      "Coordinated routines, logistics, stock and practical store tasks.",
      "Combined administrative responsibility with hands-on retail work.",
    ],
  },

  {
    period: "2022 – 2026",
    title: "Frontend Development",
    place: "Noroff School of Technology and Digital Media",
    points: [
      "Studying HTML, CSS, SCSS/Sass, JavaScript, React and Tailwind CSS.",
      "Working with UX/UI design, interaction design and responsive development.",
      "Using Git, GitHub, Netlify and VS Code in modern frontend workflows.",
      "Working with APIs, WordPress as a headless CMS and REST API integration.",
      "Learning testing and workflow tools such as Playwright, Vitest, ESLint, Prettier and Husky.",
      "Learning accessibility and universal design principles (WCAG/UU).",
      "Working with Adobe XD, Figma and user-focused design processes.",
      "Using Hotjar and user insight tools to understand user behaviour.",
    ],
  },
];

function TimelineCard({ item, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slideDirection =
    index % 2 === 0
      ? "md:-translate-x-12"
      : "md:translate-x-12";

  return (
    <article
      ref={cardRef}
      className={`relative grid gap-8 transition-all duration-700 ease-out md:grid-cols-2 ${
        isVisible
          ? "translate-y-0 opacity-100 md:translate-x-0"
          : `translate-y-10 opacity-0 ${slideDirection}`
      } ${index % 2 === 0 ? "" : "md:text-right"}`}
    >
      <div
        className={`pl-12 md:pl-0 ${
          index % 2 === 0
            ? "md:pr-16"
            : "md:col-start-2 md:pl-16"
        }`}
      >
        <div className="relative rounded-[2rem] bg-white p-6 shadow-xl">
          <div className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-[2rem] bg-pink-200"></div>

          <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-[2rem] bg-purple-200"></div>

          <span className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-bold text-white">
            {item.period}
          </span>

          <h2 className="mt-5 text-2xl font-extrabold text-black">
            {item.title}
          </h2>

          <p className="mt-2 font-semibold text-purple-700">
            {item.place}
          </p>

          <ul className="mt-5 space-y-3 text-left text-gray-600">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-500"></span>

                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute left-1 top-8 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-md md:left-1/2 md:-translate-x-1/2">
        <span className="h-3 w-3 rounded-full bg-white"></span>
      </div>
    </article>
  );
}

function AboutTimeline() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-pink-100"></div>

      <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-purple-100"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            About me
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-black sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-600">
            My background combines visual merchandising, leadership,
            customer experience, design and frontend development.
            I enjoy creating digital experiences that are visually
            engaging, structured and user-friendly.

            <span className="mt-4 block">
              I started studying frontend development alongside
              full-time work, driven by a strong passion for design,
              technology and modern user experiences.
            </span>
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-500 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-14">
            {timelineItems.map((item, index) => (
              <TimelineCard
                key={item.period}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTimeline;