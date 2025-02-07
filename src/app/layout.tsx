import ClientFetcher from '@/components/client-fetcher/client-fetcher';
import Overlay from '@/components/overlay/overlay';
import Providers from '@/providers/providers';
import '@/styles/index.scss';
import type { Metadata } from "next";

// $======================== RootLayout ========================$ //

export const metadata: Metadata = {
  title: "Kekstagram",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientFetcher />
          <div className='wrapper'>
            <Overlay />
            <main>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
