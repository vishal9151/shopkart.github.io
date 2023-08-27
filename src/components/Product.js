export default function Product({ products, dropdown, buttonHandle }) {
    return (
      <>
        <div id={products.id} onClick={() => buttonHandle()} style={!dropdown?{border: "1px solid black"}:{  position: "relative",border: "1px solid white"}}>
          {products.name}
          {dropdown && (
          <div id="dropdown">
            <div className="product-1">PRODUCT 1</div>
            <div className="product-2">PRODUCT 2</div>
            <div className="product-3">PRODUCT 3</div>
            <div className="product-4">PRODUCT 4</div>
            <div className="line-34"></div>
          </div>
        )}
        </div>
      </>
    );
  }
  