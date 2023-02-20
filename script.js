//1st methode

let indianAmount = document.querySelector(".indian-amount input");

function convertMe(num) {
  console.dir(num);
  let dollarAmount = document.querySelector(".dollar-amount input").value;
  // console.log(typeof num);
  let result = parseInt(num);
  // let result = +num;
  if (dollarAmount === "") {
    alert(`Should Not be an Empty`);
  } else if (typeof result === "number") {
    indianAmount.value = num * 69;
    // alert("work");
  }
}

//2nd methode

/*
function convertMe() {
  let dollar = document.querySelector(".dollar-amount input").value;

  let IndianAmount = document.querySelector(".indian-amount input");

  if (dollar == "") {
    alert(`Should Not be an Empty`);
  }

  IndianAmount.value = dollar * 69;
  console.log(IndianAmount.value);
}

*/
