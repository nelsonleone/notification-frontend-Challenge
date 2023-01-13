const notifCountBtn = document.getElementById('notif-count')
const redDot = document.querySelectorAll('.fa')
let notifCount = 3;
const notif = document.querySelectorAll('.notif')



notif.forEach((div,index) => {
   div.addEventListener('click',() => {
      if(div.style.backgroundColor !== "white" && notifCount > 0){
        div.style.backgroundColor = 'white'
        redDot[index].style.display = "none"
        notifCount--;
      notifCountBtn.innerText = notifCount
      }
   })
})

document.getElementById('markAll-read').addEventListener('click', () => {
  notif.forEach(div => {
   if(div.classList.contains('unread')){
      div.classList.remove('unread')
      redDot.forEach(fa => {
         fa.style.display = 'none'
         notifCount = 0;
         notifCountBtn.innerText = notifCount
      })
   }
  })
})
