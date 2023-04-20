import "./AccessSection.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard2 from "../ProductCard2";
import { Link } from "react-router-dom";

function AccessSection() {
  const [newAcc, setNewAcc] = useState([]);
  useEffect(() => {
    const fetchSneakers = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/items?tag=accessories&limit=31"
      );
      const results = response.data.data.data;

      setNewAcc(results.slice(0, 3));
    };
    fetchSneakers();
  }, []);

  return (
    <div className="AccessSection">
      <h1 className="AccessSection-title">LATEST ACCESSORIES</h1>
      <div className="AccessSection-list">
        {newAcc.map((item) => {
          return (
            <Link
              key={item._id}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to={`/products/${item._id}`}
              className="ProductCard2-container"
            >
              <ProductCard2 key={item._id} item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AccessSection;
