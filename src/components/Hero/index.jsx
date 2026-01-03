import style from "./Hero.module.css";
import Card from "../Card/index";
import { useProducts } from "../../hooks/useProducts";

function Hero() {
  const { data, loading, error } = useProducts();

  const selectedProduct = [data[0], data[5], data[8]];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <main>
      <header className={style["hero-title"]}>
        <h2>
          We Sell <span className={style["title-highlight"]}>Anything</span>
        </h2>
      </header>
      <section className={style["card-wrapper"]}>
        {selectedProduct.map((product) => (
          <article key={product.id}>
            <Card productImg={product.image} productTitle={product.title} productPrice={product.price}></Card>
          </article>
        ))}
        {/* <article>
          <Card productImg={sampleData.image} productTitle={sampleData.title} productPrice={sampleData.price}></Card>
        </article>
        <article>
          <Card productImg={sampleData1.image} productTitle={sampleData1.title} productPrice={sampleData1.price}></Card>
        </article> */}
      </section>
    </main>
  );
}

export default Hero;
