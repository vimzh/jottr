"use client";

import React from "react";
import { Button } from "@/components/ui/button";

function Newsbox() {
  return (
    <Button className="border border-stone-300 rounded-lg bg-white text-black text-sm hover:bg-stone-50 hover:shadow-md transition-all duration-300 animate-border-blink">
      Download extension
    </Button>
  );
}

export default Newsbox;
