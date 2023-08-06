import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://882ba22a-93cb-413e-b1d3-8495311e292a.mock.pstmn.io/products"
      )
      .then(function (result) {
        console.log("통신 결과:", result);

        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("error 발생:", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매하는 상품들 </h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card" key={index}>
              <Link className="product-link" to={`/product/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="/images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
