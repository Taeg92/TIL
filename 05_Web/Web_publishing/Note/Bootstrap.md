# Bootstrap

> HTML과 CSS의 디자인과 기능을 일일이 만들지 않고 가져올 수 있다.
>
> http://bootstrapk.com/



- 오픈 소스로 제공해주는 HTML, CSS, JavaScript 프론트엔드 프레임 워크이다.

- 즉, 미리 만들어져있는 코드. 방대한 양의 css 코드와 JavaScript 코드가 만들어져 있다.

- 사용법

  ```html
  <head>
    <title></title>
    <!-- stylesheet 위에 붙여준다. -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href = "./styles.css" rel = "stylesheet">
  </head>
  ```

  ```html
  <body>
      .
      .
      .
      .
      <!-- body태그의 끝에 script를 복사해서 붙여준다. -->
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
  ```



# Bootstrap Grid

> Bootstrap(부트스트랩)을 사용할 때 가장 마음에 드는 점은 간편한 그리드 시스템입니다.



# 기본 구성원

부트스트랩 그리드 시스템에는 세 가지 구성원이 있습니다:

1. **컨테이너 (container)**
2. **행 (row)**
3. **열 (column)**

# 기본 규칙

부트스트랩 사이트에 자세히 설명되어 있지만 많은 분들이 무시하는 몇 가지 규칙입니다:

1. 행(``)은 꼭 컨테이너(``) 안에 넣어주세요.
2. 열(``)은 꼭 행(``) 안에 넣어주세요. 오직 열만 행의 직속 자식이 될 수 있습니다.
3. 콘텐츠(우리가 그리드에 넣고 싶은 내용)는 꼭 열(``) 안에 넣어주세요.

이 규칙들만 지켜도 예상치 못한 레이아웃이 나오지는 않을 것입니다!

# 기본 사용법

구성원들과 규칙을 알았으면 이제 사용법을 알아봅시다.

부트스트랩 그리드에는 한 줄에 기본적으로 12칸의 열(column)이 있다고 생각하시면 됩니다. 예를 들어서 한 줄을 정확히 3등분하고 싶으면 네 칸을 차지하는 열 세 개를 쓰면 되는 거죠. 네 칸을 사용하는 열은 ``입니다.

아래의 코드에서는 다양한 방식으로 12칸을 나누어보았습니다.



#### HTML

```html
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <!-- 정확히 3등분 -->
      <div class="col-4 first">first</div>
      <div class="col-4 second">second</div>
      <div class="col-4 third">third</div>
    </div>

    <div class="row">
      <!-- 정확히 2등분 -->
      <div class="col-6 first">first</div>
      <div class="col-6 second">second</div>
    </div>

    <div class="row">
      <!-- 1대 5 비율 -->
      <div class="col-2 first">first</div>
      <div class="col-10 second">second</div>
    </div>

    <div class="row">
      <!-- 1대 2대 1 비율 -->
      <div class="col-3 first">first</div>
      <div class="col-6 second">second</div>
      <div class="col-3 third">third</div>
    </div>
  </div>
</body>
```

#### CSS

```css
.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

```

### 12칸을 넘어가면?

만약 한 행에 12칸이 넘는 열이 들어간다면, 새로운 줄로 넘어가게 됩니다.

#### HTML

```html
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-3 first">first</div>
      <div class="col-6 second">second</div>
      <div class="col-4 third">third</div>
      <div class="col-7 fourth">fourth</div>
    </div>
  </div>
</body>
```

#### CSS

```css
.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

.fourth {
  background-color: blue;
}
```

### Why 12?

부트스트랩을 만든 분들은 왜 하필 `12`라는 숫자로 정했을까요?

`12`는 상당히 많은 숫자들(`1`, `2`, `3`, `4`, `6`, `12`)로 나누어지기 때문에 굉장히 유연합니다!

예를 들어서 8칸으로 나누고 싶더라도 `12`라는 숫자의 유연함 덕분에 쉽게 할 수 있습니다. `col-6`를 두 개 쓰면 2등분 할 수 있고, 그 안에서 또 `col-3`로 4등분을 하면 8칸이 생기겠죠?

이런식으로 열을 또 여러 열로 나누는 것을 '중첩(nesting)'한다고 부릅니다. 중첩을 하기 위해서는 우선 열(``) 안에 새로운 행(``)을 쓰셔야 합니다. 예제를 통해 살펴보세요:

