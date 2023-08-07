const qtabs = document.getElementsByClassName('question_tab');

const content = document.querySelectorAll('content');

for (let i = 0; i < qtabs.length; i++) {
    qtabs[i].addEventListener('click' , function(){
        this.classList.toggle('active')
    })
    
}





let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});