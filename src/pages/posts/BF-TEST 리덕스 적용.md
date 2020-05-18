---
title: BF-TEST 리덕스 적용
date: '2020년 05월 18일'
categories:
  - project
tags:
  - project
  - bf-test
---

![](https://images.velog.io/images/ppl8709/post/c7199502-dab3-4892-a2a8-87d074c627c8/main.png)

처음에는 contributor 페이지만 아이콘을 클릭했을 때, 창이 켜지고 닫기 버튼을 누르면 닫히는 걸로 기획했었고 딱히 리덕스를 써야하는 필요성을 못느꼈다.

하지만 나중에 기획이 조금씩 수정되면서 contributor페이지 뿐만 아니라 모든 페이지를 열고 닫을 수 있게 변경됐고 테스트의 결과를 전달하는 과정에서 리덕스를 사용하면 더 쉽게 상태를 관리할 수 있을 것 같은 생각에 리덕스를 적용하기로 했다.

---

### 리덕스란?

리덕스는 전역상태관리를 해주는 도구로 리액트를 사용하다보면 부모에서 정의한 state를 부모 -> 자식 -> 또 그 자식으로 전달해아한다. 그렇게되면 필요하지 않는 컴포넌트에서도 state를 전달해야하는 불필요한 일이 발생한다. 하지만 리덕스를 사용하면 state를 전역으로 관리하기 때문에 필요한 컴포넌트에서 state를 바로 사용할 수 있다.

#### 주요 용어

- **store**

  state를 전역으로 모아두는 것으로 한 애플리케이션당 하나의 스토어를 가질 수 있다.

- **action**

  객체 형식이고 상태를 변화시키는 주체이다.

```jsx
export const showResult = () => {
  return {
    type: 'SHOW_RESULT',
  };
};

export const closeResult = () => {
  return {
    type: 'CLOSE_RESULT',
  };
};
```

<br />

- **reducer**

  액션을 실행시키는 순수함수이고 두 개의 파라미터를 받는다. 순수함수는 동일한 입력값에 대해 동일한 출력값을 일관되게 제공하는 함수이다.

```jsx
const INITIAL_STATE = {
  res: false,
  ques: false,
};

export default function controlResult(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_RESULT':
      return { ...state, res: true };
    case 'CLOSE_RESULT':
      return { ...state, res: false };
    default:
      return state;
  }
}
```

<br />

### 리덕스 흐름

1. view단에서 사용자가 어떠한 액션을 취함
2. action함수 호출
3. dispatcher에서 액션을 감지
4. reducer에서 액션타입을 읽고 해당하는 객체 반환
5. state를 받을 view단으로 상태 전달

![](https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif)

### 리덕스 적용 방법

1. `npm install --save redux react-redux` 설치

2. index.js에서 래핑해주기

```jsx
//index.js
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Redux/rootReducer';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
```

3. Redux 폴더 만들기
   폴더는 src폴더 안에 Redux폴더를 만들고 그 안에 Actions와 Reducers폴더 그리고 rootReducer.js 파일을 만들어준다. 그리고 액션과 리듀서를 정의해준다.

![](https://images.velog.io/images/ppl8709/post/596905e8-7065-42dd-a1ed-7d8560b85b99/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-05-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.44.17.png)

4. rootReducer.js에 정의하기
   rootReducer는 각각의 기능별로 만들어 둔 리듀서를 하나의 스토어로 합치는 역할을 해준다.

```jsx
import { combineReducers } from 'redux';
import controlResult from 'Redux/Reducers/controlResult';
import getResult from 'Redux/Reducers/getResult';
import controlQuestion from 'Redux/Reducers/controlQuestion';
import controlDetail from 'Redux/Reducers/controlDetail';
import controlAbout from 'Redux/Reducers/controlAbout';

const rootReducer = combineReducers({
  controlResult,
  getResult,
  controlQuestion,
  controlDetail,
  controlAbout,
});

export default rootReducer;
```

5. 필요한 컴포넌트에 적용하기

```jsx
// 사용하고 싶은 액션 import
import { openAbout, closeAbout } from 'Redux/Actions';

// 컴포넌트 하단에 사용하고자 하는 state 정의
const mapStateToProps = (state) => {
  return {
    about: state.controlAbout.about,
  };
};

// state와 액션을 연결
export default connect(mapStateToProps, {
  openAbout,
  closeAbout,
})(Main);
```
