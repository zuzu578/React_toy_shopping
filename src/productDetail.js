 /**
   * 상세페이지 컴포넌트 
   */
  import { useState ,useEffect} from 'react';
  import productList from './data.js';
  // 리액트에서 url parameter 라우팅 전달할때 사용 
  import { useHistory,useParams } from 'react-router';
  
  const ProductDetail = (props) =>{
   
    let {id} = useParams(); // requestParameter 
   // console.log('id params => ' , id);
    let [getProductDetail,setProductDetail] = useState('');
    var getNewProductList = [...getProductDetail]; 
    getNewProductList = productList;

    // data.js 에 있는 dataList 를 state 에 담아준다.
    useEffect(() => {
      
      setProductDetail(getNewProductList)
    }, []);

    //data.js에 넣어준 state 중 (상품 id값들 중 ), 해당 페이지 상품id  에 맞는 값을 return 한다.
    // 방법 1) 객체 에 있는 데이터를 find 함수를 이용하여 필터링하기 
    let currPageProduct =  props.getDetailData.find(function(idx){
      return idx.id == id
    })
    // 방법 2) 객체에 있는 데이터를 for loop 를 이용하여 필터링 한다. 
    var filterData = {}; // 객체 담기 
    for( var i = 0 ; i < getProductDetail.length;i++){
      //console.log(getProductDetail[i]);
      if(getProductDetail[i].id == id){

        console.log(getProductDetail[i]);
        filterData=getProductDetail[i];
      }
    }
    console.log('filterData =>',filterData);
    //console.log(currPageProduct);

    return (
      
      <div className="container">
     
      <div className="row">
        <div className="col-md-6">
         
          <img src={filterData.image} width="100%" alt="img"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{filterData.title}</h4>
          <p>{filterData.content}</p>
          <p>{filterData.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
        </div>
     

        
    </div> 
      
    )
  }

  export default ProductDetail;