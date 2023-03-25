import { Bebas_Neue } from "next/font/google";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ThemeProvider } from "components/ThemeProvider";
import { createMetadata } from "utils/createMetadata";

import "styles/globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata = createMetadata();

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={`${bebas.variable} surface text`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <div className="sticky top-0  z-10 mb-8 p-4 backdrop-blur-xl bg-gray-300/40 dark:bg-gray-900/40">
              <Header />
            </div>

            <main className={`flex-1 p-4 container mx-auto`}>{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
