# 📜API 명세서📜

- version 1.0.0
- sever
  - local server : http://localhost:3000/api
  - deploy sever : http://www.makevalue.net:3000/api

<br/>

## 📌목차
- 사용자 API
- 게시판 API
- 댓글, 대댓글 API

<br/>

## 🎲사용자 API
> ### 회원 가입 `GET` /signup

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|userId, password, userName| string, string, string| 사용자가 아이디, 비밀번호, 이름으로 회원가입을 진행합니다.|

```json
body {
   userId
   userPw
   userName
}
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```POST```|```201:Created```<br/>```409:Conflict```|회원가입에 성공했습니다.<br>이미 존재하는 ID입니다.|

```json
{
   success:true
   statusCode: 201,
   message:"회원가입에 성공했습니다."
   token: "bearer sdkjfndskjaf ..."
}
```

<br/><br/>

> ### 로그인(JWT발급) `POST` /signin

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|userId, password|string, string|사용자가 아이디, 비밀번호로 로그인을 진행하고, 고유 JWT토큰을 발급받습니다.|

```json
body {
   userId
   userPw
}
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```POST```|```200:OK```<br/>```404:NotFound```|로그인에 성공했습니다.<br>존재하지 않는 ID입니다.|

```json
{
   success:true
   statusCode: 200,
   message:"로그인에 성공했습니다."
   token: "bearer sdkjfndskjaf ..."
}
```

<br/><br/>

## 🎲게시판 API
> ### 게시글 생성 `POST` /board

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|title, contents, categoryCode | string, string, string| 로그인 한 사용자가 게시글을 작성합니다. |

```json
header: {
    Authorization: "bearer eyJhbGciOi6IkpX ..."
}

body {
    title
    contents
    categoryCode
}
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```POST```|```201:Created```<br/>```401:Unathorized```|게시글이 등록되었습니다.<br>로그인이 필요합니다.|

```json
{
   success:true
   statusCode: 201,
   message:"게시글이 등록되었습니다."
}
```

<br/><br/>

> ### 게시글 수정 `PATCH` /board/:boardId

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|boardId, title, contents, categoryCode |number, string, string, string| 해당 게시글을 작성한 사용자가 게시글을 수정합니다. |

```json
header: {
    Authorization: "bearer eyJhbGciOi6IkpX ..."
}

params : boardId

body: {
    title
    contents
    categoryCode
}
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```POST```|```200:OK```<br/>```403:Forbidden```<br/>```404:NotFound```|게시글이 수정되었습니다.<br/>권한이 없습니다.<br/>존재하지 않는 게시글입니다.|

```json
{
   success:true
   statusCode: 200,
   message:"수정되었습니다."
   data: {
      게시글 수정 데이터
   }
}
```

<br/><br/>

> ### 게시글 삭제 `DELETE` /board/:boardId

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|boardId|number| 해당 게시글을 작성한 사용자가 게시글을 삭제합니다. |

```json
header: {
    Authorization: "bearer eyJhbGciOi6IkpX ..."
}

params : boardId
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```POST```|```200:OK```<br/>```403:Forbidden```<br/>```404:NotFound```|게시글이 삭제되었습니다.<br/>권한이 없습니다.<br/>존재하지 않는 게시글입니다.|

```json
{
   success:true
   statusCode: 200,
   message:"삭제되었습니다."
}
```

<br/><br/>

> ### 게시글 내용 가져오기 `GET` /board/:boardId

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|boardId|number| 해당 게시글 상세 내용을 가져옵니다. |

```json
params : boardId
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```GET```|```200:OK```<br/>```404:NotFound```|성공했습니다.<br/>존재하지 않는 게시글입니다.|

```json
{
   success:true
   statusCode: 200,
   message:"성공했습니다."
   data: {
      게시글 정보
   }
}
```

<br/><br/>

> ### 게시글 목록 가져오기 `GET` /board/?page=0

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|page|number| 해당 게시글의 모든 목록을 가져옵니다. |

