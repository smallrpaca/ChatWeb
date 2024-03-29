# ChatWeb

### server 와 client 'yarn'으로 패키지 다운로드 해주세요!


<h1>소스코드 사용방법</h1>
다운로드 후 명령창에 'yarn' 입력. (노드 모듈 다운) 
시작은 jacarand 폴더에서 'yarn start dev'

public 폴더는 포함하지 않았습니다.

- 실행 전 추가 및 변경해주세요.
  - client => public => index.html 생성
  - server.js process.env.NODE_ENV = "development" 설정
  - components => Socket.js => socketIo connect("http://localhost:8080") 변경

<h1>업데이트 내용 기록</h1>
<h3>V 0.0.2</h3>
 19.06.12 <br />

- 기존 작성된 코드 수정 <br />
- MobX를 사용한 상태관리 시작 <br />
  - 로그인 페이지 ON / OFF ( file : Login.js , TopBar.js ) <br />
- 로그인 페이지 CSS 추가 <br />
  <h3>V 0.0.3</h3>
  19.06.13
- 기존 작성된 코드 수정 <br />
  - MeetBar.js : wishgender 내용 삭제 => GenderList.js 파일 추가 <br />
- 파일 추가 <br />
  - GenderList.js <br />
  - InterestList.js <br />
  - GenderList.css <br />
  - InterestList.css <br />
- 파일명 변경 <br />
  - LoginOnOff.js => OnOff.js <br />
  - 파일명 변경에 따른 일부 코드 수정 <br />
- 추후 계획 (완료일 미정) <br />

  - 로그인 기능 구현(구글, 페이스북 API 활용 + 자체 회원 DB) [미정] <br />
  - 페이지 구현 : 프로필, 채팅페이지(text, voice), 설정, 이에따른 서브페이지... <br />

<h3>V 0.0.4</h3>
19.06.16

- 기존 작성된 코드 수정 <br />
  - Home.js : 커밍순 화면 구현 ( 웹 배포 : 기타 사항 확인 ) <br />
  - Adv.js : 페이지마다 표시 광고창 구현 (+css 포함) <br />
  - GenderList.js : 성별 체크박스 클릭 후 close 누르면 리셋되던 현상 수정 <br />
    : Store(MobX)에 OnOff.js 상태 추가 => genderFemaleValue, genderFemaleOnOff, genderMaleValue, genderMaleOnOff <br />
  - index.html <br />
    : meta 태그 추가 => title, desc, keywords, og, favicon, robots, Google Analytics, Google Ads <br />
- 파일 추가 <br />
  - subpages : MeetVideo.js, Profile.js => Css 구현 필요<br />
  - public : favicon.ico, robots.txt, sitemap.xml<br />

<h3>V 0.0.5</h3>
19.06.19

- 주 내용 : socket.io와 socket.io-client를 사용하여 쌍방향 문자 전송 기능 추가
  - MeetText 추가<br />
  - 수정 및 보완 해야 할 사항<br />
    : 텍스트가 추가 됨에 따라 자동 스크롤 기능(완료)<br />
    : 최초 닉네임 설정은 메인페이지에서 할 수 있도록 할 것(완료)<br />
- 기존 작성된 코드 수정<br />
  - server.js : socket.io => message 부분 추가<br />
  - subpages : MeetText 코드 추가 => ChatTopBar, ChatBorder, ChatBar<br />
  - index.js : State 상태 추가 => stores 참조<br />
  - css : 일부 수정<br />
- 파일 추가<br />
  - stores : State.js => user, message 상태<br />
  - subComp : ChatTopBar, ChatBorder, ChatBar<br />
    => 채팅 페이지의 컴포넌트들...<br />

<h3>V 0.0.6</h3>
19.06.23 <br />

- 주 내용 : 기존에 추가하였던 socket.io 코드 변경 <br />
  - 사용자 상태 socket.io를 통해서 전달 및 서버에서 가공 <br />
  - room 기능 구현 : 완벽하지는 않지만 좀 더 보완하면 초기모델 완성 될 듯.. <br />

<h3>V 0.0.7</h3>
19.06.27 <br />

- 주 내용(리팩토링) : css => scss 변경 진행, 불필요한 js파일 삭제 <br />

<h3>V 0.0.8</h3>
19.06.30 <br />

- 주 내용 : mobx => observer 모든 JS 파일 적용 <br />
  - 코드 최적화 진행 <br />
  - MeetText 페이지내에서 ReStart 기능 추가 <br />

<h3>V 0.0.9 ~ 0.1.0</h3>
19.07.24 <br/>

