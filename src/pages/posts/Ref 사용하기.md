---
title: ref와 이미지 onload 사용하기
date: '2020년 06월 01일'
categories:
  - react
tags:
  - react
  - ref
  - onload
---

스크롤 가능한 이미지 리스트를 만드는 중 **스켈레톤 스크린**을 적용해보려고 했다. 

스켈레톤 스크린은 페이스북이나 유튜브 등 많은 사이트에서 사용하고 있는데, 데이터가 로딩되기 전 하얀 빈 화면을 보여주는 것이 아니라 뼈대를 보여주며 사용자에게 대기중이란 느낌을 주며 빠르게 로딩되고 인식하게 한다.

![](https://cdn-images-1.medium.com/max/1600/0*9uxZA3XMHNjJsLT5.png)

페이스북은 규칙적인 레이아웃이였지만 내가 구현해야 하는 페이지는 고정된 width값에 따라 이미지의 height가 각각 다르기 때문에 이미지를 화면에 뿌리기 전 이미지 높이를 구해야만 했다. 

그래서 나는 ref로 돔에 접근한 뒤, 이미지가 렌더되기 전 이미지의 크기를 구하려고 했다. 

#### ref 사용하기

react에서 ref는 DOM에 직접적인 접근을 할 수 있도록 해준다. 나는 리액트 훅스에서 제공하는 함수인 useRef()를 사용해서 돔에 접근했다. 

먼저, useRef를 선언해준 뒤, 접근하고 싶은 요소에 ref={ref}를 넣어준다. 그리고 useEffect에서 접근한 이미지의 높이를 구한 뒤 height라는 state값에 저장을 한 뒤, props값으로 전달해서 높이를 지정했다. 

~~~jsx
import React, { useState, useEffect, useRef } from "react";

const Images = (props) => {
  const ref = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    console.log(ref);
    console.log(ref.current.clientHeight);
  }, []);
  
  return (
    <Image height={height !== 0 && height}>
      <img
        ref={ref}
        src={props.card.urls.small}
        alt=""
      />
    </Image>
  );
};
export default Images;
~~~

콘솔로 ref를 찍은 것을 보면 접근한 요소에 대한 값이 잘 나온다. 이 중에서 나는 clientHeight란 값을 가져와야하는데, 여기서 문제가 발생했다. 

![](https://images.velog.io/images/ppl8709/post/e6172d03-734c-409d-85a4-5132765f9ed2/image.png)

![](https://images.velog.io/images/ppl8709/post/7241da3a-c4de-47d5-98cf-a0709462baa2/image.png)

분명 console.log(ref)에서는 clientHeight값이 잘 나오지만, console.log(ref.current.clientHeight)를 찍으면 0이란 값만 나왔다. 

![](https://images.velog.io/images/ppl8709/post/e236dfa5-b59a-40a9-9ac9-16ee9ad6860b/image.png)

모든 이미지의 clientHeight값이 0으로 나와서 이미지가 렌더되기전이 아닐까?라는 생각을 했고 구글링을 하다가 이미지가 로딩되고 출력되기 전에 onLoad라는 함수를 통해 원하는 값을 얻을 수 있는 블로그를 발견했다. 

#### 이미지 onload

이미지가 출력되는 과정은 **이미지 파일로부터 로딩 -> 로딩된 이미지 출력** 이렇게 이루어진다. onload 함수는 이미지가 로딩되고 로딩된 이미지가 출력되기 전에 실행된다. 

그래서 load라는 상태값을 설정하고 이미지가 로딩되면 이 값이 바뀌면서 ref에 접근하도록 로직을 짰다. 

~~~jsx
import React, { useState, useEffect, useRef } from "react";

const Images = (props) => {
  const ref = useRef();
  const [height, setHeight] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      setHeight(ref.current.clientHeight);
      console.log(ref);
      console.log(ref.current.clientHeight);
    }
  }, [load]);
  
  return (
    <Image height={height !== 0 && height}>
      <img
        ref={ref}
        onLoad={() => setLoad(true)}
        src={props.card.urls.small}
        alt=""
      />
    </Image>
  );
};
export default Images;
~~~

![](https://images.velog.io/images/ppl8709/post/5f210510-b407-41a9-b7d9-dfc1c6df17f1/image.png)

결과적으로 원하는 이미지의 높이가 콘솔에 잘 찍힌다!
그리고 스켈레톤 스크린을 구현하려고 높이값을 구했지만 스켈레톤 스크린은 구현하지 못했다..


