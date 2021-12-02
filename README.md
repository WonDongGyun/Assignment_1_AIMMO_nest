# 📕 Assignment AIMMO ft.Nest JS 

이 Read.me에는 제가 무엇을 했는지만 적혀있습니다. 팀 전체가 무엇을 했는지 궁금하시다면 하단의 링크를 참조해주세요.    
[Assignment_1_AIMMO 팀 Repository](https://github.com/preOnboarding-Team13/Assignment_1_AIMMO_nest)

<br/>
<br/>

😎 과제 내용 
-------------------------------

● 진행 날짜 - 2021.11.01 pm 16:00 ~ 2021.11.03 am 10:00  
● 과제 필수 포함 사항

```
● 사용자 생성, 인증 및 인가 기능 구현
● 게시글 작성, 수정, 삭제, 확인, 목록 확인 기능 구현
● 삭제 및 수정은 해당 사용자의 글만 가능
● Read의 경우 Pagination 구현 필수
● 게시글 검색 기능 및 조회수 기능 구현
● 같은 사용자가 게시글을 읽는 경우에는 조회수가 증가하면 안됨
● 댓글 및 대댓글 기능 구현
● 댓글 및 대댓글 pagination 구현
● Unit Test
● 1000만 건 이상의 데이터를 넣고 성능테스트 진행
● 데이터베이스는 MongoDB를 사용해야 함
```

<br/>
<br/>

🛠 프로젝트 빌드 및 서버 실행 방법  
-------------------------------

[env파일 작성법](https://github.com/preOnboarding-Team13/Assignment_1_AIMMO_nest/wiki/env-%EC%9E%91%EC%84%B1)

<br/>
<br/>

1. 상단의 Code 버튼을 눌러 경로를 복사한 후 클론 받습니다.  

```
$ git clone https://github.com/preOnboarding-Team13/Assignment_1_AIMMO_nest.git
```

<br/>
<br/>

2. 패키지를 설치합니다.

```
$ npm install
```

<br/>
<br/>

3. 서버를 실행해 줍니다.

```
$ npm start
```

<br/>
<br/>

3. 정해진 API에 접근하여 서비스를 이용합니다.


<br/>
<br/>

🪐 AWS EC2 배포 주소
-------------------------------

http://www.makevalue.net:3000

<br/>
<br/>


👩‍🔬 함께한 팀원
-------------------------------
- [김효민](https://github.com/luckyhyom) - Unit Test 작성, 서비스 배포 　　　
- [이나영](https://github.com/bokiri409) - 댓글 및 대댓글 CRUD 작성
- [원동균](https://github.com/WonDongGyun) - 인증 및 인가 구현, 게시글 CRUD 작성
- 공통 - 공통 응답 및 에러 처리, 사용자 CRUD 작성

<br/>
<br/>


📓 프로젝트 TIL 블로그 주소
-------------------------------
- [원동균](https://github.com/WonDongGyun) - [티스토리 블로그](https://tristy.tistory.com/41)


<br/>
<br/>



🏫 사용한 라이브러리
-------------------------------
- **Nest JS**  　　　
- **config**　　　　　
- **TypeOrm**　　 
- **Passport(local, jwt)**　
- **bcrypt**　
- **class-validator & class-transformer**　

<br/>
<br/>


💯 구현 목록
-----------------  

```bash
  ✅ 게시글 작성, 게시글 확인, 게시글 목록 확인, 게시글 수정, 게시글 삭제가 되는 API
      ✔ Delete와 Update는 해당 유저만 가능 (유저 생성 및 인증, 인가 기능도 필요)
      ✔ Read는 paginateion 구현 필수
      
  ✅ 대댓글(1 depth) 기능 구현
      ✔ 대댓글 pagination 구현
      
  ✅ 게시글 읽힘 수 기능 추가
      ✔ 같은 User가 게시글을 읽는 경우 count 수 증가하면 안 됨
      
  ✅ Rest API 설계
  
  ❌ 게시글 검색 기능
  
  ❌ Unit Test
      ✔ user, auth, board 관련 테스트
      ✖ comments 관련 테스트
  
```


<br/>
<br/>


📋 ERD 
-----------------  

<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/139957154-e7eba96a-d242-4bb5-8235-18f427595584.png"></p>


<br/>
<br/>

📋 API 명세서
-----------------  

[API 명세서](https://github.com/preOnboarding-Team13/Assignment_1_AIMMO_nest/blob/main/API%EB%AA%85%EC%84%B8%EC%84%9C.md)


<br/>
<br/>


📋 테스트 방법
-----------------  

<br/>
<br/>


**1. 만들어진 대부분의 API를 사용하기 위해서는 회원가입이 필요합니다.**    

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/139967845-4e98f46b-9bf8-414b-bca7-d58b69baa17d.png"></p>

<br/>

**2. 회원가입이 완료되면 로그인을 하시거나, Header에 Authorization 설정을 하시고 API를 이용합니다.**     

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/139967938-ab0930f7-3d7b-4c60-b43b-2c75c94535f1.png"></p>

<br/>

**3. Authorization jwt token이 필요한 경우에는 Header에 다음과 같이 설정합니다.**     

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/139967980-b9b5c8f9-7c80-428c-a2aa-e04aa155f8ad.png"></p>


<br/>
<br/>

🧪 내가 이번 프로젝트에서 무엇을 했지?
-----------------  

<br/>
<br/>

**1) `Commit` 메시지를 남기기 시작하다.**

프리온보딩 이전의 코드를 보면 그저 커밋만 하고 메시지를 자세히 남기지는 않았습니다. 깃 커밋 메시지가 그렇게 중요하다고 생각을 못했었거든요. 하지만 이번 프로젝트에서 커밋 메시지를 남기기 시작하면서, 시간이 지나도 스스로가 어떤 작업을 했는지 알 수 있게 됐고, 프로젝트의 작업 흐름을 전체적으로 볼 수 있게 됐습니다. 앞으로도 커밋을 할 때는 꼭 커밋 메시지를 남길 것 같습니다.    

커밋 메시지 규칙은 다음의 [블로그 글](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)을 참조하였습니다. 

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/144249036-eaf619f6-385d-42b8-970e-3582f5032629.png"></p>

<br/>
<br/>
  
**2) `공통 응답 관리`를 해보지 않을래?**

예전에 프론트 엔드와 함께 작업하다가 성공 했을 때의 응답과 실패 했을 때의 응답이 조금 달랐던 부분이 있었는데, 그 사소한 부분 때문에 프론트 엔드 쪽 코드가 많이 수정됐던 적이 있습니다. 그때 성공했을 때와 실패했을 때 응답을 통일해서 전송해주면 괜찮지 않을까란 생각만 하고 실천을 못했었는데, 요번 프로젝트 때 구현해보기로 했습니다. 

<br/>

API 요청에 성공하면 그에 해당하는 공통된 응답을 주도록 Success Response 객체를 만들어서 해당 형태로 반환하게끔 하였습니다. 
기본적으로 포함되는 필드는 success(성공 유무), statusCode(HTTP 상태 코드), message(HTTP 응답 메시지 혹은 반환 메시지)이며 필요에 따라 data 필드를 추가하여 
해당 필드에 데이터를 반환하도록 하였습니다. 같이 프로젝트를 한 효민님이 공통 응답은 좋지만 그래도 controller API 마다 응답이 다른 경우가 있을 수도 있으니 분리하는 것이 좋을 것 같다고 의견을 주셔서 도메인마다 다른 응답 타입을 만들어 두었습니다.  

<br/>

 <p align="center"><img src="https://user-images.githubusercontent.com/52685665/144261811-b26893e0-fb5a-4005-b5a4-0b399be68c28.png"></p>   
 
<br/>
    
반대로, 오류가 날 경우는 Error Response 객체를 사용하여 해당 형태로 반환하게끔 하였습니다. 기본적으로 포함되는 필드는 Success Response와 같습니다.  

<br/>

Nest Js에서 제공해주는 ExceptionFilter와 globalFilter 기능을 사용하여 필요한 곳에 ExceptionFilter 기능을 사용할 수 있게 하였습니다. 그리고 성공시와 실패했을 때의 HTTP Code와 HTTP Message를 관리할 수 있는 SuccessCode, ErrorCode를 만들었습니다. HTTP 통신에서는 에러가 나거나 성공 시 해당 코드와 메시지를 반환하는데 왜 코드와 메시지를 개발자가 설정한 값으로 나가게 구현했냐하면, 성공 시에는 이게 어떤 API 통신으로 왔는지 모를 때가 있고 HTTP 에러코드로 같이 나가는 메시지는 가끔 보면 "그래서 왜 이게 문제인건데?" 라는 생각이 들기 때문입니다. 그래서 백엔드 개발자가 해당 메시지를 상세하게 작성해 준다면 같이 개발자들이 협업을 하는데 훨씬 편해지지 않을까라고 생각하였습니다. 그리고 이런 코드랑 메시지를 각각의 컨트롤러에서 처리해야 했던 오류를 한 곳에서 처리함으로서, 코드 관리를 좀 더 편하게 할 수 있습니다.

<br/>

 <p align="center"><img src="https://user-images.githubusercontent.com/52685665/144265041-e6f2bb07-7c3e-4996-942f-9215c81de3b0.png"></p>   

<br/>

**3) `인증 및 인가` 기능을 만들어보자.**

게시판 서버를 만드는 것이기 때문에 당연히 사용자 인증과 인가는 필수 입니다. 저는 편리하게 인증과 인가 기능을 구현할 수 있는 passport를 사용하여 JWT 인가 기능을 만들어보기로 했습니다. 토큰과 세션 방식을 사용할 수도 있지만, 이 방식은 사용자 인가를 하기 위해 서버의 저장공간을 사용하기 때문에 여러명의 사용자가 접속한다면 과부하가 걸릴 수 있습니다. 그리고 다른 인증 방식으로 확장하기도 쉽지 않고요. 그에 반해 JWT는 google, facebook, github등 다양한 소셜 계정 방식으로 확장할 수도 있고, 서버에 저장하는 방식이 아니기 때문에 서버의 부하가 심하지 않습니다. 

<br/>

passpowrt를 사용하면 JWT 인증/인가 기능을 쉽게 만들 수 있습니다. 저는 인증을 위해 localStrategy, 인가를 위해 jwtStrategy를 만들었습니다. localStrategy에서는 클라이언트에서 id와 password를 넘겼을 때 데이터베이스에서 해당 사용자와 비교하여 맞는지 틀린지 확인하고, 맞다면 토큰을 발급해 줍니다. jwtStrategy는 클라이언트에서 특정 API를 사용하기 위해 header에 token값을 보내면 서버에서 jwt key값을 사용해 해당 토큰값을 복호화하여 올바른 토큰인지 확인합니다. 


<br/>

 <p align="center"><img src="https://user-images.githubusercontent.com/52685665/144355271-d6054fb9-f36e-440f-8132-6b5d59123419.png"></p> 

<br/>

**4) `게시판 CRUD`를 만들어보자**

저는 게시판 CRUD를 만드는 역할을 담당하였습니다. 기본적으로 controller, service 형식으로 나눠서 개발을 하였습니다. 이렇게 controller와 service를 분리한 이유는 service의 코드를 컨트롤러에 다같이 구현해버리면 다른 컨트롤러에서 해당 서비스를 가져와 사용할 수 없으므로, 중복 코드가 생기기 때문입니다. 그래서 controller와 service를 분리해서 클라이언트의 요청은 controller를 통해서 받고 그 요청에 대한 처리는 service에서 처리할 수 있게 하였습니다. 페이징 처리의 경우에는 TypeOrm에서 가장 많이 사용하는 방식인 `limit offset` 방식을 사용하였습니다. 


 <p align="center"><img src="https://user-images.githubusercontent.com/52685665/144405213-7ae99797-5d1d-4d0d-9aaa-3b5910438951.png"></p> 



