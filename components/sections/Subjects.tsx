const subjects = [
  { name: "Mathematics", levels: "Elementary – High School", icon: "📐" },
  { name: "Science", levels: "Elementary – High School", icon: "🔬" },
  { name: "Social Studies", levels: "Elementary – High School", icon: "🌍" },
  { name: "English", levels: "Elementary – High School", icon: "📖" },
  { name: "Telugu", levels: "Elementary – High School", icon: "📝" },
  { name: "Hindi", levels: "Elementary – High School", icon: "📝" },
  { name: "IIT Foundation", levels: "Middle School – High School", icon: "🎯" },
];

export default function Subjects() {
  return (
    <section id="subjects" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Subjects & Grade Levels
          </h2>
          <p className="mt-3 text-gray-600">
            Structured support across core subjects, including IIT foundation
            coaching, adapted to your child's curriculum and pace.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-4 font-semibold text-gray-900">{s.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{s.levels}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't see your subject or need something more specific?{" "}
          <a href="#contact" className="font-medium text-blue-700 underline underline-offset-2">
            Ask me directly
          </a>.
        </p>
      </div>
    </section>
  );
}