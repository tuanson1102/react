const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="Fancy Product"
        />
        <div className="product-info">
          <div className="product-name">Fancy</div>
          <div className="product--min">$40</div>
          <div className="product--max">$80</div>
          <button className="product-button">view options</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
