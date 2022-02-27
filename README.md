# [Project1] 로그프레소 과제

## 🚀 배포 링크
[https://zealous-poitras-180542.netlify.app](https://zealous-poitras-180542.netlify.app)

## 💿 실행 방법

```cmd
$ git clone https://github.com/yunsung-hodoopapa/wanted-pre-onboarding-humanscape.git

$ npm install

$ npm run start
```
## 😎 3팀

- 양윤성: 어플리케이션 제작
🤒 코로나 확진으로 커뮤니케이션이 불가능해서 혼자 진행

## 적용 기술
- react
- styled-components
- react-query


## 👩‍💻구현

### 검색 기능

- 검색창을 통해 검색어를 입력
- 검색어가 업데이트되면 외부 api로 GET 요청을 보내, 반환받은 데이터 객체를 검색창 하단에 렌더링
- api 요청횟수를 절약하기 위해, 검색어 입력단계에서  debounce 함수를 적용

<image src="https://images.velog.io/images/yunsungyang-omc/post/5ed407c4-b3e8-4704-b003-b79829b6b2cd/Feb-27-2022%2023-55-15.gif">

