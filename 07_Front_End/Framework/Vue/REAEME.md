# Vue

> Evan You가 만들었으며, 2014년 릴리즈를 시작으로 꾸준히 발전하고 있는 자바스크립트 프레임워크입니다.
> 컨트롤러 대신 뷰 모델을 가지는 MVVM(Model-View-ViewModel) 패턴을 기반으로 디자인되었으며,
> 재사용이 가능한 UI들을 묶어서 사용할 수 있습니다.





## 특징

- MVVM 패턴을 사용합니다.
- Virtual DOM의 사용합니다.
- Angular, React에 비해 매우 작고 가벼우며 복잡도가 낮습니다.
- Template과 Componenet를 사용하여 재사용이 가능한 사용자 인터페이스를 묶고 View Layer를 정리하여 사용합니다.





## MVVM 패턴

![MVVM](https://wikidocs.net/images/page/17701/view-model.png)
Mode - View - ViewModel의 줄임말으로 로직과 UI의 분리를 위해 설계된 패턴입니다.
웹페이지는 돔과 자바스크립트로 만들어지게 되는데 돔이 View 역할을 하고, 자바스크립트가 Model 역할을 합니다.
뷰모델이 없는 경우에는 직접 모델과 뷰를 연결해야 합니다.
그러나 뷰모델이 중간에서 연결해 주는 것이 MVVM 모델입니다.



## Vue 인스턴스

new Vue로 선언하여 만들어진 객체를 vue 인스턴스라고 부릅니다.

- el : 태그에 지정한 ID, 클래스명, 태그명으로 해당 태그와 vue 인스턴스를 연결하는 옵션입니다.
- data : key와 value를 지정하는 json형식으로 데이터 입력 옵션입니다.
- computed : getter/setter를 지정하는 옵션입니다.