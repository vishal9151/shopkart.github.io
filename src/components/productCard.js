export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} />
      <div className="text-field">
          <div className="florida-jacket">{product.title}</div>
          <div className="suffered-alteration-in-some-form-bysuffalterattion-in-some-forme-byinjected-humor-or-randomised">
            {product.description}
          </div>
          <div className="_100">{product.price}$</div>
      </div>
    </div>
  );
}
