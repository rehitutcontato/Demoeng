import type {Metadata} from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Veros Engenharia & Construções de Alto Padrão | Turnkey Residencial de Luxo RMC',
  description: 'A materialização física da sua residência de luxo com rigor orçamentário e prazo milimétrico em condomínios fechados (Alphaville, Swiss Park, Haras Larissa).',
  openGraph: {
    title: 'Veros Engenharia & Construções de Alto Padrão',
    description: 'Construção residencial de precisão no regime turnkey em condomínios fechados na RMC. Orçamento travado, diário digital de obra e garantia estendida.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veros Engenharia & Construções de Alto Padrão',
    description: 'Construção civil de alta precisão e regime turnkey para mansões e residências contemporâneas na RMC.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`scroll-smooth ${cormorant.variable} ${jakarta.variable}`}>
      <body className="bg-[#08080a] text-slate-200 antialiased font-sans selection:bg-amber-500 selection:text-black min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

