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
              Fill out the form and I'll respond within 24 hours. Or reach
              out directly:
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <span className="block font-medium text-gray-900">Email</span>
                
                  href="mailto:maheshmarri94@gmail.com"
                  className="text-blue-700 hover:underline"
                
                  maheshmarri94@gmail.com
                
              </div>
              <div>
                <span className="block font-medium text-gray-900">WhatsApp</span>
                
                  href="https://wa.me/919347911917?text=Hello!%20I'm%20interested%20in%20your%20tutoring%20services%20for%20my%20child.%20Could%20you%20share%20more%20details%20about%20availability%20and%20pricing%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                
                  +91 93479 11917
               
              </div>
            </div>
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