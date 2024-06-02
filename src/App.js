import './App.css';
import chanel from './images/image-product-desktop.jpg';
import cart from './images/icon-cart.svg'

function App() {
  return (
    <>
       <div className='product-card'>
          <div className='chanel-img'>
            <img src={chanel} alt=""/>
          </div>
          <div className='product-info'>
              <p className='montserrat perfume'>PERFUME</p>         

              <h2 className='fraunces gabrielle'>Gabrielle Essence Eau De Parfum</h2>

              <p className='montserrat product-description'>A floral, solar and voluptuous interpretation composed by Olivier 
                Polge, Perfumer-Creator for the House of CHANEL.</p>
              <div className='product-price'>
                <h2 className='fraunces discount'>$149.99</h2>
                <p className='montserrat original-price'>$169.99</p> 
              </div>

              <button type="submit" className='montserrat cart' ><img src={cart} alt=""/> Add to Cart</button>
          </div>
       </div> 
    </>
  );
}

export default App;
