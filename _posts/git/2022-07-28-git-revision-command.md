---
title :  GIT REVISION 내역 보기
categories : git history revision
---

## git show

깃 리비전의 상세 내용을 확인하려면  `git show` 명령을 사용한다.

~~~bash
$ git show

// 출력 --------------------
commit 766acbae45fee347c99777e5bfb52b30c19217a4 (HEAD -> master, origin/master)
Author: jskpubller86 <jskpubller86@naver.com>
Date:   Thu Jul 28 15:16:32 2022 +0900

    와인사이니지, VOC, 개인정보 처리 기능 개선 및 추가

diff --git a/cms/src/main/java/com/master/cms/controller/game/AlarmController.java b/cms/src/main/java/com/master/cms/controller/game/AlarmController.java
new file mode 100644
index 00000000..d613c369
--- /dev/null
+++ b/cms/src/main/java/com/master/cms/controller/game/AlarmController.java
@@ -0,0 +1,134 @@
+package com.master.cms.controller.game;
+
+import com.master.cms.controller.BaseFormController;
+import com.master.core.common.domain.Category;
+import com.master.core.common.service.CategoryService;
:


// 특정 리비전을 지정하여 확인할 경우 다음과 같이 사용한다. 

$ git show 766acbae45fee347c99777e5bfb52b30c19217a4
~~~


## git log

커밋된 리비전들을 확인할 경우 다음과 같이 사용한다.

~~~bash
$ git log


// 출력 --------------------

commit 766acbae45fee347c99777e5bfb52b30c19217a4 (HEAD -> master, origin/master)
Author: jskpubller86 <jskpubller86@naver.com>
Date:   Thu Jul 28 15:16:32 2022 +0900

   xxx 기능 추가

commit 8bde2402642a3ae362ebe8d4e73c55465cc3434c
Author: jskpubller86 <jskpubller86@naver.com>
Date:   Thu Jul 14 13:21:40 2022 +0900

   yyaa 기능 추가

commit c922815891584ef53f4e41d6bbfcbfa224b1f7ee
Author: SeungjinLee <sjlee@emotion.co.kr>
Date:   Mon Jul 11 15:37:54 2022 +0900

    test

commit 4cf56d8d06e90e0460da0ab3bbb4a6d836b496af
Author: jskpubller86 <jskpubller86@naver.com>
Date:   Thu Jul 7 14:59:45 2022 +0900

    ccc 기능 추가
~~~

커밋된 리비전을 커밋된 파일들과 함께 같이 확인하고 싶다면 다음처럼 사용한다.

~~~bash
$ git log --name-only

// 출력 --------------------

Author: jskpubller86 <jskpubller86@naver.com>
Date:   Thu Jul 28 15:16:32 2022 +0900

    xxxd 기능 개선 및 추가

cms/src/main/java/com/master/cms/controller/game/GameAlarmController.java
cms/src/main/java/com/master/cms/controller/game/GameProductController.java
cms/src/main/java/com/master/cms/controller/game/GameSearchController.java
cms/src/main/webapp/WEB-INF/jsp/kiosk/alarm/gameAlarmList.jsp
cms/src/main/webapp/WEB-INF/jsp/kiosk/event/gameEventDetail.jsp
cms/src/main/webapp/WEB-INF/jsp/kiosk/pairing/gamePairingDetail.jsp
cms/src/main/webapp/WEB-INF/jsp/kiosk/pairing/gamePairingList.jsp
cms/src/main/webapp/WEB-INF/jsp/kiosk/product/gameProductDetail.jsp
cms/src/main/webapp/WEB-INF/jsp/kiosk/product/gameProductList.jsp
cms/src/main/webapp/WEB-INF/jsp/kiosk/search/gameSearchDetail.jsp
cms/src/main/webapp/WEB-INF/layout/common/globalHeader.jsp
cms/src/main/webapp/WEB-INF/layout/common/nav.jsp
core/src/main/java/com/master/core/config/properties/MyProperties.java
core/src/main/java/com/master/core/kiosk/domain/KioskEvent.java
core/src/main/java/com/master/core/kiosk/domain/KioskProduct.java
core/src/main/java/com/master/core/kiosk/domain/KioskSuggest.java
core/src/main/java/com/master/core/kiosk/repository/KioskRepository.java
core/src/main/java/com/master/core/kiosk/repository/KioskSearchRepository.java
core/src/main/java/com/master/core/kiosk/service/KioskNewService.java
core/src/main/java/com/master/core/member/repository/MemberEncryptionRepository.java
core/src/main/java/com/master/core/member/repository/MemberRepository.java
core/src/main/java/com/master/core/member/service/MemberService.java
core/src/main/java/com/master/core/util/AES256Cipher.java
core/src/main/resources/mybatis/sql/common/CategoryRepository.xml
core/src/main/resources/mybatis/sql/kiosk/KioskAlarmRepository.xml
core/src/main/resources/mybatis/sql/kiosk/KioskEduRepository.xml
core/src/main/resources/mybatis/sql/kiosk/KioskRepository.xml
core/src/main/resources/mybatis/sql/kiosk/KioskSearchRepository.xml
.....

~~~


