---
title: Instagram 클론코딩
date: '2020년 02월 07일'
categories:
  - react
tags:
  - react
---

인스타그램 클론 코딩한 내용을 정리해보려고 한다!
먼저 해야 할 것들!

```
1. 로그인과 메인페이지 html / css
2. 로그인페이지 event 구동
3. 메인페이지 event 구동
```

</br>

#### 완성본

**로그인페이지**
</br>

![image.png](https://images.velog.io/post-images/ppl8709/78fdb850-494b-11ea-831f-9f89e374eb27/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/00d68670-494d-11ea-bba6-bface0b0977e/image.png)

event : 아이디와 비밀번호를 각각 1개 이상씩 입력했을 때 로그인 버튼의 `opacity : 1;`이 되고 버튼 활성화

</br>
</br>

**메인페이지 피드**
![image.png](https://images.velog.io/post-images/ppl8709/b409afd0-494b-11ea-bba6-bface0b0977e/image.png)

</br>

**메인페이지 댓글**

![image.png](https://images.velog.io/post-images/ppl8709/539c40c0-494d-11ea-90e3-b3cd32390043/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/40a18ca0-494d-11ea-b564-7f576e64beb6/image.png)

event : 댓글을 입력하고 `게시버튼`을 누르면 입력한 댓글이 댓글창에 저장되고 `del`버튼을 누르면 삭제

---

#### 어려웠던 부분

1. flex box에 대한 개념을 제대로 알고있지 못해서 로그인박스를 가운데로 옮기는데 몇시간을 보냈던 것 같다.

2. click 이벤트를 구현할 순 있었지만 조건을 걸때, input과 input.value에 접근하는 것의 차이를 제대로 알지 못했다.

3. 메인페이지처럼 크게 3개로 틀을 잡고 세부적인 틀을 잡는게 처음이라 어떤걸 먼저 해야할 지 막막했다.

---

#### 배운 내용

- flex box

1. 정렬하고 싶은 자식의 부모에 display:flex를 주면 자식들을 inline요소로 변하기 때문에 따로 display:inline을 주지 않아도 된다.
2. 정렬하고 싶은 자식의 부모에 display:flex를 주는 것! 자식들 개별적으로 위치를 옮기는 것이 아닌 주어진 속성에 맞게 일괄적으로 정렬된다.

![image.png](https://images.velog.io/post-images/ppl8709/68650be0-4952-11ea-b564-7f576e64beb6/image.png)

- value값 접근
  로그인페이지에서 조건걸때, `input === undefined`를 if문 안에 쓰면 input에 아무것도 입력이 되지 않는다! 라고 생각을 했지만 이 의미는 input태그 안에 아무것도 없다는 뜻! 결론적으로 input에 입력된 값에 접근하려면 input.value를 써야 한다.

![image.png](https://images.velog.io/post-images/ppl8709/55367680-4952-11ea-b564-7f576e64beb6/image.png)

- position: sticky
  스크롤을 하더라도 메인페이지의 오른쪽에 있는 `div`를 따라오게 하고싶어서 `fixed`를 썼더니 화면에 안보이는 부분은 짤린채 `fixed`가 적용이 됐다. 그래서 `absolute + fiexd`인 `sticky`란 속성을 사용했더니 문제가 해결됐다.

![image.png](https://images.velog.io/post-images/ppl8709/3f8ef1e0-4952-11ea-b564-7f576e64beb6/image.png)

#### 버튼은 나중에 추가해야지
