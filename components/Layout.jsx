import Footer from './footer/Footer';
import Navbar from './navbar/Navbar'
const Layout = ({children}) => {
    return (
        <>
           <Navbar /> 
           <main>
            {children}
           </main>
           <Footer />
        </>
    );
};

export default Layout;