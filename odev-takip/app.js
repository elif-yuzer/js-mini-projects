const filterBtns = document.querySelectorAll(".filter-btn");
const studentList = document.querySelector("#student-list");
const themeToggleBtn = document.querySelector("#theme-toggle");
const themeIcon=document.querySelector("img")


let homeworkList = JSON.parse(localStorage.getItem("homeworkList"));
if (!homeworkList) {
  homeworkList = [
    { id: 1, name: "Ali Yilmaz", status: "pending" },
    { id: 2, name: "Ayse Demir", status: "completed" },
    { id: 3, name: "Mehmet Oz", status: "completed" },
    { id: 4, name: "Zeynep Kaya", status: "pending" },
  ];
}
const savetoLocalStorage = () => {
  localStorage.setItem("homeworkList", JSON.stringify(homeworkList));
};

const addUI = (studentInfo) => {
  const { id, name, status } = studentInfo;
  const li = document.createElement("li");
  li.classList.add("student", status);
  li.textContent = name;
  li.dataset.id = id;
  studentList.appendChild(li);
};
homeworkList.forEach((student) => {
  addUI(student);
});
// console.log(homeworkList);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    const tiklanan = e.target;
    tiklanan.classList.add("active");
    const kategori = tiklanan.dataset.id;
    console.log(kategori);
    const students = studentList.children;
    console.log(typeof students);
    Array.from(students).forEach((student) => {
      const odevyapildimi = student.classList.contains("completed");
      switch (kategori) {
        case "all":
          student.style.display = "flex";
          break;
        case "completed":
          if (odevyapildimi) {
            student.style.display = "flex";
          } else {
            student.style.display = "none";
          }
          break;
        case "pending":
          if (!odevyapildimi) {
            student.style.display = "flex";
          } else {
            student.style.display = "none";
          }
          break;
      }
    });
  });
});


themeToggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
        themeIcon.src="./icon-sun.svg"
    }else {
        themeIcon.src="./icon-moon.svg"
    }
})