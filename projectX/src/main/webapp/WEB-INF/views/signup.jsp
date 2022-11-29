<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign Up</title>
    <link rel="stylesheet" href="../../css/signup.css" />
    <script defer src="../../js/signup.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="title">회원가입</div>
      <div id="id">
        <input
          type="text"
          class="idBox"
          placeholder="아이디를 입력하세요(5 ~ 15자, 영문자 및 숫자)."
        />
        <button>중복 확인</button>
        <div class="stateMsg"></div>
      </div>

      <div id="pw">
        <input
          type="password"
          class="inputBox"
          placeholder="비밀번호를 입력하세요(8 ~ 20자, 영문자, 숫자, 특수문자를 모두 포함)."
        />
        <div class="stateMsg"></div>
      </div>

      <div id="pwRet">
        <input
          type="password"
          class="inputBox"
          placeholder="비밀번호를 다시 입력하세요."
        />
        <div class="stateMsg"></div>
      </div>

      <input
        type="name"
        id="name"
        class="inputBox"
        placeholder="이름을 입력하세요."
      />

      <div class="phone">
        <input
          class="box"
          id="phone1"
          type="text"
          maxlength="3"
          placeholder="번호를 입력하세요."
        />
        -
        <input class="box" id="phone2" type="text" maxlength="4" />
        -
        <input class="box" id="phone3" type="text" maxlength="4" />
        <div class="stateMsg"></div>
      </div>
      <div class="email">
        <input
          class="box"
          id="email"
          type="text"
          placeholder="이메일을 입력하세요."
        />
        <span>@</span>
        <input class="box" id="domainTxt" type="text" />
        <select class="box" id="domainList">
          <option value="type">직접 입력</option>
          <option value="42seoul.student.kr">42seoul.student.kr</option>
          <option value="naver.com">naver.com</option>
          <option value="google.com">google.com</option>
          <option value="kakao.com">kakao.com</option>
        </select>
        <div class="stateMsg"></div>
      </div>

      <div class="button">
        <button>회원가입</button>
        <a href="/">
          <button>홈으로</button>
        </a>
      </div>
    </div>
  </body>
</html>
