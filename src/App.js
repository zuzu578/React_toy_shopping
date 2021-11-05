import logo from './logo.svg';

import './App.css';
import { Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap';
import { useState } from 'react';
import productList from './data.js'; // 상품list data 정보 import!
import JumboItems from './JumboItems.js'; // 점보item import!
import NavItem from './NavBarItems'; // 네비게이션 바 item import! 
import ProductDetail from './productDetail';

import{Link,Route,Switch} from 'react-router-dom';
function App() {
  /**
   * state 위치 
   */
  let [shoes , setShoes] = useState(productList);
  
  /**
   * 
   * @param {*} props 
   * @returns 
   * 상품정보에 대한 컴포넌트
   */
   function ProductInfo(props){
    return(
  <div className="container">
      <div className="row">
        
         {
           shoes.map(function(shoes,idx){
             return <div className="col-md-4">
             <img src={props.getProductData[idx].image } alt="product_image" width="100%"/>
        
             <h4> <Link to={`/detail/${props.getProductData[idx].id}`}>{[props.getProductData[idx].title]}</Link></h4>
             <p>{[props.getProductData[idx].content]} </p>
             <p> {[props.getProductData[idx].price]}</p>
             </div>

           })
         }
      </div>                
  </div>
  
    );
  }

 
  
  
  return (
    <div className="App">
   <NavItem/>
  

    <Route exact path="/">
    <JumboItems/>
    <ProductInfo getProductData = {shoes}/>
    </Route>
     
    <Route path="/detail/:id">
      <ProductDetail getDetailData ={shoes}/>
    </Route>
 
    
    </div>
  );

}

export default App;
