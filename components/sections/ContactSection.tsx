import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Fill out the form below and we'll respond within 24 hours.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
