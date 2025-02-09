import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/config/navigation";

const Header = ({ title }: { title: string }) => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-4 border-b border-border w-full h-20">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <MenuIcon className="w-7 h-7 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex flex-col mt-10">
            {navigationConfig.map((link) => (
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
    </nav>
  );
};

export default Header;
