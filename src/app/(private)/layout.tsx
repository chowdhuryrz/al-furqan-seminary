"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const getTitle = (path: string) => {
    const segment = path.split("/").pop() || "dashboard";
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <main className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title={getTitle(pathname)} />
        <div className="p-4">{children}</div>
      </div>
    </main>
  );
};

export default PrivateLayout;
