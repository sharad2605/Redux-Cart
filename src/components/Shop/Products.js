import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

    const dummyProducts = [
        {id: 'p1', title: 'Product 1', price: 50, description: 'This is a first product - amazing!'},
        {id: 'p2', title: 'Product 2', price: 10, description: 'This is a second product - amazing!'},
        {id: 'p3', title: 'Product 3', price: 20, description: 'This is a third product - amazing!'},
        {id: 'p4', title: 'Product 4', price: 30, description: 'This is a fourt product - amazing!'}
    ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
