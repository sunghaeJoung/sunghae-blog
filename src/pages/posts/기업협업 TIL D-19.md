---
title: 기업협업 TIL D-19
date: '2020년 04월 10일'
categories:
  - vue
tags:
  - 기업협업
  - vue
---

공지사항같은 경우에는 백오피스에서 작성 후 저장을 누르면 사용자단에서 보여진다. 백오피스의 글 작성 부분을 맡은 분이 Quill editor라는 라이브러리를 사용해서 에디터를 구현했는데, 작성할 때 볼드, 이탈릭, 언더라인이 잘 입혀지지만 사용자단에서는 적용이 안됐다.

프로젝트를 진행할 때도 라이브러리에 스타일이 안입혀지는건 어쩔 수 없기 때문에 이상하다고 생각할 필요도 없다고 느꼈기 때문에 이번에도 quill-editor를 설치해서 css에 이것저것 다 추가해서 작성해봐도 적용이 안돼서 포기하 사수분께 여쭤봤다.

개발자도구를 통해서 이것저것 확인하시더니 백에서 넘어올 때, 모두 p태그 안에 담겨서 오는걸 확인하시고 css에 추가했는데도 적용이 안됐다.

```css
<style scoped lang="scss">

    .ql-editor {
      margin-bottom: 24px;

      p strong em u {
        font-style: italic;
        font-weight: bold;
        border-bottom: 1px solid black;
      }
      p strong em {
        font-style: italic;
        font-weight: bold;
      }
      p strong u {
        font-weight: bold;
        border-bottom: 1px solid black;
      }
      p em u {
        font-style: italic;
        border-bottom: 1px solid black;
      }
      p strong {
        font-weight: bold;
      }
      p em {
        font-style: italic;
      }
      p u {
        border-bottom: 1px solid black;
      }
    }

</style>
```

<br />

그리고 style 태그에서 해당 컴포넌트에만 스타일을 적용시키려고 작성했던 **scoped를 삭제하고 글로벌**로 적용시켜주니까 안먹던 스타일이 다 적용됐다.. 다른 스타일이 조금 깨지긴 했지만 쉽게 수정가능한 부분이였다. 사수분이 말씀하시길 라이브러리를 적용해서 스타일을 입힐 때 scoped로 작성하면 안먹는 경우가 종종 있다고 하셨다!!
