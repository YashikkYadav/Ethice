import Header from "@/components/Header";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <SubscribeSection />
      <Footer />
    </>
  );
}
