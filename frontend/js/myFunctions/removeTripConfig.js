export default function removeTripConfig() {
  const deleteBtn = document.querySelector('.delete-trip');
  deleteBtn.addEventListener('click',(evt)=>{
    console.log(evt.target);
  })
}