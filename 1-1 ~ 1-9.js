// 1-1

var a;

// 1-2

var a; // 변수 a 선언
a = 'abc'; // 변수 a에 데이터 할당

var a = 'abc'; // 변수 선언과 할당을 한 문장으로 표현


// 1-3

var a = 'abc';
a = a + 'def';

var b = 5;
var c = 5;
b = 7;

// 1-4

var obj1 = {
  a: 1,
  b: 'bbb',
};

// 1-5

var obj1 = {
  a: 1,
  b: 'bbb',
};
obj1.a = 2;

// 1-6

var obj = {
  x: 3,
  arr: [3, 4, 5],
};

// 1-7

var a = 10;
var b = a;

var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

// 1-8

var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2.c = 20;

// 1-9

var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2 = { c: 20, d: 'ddd' };