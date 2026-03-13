"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const languages = navigator.languages.map((l) => l.toLowerCase());

    if (languages.some((l) => l.startsWith("ko"))) {
      router.replace("/ko");
    } else if (languages.some((l) => l.startsWith("ja"))) {
      router.replace("/ja");
    } else {
      router.replace("/en");
    }
  }, [router]);

  return null;
}
