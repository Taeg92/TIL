# DOM

> Document Object Model(DOM) : 문서 객체 모델



# jQuery = '선택' + '동작'



모든 jQuery 코드는 크게 두 부분으로 나눌 수 있습니다.



앞의 강의에서 나왔던 3개의 jQuery 예시 코드를 봅시다.



```js
$('#hello').on('click', sayHello);
$('#hello').text();
$('#hello').css('background', '#7f8ff4');
```



이 코드들은 모두 `.`을 기준으로 두 부분으로 나눌 수 있습니다.



```js
// 선택 //     .   // 동작 //
$('#hello')   .   on('click', sayHello);
$('#hello')   .   text();
$('#hello')   .   css('background', '#7f8ff4');
```



jQuery를 쓰기 위해서는, **'선택'**과 **'동작'**만 알면 됩니다.



이번 챕터에서는 어떻게 하면 잘 **'선택'**할 수 있는지, 그리고 잘 **'동작'**시킬 수 있는지에 대해 배워봅시다.



# CSS 써먹기



지난 강의 예시 코드를 봅시다.



```js
// 선택 //     .   // 동작 //
$('#hello')   .   on('click', sayHello);
$('#hello')   .   text();
$('#hello')   .   css('background', '#7f8ff4');
```



`$('#hello')`는 `id`가 `hello`인 요소를 선택합니다.



여기서 `id`를 `#`으로 표현하는 것은 CSS의 문법입니다.



**"jQuery는 고맙게도 CSS 문법을 그대로 사용합니다."**



마찬가지로 `class`를 `.`으로 표현할 수 있습니다.



즉, `class` 이름이 `small`인 요소를 선택하려면 `$('.small')`이라고 쓰면 됩니다.



다양한 CSS의 선택자를 활용하면 손쉽게 요소를 선택할 수 있습니다.



# CSS 선택자 복습하기



### 1) 태그 이름

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
```

#### CSS

```css
/* 모든 <h1> 태그 */
h1 {
  color: orange;
}
```

### 2) 클래스/아이디

#### HTML

```html
<p class="important">Paragraph 1</p>
<p>Paragraph 2</p>
<p class="important">Paragraph 3</p>
<p class="important">Paragraph 4</p>
<p id="favorite">Paragraph 5</p>
<p>Paragraph 6</p>
```

#### CSS

```css
/* 'important'라는 클래스를 갖고 있는 모든 태그 */
.important {
  color: orange;
}

/* 'favorite'라는 아이디를 갖고 있는 모든 태그 */
#favorite {
  color: blue;
}
```

### 3) 자식 (children)

#### HTML

```html
<i>Outside</i>
<div class="div1">
  <i>Inside 1</i>
  <p>Bla bla <i>Inside 2</i></p>
  <i>Inside 3</i>
</div>
```

#### CSS

```css
/* 'div1' 클래스를 갖고 있는 요소의 자식 중 모든 <i> 태그 */
.div1 i {
  color: orange;
}
```

### 4) 직속 자식 (direct children)

#### HTML

```html
<i>Outside</i>
<div class="div1">
  <i>Inside 1</i>
  <p>Bla bla <i>Inside 2</i></p>
  <i>Inside 3</i>
</div>
```

#### CSS

```css
/* 'div1' 클래스를 갖고 있는 요소의 직속 자식 중 모든 <i> 태그 */
.div1 > i {
  color: orange;
}
```

### 5) 복수 선택

#### HTML

```html
<p class="one">Outside 1</p>
<p class="two">Outside 2</p>
<div>
  <p class="one">Inside 1</p>
  <p class="two">Inside 2</p>
  <p class="three">Inside 3</p>
  <p class="four">Inside 4</p>
  <p class="five">Inside 5</p>
