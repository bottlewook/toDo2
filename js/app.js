const form = document.querySelector("#addTodoForm");
const input = document.querySelector("input");
const exerciseUl = document.getElementById("exerciseUl");
const dateUl = document.getElementById("dateUl");
const travelUl = document.getElementById("travelUl")
const readingUl = document.getElementById("readingUl");
const select = document.getElementById("category");
const haveToDo = document.getElementById("haveToDo")




const submitForm = (event) => {
  event.preventDefault();
  const value = input.value;
  // input.value = "";
  paintToDo(value);  
}

const paintToDo = (value) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = value;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", removeLi);
  li.appendChild(span);
  li.appendChild(btn);
  let selectValue = select.options[select.selectedIndex].value;
  select.addEventListener("change", selectChange)
  changeAddUl(li, selectValue);
  
}

const removeLi = (event) => {
  const targetLi =  event.target.parentElement;
  targetLi.remove();
}


const changeAddUl = (li, selectValue) => {
  if (selectValue === "운동") {
    exerciseUl.appendChild(li);
    haveToDo.innerText = `오늘 할 일 :${exerciseUl.childElementCount}개`
    exerciseUl.classList.remove("hidden");
    dateUl.classList.add("hidden");
    travelUl.classList.add("hidden");
    readingUl.classList.add("hidden");
  } else if (selectValue === "데이트") {
    haveToDo.innerText = `오늘 할 일 :${dateUl.childElementCount}개`  
    dateUl.appendChild(li);
    exerciseUl.classList.add("hidden");
    dateUl.classList.remove("hidden");
    travelUl.classList.add("hidden");
    readingUl.classList.add("hidden");
  } else if (selectValue === "여행") {
    haveToDo.innerText = `오늘 할 일: ${travelUl.childElementCount}개`
    travelUl.appendChild(li);
    exerciseUl.classList.add("hidden");
    dateUl.classList.add("hidden");
    travelUl.classList.remove("hidden");
    readingUl.classList.add("hidden");
  } else if (selectValue === "독서") {
    readingUl.appendChild(li);
    haveToDo.innerText = `오늘 할 일: ${readingUl.childElementCount}개`
    exerciseUl.classList.add("hidden");
    dateUl.classList.add("hidden");
    travelUl.classList.add("hidden");
    readingUl.classList.remove("hidden");
  }
}

form.addEventListener("submit", submitForm)


const changeUl = (Value) => {
    if (Value === "운동") {
      exerciseUl.classList.remove("hidden");
      dateUl.classList.add("hidden");
      travelUl.classList.add("hidden");
      readingUl.classList.add("hidden");
      } else if (Value === "데이트") {
    exerciseUl.classList.add("hidden");
    dateUl.classList.remove("hidden");
    travelUl.classList.add("hidden");
    readingUl.classList.add("hidden");
  } else if (Value === "여행") {
    exerciseUl.classList.add("hidden");
    dateUl.classList.add("hidden");
    travelUl.classList.remove("hidden");
    readingUl.classList.add("hidden");
  } else if (Value === "독서") {
    exerciseUl.classList.add("hidden");
    dateUl.classList.add("hidden");
    travelUl.classList.add("hidden");
    readingUl.classList.remove("hidden");
  }
}
const selectChange = () => {
  let Value = select.options[select.selectedIndex].value;
  changeUl(Value)
}
