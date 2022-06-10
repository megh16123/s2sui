import Header from './components/layout_Components/header/header';
import Footer from './components/layout_Components/footer/footer';
import MainSection from './components/layout_Components/MainSection/mainSection';

function App() {
  return (
    <>
      <Header
        headerTitle="Dashboard"
      />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