#### HTML

```html
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="row"> <!-- 중첩을 위한 새로운 행 -->
          <div class="col-3 first">1</div>
          <div class="col-3 second">2</div>
          <div class="col-3 third">3</div>
          <div class="col-3 fourth">4</div>
        </div>
      </div>

      <div class="col-6">
        <div class="row"> <!-- 중첩을 위한 새로운 행 -->
          <div class="col-3 first">5</div>
          <div class="col-3 second">6</div>
          <div class="col-3 third">7</div>
          <div class="col-3 fourth">8</div>
        </div>
      </div>
    </div>
  </div>
</body>
```

#### CSS

```css
.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

.fourth {
  background-color: blue;
}
```



# Bootstrap Resposive Grid

> 부트스트랩의 그리드 시스템은 반응형 웹 디자인을 할 때 가장 빛을 발합니다.



다음은 부트스트랩에서 정해둔 구간들입니다.

1. **Extra Small (< 576px)**: 모바일
2. **Small (≥ 576px)**: 모바일
3. **Medium (≥ 768px)**: 타블릿
4. **Large (≥ 992px)**: 데스크탑
5. **Extra Large (≥ 1200px)**: 와이드 데스크탑

# 컨테이너 (container)

기본적으로 컨테이너는 가운데 정렬이 되어 있고, 그리드의 행들을 감싸주는 역할을 합니다 (행들은 열들을 감싸주고 있고요!). 컨테이너의 종류는 두 가지인데요.

1. `<div class="container">`: 구간별로 그리드에 고정된 `width`를 설정해줍니다.
2. `<div class="container-fluid">`: 그리드는 항상 `width: 100%;`입니다.

### `<div class="container">`

만약 구간별로 그리드에 고정된 가로값을 설정해주고 싶으면 `"container"` 클래스를 사용하세요. 구간별로 그리드가 고정되어 있으면 레이아웃이 더 예상 가능합니다. 따라서 저는 개인적으로 `"container"` 클래스를 사용하는 것을 선호하고, 디자이너에게 이렇게 구간별로 고정되는 방식으로 만들기를 부탁합니다!

`"container"`클래스를 사용하면 아래의 CSS 코드가 적용됩니다.

```css
.container {
  width: 100%; /* extra small */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* small */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* medium */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* large */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

/* extra large */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

### `<div class="container-fluid">`

저는 많은 경우에 `"container"` 클래스를 선호하지만, 상황에 따라 그리드가 항상 `100%`의 가로 길이를 갖는 것이 좋을 때가 있습니다. 그럴 때는 `"container-fluid"` 클래스를 사용하면 됩니다.

`"container-fluid"`클래스를 사용하면 아래의 CSS 코드가 적용됩니다.

```css
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
```

# 열 (column)

반응형 구간별로 (총 12칸 중) 열이 차지하는 칸의 개수도 다르게 할 수 있습니다.

예시를 몇 가지 봅시다.

### 예시 1 (구간별로 모두 설정되어 있는 경우)

```html
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
```

1. **Extra Small (< 576px)**: 12칸을 모두 차지
2. **Small (≥ 576px)**: 6칸 차지
3. **Medium (≥ 768px)**: 4칸 차지
4. **Large (≥ 992px)**: 3칸 차지
5. **Extra Large (≥ 1200px)**: 2칸 차지

### 예시 2 (특정 구간만 설정되어 있는 경우)

아래와 같이 특정 구간에만 열 수가 설정되어 있는 경우도 있습니다. 그렇다면 그 구간부터 새로운 설정이 있는 상위 구간까지는 같은 칸 수를 차지합니다.

```html
<div class="col-12 col-lg-3">
```

1. **Extra Small (< 576px)**: 12칸을 모두 차지
2. **Small (≥ 576px)**: 12칸을 모두 차지
3. **Medium (≥ 768px)**: 12칸을 모두 차지
4. **Large (≥ 992px)**: 3칸 차지
5. **Extra Large (≥ 1200px)**: 3칸 차지

```html
<div class="col-6">
```

1. **Extra Small (< 576px)**: 6칸 차지
2. **Small (≥ 576px)**: 6칸 차지
3. **Medium (≥ 768px)**: 6칸 차지
4. **Large (≥ 992px)**: 6칸 차지
5. **Extra Large (≥ 1200px)**: 6칸 차지

