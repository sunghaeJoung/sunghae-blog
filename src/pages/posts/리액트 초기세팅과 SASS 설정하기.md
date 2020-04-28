---
title: 리액트 초기세팅과 SASS 설정하기
date: '2020년 02월 18일'
categories:
  - react
tags:
  - react
  - sass
---

포트폴리오를 만들기위해 Create-React-App을 다시 설치하고 sass를 설정하는 법을 적어보려고 한다!

**📌 리액트 초기세팅**

1. CRA를 설치하고 싶은 파일로 이동 후 터미널에 아래와 같이 입력한다. portfolio를 쓰는 부분은 파일명이기 때문에 원하는 파일이름으로 작성 뒤 설치해주면 된다.

```js
npx create-react-app portfolio
```

2. src 폴더에서 이름에 *test가 들어가있는 파일, serviceWorker.js, logo.svg, App.css*를 삭제한다.

3. 페이지의 구성을 한눈에 볼 수 있도록 폴더를 만든다. 폴더 구성은 이전 글에서 확인할 수 있다 !
   [링크텍스트](https://velog.io/@ppl8709/Instagram%EC%9D%84-react%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B8%B0)

4. 페이지이동을 위해 라우터도 설치해준다! 라우터설치하는법 역시 링크의 포스팅을 확인하면 된다.

5. index.js파일에서 App.js -> Routes.js로 파일명을 바꾸고 필요없는 부분을 삭제한다. 3번째, 5번째, 12번째 그리고 주석처리된 부분을 삭제해주면 된다!

```js
import React from 'react';
import ReactDOM from 'react-dom';
✂️import './index.css';✂️
import App from './App';✂️
✂️import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));

✂️// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA✂️
✂️serviceWorker.unregister();✂️
```

</br>
</br>

**📌 SASS 설정**
</br>
sass는 css를 효율적으로 작성할 수 있도록 도와주는 프로그램으로 기존의 css의 단점을 보완한다. 예를들어, 코드중복을 줄이거나 자주쓰는 스타일값을 변수를 사용하여 저장할 수 있다.

sass를 설정하는 법은 터미널에서 아래의 명령어를 입력하여 설치한 뒤 모든 css파일의 이름을 css->scss로 변경하면 된다.

```js
npm install node-sass
```
