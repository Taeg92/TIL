# CSS

> HTML에 담은 내용을 스타일 해준다.



## I. CSS 작성

> HTML 코드 안에 `<style>` `</style>` 태그 안에 써준다. 



```html
<!-- 여기에 html 코드 -->

<style>
/* 여기에 CSS 코드 */
</style>
```



## II. CSS의 기본 문법



### 1. 폰트 크기

> CSS에서 폰트 크기를 표현할 수 있는 단위 몇 가지가 있는데, 그 중 픽셀(`px`)이 가장 많이 사용됩니다.



#### Code

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>

<style>
h2 {
  font-size: 72px;
}
</style>
```



#### 출력

![image-20200226164552093](./assets/image-20200226164552093.png)

### 2. 텍스트 색

> 글에 색을 입히고 싶으면 `color` 속성을 사용하면 됩니다. CSS에서 색을 표현하는 방식 몇 가지가 있는데, 나중에 살펴보도록 합시다.



#### Code

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<style>
h1 {
  color: lime;
}

h2 {
  color: hotpink;
}

h3 {
  color: blue;
}
</style>
```



#### 출력

![image-20200226164609848](./assets/image-20200226164609848.png)

### 3. 여백

> `margin` 속성을 사용하면 요소 사이의 여백을 설정할 수 있습니다. 여백의 크기도 픽셀(`px`) 단위로 설정해주시면 됩니다.



#### Code

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<style>
h1 {
  margin-bottom: 80px;
}

h3 {
  margin-left: 50px;
}
</style>
```



#### 출력

![image-20200226164637833](./assets/image-20200226164637833.png)