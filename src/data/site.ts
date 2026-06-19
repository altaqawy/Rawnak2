export type RouteKey =
  | "home"
  | "about"
  | "services"
  | "solutions"
  | "work"
  | "process"
  | "pricing"
  | "contact";

export const navigation = [
  { key: "home" as const, href: "/", label: "Home" },
  { key: "about" as const, href: "/about", label: "About" },
  { key: "services" as const, href: "/services", label: "Services" },
  { key: "solutions" as const, href: "/solutions", label: "Solutions" },
  { key: "work" as const, href: "/work", label: "Work" },
  { key: "process" as const, href: "/process", label: "Process" },
  { key: "pricing" as const, href: "/pricing", label: "Pricing" },
  { key: "contact" as const, href: "/contact", label: "Contact" }
];

export const homeServices = [
  { label: "Websites", icon: "nav-dot" },
  { label: "Branding", icon: "nav-pencil" },
  { label: "AI Solutions", icon: "nav-spark" },
  { label: "Automation", icon: "nav-gear" }
];

export function routeKey(pathname: string): RouteKey {
  if (pathname.startsWith("/work")) return "work";
  const segment = pathname.split("/").filter(Boolean)[0];
  return navigation.some((item) => item.key === segment)
    ? (segment as RouteKey)
    : "home";
}
