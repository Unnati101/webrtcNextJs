import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import SocketProvider from "@/providers/SocketProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "VidChat",
  description: "Video Call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <SocketProvider>
            <main className="flex flex-col min-h-screen bg-secondary">
              <Navbar />
              <Container>
                {children}
              </Container>
            </main>

        </SocketProvider>
          
      </body>
    </html>
    </ClerkProvider>
  );
}
