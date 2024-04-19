// Uyga vazifa /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Begin /////////////////////////////////////////////////////////////////////////////////////////////////////
// Begin 1///////////////////////////////////////////////////////////////////
// let a;
// let b;
// a = Number(prompt("a ni kiriting:"));
// b = Number(prompt("b ni kiriting:"));
// let P = 2 * (a + b);
// let S = a * b;
// console.log("P=", P);
// console.log("S=", S);

// Begin 2//////////////////////////////////////////////////////////////////////
// let d;
// let pi = 3.14;
// d = Number(prompt("Aylana diametrini kiriting:"));
// let L = d * pi;
// console.log("L=", L);

// Begin 3///////////////////////////////////////////////////////////////////////
// let a;
// a = Number (prompt("Kubning tomonini kiriting:"));
// let S = 6 * a ** 2;
// let V = a ** 3;
// console.log("S=", S);
// console.log("V=", V);

// Begin 4////////////////////////////////////////////////////////////////////////
// let a;
// let b;
// let c;
// a = Number (prompt("a="));
// b = Number (prompt("b="));
// c = Number (prompt("c="));
// let S = 2 * (a * b + b * c + a * c);
// let V = a * b * c;
// console.log("S=", S);
// console.log("V=", V);

// Begin 5//////////////////////////////////////////////////////////////////////////
// let a;
// let b;
// a = Number(prompt("a="));
// b = Number(prompt("b="));
// let M = (a + b) / 2;
// console.log("M=", M);

// Begin 6/////////////////////////////////////////////////////////////////////////
// let a;
// let b;
// a = Number(prompt("a="));
// b = Number(prompt("b="));
// let c = Math.sqrt(a ** 2 + b ** 2);
// let P = a + b + c;
// console.log("c=", c);
// console.log("P=", P);

// Begin 7/////////////////////////////////////////////////////////////////////////
// let r1;
// let r2;
// r1 = Number(prompt("r1="));
// r2 = Number(prompt("r2="));
// let S1 = Math.PI * r1 ** 2;
// let S2 = Math.PI * r2 ** 2;
// let S = S1 - S2;
// console.log("S1=", S1);
// console.log("S2=", S2);
// console.log("S=", S);

// Begin 8/////////////////////////////////////////////////////////////////////////
// let r;
// let pi = 3.14;
// r = Number(prompt("r="));
// let L = 2 * pi * r;
// let S = pi * r ** 2;
// console.log("L=", L);
// console.log("S=", S);

// Begin 9/////////////////////////////////////////////////////////////////////////
// let x1;
// let x2;
// let y1;
// let y2;
// x1 = Number(prompt("x1="));
// x2 = Number(prompt("x2="));
// y1 = Number(prompt("y1="));
// y2 = Number(prompt("y2="));
// let L = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// console.log("L=", L);

// Begin 10/////////////////////////////////////////////////////////////////////////
// let A;
// let B;
// let C;
// let D;
// A = Number(prompt("A="));
// B = Number(prompt("B="));
// C = Number(prompt("C="));
// D = A;
// A = B;
// B = C;
// C = D;
// console.log("A=", A);
// console.log("B=", B);
// console.log("C=", C);

// Begin 11/////////////////////////////////////////////////////////////////////////
// let x;
// x = Number(prompt("x="));
// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
// console.log("y=", y);

// Begin 12/////////////////////////////////////////////////////////////////////////
// let A;
// let a;
// let result;
// A = Number(prompt("Sonni kiriting! "));
// a = Number(prompt("Sonning darajasini kiriting! "));
// result = A ** a;
// console.log("Natija:", result);

// Begin 13/////////////////////////////////////////////////////////////////////////
// let Tf;
// Tf = Number(prompt("Tf="));
// let Tc = (Tf - 32) * (5 / 9);
// console.log("Tc=", Tc);

// Begin 14/////////////////////////////////////////////////////////////////////////
// let X;
// let A;
// let Y;
// let B;
// X = Number(prompt("Shokalad hajmini kiriting! (kg da)"));
// A = Number(prompt("1 kg shokalad narxini kiriting! (so'm da)"));
// Y = Number(prompt("Konfet hajmini kiriting! (kg da)"));
// B = Number(prompt("1 kg konfet narxini kiriting! (so'm da)"));
// let Z = X * A;
// let C = Y * B;
// console.log(X + "kg shokalad " + Z + " so'm turadi.");
// console.log(Y + "kg konfet ", C + " so'm turadi.");

