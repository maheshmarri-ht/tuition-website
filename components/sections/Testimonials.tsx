const testimonials = [
  {
    quote:
      "Thank you for transforming my child's approach to learning. The improvement in grades and confidence has been amazing to see.",
    parent: "Ashwini Reddy",
    detail: "Parent, Grade A+ achiever",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          What Parents Are Saying
        </h2>
        <p className="mt-3 text-gray-600">
          Real feedback from families I've worked with.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.parent}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
              {"★★★★★"}
            </div>
            <blockquote className="mt-4 text-gray-700 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-gray-900">{t.parent}</span>
              <span className="block text-gray-500">{t.detail}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}