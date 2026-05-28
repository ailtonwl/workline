import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workline Sistema de Informação',
  description:
    'Sistema para apresentação de produtos e serviços oferecido pela empresa',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
