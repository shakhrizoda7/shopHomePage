import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import star from './images/stars-removebg-preview.png';

function App() {
  return (
    <div className="container">
      <header>
        <div className='logo'>
          <span>Start Bootstrap</span>

          <ul>
            <li>Home</li>
            <li className='grayText'>About</li>
            <li className='grayText'>Shop</li>
          </ul>
        </div>

        <div className='cart'>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Cart</p>
          <p className='count'>0</p>
        </div>
      </header>

      <main>
        <section className='shopStyle'>
          <h1>Shop in style</h1>
          <p>With this shop hompeage template</p>
        </section>

        <section id='cards'>

          {/* card 1 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo'/>

            <div className="title">
              <h3>Fancy Product</h3>
              <p className='price'>$40.00 - $80.00</p>
            </div>

            <button>View options</button>
          </div>

          {/* cars 2 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo' />

            <div className="title">
              <h3>Special Item</h3>
              <img src={star} alt="" className='star'/>
              <p className='price delP'><del>$20.00</del> $18.00</p>
            </div>

            <button className='card2Btn'>Add to cart</button>

            <p className='sale'>Sale</p>
          </div>

          {/* card 3 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo' />

            <div className="title">
              <h3>Sale Item</h3>
              <p className='price delP2'><del>$50.00</del> $25.00</p>
            </div>

            <button>Add to cart</button>
            <p className='sale'>Sale</p>
          </div>

          {/* card 4 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo' />

            <div className="title">
              <h3>Popular Item</h3>
              <img src={star} alt="" className='star'/>
              <p className='price delP'>$40.00</p>
            </div>

            <button className='card2Btn'>Add to cart</button>
          </div>

          {/* card 5 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo' />

            <div className="title">
              <h3>Sale Item</h3>
              <p className='price delP2'><del>$50.00</del> $25.00</p>
            </div>

            <button>Add to cart</button>
            <p className='sale'>Sale</p>
          </div>

          {/* card 6 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo'/>

            <div className="title">
              <h3>Fancy Product</h3>
              <p className='price'>$120.00 - $280.00</p>
            </div>

            <button>View options</button>
          </div>

          {/* cars 7 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo' />

            <div className="title">
              <h3>Special Item</h3>
              <img src={star} alt="" className='star'/>
              <p className='price delP'><del>$20.00</del> $18.00</p>
            </div>

            <button className='card2Btn'>Add to cart</button>

            <p className='sale'>Sale</p>
          </div>

          {/* card 8 */}
          <div className='card'>
            <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" className='photo' />

            <div className="title">
              <h3>Popular Item</h3>
              <img src={star} alt="" className='star'/>
              <p className='price delP'>$40.00</p>
            </div>

            <button className='card2Btn'>Add to cart</button>
          </div>

        </section>
      </main>

      <footer>
        <div>
          <p>Copyright © Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
