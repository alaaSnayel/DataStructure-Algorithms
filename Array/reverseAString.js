//Create a Function that reverses a string:
//'Hi My name is Andrei' should be:
//'ierdnA si eman yM iH'

let a = "Hi My name is Andrei";

function reverse1(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}

console.log(reverse1(a));

//Better Function
function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  return str.split("").reverse().join("");
}

console.log("--------------------------------");
console.log(reverse2(a));

//Another solultion
const reverse3 = (str) => str.split("").reverse().join("");

console.log("*********************************");
console.log(reverse3(a));

//Another solution
const reverse4 = (str) => [...str].reverse().join(""); // you can put [str] instead of [...str] and it well work

console.log("+-+-+-+-+-+-+--+-+-+-+--+-+-+--+-+-+--+");
console.log(reverse3("alas"));
