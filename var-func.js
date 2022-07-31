// 변수 Variable

// f(x)
//
// f : function
// x : parameter/argument
// f(x) : f 라는 함수에 x 라는 param/arg를 넣어서 나온 결과.

function add2(x) {
  return x + 2;
}

console.log(add2(3));
console.log(add2(8));
console.log(add2(123424138));

// console.log
console.log(console);
console.log(console.log);
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof "hello");
console.log(typeof console.log);
console.log(typeof console);

console.log(console);

const log1 = console.log;
let log2 = console.log;

// prameter/argument
// f(x) <- x: parameter/argument
// parameter: <- 함수 작성시 작성하는 변수
// argument <- 실제로 호출할 때 전달하는 값

function add2(x) {
  // x <- parameter (변수? 가정? 뭐가 올 지 모르지만 들어올 뭔가에 이름을 붙인 것)
  return x + 2;
}

const result = add2(3); // <- 3: argument (요 함수가 실제로 동작할 때 넘어간 뭔가)
console.log(result);
// 변수(variable)에는 여러 의미가 있을 수 있음에 주의.
// 1. 변하는 뭔가
// 2. 뭐가를 부르는 이름?
// 위의 result는 변수라고 하는데, 뭐가 들어있냐면 함수 add2에 3을 넘겨준 결과가 들어있는 것.
// 근데 매번 add2(3)을 하기 귀찮기 때문에 result에 결과를 넣어두고 그걸 쓰겠다 뭐 이런 의미가 된다.

function greet(name) {
  return "안녕하세요, " + name + "님!";
}

// variable을 만드는 방식을 두 가지가 있는데:
// 1. let
// 2. const
// 1로 만든 변수에는 재할당이 가능하지만 2로 만든 변수는 안됨

let greet = greet("셀피");
console.log(greet);
greet = greet("유미");
console.log(greet);

const greetSelfieConst = greet("셀피");
greetSelfieConst = greet("유미");
console.log(greetSelfieConst);
