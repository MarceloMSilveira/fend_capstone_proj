export default function removeTripConfig() {
  const deleteBtns = document.querySelectorAll('.delete-trip');
  deleteBtns.forEach( (deleteBtn)=>{
    deleteBtn.addEventListener('click',(evt)=>{
      const id = evt.target.parentElement.getAttribute('id');
    });
  })
}