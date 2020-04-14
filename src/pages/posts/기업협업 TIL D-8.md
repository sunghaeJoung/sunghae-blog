---
title: 기업협업 TIL D-8
date: '2020년 3월 30일'
categories:
  - vue
tags:
  - 기업협업
  - vue
  - router
---

**✍🏻 오늘 할 일**
notice-list 페이지에서 detail 페이지로 유동라우터 연결

---

list 페이지에서 목록을 클릭했을 때, id값을 넘겨서 해당하는 데이터를 받아와서 뿌려주는 작업을 해야하는데! 프로젝트하면서 몇번 해봤더니 그나마 쉽게 할 수 있었다!

1. param 설정하기
   path뒤에 param으로 받은 값을 임의로 설정해준다. 나는 id로 설정!

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

![](https://images.velog.io/images/ppl8709/post/029e38b7-31ef-4156-a39a-d6aa7ce9331e/image.png)

vue에서는 url 주소에 #이 기본적으로 붙는 것 같은데 이걸 없애주려면 `mode : 'history'`를 적어주어야 한다.

2. 라우터 이동 방식
   react에서 라우터 이동 방식이 링크와 withRouter HOC 두 가지 방식이 있는 것 처럼 vue에도 두가지가 있다. 간단한 페이지 이동은 링크방식을 사용하면 되지만 나는 이동과 동시에 param을 같이 넘겨야하기때문에 프로그래밍 방식을 사용했다.
   원래는 id한개만 백에 보내면 되는 줄 알았는데 알고보니까 id와 카테고리 type 이렇게 두개를 보내야했고 두개의 값을 어떻게 보내는지 잘 몰르겠어서 일단 여러가지를 해본다음에 성공한 방법이 결국 이 방법뿐,,, 뭔가 이상하지만 일단은 이렇게 받는거로 설정했다.

```jsx
// notice-list
// template
  <div @click="goToDetail(data)" v-for="data in datas" :key="data.noticeNo" class="detail"> </div>

// js
  goToDetail(data) {
  let num = data.noticeNo;
  let type = data.noticeType;
  this.$router.push(`/notice-detail:id=${num}=${this.content.noticeType}`); }
```

<br />

3. axios로 데이터 받기
   라우터로 이동한 페이지에서 전달받은 param로 데이터 호출을 해야하면 끝!

```jsx
// notice-detail
  methods: {
    async fetchData() {
      let id = this.$route.params.id;
      let type = this.$route.params.type;
      var formData = new FormData();
      formData.append("noticeNo", id);
      formData.append("noticeType", type);
      const res = await noticeDetail.list(formData);
      this.content = res.data.result[0];
    },
```
