"use client"

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Header } from "./Header";

const HeaderWrapper = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => {
      if (e.matches && open) {
        setOpen(false);
      }
    });
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams]);

  const toggleMenu = (): void => setOpen(!open)
  return (
    <Header open={open}  toggleMenu={toggleMenu} />
  );
};

export { HeaderWrapper };
