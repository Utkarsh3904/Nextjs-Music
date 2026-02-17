import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Aceternity Navbar",
  description: "Navbar Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-black text-white antialiased">
        <div className="fixed top-0 left-0 right-0 flex justify-center items-center z-[100]">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}