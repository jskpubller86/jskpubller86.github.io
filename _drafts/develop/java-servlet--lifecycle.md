# 서블릿 생명주기 (Servlet Life Cycle)
서블릿 컨테이너가 서블릿에 대해 호출할 메소드를 정의한 것이 Servlet 인터페이스이다. 

서블릿 인터페이스에는 init(), service(), destroy(), getServletinfo(), getServletConfig() 메서드가 있는데 그 중 init(), service(), destroy() 메서드는 서블리의 생명주기와 관련되어 있다. 

init()는 서블릿을 생성하고 초기화한다.

