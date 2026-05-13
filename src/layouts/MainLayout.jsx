import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {children}
      </main>

      <Footer />

      <ScrollToTopButton />
    </>
  );
}

export default MainLayout;