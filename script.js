(function () {
  const button = document.getElementById("ex1_button");
  const ex1Cont = document.getElementById("ex1_content");
  const textInput = document.getElementById("ex2_text");
  const ex2Cont = document.getElementById("ex2_content");
  let count = 0;
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  button.addEventListener("click", () => {
    if (count <= 9) {
      ex1Cont.append(count + ", ");
      count++;
    } else {
      ex1Cont.innerText = "";
      count = 0;
    }
  });

  textInput.addEventListener("input", () => {
    ex2Cont.innerText = "";
    console.log(textInput.value);
    let isnum = /^\d+$/.test(textInput.value);
    if (textInput.value.length != 9) {
      console.log("Długość numeru musi być równa 9");
    } else if (!isnum) {
      console.log("Numer nie może zawierać liter");
    } else if (!format.test(textInput.value)) {
      console.log("Numer nie może zawierać znaków specjalnych");
    } else {
      console.log("Numer jest poprawny");
    }
  });
})();
