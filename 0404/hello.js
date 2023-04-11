// 모듈을 추출합니다.
const express = require("express");
const morgan = require("morgan");

// 서버를 생성합니다.
const app = express();
app.use(express.static("public"));
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));

// request 이벤트 리스너 생성
app.get("/", (request, response) => {
  let output = "";
  output += '<form method="post">';
  output += '<input type="text" name="a" />';
  output += '<input type="text" name="b" />';
  output += '<input type="submit" />';
  output += "<form/>";
  response.send(output);
});

app.listen(52273, () => {
  console.log("Server running running at http://127.0.0.1:52273");
});
