# 위코드 1차 프로젝트 회고
# WE MALONE Korea

### 1. 프로젝트 인원 & 기간 
- F/E 4명 & B/E 2명
- 프론트엔드: 강지민, 남연우, 송아영, 이유주
- 백엔드: 송철진, 임창현

2022년 11월 14일 - 11월 25일 (약 2주)

### 2. 프로젝트 내용
조 말론 런던 온라인 몰 사이트를 모티브로 하여
팀만의 위 말론 선릉 온라인 몰 사이트로 제작함

### 3. 프로젝트 기획 & 활용툴

1. trello

![](https://velog.velcdn.com/images/leah1225/post/523b2b46-971f-4d25-8256-ba776d5a3f42/image.png)
각자 부여된 티켓의 진행 상황을 확인할 수 있었던 트렐로 활용

2. notion
![](https://velog.velcdn.com/images/leah1225/post/b41d4161-f0c4-49a6-a058-fd6fb83465e2/image.png)
전체적인 진행상황과 미팅내용 등을 공유한 notion 활용

3. postman
백엔드 API 내용을 확인 할 수 있었던 postman 활용

### 4. 프로젝트 회고
![](https://velog.velcdn.com/images/leah1225/post/ab452a0f-b7f6-4432-aaa8-11fb1f2e96e7/image.png)

#### 깨달은 점
첫 프로젝트 였던만큼 전체적인 그림을 그리는데 서툴러 초기 기획이 부족했지만
다 끝나고보니 앞으로 초기 기획을 어떻게 해야하는지 확실히 알게 되었다.
일정기간 동안 어느 정도의 기능을 완성시킬 수 있는지 , 각각의 기능을 구현하는데 필요한 시간, 백엔드와 연결해보는 것 에 대한 큰 개념을 모두 배울 수 있었다.

#### 사이트 전체 기능들 (F/E)
팀원 1: 
로그인  // fetch(post)
회원가입 // fetch(post), 전체 동의하기 체크박스, 비밀번호 재확인
마이페이지 // fetch(patch), 주소보내기
footer

팀원 2: 
제품상세 // fetch(get), 이미지슬라이드, fetch(post) 장바구니 담기 버튼

팀원 3:
Main // 영상삽입, 슬라이드, 
전체리스트페이지 // 미리보기 모달창, fetch(post) 장바구니 담기 버튼, fetch(get) 아이템 불러오기

#### 내가 맡은 부분
![](https://velog.velcdn.com/images/leah1225/post/65e8348d-9c65-4cfb-9c65-59f651ddfa52/image.png)

1. 전체 layout에 들어가는 Nav바
![](https://velog.velcdn.com/images/leah1225/post/6719f38e-8249-4d17-a933-35e2209bedaa/image.png)

- hover시 나타는 메뉴가 변경되는 부분
- 동적 라우팅을 이용한 각 페이지로의 페이지 이동

2. 제품리스트 페이지의 필터링 부분
![](https://velog.velcdn.com/images/leah1225/post/d99e8098-00a9-4640-a269-e4a39565bf4f/image.png)

- 쿼리 스트링을 활용하여 checkbox의 체크 상태에 따라 value	값이 변동되도록 구현

3. 제품 장바구니 구현
![](https://velog.velcdn.com/images/leah1225/post/bafc6ee4-3d9d-426d-aa24-30bd276811e1/image.png)

- GET, DELETE를 사용하여 담은 제품을 불러오고 삭제할 수 있도록 구현
- 총 가격, 아이템 개수 계산 함수 작성

### code that I learned

useEffect 내부는 마지막에 렌더링 된다는 기본적인 개념을 잊고 왜 안되지 싶을 때가 있었다. 이 부분을 항상 인지해야한다는 것을 다시 한 번 배웠다.

#### 회고

1. 목표 설정을 확실하게.
2. 초반 기획을 탄탄하게 (홈페이지 분석, 유저플로우 검토, 회의록 작성)
3. 툴을 복잡하게 여러 개 쓰기보다는 ~하나라도 잘!
4. api 명세서 작성을 함께 의논해서 시작하기!
5. PM(대표로 일정 관리를 철저하게 해줄!) 정해서 테스크 관리 확실하게!
