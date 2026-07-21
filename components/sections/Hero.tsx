import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:flex lg:items-center lg:gap-12 lg:py-32">
        <div className="lg:w-1/2">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            Personalized Tutoring, Proven Results
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Helping your child build{" "}
            <span className="text-blue-700">confidence and clarity</span> in every subject
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            One-on-one tutoring tailored to how your child actually learns.
            Structured lessons, clear progress updates, and a teacher who's
            genuinely invested in their success.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-lg bg-blue-700 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-blue-800"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="#subjects"
              className="rounded-lg border border-gray-300 px-6 py-3.5 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              View Subjects
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <Stat value="2+" label="Years Training" />
            <Stat value="150+" label="Students Taught" />
            <Stat value="24hr" label="Response Time" />
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-2xl bg-blue-100/60 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="flex h-80 w-full items-center justify-center bg-blue-50 text-blue-300 sm:h-96">
                Your photo here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="font-bold text-gray-900">{value}</span> <span>{label}</span>
    </div>
  );
}