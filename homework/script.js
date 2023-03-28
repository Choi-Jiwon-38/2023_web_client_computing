let hour = new Date().getHours(); // 변수 hour에 현재 시 할당

if (0 <= hour && hour < 5) {
  // 새벽
  console.log("현재는 새벽입니다.");
} else if (hour < 12) {
  // 아침
  console.log("현재는 아침입니다.");
} else if (hour < 18) {
  // 오후
  console.log("현재는 오후입니다.");
} else {
  // 저녁
  console.log("현재는 저녁입니다.");
}

setTimeout(() => console.log("time check"), 60000);

function multiplication() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  console.log(num1 * num2);
  return alert(num1 * num2);
}
