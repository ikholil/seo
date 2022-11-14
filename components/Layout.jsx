import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
