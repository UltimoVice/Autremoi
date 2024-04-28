import React from "react";
import { CatalogueProduct } from "./CatalogueProduct";
import useFetch from "../../hooks/useFetch";

const NewsCatalogue = () => {
  const {data: products} = useFetch();
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl">Novità Uomo e Donna</h1>
      </div>
      <div className="my-0 mx-auto px-5 relative max-w-full overflow-hidden">
        <div className="flex flex-wrap relative mb-10 ">
          {
            products && products.map(product => (
              <CatalogueProduct key={product.sku} id={product.id}/>
            ))
          }
          
          
        </div>
        {/* <div className="flex relative mb-10">
          <CatalogueProduct src={`src/assets/Éclat Couture.jpg`}  productName={'Éclat Couture'} price={'200 €'}/>
          <CatalogueProduct src={`src/assets/Élan Eleganza.jpg`}  productName={'Élan Eleganza'} price={'240 €'}/>
          <CatalogueProduct src={`src/assets/Enchanté Couture.jpg`}  productName={'Enchanté Couture'} price={'440 €'}/>
          <CatalogueProduct src={`src/assets/Étoile Couture.jpg`}  productName={'Étoile Couture'} price={'280 €'}/>
        </div>
        <div className="flex relative mb-10">
          <CatalogueProduct src={`src/assets/Étoile Élégance.jpg`}  productName={'Étoile Élégance'} price={'230 €'}/>
          <CatalogueProduct src={`src/assets/Glamour Gilded.jpg`}  productName={'Glamour Gilded'} price={'530 €'}/>
          <CatalogueProduct src={`src/assets/Grandeur Atelier.jpg`}  productName={'Grandeur Atelier'} price={'300 €'}/>
          <CatalogueProduct src={`src/assets/Grandeur Glitz.jpg`}  productName={'Grandeur Glitz'} price={'260 €'}/>
        </div> */}
      </div>
    </div>
  );
};

export default NewsCatalogue;
