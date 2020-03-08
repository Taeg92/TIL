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