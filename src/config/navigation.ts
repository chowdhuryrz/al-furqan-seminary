import { LayoutDashboard, Users, CreditCard, Settings } from "lucide-react";

export const navigationConfig = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    iconColor: "text-blue-500",
  },
  {
    label: "Students",
    href: "/students",
    icon: Users,
    iconColor: "text-green-500",
  },
  {
    label: "Payments",
    href: "/payments",
    icon: CreditCard,
    iconColor: "text-purple-500",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    iconColor: "text-orange-500",
  },
];
