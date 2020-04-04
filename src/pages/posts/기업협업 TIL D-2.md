---
title: 기업협업 TIL D-2
date: '2020년 3월 24일'
categories:
  - vue
tags:
  - 기업협업
  - vue
---

**✍🏻 오늘 할 일**

1. vue 초기세팅하기
2. sass 설치 및 적용하기
3. 공지사항 디테일 페이지 레이아웃

---

**🖥 진행과정**

- 초기세팅
  vue-cli를 사용하여 설치했고 axios랑 route도 함께 설치해줬다.
  기본 파일구조!

![](https://images.velog.io/images/ppl8709/post/04140119-0f2f-46c7-83db-232decbf491d/image.png)

    api : axios 정의해둔 코드를 모아두는 곳 리액트에서 사용한 config.js와 비슷하다.
    assets : font와 image 파일들을 모아두는 곳
    components : 재활용하는 컴포넌트들을 모아두는 곳
    route : route 정의해둔 코드를 모아두는 곳
    views : 리액트에서 pages와 같은 곳

- sass 설치

```
npm install sass-loader node-sass --save-dev
```

sass 설치 후, vue에서 사용하기 위해서는 style 태그에 sass를 사용한다 라고 작성을 해야한다.
원래 vue에서 scoped라고 쓰지 않으면 스타일 값이 global로 적용되기 때문에 해당 컴포넌트에서만 스타일을 적용시키고 싶으면 scoped를 꼭 적어야하지만, sass는 굳이 scoped를 쓰지않아도 해당 컴포넌트에만 적용이 되는 것 같다. (사실 이 부분은 잘 모르겠다..)

그리고 common.scss처럼 global로 스타일을 입히려면 vue-loader를 설치해서 어떤 폴더가 생기고 거기에서 global로 적용을 해야하는 것 같았다. 하지만 뭐가 문제인지 우리는 **필요한 loader가 모두 설치되있는데도 폴더가 따로 생기지 않아서 어쩔 수 없이 App.vue에서 \*를 사용해서** 모든 태그에 공통 스타일을 적용시켰다.

```vue
//App.vue

<style lang="scss">
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-family: SpoqaHanSans;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
}
</style>
```

- 공지사항 레이아웃
  우리끼리하는 프로젝트가 아니라 회사 관련된 작업들이기 때문에 어디까지 공개할 수 있는지 잘 모르겠어서 말로 구구절절 적는 수밖에 없는게 아쉽지만....
  일단 기본 html, css는 리액트에서 한거랑 거의 똑같기 때문에 하루만에 끝낼 수 있었다. 해당페이지를 sns로 링크 공유할 수 있게 적용시켜야하는데 오늘 검색해서 자료를 찾아보고 내일 본격적으로 적용시킬 예정이다.

---

** 🤔 느낀점**

vue가 진입장벽이 낮고 처음 배우기 좋은 프레임워크라는 이야기를 들었는데 확실히 처름 리액트를 배울때보다는 쉬운 느낌이였다! 리액트에서 메소드를 정의하는 곳이 딱 정해지지않고 class 밖이나 리턴되는 곳에 적어도 괜찮았었는데 vue에서는 script의 methods 객체로 메서드들을 관리하는게 신기했고 편리한 느낌이였다.

그리고 제플린을 보고 기본적인 레이아웃을 잡는데 css가 전부 다 나와있어서 훨씬 편리했고 적혀있는 css를 그대로 다 복붙하는게 아니라 필요한 부분만 적용하는 등 선택적으로 사용해야 한다는 걸 느낀 하루였다.
