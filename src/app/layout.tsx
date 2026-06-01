import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Workline Sistema de Informação',
    template: '%s | Workline',
  },
  description:
    'Sistema para apresentação de produtos e serviços oferecido pela empresa',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <Container>
          <Header />

          {children}
          <footer>
            <h1 className='text-6xl font-bold text-center py-8'>
              Aqui é a Footer
            </h1>
          </footer>
        </Container>
      </body>
    </html>
  );
}
