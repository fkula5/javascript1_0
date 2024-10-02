(function () {
  const button = document.getElementById("ex1_button");
  const ex1Cont = document.getElementById("ex1_content");
  let count = 0;

  button.addEventListener("click", () => {
    if (count <= 9) {
      ex1Cont.append(count + ", ");
      count++;
    } else {
      ex1Cont.innerText = "";
      count = 0;
    }
  });
})();

