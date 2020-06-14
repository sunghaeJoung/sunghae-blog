---
title: Closure
date: '2020년 05월 18일'
categories:
  - dev
tags:
  - closure
  - hooks
---

### Closure 란?

내부함수가 외부함수의 지역변수에 접근할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

```jsx
function outter() {
  let title = 'heyhey';
  return function () {
    alter(title);
  };
}
let inner = outter();
inner();
```

outter에 inner 함수가 담긴 뒤 outter 함수는 실행이 끝나서 소멸되는 것이 자연스럽지만, inner()를 실행했을 때, "heyhey"가 출력된다.
<br />
즉, 외부함수(outter)의 지역변수인 **title이 소멸되지 않음**을 의미!!

- **내부함수와 외부함수**
  <br />
  내부함수 : 함수 안에서 또 다른 함수를 선언할 수 있는데, 안에 선언된 함수(inner)
  <br />
  외부함수 : 내부함수 감싸고 있는 함수(outter)

```jsx
function outter() {
  function inner() {
    let title = 'heyhey';
    alert(title);
  }
  inner();
}
```

<br />

- **언제 클로저를 사용할까?**
  <br />
  private 속성을 사용하고 싶을 때!
  <br />
  private 속성은 객체의 외부에서 접근할 수 없도록 감춰진 속성이나 메소드를 의미함 이를 통해 **객체 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일** 수 있다.

```jsx
function fruit(name) {
  return {
    get_name: function () {
      return name;
    },
    set_name: function (_name) {
      name = _name;
    },
  };
}

let red_fruit = fruit('apple');
let yellow_fruit = fruit('banana');

alert(red_fruit.get_name()); // apple
alert(yellow_fruit.get_name()); // banana

red_fruit.set_name('cherry');

alert(red_fruit.get_name()); // cherry
alert(yellow_fruit.get_name()); // banana
```

<br />
red_fruit와 yellow_fruit은 같은 회부함수 fruit를 공유하고 있지만 각각 다른 결과값 가진다.
<br />

그 이유는, 외부함수가 실행될 때마다 각각 새로운 지역변수(name)을 포함하는 클로저를 생성하기 때문에 red와 yellow_fruit는 **독립된 객체**가 될 수 있는 것이다.

또한, name은 `get_name`을 통해서만 접근할 수 있고 `set_name`을 통해서만 수정 가능하다.

기본적으로 자바스크립트는 private한 속성을 지원하지 않는데 **클로저의 특성을 이용하여 private한 속성**을 사용할 수 있게 된다.

➕ 면접스터디를 하면서 알게 된 사실이지만 react의 hooks와 closure가 아주 밀접한 관련이 있다는 것! 이 부분에 대해서는 공부가 더 필요할 것 같다.
<br />

관련 자료는 👉🏻 https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/
