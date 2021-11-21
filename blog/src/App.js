import React, {useState} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('남자 코트 추천')

  const dummyData = '강남 고기 맛집'

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ text }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
