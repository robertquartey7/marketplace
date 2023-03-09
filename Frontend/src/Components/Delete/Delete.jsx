import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from '../../Components/Products/ProductCard'
function Delete() {
  const [data, setData] = useState();
  const [change, setChange] =useState('false')

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_URL}store/items`,).then((res) => {
      setData(res.data.data);
    });
  }, [change]);



  return (
    <div className="" >
      <h1 className="text-center"> Delete item</h1>
      <div className="productsresult">
        {data &&
          data.map((element) => {
            return (
              <div
                key={element.id}
               
                className="pointer"
              >
                <ProductCard
                id={element.id}
                  name={element.name}
                  imageUrl={element.imageUrl}
                  price={element.price}
                  category={element.category}
                  delet='delete'
                  setChange={setChange}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Delete;
