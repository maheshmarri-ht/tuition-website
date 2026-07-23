import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
export const metadata = {
  title: "TotalTutor | Personalized Tutoring for Your Child",
  description: "Personalized tutoring in Maths, Science, Social Studies, English, Telugu, Hindi, and IIT foundation coaching. Book a free consultation today.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
