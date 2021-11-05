# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)







# react_tutorial
리액트 공부 
# 이 레파지토리는...
리액트를 학습하면서 느낀점 , 발생한 예외 부분을 적어나가는 공간입니다.

# react 에서 bootstrap 설치시 필독
상위 폴더에 npm install boostrap 하지말고 그 하위 프로젝트에 설치합니다. 안그러면  Error: Invalid hook call. Hooks can only be called inside of the body of a function component.  이런 오류가 납니다.
# 리액트에서 컴포넌트를 생성할때
반드시 대문자로 function 을 정의해줍니다.
ex)
function App(){
 function Modal(){
  <div>모달창 </div>
 }
 return(
  <div>
 <Modal>  </Modal>

</div>
 
 )
}
# 리액트로 rest api call 하여 데이터 렌더링 해보기 
<img width="984" alt="스크린샷 2021-10-31 오전 12 51 35" src="https://user-images.githubusercontent.com/69393030/139540194-e7c34223-e61c-455d-b10e-9d11a4f419ca.png">

리액트에서는 state 라는 것을 이용하여 데이터를 보관할수있습니다

# 사용 예
 const [getFreeChampions , setFreeChampions] = useState([]);
 이것을 객체 디스트럭처링 (Object destructuring) 라고합니다
 
 # axios 로 받아온 데이터를 반복하여 그려주기  
 
 <img width="446" alt="스크린샷 2021-10-31 오전 12 57 57" src="https://user-images.githubusercontent.com/69393030/139540389-3f63ead0-3b1f-4d3f-bdaf-405c07b7a5e4.png">
# html 반복하여 그려주기 
<img width="750" alt="스크린샷 2021-11-03 오후 1 10 17" src="https://user-images.githubusercontent.com/69393030/140009025-651de2fb-b75e-4857-acb7-558b61fd27d2.png">

html 을 반복하여 그려주고싶을땐 {반복할데이터.map()}을 이용합니다.

 # react 에서 state 값 변경하기 
 리액트에서 state 값을 변경할때 ex) object , 배열 을 state변경시에는 이렇게 해줍니다.
 
 <img width="768" alt="스크린샷 2021-11-02 오후 5 33 51" src="https://user-images.githubusercontent.com/69393030/139812388-d7b653fc-408f-455a-9813-272d9282edd9.png">ㄷ
사실 기존 배열에서 값을 변경하려면 이렇게 했었지만 
var arr = ['1','22','43'] ;
arr[0] = '변경합니다!';
react 에서 state 를 이용하여 데이터를 변경하고자 할때는 

function changeStatus(){
    //state 변경 방법
    var newArray = [...test];
    newArray[0] = '21312312';
    setTest(newArray);
    
       
  }
  이렇게 해줍니다. 
이것을 js spread operator 라고합니다.



# 조건부 렌더링

리액트에서 (jsx문법) 삼항연산자를 이용하여조건부렌더링을합니다.

<img width="768" alt="스크린샷 2021-11-02 오후 11 13 32" src="https://user-images.githubusercontent.com/69393030/139864172-61c3415f-6da3-4568-ad6c-8653b606bc08.png">
모달창 상태값을 status 에 저장하여 클릭이벤트 실행할때 true , false값을 줍니다. 

<img width="768" alt="스크린샷 2021-11-02 오후 11 13 45" src="https://user-images.githubusercontent.com/69393030/139864208-bfb9a856-f4a7-4fde-93f4-f8eab2d859e5.png">



# props 
-props 란 , 부모컴포넌트에서 정의한 data(state등 의 ) 값을 자식 컴포넌트에서 쓸때 props 를 이용하여 사용할수있게 합니다.
<img width="765" alt="스크린샷 2021-11-04 오전 9 09 05" src="https://user-images.githubusercontent.com/69393030/140235874-a311681f-8ba2-420d-808f-bfdb57f0fe32.png">

자식 컴포넌트에서 상위컴포넌트의 data 를사용하기위해서는 props를 사용하는데,
자식컴포넌트 함수에props를전달해주고, Modal sendData = {test} /> 컴포넌트에 props에대한 정의를 한다.






