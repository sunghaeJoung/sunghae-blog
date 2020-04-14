---
title: 기업협업 TIL D-12
date: '2020년 4월 3일'
categories:
  - vue
tags:
  - 기업협업
  - vue
  - 코드리뷰
---

도너츠에서 첫번째 코드리뷰 내용

**1. 함수는 직관적이게 작성**

```jsx
async fetchData() {
  let formData = new FormData();
  formData.append("requestPage", this.requestPage);
  formData.append("noticeType", this.noticeType);
  const response = await listPage.list(formData);
  this.noticeList = response.data.result;

// 페이지네이션 번호 범위 지정
this.pageCount = Math.ceil(this.noticeList[0].noticeCnt / 10);

// 날짜계산
for (let i = 0; i < this.noticeList.length; i++) {
  let a = this.noticeList[i].createDate.substr(0, 10);
  let b = a.split("-");
  this.noticeList[i].createDate = b[0] + "." + b[1] + "." + b[2];
 }
}
```

</br>

**수정 전**

fetchData라는 이름의 코드지만, api도 가져오고 날짜계산도 하고 여러가지 기능을 하고 있어서 코드가 아주 엉망징창이였다.

함수의 이름과 기능이 통일성이 있어야 코드가 직관적이다. 그래서 1개의 함수는 1개의 역할만 하도록 구성하고 10줄 이내로 작성해야한다.

```jsx
async fetchData() {
  let formData = new FormData();
  formData.append("requestPage", this.requestPage);
  formData.append("noticeType", this.noticeType);
  const response = await listPage.list(formData);
  this.noticeList = response.data.result;

// 페이지네이션 번호 범위 지정
this.pageCount = Math.ceil(this.noticeList[0].noticeCnt / 10);
}
```

</br>

**수정 후**

날짜계산은 convertToDate()라는 함수로 따로 빼줬고 fetchData안에는 api를 가져오는 코드만 작성했더니 10줄 이내로 전보다는 직관적이게 구현할 수 있었다!

---

**2. router params**

```jsx
//router index.js
{
    path: '/notice-detail:id',
    name: 'notice-detail',
    component: noticeDetail
},
{
    path: '/notice-detail/:id/:type',
    name : 'detail',
    component: noticeDetail,
}

this.$router.push(`/notice-detail:id=${num}=${this.content.noticeType}`);
// 이렇게 하면 url이 id=2=3이런 식이 아니라 /로 나누어져있음 params 이용하기
```

</br>

**수정 전**

라우터 이동할 때, params를 사용해서 정보를 전달해줘야하는데, 처음에 할때는 약간 야매로 값을 전달했다.

```jsx
this.$router.push({ name: 'detail', params: { id: num, type: type } });
```

</br>

**수정 후**
params로 값을 1개 보낼 때는 수정전의 방법처럼 하면 되는데, 2개 이상 보낼때는 params를 객체로 해서 보내주면 된다. 그리고 url도 직관적으로 설정해주는게 좋은데 예를들면 로그인 페이지에서는 /login, 공지사항 디테일 페이지에서는 /detail-page이런식으로 해주면 좋다!

---

**3. 날짜수정함수**

```jsx
for (let i = 0; i < this.noticeList.length; i++) {
   let a = this.noticeList[i].createDate.substr(0, 10);
   let b = a.split("-");
   this.noticeList[i].createDate = b[0] + "." + b[1] + "." + b[2];
}

convertToDate(date) {
   return new Date(date).toISOString().slice(0, 10);
}
```

</br>

**수정 전**

백에서 날짜를 받을 때, `2020-03-23T17:18:53.000+0000` 이런식으로 데이터가 오기 때문에 우리가 화면에 띄워주고싶은 방식(2020.03.23)으로 바꿔서 뿌려줘야했다. 그래서 날짜 데이터 배열을 반복문을 돌려서 자르고 붙이는 방식으로 구현했다.

```jsx
convertToDate(date) {
   return new Date(date).toISOString().slice(0, 10);
}
```

</br>

**수정 후**
</br>
아주 길었던 코드가 이 한줄로 해결 가능했다!

---

**4. v-model**

```jsx
<select v-model="termsNo" @change="selectTerms()">
  <option v-for="(version, i) in versions" :key="i" :value="i">
      {{ version.version }}
  </option>
</select>

// 함수정의
selectTerms: function() {

var numCheck = document.getElementById("num");
this.termsNo = numCheck.options[document.getElementById("num").selectedIndex].value;
}
```

</br>

**수정 전**
</br>
option을 클릭했을 때, 클릭한 값을 인지하려고 change함수를 사용해서 구구절절한 코드가 완성됐다.

```jsx
<select v-model="termsNo">
  <option v-for="(version, i) in versions" :key="i" :value="i">
      {{ version.version }}
  </option>
</select>
```

</br>

**수정 후**
</br>
vue에는 값을 바로바로 인지해서 알려주는 양방향 데이터 바인딩을 해주는 아주 편리한 v-model이란 기능이 있다. v-model을 사용하면 굳이 change이벤트를 사용해서 변화하는 값을 인지할 필요도 없다. 그래서 수정전에 구구절절했던 코드를 v-model을 사용해서 함수없이 5줄로 구현할 수 있었다. vue를 사용한다면 v-model이란 기능을 꼭 활용해야할 것 같다.!
