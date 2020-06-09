
# 1. 콘텐츠 구성
jekyll 에서는 콘텐츠를 구성할 때 6가지 기법을 사용한다.
## 1.1 Pages
가장 기본적인 방법으로 독립적인 콘텐츠를 구성한다. 

현재 프레임워크에서 root 경로에 html 파일 추가하여 만들수 있으며 
디렉터리와 함께 구성할 수 있다. 

또한 .md 확장자 파일을 만들면 html을 자동으로 변환해 준다. 

접근 경로는 root 경로 사이트의 호스트 주소이므로 다음과 같이 접근할 수 있다. 
~~~bash
├──about.md     # http://example.com/about.html
├──index.html   # http://example.com/
├──contact.html # http://example.com/contact.html
~~~

만약 사이트에 많은 페이지가 있어야 한다면 하위 폴더를 만들어 분리 할 수 있다. 
~~~bash
.
├── about.md          # => http://example.com/about.html
├── documentation     # folder containing pages
│   └── doc1.md       # => http://example.com/documentation/doc1.html
├── design            # folder containing pages
│   └── draft.md      # => http://example.com/design/draft.html
~~~
### 1.1.1. URL 변경 
만약  URL 에서 접근 경로를 실제 경로와 다르게 하고 싶다면 Front Matter에 permalinks를 설정해 주면 된다.

~~~bash
permalink: /about/
~~~

## 1.2. Posts
jekyll은 당신이 필요한 곳에 블로그 글을 제공해준다. 

### 1.2.1 Posts Folder
_posts 폴더는 블로그 글이 있는 곳이다. 

기본적으로 Markdown, HTML은 지원한다.
### 1.2.2 Posts 생성
Posts를 만들기 위해서는 _posts 디렉터리를 생성하고  다음과 같은 형식으로 파일을 생성해야 한다. 

~~~bash
YEAR-MONTH-DAY-title.MARKUP
# YEAR는 4자리 연도 
# MONTH 2자리
# DAY 2자리 
~~~

위 형식으로 만든 파일은 다음과 같다. 
~~~
2011-09-01-how-to-write-a-blog.md
~~~

블로그 파일에는 반드시 front matter를 명시하여 layout 메타 데이터를 추가해줘야한다. 
기본적으로 post를 명시한다. 

~~~
---
layout: post
title:  "Welcome to Jekyll!"
---

# Welcome

**Hello world**, this is my first Jekyll blog post.

I hope you like it!
~~~

### 1.2.3 이미지 및 자원 포함시키기
블로그에 이미지 파일이나 자원을 포함시킬 경우 root 디렉터리에 assets 폴더를 만들고 그 안에 이미지, 파일, 또는 다른 자원을 저장하고 다음과 같은 경로로 포함시킬수 있다. 
~~~md
... which is shown in the screenshot below:
![My helpful screenshot](/assets/screenshot.jpg)
~~~

pdf의 경우 다운로드 받는다. 
~~~
... you can [get the PDF](/assets/mydoc.pdf) directly.
~~~
### 1.2.4 게시물 목록 구성
다른 페이지에서 Liquid 태그를 사용하면 손쉽게 게시물 목록을 구성할 수 있다. 
~~~html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
~~~
### 1.2.5 Tags and Categories
