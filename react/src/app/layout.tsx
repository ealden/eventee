import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: 'Eventee',
  description: 'Eventee Calendar'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
