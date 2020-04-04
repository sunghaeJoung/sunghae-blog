---
title: 기업협업 TIL D-8
date: '2020년 3월 30일'
categories:
  - vue
tags:
  - 기업협업
  - vue
---

**✍🏻 오늘 할 일**
notice-list 페이지에서 detail 페이지로 유동라우터 연결

---

list 페이지에서 목록을 클릭했을 때, id값을 넘겨서 해당하는 데이터를 받아와서 뿌려주는 작업을 해야하는데! 프로젝트하면서 몇번 해봤더니 그나마 쉽게 할 수 있었다!

1. param 설정하기

```jsx
// router -> index.js 파일

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/notice',
      name: 'notice',
      component: noticeList,
    },
    {
      path: '/notice-detail:id',
      name: 'notice-detail',
      component: noticeDetail,
    },
  ],
});
```

vue에서는 url 주소가
