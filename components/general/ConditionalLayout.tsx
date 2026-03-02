"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  return (
    <>
      {!isStudio && <Header />}
      <div className={`${!isStudio && "mt-18"}`}>{children}</div>
      {!isStudio && <Footer />}
    </>
  );
}
