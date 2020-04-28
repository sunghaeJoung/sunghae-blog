---
title: Git과 Github
date: '2020년 02월 12일'
categories:
  - dev
tags:
  - git
---

### Git이란?

VCS(Version Control System), 버전관리시스템으로 소스코드를 효율적으로 관리하기위해 사용한다. VCS중에서도 Git을 많이 사용하는 이유는 소스코드를 관리하는 것 이외에도 협업을 할 때 굉장히 유용하기 때문이다.

Git을 사용해야하는 이유는 무엇일까?
하나의 프로젝트를 진행하다보면 하나의 파일을 수정하고 또 수정하는 일이 자주 발생하고 어떤 파일을 어떻게 수정했고 어떤 것이 최신버전의 파일인지 파악하기가 힘들다. Git을 사용한다면 이러한 문제를 해결할 수 있다.

### Git repository

파일을 저장하는 저장소로 다른 사람들과 공유가능한 `리모트저장소`와 파일작업이 이루어지는 `로컬저장소` 두 가지가 있다.

#### remote repository

중앙에서 원본파일이 저장되어있는 저장소로 여러사람이 공유가능하다. github가 일종의 서버저장소이다.

#### local repository

리모트저장소에서 clone 또는 pull 받아와 이루어지는 모든 파일작업이 이루어지는 저장소이다.

파일작업이 리모트저장소에서 이루어진다면 수정할때마다 늘어나는 파일을 한눈에 알아보기 힘들기때문에 모든 작업은 로컬에서 이루어지고 최종본만 remote에 push해서 관리하는 것이다.

![](https://images.velog.io/images/ppl8709/post/ef242d31-2851-4fa5-9112-15959028ffd0/image.png)

그럼 clone과 pull의 차이 그리고 push는 무엇일까?

- clone : 리모트에서 제일 처음 repo를 받아오는 것
- pull : clone한 파일을 다시 받아는 것
- push : 파일을 수정후에 다시 서버에 저장하는 것

### Git 3가지 상태

#### modified

git에 commited되지 않은 수정된 파일

#### staged

commited를 하기 위한 단계로 수정한 파일을 git에 중간저장하는 것. commit는 파일의 최종본인 경우에 하는 것이기 때문에 **최종파일은 아니지만 저장이 필요한 경우** staged를 한다.

#### commited

수정된 파일이 git에 저장된 상태

![](https://images.velog.io/images/ppl8709/post/91034005-0dcf-4874-97d8-8037238e65cc/image.png)

---

### Branch와 Merging

branch는 여러 개발자들이 동시에 다양한 작업을 할 수 있게 만들어준다. 즉 여러명의 개발자들이 독립적으로 작업을 할 수 있다.
기준이 되는 branch를 `master branch`라고 하는데 기준이 되는 repo가 저장되어 있다. 저장소를 처음 만들면 이곳에 위치한다.

master branch에서 만들어진 branch를 `feature branch`라고 한다. 우리는 master에서 파일작업을 하는 것이 아닌 파일을 feature로 따와서 작업을 하기 때문에 독립적으로 작업할 수 있다.

작업이 완료된 파일을 commit하면 완료된 feature branch들이 master branch와 합치게 되는데 이러한 과정을 `Merge`라고 한다. 또한 한번 merge가 이루어진 feature branch는 재사용하지않는다. !!

여러명의 개발자가 각각 다른 파일을 작업한다면 문제가 없겠지만 하나의 파일에서 같은 부분을 같이 작업을 하는 경우에 작업이 끝난 파일을 master에 push하면 파일간에 `conflict(충돌)`이 생긴다.

충돌이 발생했을 때, `git status`를 하면 충돌이 일어난 파일을 알 수 있고 파일을 수정한 뒤에 다시 master로 push해주면 해결할 수 있다.

![](https://images.velog.io/images/ppl8709/post/dfa2040f-cfa1-4885-bbc8-966335c031d8/image.png)

### merge와 conflict 해결

1. master branch에서 `git branch festure/game` branch 생성
2. `git checkout feature/game`(branch 이동) 후 파일 작업
3. 작업이 끝난 파일 **Add Commit Push**
4. 작업내용이 담긴 PR(pull request) 작성

**만약 충돌이 일어났다면!!**
![](https://images.velog.io/images/ppl8709/post/81990cd2-baf2-4042-8a0d-abfc6651c358/image.png)

5. feature/me에서 `git pull origin master`를 통해 파일을 가져옴 _(이때에는 master로 이동하지 않는다!)_
6. 충돌된 파일 수정 후 **A C P**
   _(PR은 작성할 필요 없이 첫번째 commit때 작성한 PR에 가서 확인한다)_

---

### 기본적인 Git Command

**git init**
</br>
소스코드들이 있는 디렉토리를 git repository로 만들기 위해 사용하는 명령어로 git repo로 만들어야 gti 버전으로 관리가 가능하다.
</br>

**git add**
</br>
수정된 파일들을 staged로 옮기고 싶을 때 사용하는 명령어이고 git repo에 새롭게 추가된 파일을 staged로 옮길 때, 사용한다. 새롭게 추가된 파일은 `untracked`이라고도 한다.
</br>

**git commit**
</br>
staged 상태인 파일들을 commit할 때 사용하는 명령어이다.
</br>

**git diff**
</br>
staged 되기 전 즉, modified 상태인 파일들의 수정사항을 알아보고 싶을 떄 사용하는 명령어이다.
</br>

**git status**
</br>
현재 상태를 보여주는 명령어로, modified, staged된 파일의 전체적인 상황을 보여준다.
</br>

**git log**
</br>
지금까지 commit된 내역을 보여준다.
</br>

**git rm**
</br>
원하는 파일을 git repo에서 지워준다.
</br>

**git mv**
</br>
파일을 git repo 상에서 이동시키거나 rename할 때, 사용한다.
</br>

**git branch**
</br>
branch를 생성해준다.
</br>

**git checkout**
</br>
branch에서 이동할 때 사용한다.
