---
title: (2차 프로젝트) Harry Potter 3탄
date: '2020년 03월 17일'
categories:
  - project
tags:
  - project
  - clone coding
  - harry potter
---

해리포터 영화에는 모자를 쓰면 기숙사 배정을 해주지만 웹사이트에는 상황을 보고 선택을 하면 그에 맞는 기숙사가 배정된다. 원래 웹사이트는 30개의 문제가 회원가입한 시점에 따라 랜덤으로 8개씩 나오지만 우리는 문제는 3개를 고정적으로 나오고 선택한 것에 따라 결과만 바꿔주기로 했다.

![](https://images.velog.io/images/ppl8709/post/78a74970-48e7-42ff-93ef-faf31ed9a566/image.png)

**step 3**

3개 각각이 레이아웃이 다르고 마지막 step3에 있는 이미지 슬라이더는 라이브러리를 사용하지 않았고 이 페이지만 class형이 아닌 hook를 사용해서 구현했다.

기본적인 내용은 ↓ 아래 블로그를 참고했다 ↓
https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4

**🔎 Hooks**
</br>
class형에서는 state를 한번에 관리했었는데, hooks에서는 *useState*를 통해 state를 1개씩 관리한다. 그리고 this를 사용하지 않아도 되고 다른 컴포넌트에서 넘어오는 props값은 함수에서 인자를 받는 것 처럼 받아서 사용하면 된다. (arr = props)

`const [(state), (state를 설정하는 함수)] = useState(state의 기본 값)`
width 상태를 통해 이미지의 가로 길이만큼 sliders를 이동시켜 주고 idx 상태를 통해서 전체 이미지 개수를 관리해 줄 예정이다.

```jsx
const StepThree = arr => {
  const [width, setWidth] = useState(0);
  const [idx, setIdx] = useState(0);

  const data = arr.data;
```

</br>
</br>

**📷 이미지 슬라이더 구현**

![](https://images.velog.io/images/ppl8709/post/5e8088ce-2423-4825-89b4-4f21f846c37b/image.png)

- step3 component : 가장 큰 부모 컴포넌트
- slider container : 슬라이더를 감싸는 컴포넌트
- slider frame : sliders 중에서 보여지는 이미지를 감싸는 액자
- sliders : 전체 이미지들

---

1. 이미지 레이아웃 잡기

sliders는 slider frmae을 부모로 하고 슬라이더를 통해 보여질 전체 이미지들이 담겨있다! 난 이부분은 백에서 fetch 받아온 데이터를 사용해줬기 때문에 map을 돌렸다.

```jsx
<SliderFrame>
  <Sliders>
    {data &&
      data.choices &&
      data.choices.map((card, i) => <img key={i} src={card.img} alt="slider"></img>)}
  </Sliders>
</SliderFrame>;

// styled-component
const SlidersFrame = styled.div`
  width: 234px;
  height: 300px;
  margin: auto;
  overflow: hidden !important;
`;

const Sliders = styled.div`
  display: flex;
  width: 936px;

  img {
    width: 234px;
    height: 300px;
    margin: 0 auto;
  }
`;
```

</br>

sliders의 부모인 slider frame에 overflow: hidden을 주면 현재 보여지는 이미지 외의 이미지들은 화면에 안보이게 된다.

---

2. 버튼 누르면 이미지 이동하기

버튼태그의 위치는 slider frames와 동등한 위치에 있어야 한다. 안그러면 slider frame에 overflow:hidden을 줬을 때 같이 사라지게 된다.

```jsx
<SliderFrame>
 <Sliders>
      {data &&
        data.choices &&
        data.choices.map((card, i) => (
          <img key={i} src={card.img} alt="slider"></img>
        ))}
 </Sliders>
</SliderFrame>
<LeftButton />
<RightButton />

```

</br>

이제 onClick 이벤트를 통해 클릭할때마다 state값을 변경시켜서 이미지를 이동시키려고 한다.

```jsx
<LeftButton
  onClick={() => {
    setWidth(width + 234);
  	setIdx(idx - 1);
  }}
/>

<RightButton
  onClick={() => {
    setWidth(width - 234);
  	setIdx(idx + 1);
  }}
/>

// styled-component
const SlidersFrame = styled.div`
  width: 234px;
  height: 300px;
  margin: auto;
  overflow: hidden !important;
`;

const Sliders = styled.div`
  display: flex;
  width: 936px;
  transform: translateX(${props => props.state}px);
  transition: transform 0.5s;

  img {
    width: 234px;
    height: 300px;
    margin: 0 auto;
  }
`;
```

</br>

버튼을 클릭할 때마다 width값이 바뀌고 sliders의 css에 translate를 통해 이미지의 x축을 바꾸고 transition을 줘서 부드럽게 이동할 수 있도록 했다.

➕ 마지막으로 ! sliders의 길이 만큼 이미지가 이동할 수 있도록 button에 조건을 줘야한다!

```jsx
//
{
  width !== 0 && (
    <LeftButton
      onClick={() => {
        setWidth(width + 234);
        setIdx(idx - 1);
      }}
    />
  );
}

{
  textArr && idx !== textArr.length - 1 && (
    <RightButton
      onClick={() => {
        setWidth(width - 234);
        setIdx(idx + 1);
      }}
    />
  );
}
```
