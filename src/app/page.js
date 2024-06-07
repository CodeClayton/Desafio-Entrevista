import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header'
import MainContent from "../components/mainContent/MainContent";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <MainContent /> 
      <Footer />
    </>
  );
}
