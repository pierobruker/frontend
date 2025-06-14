// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MotionProvider } from './motion-provider'; // Nuevo componente que crearemos

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cajero Automático',
  description: 'Sistema de retiro bancario',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#003e9e]`}>
        <MotionProvider> {/* Envuelve todo con el proveedor de animaciones */}
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}