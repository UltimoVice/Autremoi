import React from 'react'
import WishListProduct from './WishListProduct';

const WishList = () => {
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
      // Carica il carrello dal localStorage quando il componente viene montato
      const storedCart = JSON.parse(localStorage.getItem("wish"));
      storedCart && setWishList([...storedCart]);
    } ,[]);
  
    const [noItems, setNoItems] = useState(1)
  
  
    const deleteFromWishList = (e) => {
      setCart(wishList.filter((_, i) => i !== e));
      localStorage.setItem("wishList", JSON.stringify(wishList));
    };
  
    useEffect(() => {
      // Salva il carrello nel localStorage quando viene aggiornato
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [wishList]);
    
    const [subTotal, setSubTotal] = useState(0);
  
    // useEffect(() => {
    //   setSubTotal(cart && cart.reduce((a, item) => (a + item.price/100, 0)))
    // }, [cart])
  
   
  
  
    return (
      <div className="w-full flex justify-center items-center">
        <div className="">
          <h3 className="text-4xl mb-3">Carrello</h3>
          <div className="">
            {!wishList && "Nessun prodotto nel carrello"}
            {wishList &&
              wishList.map((product, i) => (
                <WishListProduct key={product.sku} id={product.id}  del={() => deleteFromWishList(i)}/> //
              ))
            }
            <div>
              <div>
                <div>
                  <hr />
                  <Link to={`/news`}>Ritorna allo shopping</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WishList