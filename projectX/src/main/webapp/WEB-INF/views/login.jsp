<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link rel="stylesheet" href="../../css/login.css" />
    <script defer src="./change.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="title">로그인</div>
      <div>
        <input type="text" class="inputBox" placeholder="아이디를 입력하세요" />
      </div>
      <div>
        <input
          type="password"
          class="inputBox"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div>
        <a href="/"><button>로그인</button></a>
        <a href="search"><button>아이디 찾기</button></a>
        <a href="/"><button>홈으로</button></a>
      </div>
    </div>
  </body>
</html>
