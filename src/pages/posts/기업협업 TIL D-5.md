---
title: 기업협업 TIL D-5
date: '2020년 03월 27일'
categories:
  - vue
tags:
  - 기업협업
  - vue
  - axios
---

**✍🏻 오늘 할 일**

1. axios로 back-end api 가져오기

목요일에 약관동의 페이지까지 레이아웃을 다 끝내고 api가 나오면 데이터를 붙이는 일만 남았다. 지금까지는 fetch를 사용해서 api를 받아왔었는데 회사에서는 axios를 사용한다해서 새롭게 배워보기로 했다!

**fetch vs axios **

- fetch

1. import하지않고 사용가능
2. 지원하지않는 브라우저가 있음

- axios

1. fetch에서 지원하지않는 기능 지원
2. IE까지 대부분의 브라우저를 지원

각자 편한걸 사용하면 될 것 같고 간단한 경우에는 fetch를 사용하고 조금 더 기능이 필요하다면 axios를 사용하는 것도 좋을 것 같다!

---

**axios 사용법**

vue 초기세팅할 때, axios도 함께 설치해줬기 때문에 설치 이후부터 작성하려고 한다.
axios를 필요한 파일 안에 바로 작성해서 사용하는 게 아니라 api폴더 안에 index.js에 정의하고 필요한 부분에 import해서 사용하려고 한다.

```js
//api > index.js
import axios from 'axios'

// axios 인스턴스를 만들 때 기본 url 설정
const instance = axios.create({
    baseURL: "",
});

// 필요한 api 설정
export const policy = {
    list() {
        return instance.post('api/terms/list', {
        // header나 body에 담아야 할 부분이 있을 때, 이곳에 작성
        })
    }
}

//policy.vue
// index.js에서 필요한 api 호출
import { policy } from "../api/index";

  methods: {
    async fetchData() {
      const res = await policy.list();
      this.content = await res.data.result;
      console.log("res", this.content);
    }
```

fetch는 비동기함수이기 때문에 fetch가 끝난 이후에 데이터를 가지고 실행할 부분을 then함수를 사용해서 정의해줬다. async와 await도 then과 비슷한 기능을 하는 비동기처리 패턴이다. 이렇게 작성하면 axios를 통해 데이터를 가져올 수 있다.

---

**form-data**

![](https://images.velog.io/images/ppl8709/post/3819b1a1-1680-4911-8f31-3b08e1bf0555/image.png)

데이터를 보내는 형식중에 JSON을 사용했었는데 이외에도 다양한 형식들이 있다. 그중에서 axios를 통해 form-data 형식으로 데이터를 body에 담아 보내보려고 한다.
일단 axios를 실행하는 함수 부분에 form-data를 정의하고 key, value값을 append를 사용해서 담아준다. 그리고 policy.list함수의 인자로 정의한 변수를 보낸다.

```js
//policy.vue
import { policy } from "../api/index";

  methods: {
    async fetchData() {
      // form-data 정의
      var bodyFormData = new FormData();
      bodyFormData.append("categoryNo", this.categoryNo);
      const res = await policy.list(bodyFormData);
      this.content = await res.data.result;
      console.log("res", this.content);
    }

// api > index.js
    export const policy = {
    list(formData) {
        return instance.post('api/terms/list', formData)
    }
}
```