</div>
```

#### CSS

```css
/* 'two' 클래스를 가지고 있는 태그 모두와 'four' 클래스를 가지고 있는 태그 모두 선택 */
.two, .four {
  color: orange;
}
```

### 6) 여러 조건

#### HTML

```html
<p class="outside one">Outside 1</p>
<p class="outside two">Outside 2</p>
<div>
  <p class="inside one">Inside 1</p>
  <p class="inside two">Inside 2</p>
  <p class="inside three">Inside 3</p>
  <p class="inside four">Inside 4</p>
  <p class="inside five">Inside 5</p>
</div>
```

#### CSS

```css
/* 'outside' 클래스를 갖고 있으면서 'one' 클래스도 갖고 있는 태그 */
.outside.one {
  color: blue;
}

/* 'inside' 클래스를 갖고 있으면서 'two' 클래스도 갖고 있는 태그 */
.inside.two {
  color: orange;
}
```

### 7) Pseudo-class (가상 클래스)



콜론(`:`)을 사용하면 몇 가지 '가상 클래스'를 선택할 수 있습니다.

### 7-1) n번째 자식

#### HTML

```html
<div class="div1">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  <p>Paragraph 4</p>
  <p>Paragraph 5</p>
  <p>Paragraph 6</p>
</div>
```

#### CSS

```css
/* .div1의 자식인 <p> 태그 중 3번째 */
.div1 p:nth-child(3) {
  color: blue;
}

/* .div1의 자식인 <p> 태그 중 첫 번째 */
.div1 p:first-child {
  color: red;
}

/* .div1의 자식인 <p> 태그 중 마지막 */
.div1 p:last-child {
  color: green;
}

/* .div1의 자식 중 마지막 자식이 아닌 <p> 태그 */
.div1 p:not(:last-child) {
  font-size: 150%;
}

/* .div1의 자식 중 첫 번째 자식이 아닌 <p> 태그 */
.div1 p:not(:first-child) {
  text-decoration: line-through;
}
```

### 7-2) 마우스 오버 (hover)

#### HTML

```html
<h1>Hello World!</h1>
```

#### CSS

```css
h1 {
  color: orange;
}

/* 마우스가 <h1> 태그에 올라갔을 때 */
h1:hover {
  color: green;
}
```

### 

# jQuery



프로그래밍 언어가 아니다!

jQuery는 자바스크립트 라이브러리입니다.

즉, jQuery는 여러가지 함수와 변수가 정의되어 있는 자바스크립트 파일입니다!

```js
함수 이름(parameter) 
```



jQuery함수 $가 리턴하는 값은 무엇일까?

jQuery에서 정의한 좀 특별한 DOM 관련 함수를 사용할 수 있는 배열과 비슷한  jQuery 객체를 리턴한다.



jQuery는 **'선택' + '동작'** 으로 이루어진다고 했었죠? 이 **'동작'**부분에 해당하는 다양한 메서드가 있습니다. 이 메서드를 활용하면 우리가 원하는 요소에 클래스를 추가/제거하거나, 속성을 읽고 쓰거나, 스타일을 입히는 것도 가능합니다.



### 클래스 관련



```js
// item에 header이라는 클래스 추가
$('#item').addClass('header');

// item에 header이라는 클래스 제거
$('#item').removeClass('header');

// item에 header이라는 클래스가 없으면 추가, 있으면 제거
$('#item').toggleClass('header');

// item에 header라는 클래스가 있으면 true, 없으면 false 리턴
$("#item").hasClass('header');
```



### 속성 관련



```js
// 이미지 태그의 src 속성 받아오기
$('img').attr('src');

// 이미지 태그의 src 속성 지정하기
$('img').attr('src', 'images/logo.png');

// h1 태그의 텍스트 받아오기
$('h1').text();

// h1 태그에 텍스트 지정하기
$('h1').text('Hello World!');

// h1 태그에 HTML 텍스트 지정하기
$('h1').html('<b>Hello World!</b>');
```



### 스타일 관련



```js
// item의 font-weight를 bold로 지정하기
$("#item").css('font-weight','bold');

// item의 background-color 가져오기
$("#item").css('background-color');
```