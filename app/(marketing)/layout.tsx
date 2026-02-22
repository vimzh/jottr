import React from "react";
import Navbar from "./_components/Navbar";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        h-full
        bg-background text-foreground
        dark:bg-background dark:text-foreground
        font-sans
      "
    >
      <Navbar />

      <main className="h-full">
        {children}
      </main>
    </div>
  );
}

export default MarketingLayout;
