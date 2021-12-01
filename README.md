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

**1) Commit 메시지를 남기기 시작하다.**

프리온보딩 이전의 코드를 보면 그저 커밋만 하고 메시지를 자세히 남기지는 않았습니다. 깃 커밋 메시지가 그렇게 중요하다고 생각을 못했었거든요. 하지만 이번 프로젝트에서 커밋 메시지를 남기기 시작하면서, 시간이 지나도 스스로가 어떤 작업을 했는지 알 수 있게 됐고, 프로젝트의 작업 흐름을 전체적으로 볼 수 있게 됐습니다. 앞으로도 커밋을 할 때는 꼭 커밋 메시지를 남길 것 같습니다.    

커밋 메시지 규칙은 다음의 [블로그 글](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)을 참조하였습니다. 

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/144249036-eaf619f6-385d-42b8-970e-3582f5032629.png"></p>

<br/>
<br/>
  
**2) 공통 응답 관리를 해보지 않을래?**

예전에 프론트 엔드와 함께 작업하다가 성공 했을 때의 응답과 실패 했을 때의 응답이 조금 달랐던 부분이 있었는데, 그 사소한 부분 때문에 프론트 엔드 쪽 코드가 많이 수정됐던 적이 있습니다. 그때 성공했을 때와 실패했을 때 응답을 통일해서 전송해주면 괜찮지 않을까란 생각만 하고 실천을 못했었는데, 요번 프로젝트 때 구현해보기로 했습니다. 

<br/>

API 요청에 성공하면 그에 해당하는 공통된 응답을 주도록 Success Response 객체를 만들어서 해당 형태로 반환하게끔 하였습니다. 
기본적으로 포함되는 필드는 success(성공 유무), statusCode(HTTP 상태 코드), message(HTTP 응답 메시지 혹은 반환 메시지)이며 필요에 따라 data 필드를 추가하여 
해당 필드에 데이터를 반환하도록 하였습니다.    
    
    
반대로, 오류가 날 경우는 Error Response 객체를 사용하여 해당 형태로 반환하게끔 하였습니다. 기본적으로 포함되는 필드는 Success Response와 같습니다.  
Nest Js에서 제공해주는 ExceptionFilter와 globalFilter 기능을 사용하여 필요한 곳에 ExceptionFilter 기능을 사용할 수 있게 하였습니다. 
이렇게 함으로서 각각의 컨트롤러에서 처리해야 했던 오류를 한 곳에서 처리함으로서, 코드 관리를 좀 더 편하게 할 수 있습니다.

<br/>


