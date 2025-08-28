import Blog from "./components/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="Main">
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
