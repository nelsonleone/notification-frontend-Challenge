const notifCountBtn = document.getElementById('notif-count')
const redDot = document.querySelectorAll('.fa')
let notifCount = 3;
const notif = document.querySelectorAll('.notif')



notif.forEach((div) => {
   div.addEventListener('click',() => {
      div.style.backgroundColor = 'white'
      notifCount--
      notifCountBtn.innerText = notifCount
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