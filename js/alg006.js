// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.
// **숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**
// 예를 들어, **123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다.
let a = 1234567829 + "";
function comma(a) {
  if (a.length <= 3) {
    return a;
  } else {
    return comma(a.slice(0, a.length - 3)) + "," + a.slice(a.length - 3);
  }
}
console.log(comma(a));
