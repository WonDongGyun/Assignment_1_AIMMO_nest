# 📕 Assignment AIMMO ft.Nest JS 

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

[env파일 작성법] https://github.com/preOnboarding-Team13/Assignment_1_AIMMO_nest/wiki/env-%EC%9E%91%EC%84%B1

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
- [김효민](https://github.com/luckyhyom) - [티스토리 블로그](https://baejjang.tistory.com/3)　
- [이나영](https://github.com/bokiri409) - [벨로그](https://velog.io/@bokiri409/%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EB%B0%B1%EC%97%94%EB%93%9C-%EC%BD%94%EC%8A%A4-AIMMO-%ED%9B%84%EA%B8%B0)
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

🧪 구현 방법 & 이유
-----------------  

<br/>
<br/>

**1) .env 사용한 환경 변수 관리**

config 라이브러리를 사용하여 .env를 통해 환경 변수를 관리하였습니다. 보안에 민감한 jwt secret key, database URL 등의 값들을 관리합니다.
보통은 .gitignore에 설정하여 깃허브에 담기지 않게 하지만 test를 하기 위해서는 필요하다고 생각하여 포함하였습니다.  
  
<br/>
  
**2) 공통 응답 관리**

API 요청에 성공하면 그에 해당하는 공통된 응답을 주도록 Success Response 객체를 만들어서 해당 형태로 반환하게끔 하였습니다. 
기본적으로 포함되는 필드는 success(성공 유무), statusCode(HTTP 상태 코드), message(HTTP 응답 메시지 혹은 반환 메시지)이며 필요에 따라 data 필드를 추가하여 
해당 필드에 데이터를 반환하도록 하였습니다.    
    
    
반대로, 오류가 날 경우는 Error Response 객체를 사용하여 해당 형태로 반환하게끔 하였습니다. 기본적으로 포함되는 필드는 Success Response와 같습니다.  
Nest Js에서 제공해주는 ExceptionFilter와 globalFilter 기능을 사용하여 필요한 곳에 ExceptionFilter 기능을 사용할 수 있게 하였습니다. 
이렇게 함으로서 각각의 컨트롤러에서 처리해야 했던 오류를 한 곳에서 처리함으로서, 코드 관리를 좀 더 편하게 할 수 있습니다.

<br/>

**3) TypeOrm 사용**

저희 팀에서 아무래도 가장 많이 사용해보았고 익숙했던 TypeOrm을 사용하여 MongoDB와 연결하였습니다. 처음에는 프로젝트하는데 무리가 없었으나 프로젝트가 진행될 수록
TypeOrm이 MongoDB와 잘 맞지 않는 ORM이라는 것을 깨닫게 되었습니다.  
TypeOrm의 경우 기본적으로 MongoDB를 3.7 버전까지밖에 지원을 해주지 않으며, TypeOrm의 
강력한 기능 중 하나인 Query Builder 기능도 제공되지 않았습니다. 때문에 정해진 시간내에 구현할 수 있는 기능이 제한되었고, Query Builder를 사용하면 편하게
구현할 수 있는 검색 기능을 구현하지 못하였습니다. 

<br/>

그 외에도 [MONGODB DRIVER] Warning 오류를 해결하지 못하였습니다. 비록 프로젝트를 완벽하게 완성하지는 못하였으나, 
TypeOrm에 대해 더욱 알 수 있었습니다. 앞으로는 MongoDB와 사용할 때는 Mongoose를 사용하는 것이 좋을 것 같다고 생각하였습니다.

<br/>

**4) ERD 설계**

기존의 user 1 : board M 의 관계에서 추가 요구사항으로 댓글과 대댓글 기능, 게시글에 카데고리 추가가 있었기 때문에 comments, categorycode 테이블을 만들었습니다. 
categorycode 테이블의 경우 category를 생성하는 API는 존재하지 않기 때문에 미리 데이터를 넣어 두었습니다. comments 테이블은 boards 테이블과 1: M의 관계를 맺으며
대댓글 기능을 위해 self join이 필요하기 때문에 자기 자신과 1 : M의 관계를 맺도록 설정하였습니다.  

<br/>

다만, TypeOrm이 MongoDB와 잘 맞는 ORM이 아니고 애초에 MongoDB가 비관계형 데이터베이스였기 때문에 TypeOrm의 one To many , many to one 설정을 제거하고 단순하게 컬럼으로 만들었습니다. 



