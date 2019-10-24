# Quest 00. Hello, git


## Introduction
* git은 2018년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`
  * `git add`
  * `git commit`
  * `git push`
  * `git pull`
  * `git branch`
  * `git stash`
* GitHub

## Resources
* [git, 분산 버전 관리 시스템](http://www.yes24.com/24/goods/3676100?scode=032&OzSrank=1), 인사이트
* [GitHub 사용 설명서](http://www.yes24.com/24/Goods/17638082?Acode=101), 교학사
* https://try.github.io
* http://pcottle.github.io/learnGitBranching

## Checklist
* 버전 관리 시스템은 왜 필요한가요?
  * **협업**하기 좋다.
  * **변경을 관리**하기 좋다.
* git 외의 버전관리 시스템에는 무엇이 있나요? git은 그 시스템과 어떤 점이 다르며, 어떤 장점을 가지고 있나요?
  * SVN
    * git과의 차이점
      * **중앙 집중형**이라 **직관적**이다. 작업 -> Commit -> End
    * 장단점
      * 명령 체계가 단순하여 배우기 쉽지만, 여러 사람이 동일한 파일을 작업하고 있을 때 **충돌이 발생할 위험이 크다.**
  * Mercurial
    * git과의 차이점
      * Linux보다 Windows에서 성능이 더 좋다.
    * 장점
      * **GUI**가 git보다 좋다.
      
* git의 `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
  * clone
    * 정체 및 용도
      * 다른 경로에 있는 로컬 저장소를 로컬로 복제
      * 원격 저장소를 로컬로 복제
    * 사용법
      * 로컬 -> 로컬
        * git clone /로컬/저장소/경로
      * 원격 -> 로컬
        * git clone 사용자명@호스트:/원격/저장소/경로
  * add
    * 정체 및 용도
      * 새로 생성되거나 변경된 파일 등을 git이 추적하도록 설정
    * 사용법
      * git add <파일 이름>
      * git add *
  * commit
    * 정체 및 용도
      * 작업 중인 변경 사항을 로컬 저장소에 반영
    * 사용법
      * git commit 
  * push
    * 정체 및 용도
      * 로컬 저장소의 변경사항을 원격 저장소에 반영
    * 사용법
      * git push [원격 저장소 이름] [브랜치 이름]
  * pull
    * 정체 및 용도
      * 원격 저장소의 변경사항을 로컬 저장소에 반영
      * pull = fetch(가져오기) + merge(합치기)
    * 사용법
      * git pull
  * branch
    * 정체 및 용도
      * 독립적으로 진행하는 작업 단위
      * 기본적으로 master branch가 존재함
      * 개발 / 변경할 기능 별로 branch를 생성하여 작업 후 master에 merge함
    * 사용법
      * git branch [브랜치 이름] 
  * stash
    * 정체 및 용도
      * 현재의 작업 상황을 임시로 저장함 (stash : STAged SnapsHot)
      * 아직 commit 하기에는 이른 상황에서 다른 작업을 수행해야 할 때 주로 사용함
    * 사용법
      * git stash : 현재 상황 임시 저장
      * git stash apply : 가장 최근의 stash를 적용
      * git stash drop : 가장 최근의 stash를 제거
      * git stash pop : 가장 최근의 stash를 적용 후 제거 (apply + drop)

## Quest
* github에 가입한 뒤, [이 커리큘럼의 github 저장소](https://github.com/KnowRe/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* [GitHub Desktop](https://desktop.github.com/)을 다운받아 설치합니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.
