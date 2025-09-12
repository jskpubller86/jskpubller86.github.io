---
title: Django 첫 번째 앱 작성하기 - Part 1
categories: django
tags: [django, python, web-framework, tutorial]
date: 2025-01-27
---

# Django 첫 번째 앱 작성하기 - Part 1

예제를 통해 배워봅시다.

이 튜토리얼에서는 기본적인 설문조사 애플리케이션을 만드는 과정을 단계별로 안내합니다.

## 애플리케이션 구성

이 애플리케이션은 두 부분으로 구성됩니다:

- **공개 사이트**: 사람들이 설문조사를 보고 투표할 수 있는 사이트
- **관리자 사이트**: 설문조사를 추가, 변경, 삭제할 수 있는 사이트

## Django 설치 확인

먼저 Django가 설치되어 있는지 확인해야 합니다. 터미널에서 다음 명령어를 실행하세요:

```bash
# Linux/Mac
$ python -m django --version

# Windows
> py -m django --version
```

Django가 설치되어 있다면 설치된 버전이 표시되고, 설치되어 있지 않다면 "No module named django" 오류가 발생합니다.

이 튜토리얼은 Django 5.2를 기준으로 작성되었으며, Python 3.10 이상을 지원합니다.

## 프로젝트 생성하기

Django를 처음 사용한다면 초기 설정을 해야 합니다. Django 프로젝트를 위한 코드를 자동으로 생성해야 하는데, 이는 Django 인스턴스에 대한 설정 모음으로 데이터베이스 구성, Django 특정 옵션, 애플리케이션별 설정을 포함합니다.

### 1. 프로젝트 디렉토리 생성

코드를 저장할 디렉토리로 이동하여 `djangotutorial`이라는 새 디렉토리를 만드세요:

```bash
$ mkdir djangotutorial
```

### 2. Django 프로젝트 부트스트랩

다음 명령어를 실행하여 새 Django 프로젝트를 부트스트랩하세요:

```bash
$ django-admin startproject mysite djangotutorial
```

이 명령어는 `djangotutorial` 디렉토리 안에 `mysite`라는 프로젝트를 생성합니다.

**주의**: 프로젝트 이름을 Python이나 Django의 내장 구성 요소와 같은 이름으로 지정하지 마세요. 특히 `django`(Django 자체와 충돌)나 `test`(내장 Python 패키지와 충돌) 같은 이름은 피해야 합니다.

### 3. 생성된 파일 구조

`startproject` 명령어가 생성한 파일들을 살펴보겠습니다:

```
djangotutorial/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

#### 각 파일의 역할:

- **`manage.py`**: Django 프로젝트와 상호작용할 수 있는 명령줄 유틸리티
- **`mysite/`**: 프로젝트의 실제 Python 패키지 디렉토리
- **`mysite/__init__.py`**: 이 디렉토리가 Python 패키지임을 알려주는 빈 파일
- **`mysite/settings.py`**: Django 프로젝트의 설정/구성 파일
- **`mysite/urls.py`**: Django 프로젝트의 URL 선언 파일 (사이트의 "목차")
- **`mysite/asgi.py`**: ASGI 호환 웹 서버가 프로젝트를 제공하기 위한 진입점
- **`mysite/wsgi.py`**: WSGI 호환 웹 서버가 프로젝트를 제공하기 위한 진입점

## 개발 서버 실행하기

Django 프로젝트가 제대로 작동하는지 확인해보겠습니다. `djangotutorial` 디렉토리로 이동한 후 다음 명령어를 실행하세요:

```bash
$ python manage.py runserver
```

명령줄에 다음과 같은 출력이 표시됩니다:

```
Performing system checks...

System check identified no issues (0 silenced).

You have unapplied migrations; your app may not work properly until they are applied.
Run 'python manage.py migrate' to apply them.

August 27, 2025 - 15:50:53
Django version 5.2, using settings 'mysite.settings'
Starting development server at http://127.0.0.11:8000/
Quit the server with CONTROL-C.

WARNING: This is a development server. Do not use it in a production setting.
```

**참고**: 데이터베이스 마이그레이션에 대한 경고는 지금은 무시하세요. 나중에 데이터베이스를 다룰 예정입니다.

이제 웹 브라우저에서 `http://127.0.0.1:8000/`에 접속해보세요. 로켓이 발사되는 "Congratulations!" 페이지가 보일 것입니다. 성공적으로 작동하고 있습니다!

Django 개발 서버를 시작했습니다. 이는 순수 Python으로 작성된 경량 웹 서버로, Django와 함께 제공됩니다. 프로덕션 서버(예: Apache)를 구성할 필요 없이 빠르게 개발할 수 있도록 설계되었습니다.

**중요**: 이 서버는 프로덕션 환경에서 사용하지 마세요. 개발 중에만 사용하도록 의도되었습니다.

### 자동 리로딩

개발 서버는 필요에 따라 각 요청에 대해 Python 코드를 자동으로 리로드합니다. 코드 변경사항을 적용하기 위해 서버를 재시작할 필요가 없습니다. 하지만 파일 추가와 같은 일부 작업은 재시작을 트리거하지 않으므로 이런 경우에는 수동으로 서버를 재시작해야 합니다.

