import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { navigationConfig } from "@/config/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:block w-64 h-screen bg-background border-r border-border">
      <div className="flex flex-col items-center justify-center h-20 border-b border-border">
        <Link href="/" className="text-lg font-bold flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          Al-Furqan Seminary
        </Link>
      </div>

      <nav className="p-4 space-y-2">
        {navigationConfig.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors font-bold
              ${
                pathname === item.href
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-muted"
              }`}
          >
            <span>
              {React.createElement(item.icon, {
                className: `w-5 h-5 ${item.iconColor}`,
              })}
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
