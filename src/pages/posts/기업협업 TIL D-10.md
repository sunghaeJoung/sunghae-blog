---
title: 기업협업 TIL D-10
date: '2020년 4월 1일'
categories:
  - vue
tags:
  - 기업협업
  - vue
  - gitignore
  - 절대경로
---

**🚫 gitignore**

소스트리를 사용해서 깃헙 관리를 하고 있는데 매번 push를 할때마다 모듈파일이 같이 떠있었서 어쩔수없이 모듈을 포함한 수정한 파일 전부를 add해서 push하곤 했었다. 이 문제는 우리가 따로 **.gitignore** 파일을 만들어놓지 않았기 때문에 발생한 문제였다.

모듈같은 용량이 큰? 파일들을 매번 깃헙에 올리지않고 package.json파일만 올려서 모듈을 관리했었는데 깃헙에 올리고 싶지 않은 파일을 관리하는 것이 .gitingore 파일이다. npm으로 설치해서 파일을 생성하는 방법도 있었는데 그냥 **.gitignore**이라는 이름의 파일을 생성한뒤 내용을 작성해주면 된다.

.gitignore 파일 위치는 package.json과 같이 폴더 최상단에 위치한다. 우리팀은 모두 맥이랑 vue를 사용했기 때문에 이거에 맞는 파일 내용을 구글링해서 복사 + 붙여넣기하면 끝!

```
### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

### VisualStudioCode Patch ###
# Ignore all local history of files
.history

### Vue ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_components

*.sublime*

psd
thumb
sketch
```

<br />

**🗺 jsconfig.json**

jsconfing.json은 파일을 import할 때 상대경로가 아닌 절대경로로 작성할 수 있게 해주는 파일이다. 이 파일 역시 폴더 최상단에 위치하고 파일을 만들어준 뒤, 내용을 복사 + 붙여넣기 해주고 경로를 작성할 때,`@/~~~` 이런 식으로 사용하면 된다.

```js
{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "~/*": [
          "./*"
        ],
        "@/*": [
          "./src/*"
        ],
      }
    },
    "exclude": [
      "node_modules",
      "dist"
    ]
}
```
