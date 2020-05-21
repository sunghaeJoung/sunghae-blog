---
title: Harry Potter 4탄
date: '2020년 03월 18일'
categories:
  - project
tags:
  - project
  - harry potter
---

2차 프로젝트 중간 코드리뷰 받은 내용을 수정해보려고 한다!

**🗂 config.js로 api 관리**

1차 프로젝트때는 백엔드 api 주소가 자주 바뀌지 않아서 따로 관리할 필요성을 느끼지 못했는데 이번에는 효율적으로 관리해보려고 config.js을 만들었다.

백엔드 api는 서버를 껐다가 키거나 다른 이유들로 인해 자주 주소가 바뀌기 떄문에 fetch한 파일을 일일이 다 찾아서 수정을 해야하는데 이런 번거로움을 한번에 해결할 수 있다!
일단 config.js는 src파일 바로 밑, components / pages 폴더와 동등한 곳에 위치한다.

백엔드 api 주소를 각각 변수에 담아서 저장하고 필요한 컴포넌트에 위에처럼 import 해줘서 사용하면 끝!

```jsx
//config.js
export const Address = 'http://52.78.241.65:8000';
export const AWS = 'http://52.78.241.65:8000';

//fetch하는 컴포넌트
import { Address } from '../../../config';

fetch(`${Address}/user/email-check`);
```

</br>

config.js를 사용하면 나중에 백엔드 api가 바꼈을 때, config파일에 들어가서 수정해주만 해주면 끝나기 때문에 api를 관리하기에 아주 효율적이다.

</br>

---

</br>

**📝 utils.js로 자주 사용하는 코드 관리**

코드리뷰 받기 전에는 비밀번호 유효성 검사하는 코드를 밑에처럼 작성했다. 하지만 반복적인 코드 예를들면 숫자, 소문자, 대문자를 변수에 넣은 코드와 test코드가 반복적으로 사용되는게 비효율적이라는 멘토님의 조언에 따라 이 부분을 utils.js를 통해 관리하려고 수정했다.

```jsx
checkPw = () => {
  const { password, following1, following2 } = this.state;
  const check_num = /[0-9]/;
  const check_eng_big = /[a-z]/;
  const check_eng_small = /[A-Z]/;

  if (check_num.test(password) && check_eng_big.test(password) && check_eng_small.test(password)) {
    this.setState({
      following2: true,
    });
  } else {
    this.setState({
      following2: false,
    });
  }
};
```

</br>

utils.js는 config.js와 같은 곳에 위치하고 보통 반복적인 코드를 이곳에 정의해서 사용한다! config파일과 마찬가지로 변수에 정의한 뒤, 필요한 곳에 import해서 사용하면 된다.

```jsx
// signup steptwo 정규식
export const test_num = /[0-9]/.test;
export const test_eng_big = /[a-z]/.test;
export const test_eng_small = /[A-Z]/.test;

import { test_num } from '../../../utils';
import { test_eng_big } from '../../../utils';
import { test_eng_small } from '../../../utils';

checkPw = () => {
  if (`${test_num}(password)` && `${test_eng_big}(password)` && `${test_eng_small}(password)`) {
    this.setState({
      following2: true,
    });
  } else {
    this.setState({
      following2: false,
    });
  }
};
```

</br>

---

</br>

**👣import 파일순서**

보통 회사에서는 혼자 개발을 하는 것이 아니라 여러명의 개발자가 함께 개발을 하기 때문에 누가 어느 부분을 맡아서 작업한지 모를 정도로 코드 작성 스타일을 똑같이 맞춰야 한다! 그 중 하나로 import 파일 순서가 있는데 보통 아래의 순서로 작성한다고 한다.

1. React
2. 외부 라이브러리 (큰 frame work -> UI)
3. config, utils 같은 외부 파일
4. 경로가 먼 컴포넌트부터 가까운 컴포넌트
5. css

```jsx
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Address } from '../../config';
import Header from '../../Components/Header/Header';
import TypeOne from './Type/TypeOne';
import TypeTwo from './Type/TypeTwo';
import TypeThree from './Type/TypeThree';
```

</br>

**import 파일 경로 줄이기**
</br>
Route.js import된 파일의 경로를 보면 폴더안에 파일 한개만 있는 경우 아래처럼 같은 이름의 경로가 중볻되서 작성된다.

```jsx
import Quizzes from './Page/Quizzes/Quizzes';
import QuizList from './Page/Quizzes/QuizList';
```

</br>

중복되는 부분을 index.js를 통해 줄일 수 있다!
Quizzes라는 이름의 폴더 안에 Quizzes.js라는 파일 한개만 존재한다면 index.js 파일을 추가해서 Quizzes.js안에 있는 내용을 복사 + 붙여넣기 한 후 Quizzes.js 파일을 삭제 !

그리고 import 경로를 `import Quizzes from "./Page/Quizzes";`라고만 작성해주면 자동으로 Quizzes폴더 안에 있는 index.js에 접근해서 파일을 읽어온다. 하지만 모든 파일이 이렇게 작성되어 있을 때, 오류가 발생한다면 오류파일명이 `index.js`로 뜨기때문에 오류가 발생한 파일을 찾는데 문제가 생긴다.

그래서 index.js 파일을 생성하지만 Quizzes.js의 내용을 복붙하지는 않고 `export { default } from "./Quizzes";` 이런 식으로 Quizzes.js를 토스해주면 된다.
