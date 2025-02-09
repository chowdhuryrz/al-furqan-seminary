"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-5 md:px-20 border-b border-border">
      <h1 className="text-2xl font-bold flex items-center gap-2 font-elMessiri">
        <div className="w-9 h-9 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Al-Furqan Seminary"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        Al-Furqan Seminary
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="size-7 md:hidden cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex flex-col mt-10">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link href={link.href}>
                  <SheetTitle
                    className={`cursor-pointer hover:text-primary transition-colors ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </SheetTitle>
                </Link>
              </SheetClose>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <ul className="gap-4 hidden md:flex font-bold">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-amber-300 transition-colors ${
                pathname === link.href ? "text-amber-300" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
