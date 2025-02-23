# Quest 01. Hello, HTML


## Introduction
* HTML은 HyperText Markup Language의 약자로, 웹 브라우저에 내용을 표시하기 위한 가장 기본적인 언어입니다. 이번 퀘스트를 통해 HTML에 관한 기초적인 사항들을 알아볼 예정입니다.

## Topics
* 브라우저의 역사
  * Mosaic
  * Netscape
  * Internet Explorer
  * Firefox
  * Chrome
  * Safari (for iOS)
  * Edge
* HTML 표준의 역사
  * HTML 4.01
  * XHTML 1.0, XHTML 1.1
  * XHTML 2.0
  * HTML5
    * HTML 5.3
* HTML 문서의 구조
* HTML 문서의 엘리먼트
  * Semantic elements
  * Block-level elements vs Inline elements

## Resources
* [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
* [모던 웹 디자인을 위한 HTML5+CSS3 입문](http://www.yes24.com/24/Goods/15683538?Acode=101), 한빛미디어
* [웹 디자인 2.0 고급 CSS](http://www.yes24.com/24/Goods/2808075?Acode=101), 에이콘출판사
* [StatCounter Global Stats](http://gs.statcounter.com/)

## Checklist
* HTML 4.x 이후의 HTML 표준의 변천사는 어떻게 되나요?
  * XHTML 1.0 -> XHTML 2.0 -> HTML 5
* MS와 IE는 왜 역사에 오점을 남기게 되었을까요?
  * 무겁고 느림
  * 기능이 적음
  * **웹 표준 미준수**
* `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
  * <section> : 컨텐츠의 주제 그룹. 주로 문서를 다른 주제로 구분짓기 위해 사용함
  * <div> : 꾸미고자 하는 컨텐츠 단위?
  * <header> : 페이지의 소개 부분. 제목, 탐색 폼 등이 포함
  * <footer> : 페이지의 마무리 부분. 작성자, 저작권 데이터, 관련 문서 링크 등이 포함
  * <article> : 각기 독립적인 내용을 담는 그룹
* 블럭 레벨 엘리먼트와 인라인 엘리먼트의 차이는 무엇일까요?
  * 블럭 레벨 엘리먼트 : 화면 전체를 범위로 가짐. 줄바꿈이 일어남.
  * 인라인 레벨 엘리먼트 : 화면 일부(자기 자신)만을 범위로 가짐. 줄바꿈이 일어나지 않음.

## Quest
* [이 그림](github.png)은 github의 웹사이트 레이아웃입니다. 이 레이아웃의 정보를 HTML 문서로 표현해 보세요.
* CSS를 전혀 사용하지 않고, 문서의 구조가 어떻게 되어 있는지를 파악하여 구현해 보세요.
  * [CSS Naked Day](http://meiert.com/en/blog/20150319/css-naked-day/)는 매년 4월 9일에 CSS 없는 웹 페이지를 공개하여 내용과 마크업에 집중한 HTML 구조의 중요성을 강조하는 행사입니다.
* 폴더에 있는 `skeleton.html` 파일을 바탕으로 작업해 보시면 됩니다.
