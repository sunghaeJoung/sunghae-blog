---
title: Git Rebase & Squash
date: '2020년 3월 15일'
categories:
  - dev
tags:
  - git
---

리베이스(rebase)란 말그대로 기준이 되는 베이스를 다시 지정해서 브랜치끼리 합쳐주는 작업이다. 말만 들으면 merge와 무슨 차이가 있나 싶겠지만 나도 처음에 리베이스를 배웠을 때, 굳이 이 작업을 해야하나..?라는 의문이 많이 들었다.

rebase를 하는 이유는 github에 깔끔한 history를 유지하기 위해 사용한다.

![](https://images.velog.io/images/ppl8709/post/a1f6cdb1-4cab-44f8-9761-8d38ce7c4595/git-merge.png)

↑ 기존의 merge를 사용할 때의 모습을 보여주는 이미지다.

common base를 나의 마스터로 pull 받아온 뒤 작업하는동안 마스터는 계속 최신화되고 내가 작업한 내용을 바로 push하면서 새로운 merge commit이 생기게 된다. 결국 history에는 불필요한 commit까지 남게되고 나중에 파일을 수정할 경우에 해당 파일을 찾기가 힘들다.

![](https://images.velog.io/images/ppl8709/post/cb7a4806-da83-48b2-8e80-d4a57bbe2f9c/image.png)

실제로 1차 프로젝트때 우리팀이 남깃 commit들이다. 한눈에 봐도 불필요한 commit들이 있고 깔끔하지않다는 느낌이 든다 ! 내가 한 commit만 3개이고 다른 팀원들이 날린 것까지 생각하면 더더더욱 지저분한 history가 남게된다 😓

![](https://images.velog.io/images/ppl8709/post/ae4c0acc-485b-43b0-a422-0df86c67ed1f/rebase.png)

↑ rebase를 하게되면 이렇게 깔끔한 history를 유지할 수 있게 된다.

</br>

---

**🔎 rebase 방법**

1. 작업한 branch에서 **git add & git commit**까지 진행
2. master로 이동 후 **git pull origin master**로 master를 최신화
3. 작업했던 branch로 다시 이동 후 **git rebase -i master**
   branch로 이동하지않고 master에서 rebase를 할 경우에는 **git rebase -i master (branch name)**
4. commit message 수정
   두개 이상의 commit message가 있다면 **squash**를 통해 여러개의 메시지를 하나의 메시지로 합친 후 rebase가 진행된다
5. squash가 진행된 경우에는 **git rebase --continue**를 통해 rebase를 계속 진행시킴
6. **git push origin (branch name) -f**
   squash를 해서 push하게 되면 깃헙에서는 다른 branch라고 생각하기 때문에 평소 하던대로 push하면 *master를 최신화한 다음 push*하라는 메시지가 뜬다. 그래서 **-f(force)** 명령어를 추가해서 강제로 push해야한다. ❗️-force는 무조건 공유가 안된 branch 즉, 내 branch에서만 해야한다 ❗️

</br>

**📌 깃헙에 pr 날렸는데 conflict 생긴 경우**

1. branch가 아닌 master에서 **git pull origin master**
2. branch로 돌아와서 **git rebase -i master**
3. conflict 해결 후, **git add / git rebase --continue**
4. **git push origin (branch name) -f**