- 주 내용 : 새로운 것을 시도 후 다시 복귀...<br/>
  - Apollo, MongoDB, Graphql 을 사용하여 채팅방 생성 및 저장을 시도 해봄. (07.01 ~ 07.14)<br/>
    : CRUD는 성공적.. 방 만들기 / 호출 까지는 가능했으나 삭제는 로직상의 문제로 실패.. (할 수는 있겠는데..)<br/>
    : 이후 문제.. MongoDB, Graphql 숙지가 미흡.. 리졸버, 스키마 작성의 이해가 부족하여 난항을 겪어서 잠정 보류..<br/>
  - 현재 class 형태를 React hooks 로 변경 후 다시 class.. 일부 함수형태로 수정 (07.01 ~ 07.14)<br/>
  - 시도 해 본 내용은 작성하기전 해당 예제부터 시작함. 그래서 시간이 오래 걸렸음.<br/>
  - 07.14 이후 해당 프로젝트 진행 안하고 기초부터 다시 훑어봄 / 다른 웹사이트 제작.. (07.14 ~ 07.23)<br/>
  - 07.24 : Apollo, MongoDB, Graphql 코드 전부 걷어냄.<br/>
    : socket.io로만 방 생성, 호출, 삭제 구현.<br/>
- 코드 최적화<br/>
  - 불필요 코드 / 컴포넌트 삭제<br/>
- 상세 설명 추가<br/>
  - 주석 생성 : 나중에 봐도 알아볼 수 있도록..<br/>

<h3>해보고 싶은 것..</h3>

- webRTC를 사용하여 음성 채팅, 비디오 채팅 구현<br/>
- 전체적인 디자인 재구성 (UI, UX)<br/>
  - UX 부분은 사용자 패턴에 따라 페이지 구성..<br/>
  - 예를 들어 클릭 => css 효과 -> 로딩 화면(무조건) -> css 효과 => 해당 페이지<br/>
  - 해당 페이지에 머물러 있을시 페이지 알림 : 하단바에 해당이미지만 컬러나오게. 나머지는 회색으로 표시<br/>
- 로그인 API 사용해보기.. : 선행 작업 server 작성이 되어야함..<br/>

<h3>기타 사항</h3>
웹 배포
 - Google App Engine 사용<br />

- express 서버 구현 <br />

* 웹 추적 : 구글 애널리틱스 <br />
* 웹 최적화 확인 : 네이버 웹 마스터 도구 <br />
* 배포 전 파일 추가 <br />

- favicon.ico : 파비콘 웹 상단 태그 아이콘 표시 <br />
- robots.txt : 검색 로봇들이 웹사이트 내용을 확인하고 감 / 내용에 sitemap 표시 <br />
- sitemap.xml : robots.txt와 비슷...(?)<br />

<h3>최종 작성일 : 19.07.24</h3>

The MIT License (MIT)<br />

Copyright (c) Ulrim <2019><br />

이 문서에 기하여, 이 소프트웨어와, 이와 연관된 모든 문서(이하 ‘소프트웨어’라 한다)의 복제본을 보유하게 되는 모든 사용자에 대하여, 다음의 권한이 무상으로 부여된다. 소프트웨어의 사용, 복제, 변경, 통합, 발행, 배포, 재실시, 판매에 대한 제약을 포함한 어떠한 제약 없이 본 소프트웨어를 취급할 수 있으며, 이는 제3자에 대한 소프트웨어 지급시에도 동일하게 적용된다. 단, 이 모든 사항은 아래의 조건하에 적용된다. <br />

위 저작권 표시와 본 허가조항은 소프트웨어의 모든 복제본 혹은 중요한 부분에 포함되어야 한다. <br />

소프트웨어는 "있는 그대로" 제공된다. 판매적격성, 특정 용도에 대한 적합성, 준법성, 혹은 그 이상의 범위를 포함한 사항에 있어서, 명시적 혹은 암시적인 어떠한 보증도 하지 않는다. 계약, 불법행위등의 과정상의 개입여부에 상관없이 어떠한 상황에서도, 본 소프트웨어의 저작자 혹은 저작권자는, 소프트웨어에서 혹은 소프트웨어와 연관되어 발생하는, 또한 사용과정중 혹은 기타 거래도중 발생하는 어떠한 소유권 청구, 피해, 혹은 기타 다른 법적 책임에 대해서도 책임을 지지 않는다.<br />

The MIT License (MIT)<br />

Copyright (c) Ulrim <2019><br />

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br />

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. <br />

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br />
