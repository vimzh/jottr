import React from "react";
import { Figtree, Cormorant } from "next/font/google";
import Navbar from "./_components/Navbar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`h-full bg-stone-50 text-black dark:bg-stone-100 dark:text-black ${figtree.variable} ${cormorant.variable}`}>
      <Navbar />

      <main className="h-full font-figtree">
        {children}
      </main>
    </div>
  );
}

export default MarketingLayout;
