import onCloseNote from "../utils/onCloseNote.js";

export default function setNotes(trip) {
  $('p.trip-preview').text(`My Notes for ${trip.city}`);
  //salvar conteúdo atual do div
  const weatherDivContent = $('#weather').html();
  let prevNote = '';
  //verificar se já tem algo salvo nas notas da viagem:
  if (trip.notes) {
    prevNote = trip.notes; 
    console.log(`Já está salvo nesta nota: ${prevNote}`)
  } else {
    prevNote = '';
  }
  //substituir por um texarea editável (com o conteudo anterior de notes, caso haja) 
  // e um botão de fechar 
  const noteDiv = `
      <div>
        <textarea class="note-content" rows="7" cols="50"> ${prevNote} </textarea>
        <div class = "add-btns">
          <button class="btn btn-success close-note"> Close </button>
        </div>
      </div>
    `;
  $('#weather').html(noteDiv);
  
  //elabborar a lógica para fechar uma nota.
  //salvar o conteudo atual da nota
  //restaurar a gui
  //atualizar, no array de trips, o campo notes da viagem atual.
  $('button.close-note').on('click',()=> onCloseNote(weatherDivContent,trip));
}
    //falta salvar essa trip
    //é uma viagem já existente
    //na verdade o que quero é apenas atualizar um campo (o notes) de uma viagem 
    //já salva no meu array de viagens e depois salvar de novo esse array de viagens
    // no local storage.