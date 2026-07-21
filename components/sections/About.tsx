const methodology = [
  {
    title: "Diagnose First",
    description:
      "Every student starts with a short assessment so lessons target actual gaps, not guesswork.",
  },
  {
    title: "Personalized Plans",
    description:
      "No generic worksheets. Each plan is built around your child's syllabus, pace, and learning style.",
  },
  {
    title: "Track Progress Together",
    description:
      "Parents get regular, honest updates — what's improving, what needs more work, and why.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            A teaching approach built on trust
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            I'm Marri Mahesh, a B.Tech graduate from JNTU College with 2 years
            of hands-on training experience. I work with students across
            Telugu, Hindi, English, Maths, Science, and Social Studies, along
            with foundation-level coaching for IIT aspirants.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            I believe good tutoring isn't about cramming answers — it's about
            building the underlying understanding so your child can handle
            problems they haven't seen before, confidently, on their own.
          </p>
        </div>

        <div className="space-y-6">
          {methodology.map((step, i) => (
            <div key={step.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 font-semibold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}