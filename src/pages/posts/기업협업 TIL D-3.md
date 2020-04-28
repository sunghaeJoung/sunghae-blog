---
title: 기업협업 TIL D-3
date: '2020년 03월 25일'
categories:
  - vue
tags:
  - 기업협업
  - vue
---

**✍🏻 오늘 할 일**

SNS 링크 공유하기 구현 !!!

트위터, 네이버카페, 라인, 카카오톡, 페이스북 총 다섯개 SNS를 사용해서 링크공유를 구현해야하는데 카카오톡은 사전에 api 등록을 해야해서 등록이 필요없는 네가지만 구현했다.

---

SNS마다 페이지 주소가 다르고 메타태그가 다르기 때문에 메뉴얼에 맞춰서 코드를 복붙만 해주면 간단하게 구현이 가능했다. 하지만 대부분 자바스크립트 구현에 관한 설명뿐이였고 나는 vue를 사용했기 때문에 어디에 코드를 작성해야하는지 고민하는 데 시간이 많이 걸렸다.

다들 기본적으로 제공하는 버튼 디자인이 있는데 나는 디자이너님이 만들어두신 이미지가 있었기 때문에 그걸 사용해서 넣어주었다. 그리고 click이벤트를 통해 실행되는 함수에 링크가 공유되는데 필요한 코드들을 작성했다.

```jsx
//html
 <div class="facebook" @click="ShareFacebook(data)">
	<img src="../../assets/images/sns/facebook.png" alt="facebook" />
 </div>

 //script
 //부모에서 공유될 url이 data란 props로 전달

ShareFacebook: function(data) {
	var shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + data.url;
	document.location = shareURL;
}

```

<br />
자바스크립트 기반의 설명들을 보면 html의 head에 script태그로 넣어줘야하는 부분이 있는데, vue에서 구현할 땐 버튼과 클릭이벤트로 실행될 함수에 공유 url만 작성했더니 간단하게 구현이 가능했다.
