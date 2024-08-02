import Navbar from "./Navbar";
import Footer from "./footer";

// children is the content inside the page
export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
                { children }
            <Footer />
        </div>
    )
}