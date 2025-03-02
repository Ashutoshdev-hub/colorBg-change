const colorBg = document.getElementById("add-color");
const newColorBtn = document.getElementById("color-box");
const newInput = document.getElementById("input-text");
const bgBody = document.getElementById("body")

colorBg.addEventListener("click", function () {
  if (newInput.value === "") {
    alert("Check You give Right HEX Code Color");
    return;
  }

  const Newbutton = document.createElement("button");
  Newbutton.textContent = newInput.value;

  Newbutton.classList.add("color-box");
  Newbutton.style.backgroundColor = newInput.value;

  Newbutton.addEventListener("click", (e) => {
    
        // console.log(e)
        // console.log(e.type)
        // console.log(e.target)
        // console.log(e.target.innerText)

        const color = e.target.innerText
        bgBody.style.backgroundColor = color
        Newbutton.remove()
    
  });

  newColorBtn.appendChild(Newbutton);
  newInput.value = ""; 
});


