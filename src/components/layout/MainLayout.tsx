import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function MainLayout({ lang, variant, children }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header lang={lang} variant={variant} />

      <div className="flex-[1_0_auto]">
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
}
