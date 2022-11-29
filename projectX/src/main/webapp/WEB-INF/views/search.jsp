<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Search</title>
    <link rel="stylesheet" href="../../css/search.css" />
  </head>
  <body>
    <div class="container">
      <div class="title">아이디찾기</div>

      <input
        class="inputBox"
        type="name"
        id="name"
        placeholder="이름을 입력하세요"
      />

      <input
        class="inputBox"
        type="email"
        id="email"
        placeholder="이메일을 입력하세요"
      />
      <div>
        <button>아이디찾기</button>
        <a href="/"><button>홈으로</button></a>
      </div>
    </div>
  </body>
</html>
