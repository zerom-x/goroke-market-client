import "./index.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://882ba22a-93cb-413e-b1d3-8495311e292a.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        //console.log("통신 결과:", result);
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error("error 발생:", error);
      });
  }, []);
  //const params = useParams();
  //console.log(product);
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
