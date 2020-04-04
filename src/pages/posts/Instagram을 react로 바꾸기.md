---
title: Instagram을 react로 바꾸기
date: '2020년 2월 17일'
tags:
  - react
categories:
  - react
---

지난번에 했던 인스타그램 클론 코딩을 리액트로 바꾸는 작업을 했다.
생활코딩 리액트 부분을 보고 따라했지만 아직까지 _props state_ 등의 개념 정리가 되어있지않은 상태에서 진행했다.
먼저 해야할 것들은!

```
1. create-react-app 다운
2. 파일 나누기
3. 로그인페이지 작성 및 로그인 이벤트 추가
4. 메인페이지 작성 및 댓글 이벤트 추가
```

인스타그램 클론코딩과 다른점은 **리액트 라우터**를 사용해 로그인페이지와 메인페이지가 연동된다는 점! 그리고 로그인할 때, 조건을 넣어서 내가 지정해놓은 id와 pw인 경우에만 페이지가 연동되도록 만들었다.

![](https://images.velog.io/images/ppl8709/post/4d87c030-a836-481a-9b7c-3c6ba3e1027e/image.png)

리액트에서 파일구조는 전체 페이지가 어떻게 구성되어있는지 한눈에 알 수 있도록 만들어져있어야 한다. 그래서 src폴더 안에 page와 component 각각의 폴더를 만들고 page에는 가장 큰 페이지의 파일들 ex) Login.js, Main.js 등을 css 파일과 함께 넣는다. component폴더에는 큰 페이지에서 나오는 component들을 넣어서 페이지 구조를 확인할 수 있도록 한다.

---

** 📝 배운 내용**

- 이미지 추가
  url 형식의 이미지 파일은 src를 이용해 이미지를 추가해주면 된다. 하지만 폴더에 저장되어있는 이미지를 넣을 경우에는 component를 import해주는 것 처럼 이미지의 경로를 import하고 **src={name}** 을 해서 추가한다.

```js
import heart from './image/heart.png';
import talk from './image/talk.png';
```

- react-router
  create-react-app파일에는 라우팅을 위한 로직이 없기때문에 react-router를 추가해서 페이지를 연동시켰다.

1. `npm install react-router-dom --save` 설치
2. index.js에서 App.js 대신
   `ReactDOM.render(<Routes />, document.getElementById("root"));`로 변경
3. App.js파일에서 routes 컴포넌트 구현
   나는 파일명도 App.js -> Routes.js로 바꿨다!

```js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
```

**Route 이동하는 법**
Link태그를 사용하는 법과 withRouter HOC로 구현하는 법이 있었는데 나는 두번째 방법을 사용했다. 그 이유는 button태그를 Link태그로 바꿨더니 스타일속성이 바뀌면서 css를 다시 수정해줘야했기 때문이다.

button 태그 안에 `onChange`로 이벤트함수를 설정하고 아래와 같이 조건문을 사용
`this.props.history.push(경로)`로 인해 라우팅이 된다.

```js
goToMain = (e) => {
  this.state.id === '_sunghae__' && this.state.pw === '1234'
    ? this.props.history.push('/Main')
    : alert('아이디 또는 비밀번호가 맞지 않습니다.');
};
```

- css에서 html에 스타일값
  인스타그램 클론을 했을때는 로그인, 메인을 연동한다는 생각을 하지 못해서 로그인의 html태그에 스타일값을 지정했다. 그리고 이번에 두개의 파일을 합쳤더니 메인페이지에도 html의 스타일값이 적용되서 다시 수정해야만 했다. 그래서 결론은 html에는 모든 페이지에 공통적으로 들어갈 스타일값만 설정하기!

---

** 💡어려웠던 부분**

- 메인페이지 댓글추가 이벤트

1. button에 onClick 함수를 사용했지만 input으로 들어오는 값이 없었다. 그 이유는 input이랑 button이 어느 한쪽에 포함된 태그가 아니라 각각 개별적인 태그였기 때문에 버튼에서 들어오는 값을 인식하지 못했다. 그래서 **button에는 onClick, input에는 onChange 이벤트**를 각각 주었다.

2. 저장된 댓글을 하나의 배열로 만들기(concat)
   보통 배열 어떠한 값을 추가할 때, push를 많이 사용했는데 이번에는 concat을 사용했다. 하지만 리액트에는 **불변성유지**때문에 state 내부의 값을 직접적으로 수정하면 안된다. concat은 push와 같이 배열에 어떠한 값을 추가하지만 기존 배열을 복제한 뒤 값을 추가한다.

```js
this.state = {
  comment: '', //input창
  comments: [], //입력된 댓글을 포함하고있는 배열
};
```

input을 통해 들어온 값을 comment에 저장하고 click했을 때, concat을 사용하여 그 값이 배열에 추가되도록 했다.

```js
addComment = (e) => {
  this.setState({
    comments: this.state.comments.concat(this.state.comment),
    comment: '',
  });
};
```

3. map함수를 통해 댓글 추가
   추가된 댓글로 이루어진 comments라는 배열에 map함수를 사용했다. 함수의 리턴값으로는 배열 하나하나에 기존 댓글의 구조가 추가될 수 있도록 했다. 여기서 주의해야할 부분은 **꼭 매개변수를 설정해줘야 하는 것!!** 함수를 실행할 때, 받은 인자(여기서는 comments 배열)에 map을 돌려야하기 때문에 지정을 해줘야한다. 또한, key도 설정을 해주어야하는데, 값 각각이 갖는 고유한 값으로 설정을 하는게 좋다고 한다. (index로 하는 방법은 추천하지 않음)

```js
cmtUpdate = (arr) => {
  return arr.map((cmt) => (
    <div className="comment-list" key={cmt}>
      <span className="comment-id">_sunghae__</span>
      <span className="comment-text">{cmt}</span>
      <img src={heart} />
    </div>
  ));
};
```
