import "@radix-ui/themes/styles.css";
import './App.css';
import { ProductPage } from './components/product-page/ProductPage';
import { Theme } from "@radix-ui/themes";
import { Header } from "./components/header/Header";

function App() {
  return (
    <Theme>
      <div className="App">
        <Header />
        <ProductPage />
      </div>
    </Theme>
  );
}

export default App;
