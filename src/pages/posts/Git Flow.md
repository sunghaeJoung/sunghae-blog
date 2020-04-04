---
title: Git Flow
date: '2020년 3월 23일'
categories:
  - dev
tags:
  - git
---

#### Git Flow란?

Git Flow는 Git을 가장 효율적으로 사용할 수 있는 패턴이고 기업에서 협업할 때 많이 사용되는 방식이다.
지금까지는 master branch와 기능별로 나누어진 feature branch 총 2가지의 브랜치를 사용한 반면
Git Flow에서는 5개의 브랜치를 사용한다.

1. develope
   개발의 기준이 되는 브랜치로 기존의 master 브랜치의 역할을 한다. feature 브랜치는 develope 브랜치를 기준으로 만든다.

2. master
   배포된 코드들만 들어있는 배포용 브랜치이다. 배포된 코드를 master 브랜치를 통해 관리하기 때문에 배포되는 것과 상관없이 계속해서 개발을 할 수 있다.

3. release
   master와 같은 배포용 브랜치이지만 아직 테스트하기 전 코드들로 배포 될 예정인 코드들이 있는 브랜치이다. 만약 테스트 도중 버그가 생긴다면 release에서 수정 후 master와 develope 브랜치에 push해서 코드를 업데이트 해야한다.

4. hotfix
   말 그대로 급하게 코드를 수정해야 할 경우에 사용하는 브랜치이다. 사용중인 서버에 오류가 생겼을 때 master를 기준으로 hotfix 브랜치를 만든 다음 수정하고 master와 develope 브랜치에 push 해서 코드를 최신화해준다.

![](https://images.velog.io/images/ppl8709/post/ee071d15-ad5a-41c1-9581-5f0d81d113f7/image.png)
