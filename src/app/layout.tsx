import { Poppins } from "next/font/google";
import { type Metadata } from "next";
import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "KINETIC | %s",
    default: "KINETIC",
  },
  description:
    "kinetic is a vibrant blogging platform where writers and readers connect through engaging stories and insightful articles. Discover and share content on a modern, dynamic platform tailored for creative expression.",
  icons: [{ rel: "icon", url: "/favicon/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={PoppinsFont.className}>
      <body className="px-2 md:px-10">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
