(function () {
  const button = document.getElementById("ex1_button");
  const ex1Cont = document.getElementById("ex1_content");
  const textInput = document.getElementById("ex2_text");
  const ex2Cont = document.getElementById("ex2_content");
  const ex3Two = document.getElementById("ex3_two");
  const ex3One = document.getElementById("ex3_one");
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
    const inputValue = textInput.value;
    ex2Cont.innerText = "";

    if (inputValue.length !== 9) {
      ex2Cont.innerText = "Długość numeru musi być równa 9";
    } else if (/[a-zA-Z]/.test(inputValue)) {
      ex2Cont.innerText = "Numer nie może zawierać liter";
    } else if (/[^0-9]/.test(inputValue)) {
      ex2Cont.innerText = "Numer nie może zawierać znaków specjalnych";
    } else {
      ex2Cont.innerText = "Numer telefonu jest poprawny";
    }
  });

  function dragStartHandler(e) {
    e.dataTransfer.setData("text/html", e.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("ex3_element");
    el.addEventListener("dragstart", dragStartHandler);
  });

  function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function dropHandler(e) {
    e.preventDefault();

    const data = e.dataTransfer.getData("text/html");
    e.target.appendChild(document.getElementById(data));
  }

  ex3Two.addEventListener("dragover", dragoverHandler);
  ex3Two.addEventListener("drop", dropHandler);
  ex3One.addEventListener("dragover", dragoverHandler);
  ex3One.addEventListener("drop", dropHandler);
})();
