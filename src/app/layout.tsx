import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rawnak-group.vercel.app"),
  title: {
    default: "Rawnak Group",
    template: "%s | Rawnak Group"
  },
  description:
    "Rawnak is a digital ecosystem for premium websites, strategic brands, AI systems, and business automation.",
  icons: {
    icon: "/assets/logo.svg"
  },
  openGraph: {
    title: "Rawnak Group",
    description:
      "Premium websites, strategic brands, AI systems, and business automation.",
    images: ["/assets/building.jpg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawnak Group",
    description:
      "Premium websites, strategic brands, AI systems, and business automation.",
    images: ["/assets/building.jpg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eef0f8"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