## Polls 앱 생성하기

이제 환경(프로젝트)이 설정되었으므로 실제 작업을 시작할 수 있습니다.

Django에서 작성하는 각 애플리케이션은 특정 규칙을 따르는 Python 패키지로 구성됩니다. Django에는 앱의 기본 디렉토리 구조를 자동으로 생성하는 유틸리티가 있어서 디렉토리를 만드는 것보다 코드 작성에 집중할 수 있습니다.

### 프로젝트 vs 앱

프로젝트와 앱의 차이점은 무엇일까요?

- **앱**: 특정 기능을 수행하는 웹 애플리케이션 (예: 블로그 시스템, 공개 기록 데이터베이스, 작은 설문조사 앱)
- **프로젝트**: 특정 웹사이트를 위한 설정과 앱의 모음. 프로젝트는 여러 앱을 포함할 수 있고, 앱은 여러 프로젝트에 있을 수 있습니다.

앱은 Python 경로의 어디든 위치할 수 있습니다. 이 튜토리얼에서는 `djangotutorial` 폴더 안에 설문조사 앱을 만들겠습니다.

### 앱 생성하기

`manage.py`와 같은 디렉토리에 있는지 확인한 후 다음 명령어를 입력하세요:

```bash
$ python manage.py startapp polls
```

이 명령어는 다음과 같은 구조의 `polls` 디렉토리를 생성합니다:

```
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
```

이 디렉토리 구조가 설문조사 애플리케이션을 위한 것입니다.

## 첫 번째 뷰 작성하기

첫 번째 뷰를 작성해보겠습니다. `polls/views.py` 파일을 열고 다음 Python 코드를 입력하세요:

```python
# polls/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
```

이것은 Django에서 가능한 가장 기본적인 뷰입니다. 브라우저에서 접근하려면 URL에 매핑해야 하는데, 이를 위해 URL 구성(URLconf)을 정의해야 합니다.

### URLconf 정의하기

`polls` 앱을 위한 URLconf를 정의하기 위해 `polls/urls.py` 파일을 생성하고 다음 내용을 입력하세요:

```python
# polls/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
]
```

이제 앱 디렉토리는 다음과 같습니다:

```
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    urls.py
    views.py
```

### 루트 URLconf 설정하기

다음 단계는 `mysite` 프로젝트의 루트 URLconf를 구성하여 `polls.urls`에 정의된 URLconf를 포함시키는 것입니다. `mysite/urls.py`에 `django.urls.include`를 import하고 `urlpatterns` 리스트에 `include()`를 삽입하세요:

```python
# mysite/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("polls/", include("polls.urls")),
    path("admin/", admin.site.urls),
]
```

`path()` 함수는 최소 두 개의 인수(`route`와 `view`)를 기대합니다. `include()` 함수는 다른 URLconf를 참조할 수 있게 해줍니다. Django가 `include()`를 만나면 URL의 해당 지점까지 일치하는 부분을 잘라내고 나머지 문자열을 포함된 URLconf로 보내 추가 처리를 합니다.

`include()` 뒤에 있는 아이디어는 URL을 쉽게 플러그 앤 플레이할 수 있게 하는 것입니다. 설문조사가 자체 URLconf(`polls/urls.py`)에 있기 때문에 "/polls/", "/fun_polls/", "/content/polls/" 또는 다른 경로 루트 아래에 배치할 수 있고 앱은 여전히 작동합니다.

### include() 사용 시기

다른 URL 패턴을 포함할 때는 항상 `include()`를 사용해야 합니다. 유일한 예외는 Django의 기본 관리자 사이트를 위한 사전 구축된 URLconf인 `admin.site.urls`입니다.

이제 `index` 뷰를 URLconf에 연결했습니다. 다음 명령어로 작동하는지 확인해보세요:

```bash
$ python manage.py runserver
```

브라우저에서 `http://localhost:8000/polls/`로 이동하면 `index` 뷰에서 정의한 "Hello, world. You're at the polls index." 텍스트가 표시될 것입니다.

**페이지를 찾을 수 없나요?**

여기서 오류 페이지가 나타난다면 `http://localhost:8000/polls/`로 이동했는지 확인하세요. `http://localhost:8000/`이 아닙니다.

기본적인 요청과 응답 흐름에 익숙해지면 튜토리얼의 2부를 읽어 데이터베이스 작업을 시작하세요.

## 요약

이 튜토리얼에서는 다음을 배웠습니다:

1. Django 프로젝트 생성하기
2. 개발 서버 실행하기
3. Polls 앱 생성하기
4. 첫 번째 뷰 작성하기
5. URLconf 설정하기

Django의 기본 구조와 워크플로우를 이해하는 데 도움이 되었을 것입니다. 다음 단계로 데이터베이스 모델과 관리자 인터페이스를 다루는 2부를 진행하세요.

---

**참고 자료**: [Django 공식 문서 - Writing your first Django app, part 1](https://docs.djangoproject.com/en/5.2/intro/tutorial01/)