```json
params : page
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```GET```|```200:OK```<br/>```404:NotFound```|성공했습니다.<br/>존재하지 않는 페이지입니다.|

```json
{
   success:true
   statusCode: 200,
   message:"성공했습니다.",
   data: {
      게시글 목록 정보
   }
}
```

<br/><br/>

## 🎲댓글/대댓글 API
> ### 댓글 생성하기 `POST` /comment

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|boardId, contents, depth|number, string, number| 로그인 한 사용자가 해당 게시글에 댓글을 작성합니다. |

```json
header: {
    Authorization: "bearer eyJhbGciOi6IkpX ..."
}

body: {
    "boardId": "", 
    "contents":"",
     depth:  1
}
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```POST```|```201:Created```<br/>```401:Unauthorized```|댓글이 등록되었습니다.<br/>권한이 없습니다.|

```json
{
   success:true
   statusCode: 201,
   message:"댓글이 등록되었습니다.",
   "data": {
       댓글 정보...
   }
}
```

<br/><br/>

> ### 댓글 읽기 `GET` /comment?boardId&pageNo=0

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|boardId, pageNo|number, string, number|해당 게시글의 댓글 목록을 가져옵니다. |

```json
query : boardId, pageNo
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```GET```|```200:OK```<br/>```404:NotFound```|성공했습니다.<br/>존재하지 않는 페이지입니다.|

```json
{
   success:true
   statusCode: 200,
   message:"성공했습니다.",
   "data": {
       댓글 정보...
   }
}
```

<br/><br/>

> ### 댓글 삭제 `DELETE` /comment/:boardId

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|commentId|number|해당 댓글을 작성한 사용자가 댓글을 삭제합니다. |

```json
header: {
    Authorization: "bearer eyJhbGciOi6IkpX ..."
}

params : commentId
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```GET```|```200:OK```<br/>```403:Forbidden<br/>```404:NotFound```|삭제되었습니다.<br/>권한이 없습니다.<br/>존재하지 않는 댓글입니다.|

```json
   success:true,
   statusCode: 200,
   message:"댓글이 삭제되었습니다.",
```

<br/><br/>

> ### 댓글 수정 `PATCH` /comment/:boardId

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|commentId, contents|number, string|해당 댓글을 작성한 사용자가 댓글을 수정합니다. |

```json
header: {
    Authorization: "bearer eyJhbGciOi6IkpX ..."
}

params : commentId

body {
    contents
}
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```GET```|```200:OK```<br/>```403:Forbidden<br/>```404:NotFound```|수정되었습니다.<br/>권한이 없습니다.<br/>존재하지 않는 댓글입니다.|

```json
body { 
  success:true,
  statusCode: 200,
  message:"댓글이 수정되었습니다.",
  contents,
  "data": {
       댓글 정보...
   }
}
```

<br/><br/>

> ### 대댓글 읽기 `GET` /comment/recomment?parentId&page=0

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|boardId, contents, parentId, depth|number, string, number, number| 해당 댓글에 달린 대댓글을 가져옵니다. |

```json
query : boardId, parentId, pageNo, pageSize
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```GET```|```200:OK```<br/>```404:NotFound```|성공했습니다.<br/>존재하지 않는 댓글입니다.|

```json
{
   success:true,
   statusCode: 200,
   message:"성공했습니다.",
   data: {
      댓글 정보...
   }
}
```

<br/><br/>

> ### 대댓글 생성하기 `POST` /comment/recomment

## `Request`
|**Input**|**Type**|**Description**|
|--|--|--|
|boardId, contents, parentId, depth|number, string, number, number| 해당 댓글에 달린 대댓글을 가져옵니다. |

```json
header: {
    Authorization: "bearer eyJhbGciOi6IkpX ..."
}

body: {
    "boardId": "", 
    "content": "",
    parentId,
    depth:2
}
```

## `Response`
|**HTTP Method**|**HTTP Status Code**|**Description**|
|--|--|--|
|```POST```|```201:Created```<br/>```401:Unathorized```|성공했습니다.<br/>로그인이 필요합니다.|

```json
{
   success:true
   statusCode: 201,
   message:"댓글이 등록되었습니다."
   data: {
      댓글 정보...
   }
}
```
