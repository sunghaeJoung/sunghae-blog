---
title: Styled Component
date: '2020년 03월 10일'
categories:
  - react
tags:
  - react
  - styled-component
---

**👀 styled-component란?**
</br>
css파일없이 자바스크립트 파일 안에서 css작업을 하는 스타일 기법으로 _CSS in JS_ 라이브러리 중 가장 많이 사용되는 라이브러리

**설치**
`npm install --save styled-components`

Styled Icon : react-icon같이 styled-component 전용으로 나온 아이콘 라이브러리
`npm install styled-icons --save`

**🤔 사용법**

```jsx
import React, { Component } from 'react';
import styled from 'styled-components';

export default class App extends Component {
  render() {
    return (
      <SignUp>
        <Container>Hello</Container>
      </Signup>
    );
  }
}

const SignUp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202020;
`;

const Container = styled.div`
  width: 315px;
  margin: 0 auto;
  color: #fff;
  font-family: 'Sofia Pro';
`;
```

'styled-component'를 import해준 뒤, 지정한 변수(SignUp, Container)에 원하는 태그(div 등등)을 style과 함께 담아준다.

---

- props 지정

```jsx
<Button CREATE PASSPORT</Button>
<Button account>USE POTTERMORE ACCOUNT</Button>

  const Button = styled.button`
  width: 280px;
  padding: 18px 31px;
  border-radius: 30px;

  color: ${props => props.account ? "#ffffff"}
`;
```

'account'라는 props를 통해 하나의 버튼에만 css를 추가 할 수 있다. 만약 props로 여러개의 스타일을 추가하고 싶으면 상단에 styled-component를 import한 부분에 css 메소드를 추가하고 아래와 같이 작성하면 된다.

```jsx
import styled, {css} from "styled-components";

 ${props =>
    props.account &&
    css`
      margin-left: 10px;
      color: #ffffff;
      background-color: transparent;
    `}
```

---

- state값을 props 넘기기

```jsx
this.state = {
  button: false
}

<Button button={this.state.button} onClick={() =>
  {button && this.handleClick();}}
  >
  CONFITM
</Button>
```