// Begin 15/////////////////////////////////////////////////////////////////////////
// let X;
// let A;
// let Y;
// let B;
// X = Number(prompt("1-olmaning hajmini kiriting! (kg da)"));
// A = Number(prompt("1 kg narxini kiriting! (so'm da)"));
// Y = Number(prompt("2-olmaning hajmini kiriting! (kg da)"));
// B = Number(prompt("1 kg narxini kiriting! (so'm da)"));
// let C = X * A + Y * B;
// console.log("Abdulaziz olmalar uchun jami " + C + " so'm harajat qilgan.");

// Integer /////////////////////////////////////////////////////////////////////////////////////////////////////
// Integer 1/////////////////////////////////////////////////////////////////////////
// let a;
// a = Number(prompt("3 xonali son kiriting!"));
// let b = (a % 100) % 10;
// let c = ((a % 100) - b) / 10;
// console.log(a + " sonning birliklar xonasidagi raqami " + b + " ga teng.");
// console.log(a + " sonning o'nliklar xonasidagi raqami " + c + " ga teng.");

// Integer 2/////////////////////////////////////////////////////////////////////////
// let a;
// a = Number(prompt("3 xonali son kiriting!"));
// let b = (a % 100) % 10;
// let c = ((a % 100) - b) / 10;
// let d = (a - (a % 100)) / 100;
// let x = b + c + d;
// console.log(a + " sonining raqamlari yig'indisi " + x + " ga teng.");

// Integer 3/////////////////////////////////////////////////////////////////////////
// let a;
// a = Number(prompt("3 xonali son kiriting!"));
// let b = (a % 100) % 10;
// let c = ((a % 100) - b) / 10;
// let d = (a - (a % 100)) / 100;
// let x = b * 100 + c * 10 + d;
// console.log(a + " sonining raqamlarini teskari tarkibda joylashtirsak natija=" + x);

// Integer 4/////////////////////////////////////////////////////////////////////////
// let a;
// a = Number(prompt("3 xonali son kiriting!"));
// let b = (a % 100) % 10;
// let c = ((a % 100) - b) / 10;
// let d = (a - (a % 100)) / 100;
// let x = c * 100 + d * 10 + b;
// console.log( a + "sonining o'nliklar xonasidagi raqami bilan yuzliklar xonasidagi raqamini joyini almashtirsak natija=" + x);

// Integer 5/////////////////////////////////////////////////////////////////////////
// let a;
// a = Number(prompt("3 xonali son kiriting!"));
// let b = (a % 100) % 10;
// let c = ((a % 100) - b) / 10;
// let d = (a - (a % 100)) / 100;
// let x = d * 100 + b * 10 + c;
// console.log( a + " sonining o'nliklar xonasidagi raqami bilan birliklar xonasidagi raqamini joyini almashtirsak natija=" + x );

// Integer 6/////////////////////////////////////////////////////////////////////////
// let a;
// a = Number(prompt("To'rt xonali va undan katta xonali son kiriting!"));
// let b = ((a % 10000) - ((a % 10000) % 1000)) / 1000;
// console.log("Kiritilgan sonning mingliklar xonasidagi raqami " + b + " ga teng.");

// Integer 7/////////////////////////////////////////////////////////////////////////
// let N;
// N = Number(prompt("N ni sekundda kiriting!"));
// let a = (N - (N % 60)) / 60;
// console.log("Kun boshidan boshlab " + a + " minut to'liq o'tdi");

// Integer 8/////////////////////////////////////////////////////////////////////////
// let N;
// N = Number(prompt("N ni sekundda kiriting!"));
// let a = (N - (N % 3600)) / 3600;
// console.log("Kun boshidan boshlab " + a + " soat to'liq o'tdi");

// Integer 9/////////////////////////////////////////////////////////////////////////
// let N;
// N = Number(prompt("N ni sekundda kiriting!"));
// let a = N % 60;
// let b = (N - a) / 60;
// console.log(b + " minut-u " + a + " sekund bo'ldi.");

// Integer 9/////////////////////////////////////////////////////////////////////////
// let N;
// N = Number(prompt("N ni sekundda kiriting!"));
// let a = N % 60;
// let b = ((N - a) / 60) % 60;
// let c = (N - b * 60 - a) / 3600;
// console.log(c + " soat " + b + " minut-u " + a + " sekund bo'ldi.");
