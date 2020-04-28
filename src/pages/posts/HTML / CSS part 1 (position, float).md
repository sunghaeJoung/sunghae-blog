---
title: HTML / CSS part 1 (position, float)
date: '2020년 01월 08일'
categories:
  - html/css
tags:
  - css
---

- 포지션(position) 속성
- float에 대해서

## 1. 포지션(position) 속성

화면상에서 요소의 위치를 결정하는 속성이다. static, relative, fixed, absolute 네 가지의 속성이 있다.

### static

입력하지 않아도 기본적으로 적용이 되어있는 속성이다.

```jsx
<div>static 속성 적용</div>
<div style="position:static;">이것도 static 속성 적용</div>
```

</br>

### relative

기본 포지션에서 top, right, bottom, left를 이용하여 상대적인 위치를 지정한다.

![image.png](https://images.velog.io/post-images/ppl8709/201d8aa0-3279-11ea-8bf4-01ed95e74660/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/2b255540-3279-11ea-8bf4-01ed95e74660/image.png)

기본 포지션을 기준으로 안쪽으로 이동한다. 만약 top:-15px을 주면 위로 15px이 이동한다. 또한, relative 클래스의 요소가 이동한 자리에는 다른 요소값이 위치하지 못한다.

### fixed

한번 위치가 결정되면 스크롤을 움직여도 정해준 위치에 고정시키는 기능이다.

### sticky

relative 속성처럼 동작하다가 특정 지점에 도착하면 fixed 시킨다.

![image.png](https://images.velog.io/post-images/ppl8709/74f8d450-464a-11ea-8114-f5ac30448666/image.png)

top이 0이 되었을 떄 fixed 됨

### absolute

absolute 부모를 기준으로 상대적인 위치를 설정한다. static을 제외한 position 속성이 부모가 될 수 있고 없다면 body가 기준이 된다.

![image.png](https://images.velog.io/post-images/ppl8709/f170ec90-327a-11ea-ae41-77aa983c87d3/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/fb6a0650-327a-11ea-ae41-77aa983c87d3/image.png)

absolute 요소는 부모인 relative 요소의 상대적인 위치에 고정되기때문에 right:0은 부모의 오른쪽에 0만큼 떨어졌다는 의미이다. 또한, relative의 위치가 변하더라도 absolute는 부모인 relative의 오른쪽에 붙어있다.

---

## 2. float에 대해서

### float

이미지 주위로 텍스트를 감싸기 위해 만들어진 프로퍼티로 페이지 전체의 레이아웃을 잡을 때 사용한다.
![image.png](https://images.velog.io/post-images/ppl8709/0c430100-327d-11ea-b8e7-e905b2bc0ae7/image.png)
float의 프로퍼티값으로는 none(기본값), right, left가 있다.

![image.png](https://images.velog.io/post-images/ppl8709/2c21c460-327e-11ea-a535-0537c4d62786/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/3ee5ff30-327e-11ea-9bd4-af39dc5fdef1/image.png)

오른쪽 가로 정렬의 경우, 먼저 기술된 요소가 가장 오른쪽에 출력된다.

### float 문제 해결

![image.png](https://images.velog.io/post-images/ppl8709/364d4350-327f-11ea-bae4-51ae5dff4738/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/3f382160-327f-11ea-bae4-51ae5dff4738/image.png)

float 속성을 가진 요소는 부모가 높이를 인지할 수 없기때문에 부모를 벗어나는 문제가 발생한다.

![image.png](https://images.velog.io/post-images/ppl8709/57829600-3280-11ea-8ba0-9d75d4f947ab/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/66bf57c0-3280-11ea-8ba0-9d75d4f947ab/image.png)

부모 요소에 overflow:hidden 프로퍼티를 선언하여 해결할 수 있다.
