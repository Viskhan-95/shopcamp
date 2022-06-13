import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content'
import products from './Components/Products/products';
import './App.css';
import './index.css'

function App() {
  return (
      <div className='main'>
      <Header />
      <div className='container' >
        <Sidebar />
        <Content data = {products.products}/>
      </div>
    </div>
  );
}

export default App;
