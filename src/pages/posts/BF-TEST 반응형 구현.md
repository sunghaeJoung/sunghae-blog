---
title: BF-TEST 반응형 구현
date: '2020년 05월 01일'
categories:
  - project
tags:
  - project
  - bf-test
---

#### 반응형 구현

우리가 설정한 브레이크포인트는 테블릿 780px과 모바일은 420px이지만 앱의 경우에는 기종에 맞게 필요한 사이즈에 맞게 각자 추가하도록 했다.

반응형을 구현하면서 어려웠던 부분은 두 가지가 있었다.

1. 크롬에서는 멀쩡했지만 사파리나 ie로 켰을 경우에는 스타일이 깨지는 현상
2. 개발자 도구를 통해 모바일 버전에서는 안깨지지만 핸드폰으로 확인하면 스타일이 깨지는 것

#### 사파리 반응형

![](https://images.velog.io/images/ppl8709/post/1c24f3d6-fb28-4dab-929b-df74776cb79f/about1.png)

크롬

![](https://images.velog.io/images/ppl8709/post/de98a95e-8ff4-4fde-bfdd-98c1e78a79c7/about2.png)

사파리

css 중 몇몇의 속성을 사파리에서 사용할 경우에는 webkit이란 접두어를 붙여야 한다. 하지만 나의 경우에는 width와 height값이 100%로 인식이 안되는 것이 문제였다. 구글링해보니 사파리에서는 width:100%면 오류가 난다고 한다.

```js
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 40px;
  width: 100%;
  min-width: 230px;
`;
```

해결방법은 width와 max 또는 min-width 둘 다 지정해주는 것! width는 100%로 하고 max 또는 min-width로 컨텐츠의 최대/최소 넓이를 지정해주면 된다.

#### 아이폰으로 개발자도구 확인하기

크롬 개발자도구에 있는 핸드폰 반응형으로 스타일을 맞춰놔도 실제로는 깨지는 경우가 너무 많았다. 그렇다고 수정할때마다 push해서 핸드폰으로 반응하는 것도 한계가 있었는데 아이폰은 맥북에 연결해서 바로 개발자도구를 확인할 수 있었다.

1. 아이폰 설정 -> safari -> 고급에서 **웹속성** 활성화
2. 맥북 safari -> 환경설정 -> 고급에서 **메뉴 막대에서 개발자용 메뉴 보기** 활성화
3. 맥북과 아이폰을 연결한 뒤, 맥북 개발자용 -> 연결된 아이폰 선택

이렇게 하면 아이폰으로 들어간 사이트의 개발자도구를 맥북에서 확인할 수 있고 css도 바로바로 수정해볼 수 있다.
