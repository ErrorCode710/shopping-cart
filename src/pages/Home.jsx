// import { IconName } from "react-icons/pi";
import Header from "../components/Header";
import Hero from "../components/Hero";
function App({ cartItems, addToCart }) {
  return (
    <>
      <Header cartItems={cartItems} />
      <Hero addToCart={addToCart} />
    </>
  );
}

export default App;
