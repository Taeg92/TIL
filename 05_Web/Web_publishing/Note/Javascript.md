# jQuery

jQuery를 설치하는 방법으로는 크게 두 가지가 있습니다.



# 1. 링크를 사용하는 방법



우선 강의에서 본 방법입니다.



우리가 작성한 `<script>...</script>` 태그 바로 윗 줄에 [jQuery CDN](https://code.jquery.com/)의 코드를 붙여 넣어주는 방법이 있습니다.



```html
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>
  // 우리 자바스크립트 코드...
</script>
```



이렇게 작성해주면, 인터넷에 있는 원격 jQuery 코드를 내 프로젝트로 가져오게 됩니다.



# 2. 직접 jQuery 코드를 다운받아서 쓰는 방법



[jQuery 사이트](https://jquery.com/)에 들어가면 jQuery 코드를 직접 다운로드 받을 수 있습니다. (JavaScript이니까 `.js` 파일로 되어있겠죠?)



이 코드를 다운로드 받아서 프로젝트 안의 어딘가에 두시고, `<script>` 태그에 `jquery.js` 파일에 대한 경로를 써주시면 됩니다.



![source: imgur.com](https://i.imgur.com/Bz43XeV.png)



위와 같은 구조면, 이렇게 하면 되겠죠?



```html
<script src="js/jquery-3.2.1.min.js"></script>
<script>
  // 우리 자바스크립트 코드...
</script>
```



# Event

> Event(이벤트)란 HTML 요소들에게 일어날 수 있는 일들이다.



- 사용자가 요소를 클릭한다.
- 마우스가 요소 위로 올라온다.
- 마우스가 요소 밖으로 나간다.
- 페이지 로딩이 끝난다.
- 사용자가 키보드를 누른다.



이와 같은 html 요소들에게 일어날 수 있는 모든 일들을 이벤트라 한다.

이와 같은 이벤트 들이 생겼을 때 어떤 동작이 일어나도록 코드를 쓸 수 있다.

이런 어떠한 동작이 일어나도록 하는 일들을 이벤트 핸들링(Event Handling)이라 한다.



예를 들어

- 키보드에서 'q'를 누르면 게임이 끝난다

이때 키보드에서 q를 누르는게 이벤트이고 게임이 끝나는게 이벤트 핸들링이다.



![image-20200308205306894](./assets/image-20200308205306894.png)



이때 만약 이벤트 핸들링을 함수로 처리해주면 이 때의 함수를 이벤트 핸들러라고 한다.



# 이벤트 등록하는 jQuery 코드



```js
$('#home').on('click', clickHome);
$('#seoul').on('click', clickSeoul);
$('#tokyo').on('click', clickTokyo);
$('#paris').on('click', clickParis);
```



이렇게 이벤트를 등록하면, HTML 태그에 직접 명시해두지 않고 더 깔끔하게 쓸 수 있습니다.



# 순수 자바스크립트 (Vanilla JavaScript)



jQuery 너무 편하고 좋습니다. 그래도 혹시 나중에 jQuery를 쓰지 않을 경우를 대비해서, '순수 자바스크립트'만을 사용했을 때에는 어떻게 써야할지 알아두는 것도 나쁘지 않겠죠?



```js
document.getElementById('home').addEventListener('click', clickHome);
document.getElementById('seoul').addEventListener('click', clickSeoul);
document.getElementById('tokyo').addEventListener('click', clickTokyo);
document.getElementById('paris').addEventListener('click', clickParis);
```



순수 자바스크립트만 쓰니까 조금 복잡해졌습니다. 하지만 위에 있는 jQuery 코드와 의미는 동일합니다.



# 자바스크립트 개발에 도움이 되는 사이트 

 

### JSFiddle 영상에서도 보여드린 [JSFiddle](https://jsfiddle.net/)입니다. 

한 페이지 내에서 HTML, CSS, JavaScript를 모두 작성하고 바로 결과를 보여주는 사이트입니다. 

 ### W3Schools 

[W3Schools](https://www.w3schools.com/)는 HTML, CSS, JavaScript뿐 아니라 jQuery, PHP, AngularJS, Bootstrap등 다양한 웹 기술들에 대한 설명과 예제가 나와있는 사이트입니다. 

### MDN JavaScript Document 

[Mozilla Developer Network(MDN)](https://developer.mozilla.org/bm/docs/Web/JavaScript)에서 JavaScript에 대한 문서를 제공해줍니다. 튜토리얼부터 스타일 가이드, 각 기능들에 대한 설명 등이 정리되어 있습니다.



# 절댓값 (Absolute Number)



학창 시절 수학 시간에서 배운 '절댓값(absolute value)' 기억하시나요?



간단하게 설명하자면, 어떤 값의 '양수(positive number)' 버전이라고 할 수 있습니다. 음수 `-5`의 절댓값은 양수 `5`고, 그냥 양수 `5`의 절댓값은 그대로 양수 `5`인 거죠.



`Math.abs(x)`를 하면 `x`의 절댓값이 리턴됩니다.



```js
console.log(Math.abs(-10));
console.log(Math.abs(10));
```



```
10
10
```



# 최댓값 (Maximum)



`Math.max` 함수에 파라미터로 여러 수를 넘겨주면, 그 중 가장 큰 값이 리턴됩니다.



```js
console.log(Math.max(2, -1, 4, 5, 0));
```



```
5
```



# 최솟값 (Minimum)



`Math.min` 함수에 파라미터로 여러 수를 넘겨주면, 그 중 가장 작은 값이 리턴됩니다.



```js
console.log(Math.min(2, -1, 4, 5, 0));
```



```
-1
```



# 거듭제곱 (Exponentiation)



'제곱'은 뭔지 기억하시나요? '2의 3승'(혹은 '2의 세제곱')을 하면, 2를 세 번 곱한다는 뜻입니다. '2 곱하기 2 곱하기 2'를 하면 8이죠? 마찬가지로 '5의 2승'을 하면, '5 곱하기 5'를 해서 25입니다.



자바스크립트에서 `Math.pow(x, y)`를 하면 `x`의 `y`승의 결과값이 리턴됩니다.



```js
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
```



```
8
25
```



# 제곱근 (Square Root)



'제곱근(square root)'은 '제곱'의 반대라고 생각할 수 있습니다. 5의 제곱이 25이기 때문에, 25의 제곱근은 5입니다. 7의 제곱이 49이기 때문에, 49의 제곱근은 7입니다.



`Math.sqrt(x)`를 하면 `x`의 제곱근이 리턴됩니다.



```js
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
```



```
5
7
```



# 반올림 (Round)



`Math.round(x)`를 하면 `x`의 반올림된 값이 리턴됩니다. 소수점 부분이 `0.5` 이상이면 가장 가까운 정수값으로 올라가고, 소수점 부분이 `0.5` 미만이면 가장 가까운 정수값으로 내려갑니다.



```js
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));
```



```
2
2
2
3
3
```



# 버림과 올림 (Floor and Ceil)



`Math.floor(x)`을 하면 `x`의  버림 값이, `Math.ceil(x)`을 하면 `x`의 올림 값이 리턴됩니다. 이 경우, 소수 부분이 얼마인지와는 상관이 없습니다.



```js
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));
```



```
2
2
2
-
3
3
3
```



# 난수 (Random)



`Math.random`을 하면 0 이상 1 미만의 값이 랜덤으로 리턴됩니다.



```js
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
```



```
0.21458369059793236
0.6622040803059857
0.785172717569619
0.9056556038884926
```



# 문자열의 길이



`length` 속성은 문자열의 길이를 담고 있습니다.



```
var str = 'Codeit';
console.log(str.length);
```



```
6
```



# 특정 인덱스의 문자 받아오기



`str.charAt(index)`를 하면 문자열 `str`의 `index` 인덱스에 있는 문자를 받아올 수 있습니다. `str[index]`와 같은 셈이죠.



```js
var str = 'Codeit';
console.log(str.charAt(2));
```



```
d
```



`str.charAt(index)`와 `str[index]`에는 약간의 차이가 있는데, 이 부분은 다음 챕터에서 배워보도록 하겠습니다.



# 문자열 안에서 다른 문자열 검색



`str.indexOf(searchValue)`를 하면 문자열 `str` 내에 문자열 `searchValue`가 포함되어 있는지 확인할 수 있습니다.



1. 만약 포함되어 있다면, 문자열이 시작되는 문자의 인덱스가 리턴됩니다.
2. 포함되어 있지 않다면, `-1`이 리턴됩니다.
3. 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.



예시를 통해 살펴봅시다.



```js
var str = 'Hello World!';

console.log(str.indexOf('e'));
console.log(str.indexOf('z'));
console.log(str.indexOf('ello'));
console.log(str.indexOf('o'));
```



```
1
-1
1
4
```



### 마지막 인덱스 찾기



`lastIndexOf`는 `indexOf`와 동일한데, 가장 뒤에 위치한 검색 결과를 찾아줍니다.   예를 들어 봅시다. `'Hello World!'`에는 `o`가 두 번 나옵니다.   이 때 `indexOf`는 앞에 있는 `o`를, `lastIndexOf`는 뒤에 있는 `o`를 찾아주는 거죠.



```js
var str = 'Hello World!';

console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));
```



```
4
7
```



# 대소문자 변환



### 대문자로 바꾸기



`str.toUpperCase()`를 하면 `str`의 모든 글자가 대문자로 바뀌어서 리턴됩니다.



```js
var str = 'Codeit';
console.log(str.toUpperCase());
```



```
CODEIT
```



### 소문자로 바꾸기



`str.toLowerCase()`를 하면 `str`의 모든 글자가 소문자로 바뀌어서 리턴됩니다.



```js
var str = 'Codeit';
console.log(str.toLowerCase());
```



```
codeit
```



# 문자열 자르기



### 시작 지점과 끝 지점으로 자르기



`str.substring(indexStart, indexEnd)`를 하면 인덱스 `indexStart`부터 인덱스 `indexEnd`전까지의 문자열을 잘라서 만든 새로운 문자열이 리턴됩니다. 만약 `indexEnd`를 쓰지 않으면, 인덱스 `indexStart`부터 끝까지 문자열이 잘립니다.



```js
var str = 'Hello World!';

console.log(str.substring(2, 5));
console.log(str.substring(2));
```



```
llo
llo World!
```



### 시작 지점과 길이로 자르기



`str.substr(start, length)`를 하면 인덱스 `start`부터 길이 `length`의 문자열이 잘려서 리턴됩니다.



```js
var str = 'Hello World!';

console.log(str.substr(2, 5));
```



```
llo W
```



# 앞뒤의 공백을 없애줍니다.



`str.trim()`을 하면 문자열 `str`의 앞뒤로 있는 '공백(띄어쓰기, 들여쓰기, 줄바꿈 등)'을 모두 지운 새로운 문자열이 리턴됩니다.



```js
var str = '        Hello World!      ';

console.log(str.trim());
```



```
Hello World!
```



# 배열의 길이



`length` 속성은 배열의 길이를 담고 있습니다.



```
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.length);
```



```
3
```



# 배열에서 특정 값 찾기



문자열에서 썼던 `indexOf`가 배열에서도 똑같이 동작합니다. `array.indexOf(item)`을 하면 `array` 배열에 `item`이 포함되어 있는지 확인할 수 있습니다.



1. 만약 포함되어 있다면, `item`이 있는 인덱스가 리턴됩니다.
2. 포함되어 있지 않다면, `-1`이 리턴됩니다.
3. 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.



```js
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.indexOf('Starbucks'));
console.log(brands.indexOf('Kakao'));
```



```
2
-1
```



# 배열에 값 추가



`array.push(item1)`을 하면 `item1`이 `array` 배열의 끝에 추가됩니다.



`array.push(item1, item2, item3)`를 하면 `item1`, `item2`, `item3`이 `array` 배열의 끝에 순서대로 추가됩니다.



```js
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

brands.push('Kakao');
console.log(brands);

brands.push('Samsung', 'LG', 'Facebook');
console.log(brands);
```



```
['Apple', 'Coca-Cola', 'Starbucks', 'Kakao']
['Apple', 'Coca-Cola', 'Starbucks', 'Kakao', 'Samsung', 'LG', 'Facebook']
```



# 배열에서 값 빼기



`array.pop()`을 하면 배열 `array`의 마지막 요소가 배열에서 빠지고, 그 마지막 요소가 리턴됩니다.



```js
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];

var lastBrand = brands.pop();

console.log(lastBrand);
console.log(brands);
```



```
Starbucks
['Apple', 'Coca-Cola']
```



# 배열을 문자열로 바꾸기



그리고 여기서, brands.join() 이라고 한번 해보세요. 어떻게 되나요? 모든 내용이 하나로 합쳐지죠?



```js
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.join());
```



```
Apple,Coca-Cola,Starbucks
```



만약 값들 사이에 들어가는 쉼표가 마음에 들지 않으면, 파라미터로 쉼표를 대체할 문자열을 넣어주시면 됩니다.



```js
var brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.join('###'));
```



```
Apple###Coca-Cola###Starbucks
```



# Date 정리 노트

날짜와 관련된 프로그램을 짜고 싶으시면, `Date` 객체를 활용하시면 됩니다.



# 객체 만들기



우선 객체를 만들어야 활용할 수 있는데요. 두 가지 방법이 있습니다:



### 현재 날짜로 설정



파라미터 없이 `new Date()`를 하면 **현재 날짜**로 설정되어 있는 `Date` 객체가 생성돼서 리턴됩니다.



```js
var date = new Date();
```



### 원하는 날짜로 설정



파라미터를 써주면 **원하는 날짜**로 설정할 수도 있습니다. 만약 날짜만 쓸 경우, 0시 0분 0초로 지정됩니다.



```js
// 1988년 6월 11일 5시 25분 30초
var date1 = new Date('June 11, 1988 05:25:30');
var date2 = new Date('1988-06-11T05:25:30');

// 1999년 12월 15일 (날짜만)
var date3 = new Date('1999-12-15');
var date4 = new Date('12/15/1999');
var date5 = new Date('December 15 1999');
var date6 = new Date('Dec 15 1999');
```



# 날짜 정보 받아오기



이제 `Date` 객체의 메소드들을 활용하면 되는데요. 어떤 기능이 있는지 한 번 쭉 보겠습니다!



```js
var date = new Date('June 11, 1988 05:25:30');

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
```



```
1988
5
11
6
5
25
30
0
Sat Jun 11 1988 05:25:30 GMT+1000 (KDT)
6/11/1988, 5:25:30 AM
6/11/1988
5:25:30 AM
```



`getTime()` 메서드는 1970년 1월 1일 자정으로부터 몇 ms가 지났는지 알려줍니다.



```js
var date = new Date('June 11, 1988 05:25:30');
console.log(date.getTime());
```



```
581973930000
```



이 ms 값에 나눗셈을 적절히 사용하면 초, 분, 시, 일 등의 단위로 변환할 수 있습니다.



```js
var date = new Date('June 11, 1988 05:25:30');
console.log(date.getTime() + 'ms');
console.log(date.getTime()/1000 + '초');
console.log(date.getTime()/1000/60 + '분');
console.log(date.getTime()/1000/60/60 + '시간');
```



```
581973930000ms
581973930초
9699565.5분
161659.425시간
```



### 주의할 점!



`getMonth()`의 경우, `0`부터 시작하기 때문에, `2`는 3월을 의미합니다. 또 `getDay()`는 날짜가 아니라 요일을 리턴해주고, 일요일인 `0`부터 시작해서, `3`은 수요일을 뜻합니다.





# Audio

상황에 따라 소리가 필요할 때도 있겠죠? `Audio` 객체를 사용하면 소리를 재생할 수 있습니다.



### 소리 재생하고 정지하기



```js
var audioFile = new Audio("file location or url"); // 생성
audioFile.play(); // 재생
audioFile.pause(); // 정지
```



우리가 소리를 사용할 때, 소리의 상태는 크게 '생성', '재생', '정지', 총 3가지 단계로 나눌 수 있습니다. 이 코드를 적절히 활용하면 사이트에 소리를 입힐 수 있습니다.



- HTML
- CSS

```html
<!DOCTYPE html>
<html>
<head>
  <title>Audio Player</title>
  <meta charset="utf-8" />
  <link href="css/styles.css" rel="stylesheet" />
</head>
<body>

<button id="playBtn">Music Start</button>
<button id="stopBtn">STOP</button>

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

<script> 
var audioFile = new Audio("https://d34x6xks9kc6p2.cloudfront.net/540997b0-a35f-4b69-86d6-b1c925c4a264/540997b0-a35f-4b69-86d6-b1c925c4a264.mp3");

function playMusic() {
    audioFile.play();
}

function stopMusic() {
    audioFile.pause();
}

$('#playBtn').on('click', playMusic);
$('#stopBtn').on('click', stopMusic);
</script> 

</body>
</html>
```

결과 확인



### 처음부터 재생하기



위의 코드에서 여러 번 '재생'과 '정지'를 눌러보시면, 처음부터 다시 재생되는게 아니라 멈춘 다음부터 재생이 됩니다. 경우에 따라서는 재생을 누를 떄마다 처음부터 재생하고 싶을 수도 있겠죠? 이럴 때 `currentTime`이라는 속성을 활용하면 됩니다.



```
audioFile.currentTime = 0; // 오디오 파일 재생 위치 설정
```



이렇게 작성하면 오디오 파일이 재생될 곳을 선택할 수 있습니다.



- HTML
- CSS

```html
<!DOCTYPE html>
<html>
<head>
  <title>Audio Player</title>
  <meta charset="utf-8" />
  <link href="css/styles.css" rel="stylesheet" />
</head>
<body>

<button id="playBtn">Music Start</button>
<button id="stopBtn">STOP</button>

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

<script> 
var audioFile = new Audio("https://d34x6xks9kc6p2.cloudfront.net/540997b0-a35f-4b69-86d6-b1c925c4a264/540997b0-a35f-4b69-86d6-b1c925c4a264.mp3");

function playMusic() {
    audioFile.play();
}

function stopMusic() {
    audioFile.pause();
    audioFile.currentTime = 0; // '멈춤' 버튼을 누른 후에는 오디오의 시작 지점을 처음으로 다시 돌려주기.
}

$('#playBtn').on('click', playMusic);
$('#stopBtn').on('click', stopMusic);
</script> 

</body>
</html>
```

결과 확인



두 결과물의 차이가 느껴지시나요?



# 코딩은 피라미드다?



![img](https://i.imgur.com/zF9XLiN.jpg) 이집트의 **피라미드**입니다. 당시에 저렇게 큰 건축물을 지으려면 수많은 사람들의 힘이 필요했을 것입니다. 그리스 역사가 '헤로도스트'는 큰 피라미드의 경우 건설에 10만 명이 참여했다고 말했는데요. 놀랍게도 피라미드는 마치 한 사람이 만든 것 처럼 규칙적인 모습, 규칙적인 구조를 가지고 있습니다. 그렇기에 위대한 건축물로 평가받고 있는 것이죠.



**소프트웨어(프로그램)**도 많은 사람들이 함께 만드는 하나의 거대 구조물입니다. 따라서 프로그램이 안정적으로, 그리고 아름답게 세워지기 위해서는 모두가 따르는 일종의 '룰'이 필요한 거죠.



저마다의 스타일과 방식으로 코드를 작성한다면 개발자 간의 충돌이 발생하고 지저분한 코드가 만들어지겠죠?



# 스타일 가이드



여러 사람이 함께 아름다운 프로그램을 만들 수 있도록 도와주는 룰이 바로 '스타일 가이드'입니다. 다른 코드잇 수업을 들어보셨으면 익숙한 개념이죠?



스타일 가이드는 문법적인 것 이외에 '어떤 방식과 스타일로 코딩을 하는 게 좋을지' 정해주는 역할을 하는데요. 아래와 같은 내용들을 포함하고 있습니다:



1. 띄어쓰기와 줄바꿈
2. 변수 이름을 짓는 규칙
3. 동작은 하지만 쓰지 말아야 할 코드
4. 그 외 등등..



스타일이 잘 갖추어진 코드는 가독성이 높고, 유지 보수 및 재사용성이 높아지며, 버그를 줄일 수 있는 안정적인 코드가 됩니다.



# 다양한 JavaScript 스타일 가이드



스타일 가이드는 전 세계에 딱 하나로 통일되는 법이 아닙니다. 다양한 단체들이 제각각 선호하는 스타일들을 모아둔 가이드라인일 뿐입니다. 구글에 개발자로 가면 '구글 JavaScript 스타일 가이드'를 따라야 하고, 페이스북에 가서 일을 하면 '페이스북 JavaScript 스타일 가이드'를 따라야 하는 거죠.



[에어비엔비 JavaScript 스타일 가이드](https://github.com/tipjs/javascript-style-guide)



[깃허브에 공유되어 있는 인기 있는 JavaScript 스타일 가이드](https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR)



[구글 JavaScript 스타일 가이드](https://google.github.io/styleguide/jsguide.html)



# 스타일 가이드는 누가 만드나요?



스타일 가이드는 누군가 혼자 작성하는 것이 아니라, 여러 사람들이 의견을 나누고 시행착오를 겪으며 만들어지는 것입니다. 자바스크립트는 어느 정도 코딩 스타일이 굳어지고 있지만, 위의 세 링크에서도 차이점이 존재합니다. 스타일 가이드가 절대적인 것은 아니란 걸 알 수 있죠.