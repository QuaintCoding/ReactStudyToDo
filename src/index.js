//jsx문법을 사용하기 위해서는 react모듈을 import 
import React from 'react';
//react-dom모듈은 react 앱을 최초 렌더링 하기위해 엔트리 포인트에서 사용
import ReactDOM from 'react-dom';
//css파일을 import 구문으로 가져오기(webpack)
//번들러란 웹개발자가 하위 툴 그룹을 관리하는 데 도움을 주는 도구. 플러그인을 사용하여 하위 툴을 관리하는 meta-tool
import './index.css';
//react 컴포넌트를 가져오는 코드, 컴포넌트는 react 웹에서 기본적인 화면을 구성하는 단위
import App from './App';
//네트웍이 느리거나 오프라인인 상태에서도 온라인인것 처럼 리소스들을 캐싱해서 보여주는 모듈
//reportWebVitals란 React의 성능을 측정
//import reportWebVitals from './reportWebVitals';


//let element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


ReactDOM.render(<App />, document.getElementById("root"));