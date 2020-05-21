---
title: Harry Potter 2탄
date: '2020년 03월 16일'
categories:
  - project
tags:
  - project
  - harry potter
---

첫번째 sprint기간에는 회원가입&로그인 페이지를 맡아서 하게 됐다!

![](https://images.velog.io/images/ppl8709/post/4e0d0f29-273e-404c-9309-2b1615c92f94/image.png)

**🗂 객체로 컴포넌트 관리하기**

해리포터 사이트는 회원가입이 총 3단계로 이루어져있고 url은 고정인 채 1~3단계가 순차적으로 진행되는 형식이였다. 그래서 처음에는 signup이란 하나의 컴포넌트에 1~3단계를 모두 작성했더니 원하는 부분을 찾기가 어려워지는 문제가 생겼고 가독성이 좋지 않았다.

멘토님들이 의견을 주셔서 step1, step2, step3를 각각 컴포넌트화하고 state값에 따라서 해당 스텝으로 바뀔 수 있도록 수정했다.

```jsx
// 자식 컴포넌트를 관리하는 상태
this.state = {
  step: 1,
};

// 자식 컴포넌트를 객체로 관리
const obj = {
  1: <StepOne />,
  2: <StepTwo />,
  3: <StepThree />,
  4: <Finish />,
};
```

</br>

obj라는 객체에 step을 나타내는 key값과 값에 따른 자식 컴포넌트를 value값으로 두었다.

```jsx
return (
  <SignUpComponent>
    <Header hide={step}>
      {step !== 1 && <ArrowIcon onClick={this.goBack} />}
      <Step>
        <Number>01</Number>
        <ProgressBar>
          <Line step={step}></Line>
        </ProgressBar>
        <Number>03</Number>
      </Step>
      <CloseIcon onClick={this.goToMain} />
    </Header>
    {/* 회원가입 단계별 컴포넌트  */}
    {obj[step]}
  </SignUpComponent>
);
```

</br>

단계별로 보여져야되는 부분에는 `{obj[step]}` 객체를 호출해서 state값이 바뀔 때마다 해당하는 컴포넌트가 보여질 수 있도록했다. 결론적으로 약 200줄 이상 되던 내용을 70줄 이내로 줄일 수 있었다.

---

**🤬 fetch**
</br>
이번 플젝에서 최대의 고비였던 회원가입 페이지 fetch...🤢
이전에 인스타그램 클론했을 때도 참고하고 다른 팀 코드도 참고하고 이곳저곳 다 물어보고다녔는데도 절대 안돼서 이게 내 문제인지 백 문제인지도 몰라서 너무 답답했었다.

- cors 오류
  </br>

  ![](https://images.velog.io/images/ppl8709/post/a1db9112-877a-4fef-bc08-2d92733bb56e/Cap%202018-01-28%2015-36-22-126.png)

구글링해서 찾아봤더니 cors 문제는 *mode: "no-cors"*를 넣어주면 해결된다고 해서

```jsx
 fetch(`${Address}/user/sign-up`, {
      method: "POST",
      mode: "no-cors",
```

이렇게 추가해줬지만 fetch 이후 진행되는 then함수에서 원하는 응답을 받을 수 없었다. 이거때문에 몇시간을 알아봤는데 멘토님께 여쭤본 결과 프론트에서도 cors 해결할 수 있지만 백이 하는 일이라구... 어이없지만 간단하게 해결!

- json 오류

```jsx
componentDidMount = () => {
    fetch(`${Address}/user/email-check`, {
      method: "POST",
      headers: {
        Authorization: token
      },
       body: JSON.stringify({
        email: this.state.email
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("응답 도착", res);

      // 이메일 오류 없을 때,
        if (res.status === 200) {
          return;
        }
     // 중복된 이메일일 때,
        else if (res.message === "DUPLICATED_EMAIL") {
          this.setState({
            emailError1: true
          });
        }
      // 이메일 형식이 맞지 않을 때,
        else if (res.message === "INVALID_EMAIL") {
          this.setState({
            emailError2: true
          });
        }
      });
```

</br>

위의 코드는 가장 기본적인 fetch 코드이다. 이메일 중복 검사를 할 때, 입력된 이메일을 body에 담아서 백에 보냈고 응답에 따라 처리를 해야했다. 그런데 `res.status === 200`을 작성하고 fetch를 보내면 json 어쩌구 저쩌구 거리는 오류가 뜨고 그래서 `.then(res => res.json())`을 주석처리하고 다시 실행하면 오류는 해결됐지만, 응답 메시지를 받을 수 없었다.

이런 오류는 보통 백에서 정보를 보낼 때, body에 담아서 보내주는데 `json()` 함수를 통해 body에 담겨져 있는 내용을 json 형태로 받아볼 수 있다.

나의 문제는 res.status === 200 인 경우에는 body에 아무 정보도 담겨져있지 않기 때문에 json() 함수가 실행할 내용이 없었기 때문에 오류가 뜨는 것이였다. 그래서 결국에는 백에 statue가 200일 경우에도 메시지를 보내달라고 부탁해서 해결했다.
