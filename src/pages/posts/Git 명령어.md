---
title: 'Git 명령어 (feat. 자주 만나는 이슈 정리)'
date: '2020년 07월 05일'
tags:
  - dev
categories:
  - dev
---

위코드에 있는 동안 Git 명령어를 치는게 무섭긴 하지만 나름 잘 사용하고 있다고 생각했다. 
<br />
하지만 회사에서 Git을 사용한 첫날부터 아직 많이 부족하다는 걸 느꼈다..! 🥶
HEAD, cheery-pick, reset 등 처음 들어본 단어랑 명령어들이 엄청 많았고 난 그동안 정말 간단한 명령어만 사용했다는 걸 깨닫고 Git에 관련한 기초 개념과 자주 만나는 이슈를 차곡차곡 정리하며 공부해 보려고 한다.

### Git 기초

#### Git의 3단계

![](https://images.velog.io/images/ppl8709/post/647f8fe4-87fe-47aa-a1bd-9713bf56949e/image.png)

Git은 파일을 세가지 상태로 관리한다.
- modified : 수정한 파일들을 staging area로 올리기 전 단계이다.
- staged : staging area에 위치한 파일들을 commit하기 전 단계이다. 
- committed : 파일들을 local repo에 저장했다는 것을 의미한다.

또한, 우리가 작업하고 repo에 파일을 올리기까지 총 3단계를 거치게 된다. 
- working directory : 실제 파일이 위치한 디렉토리로, 수정할 파일들이 위치한다.
<br />
이곳에 위치한 모든 파일은 **Tracked와 Untracked**로 나뉜다.
    - tracked(관리대상) : 이미 스냅샷에 포함된 파일로 unmodified, modified, staged 상태 중 하나의 상태를 갖는다.
    처음 파일을 clone하면 모든 파일은 tracked이면서 unmodified인 상태이다.
    - untracked(관리대상 X) : tracked 파일이 아닌 모든 파일이 untracked 파일에 해당된다.
- staging area: 수정이 끝나고 commit 전 파일들이 위치하는 곳으로 수정한 파일을 임시저장한다고 생각하면 된다. index라고도 한다.
- .git directory 컴퓨터의 로컬 환경에 위치한 저장소로 remote repo로 push하기 전 파일들이 위치한다.

### file의 라이프사이클 

![](https://git-scm.com/book/en/v2/images/lifecycle.png);


### 자주 만나는 이슈

- 파일 HEAD 바꾸기
- 이미 푸쉬한 커밋 메시지 수정하기



