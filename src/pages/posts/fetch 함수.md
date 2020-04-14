---
title: fetch 함수
date: '2020년 2월 23일'
categories:
  - react
tags:
  - react
  - fetch
---

부트캠프 첫주차에 만든 인스타그램을 리액트로 바꾸는 것까지 진행했다. 이번에는 백엔드에서 API를 받아와서 로그인이 될 수 있도록 작업했다.

### fetch 함수

fetch함수는 API를 사용하여 백엔드 서버와 비동기 요청을 하는 방식 중 하나이다. 아래의 코드는 로그인을 위한 방식이기 때문에 사전에 회원가입이 되어있어야 한다. 나는 postman을 통해 백엔드로부터 정보를 받아 회원가입을 진행했고 `sunghae`, `1234`가 각각 아이디와 비밀번호이다.

- **method**
  </br>
  method는 _GET POST DELETE_ 등이 있는데, GET은 어떠한 정보를 가져올 때, POST는 어떠한 정보를 백에 보낼 때, DELETE는 단어 그대로 삭제할 때 사용한다. 메서드의 디폴드값은 GET이기 때문에 아무런 정보를 적지 않으면 GET으로 적용된다. 나는 로그인을 할 예정이기 때문에 정보를 보내는 POST 메서드를 사용했다.

- **headers**
  </br>
  API 응답에 대한 헤더정보를 담고있다.

- **body**
  </br>
  전달하고자 하는 응답 내용이다. 백과 통신할 때는 *객체*로 통신하기 때문에 객체타입으로 작성해야한다.

method, headers, body는 전달하고자하는 정보에 대한 정보이기 때문에 정보를 가져올 때, 즉 GET하는 경우에는 작성해줄 필요는 없다.

```js
fetch('http://localhost:8000/login/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'sunghae',
    password: '1234',
  }),
})
  .then((response) => response.json())
  .then((response) => {
    if (response.token) {
      localStorage.setItem('wtw-token', response.token);
    }
  });
```

</br>
</br>

### then 함수

자바스크립트에서 함수는 동기함수, 비동기함수로 나뉜다. 우리가 작성한 코드들은 위에서부터 아래로 순차적으로 코드가 실행되고 하나의 코드가 종료되지않는다면 다음 코드로 넘어가지 않는다. 이것이 `동기함수`이다.
API를 호출할 때, 사용하는 fetch 함수는 대표적인 `비동기함수`이다. 그렇기때문에 API호출하는 과정이 끝나지 않더라도 자동적으로 다음 코드로 넘어간다. 하지만 API로부터 받아온 정보를 사용할 필요가 있는 경우에 `.then`함수를 쓰는 것이다!

then을 쓰면 그 뒤에 있는 내용들, 위의 코드에서는

```js
`(response => response.json())``(response => {
  if (response.token) {
    localStorage.setItem('wtw-token', response.token);
  }
})`;
```

두 부분이 서버응답이 끝나면 실행된다.
