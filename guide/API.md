# REST API
HTTP 요청 리스트

---
## Users(http://localhost:3000/users)
  
- GET /login
  > login page 화면

- POST /logout
  > 로그아웃

- POST /auth
  > 42api authorization 화면

- GET /profile/:userId
  > {:userId}의 프로필 화면<br>
  > with 래더 레벨, 전적, 최근 경기 결과, 업적

- PATCH /profile/:userId/mod
  > {:userId}의 프로필 수정<br>
  > nickname[중복검사필요] / image 수정

- POST /profile/:userId/2fa
  > {:userId}의 2FA 인증

- GET /profile/:userId
  > {:userId}의 프로필 화면<br>
  > with 래더 레벨, 전적, 최근 경기 결과, 업적

- POST /profile/:userId/addFriend
  > {:userId}에게 친구 신청

- POST /profile/:userId/addBlackList
  > {:userId} 차단

- POST /profile/:userId/sendDm
  > {:userId}에게 DM 보내기

- POST /profile/:userId/askmatch
  > {:userId}에게 게임 초대 보내기

--- 
## Community(http://localhost:3000/community)
- GET /friends
  > 친구 목록 화면

- POST /friends
  > 친구 삭제

- GET /blackList
  > 차단 목록 화면

- POST /blackList
  > 차단 해제
---
## Dms(http://localhost:3000/dms)
- GET /
  > 최근 dm 대화 목록 화면

- POST /:userId 또는 :id
  > dm 내용 확인을 위해 채팅창에 dm 내용 띄우기

// TODO: 상의해서 메소드 정하기
- POST /:userId 또는 :id
  > 최초 dm 보내기

- PATCH /:userId 또는 :id
  > dm 보내기

---
## Channels(http://localhost:3000/channels)
- GET /
  > 내가 속한 채널 목록과 전체 채널 목록 띄우기 + 사용자 수

- POST /:channelId
  > 내가 속한 채널에 접속<br>'
  > 채널 접속자 목록 보여주기<br>
  > OwnerId = :myId, adminId = :userId(다른 이용자)<br>
  > Owner는 admin을 임명할 권리가 있다.<br>
  > Owner는 mute 할 수 있다.<br>
  > Owner가 채널에서 나가면, 랜덤으로 새로운 Owner를 구한다.<br>

- POST /createNewChannel
  > 새로운 공개/비공개 채널 만들기






