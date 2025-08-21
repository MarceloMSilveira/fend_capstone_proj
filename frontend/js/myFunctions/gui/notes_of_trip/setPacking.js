import onClosePackingList from "../../utils/notes_of_trip/onClosePackingList.js";

export default function setPacking(trip) {
  $('p.trip-preview').text(`Packing list for ${trip.city}`);
    //salvar conteúdo atual do div
    const weatherDivContent = $('#weather').html();
    let prevPackingList = '';
    //verificar se já tem algo salvo em packing list da viagem:
    if (trip.packingList) {
      prevPackingList = trip.packingList; 
      console.log(`Já está salvo nesta nota: ${prevPackingList}`)
    } else {
      prevPackingList='';
    }
    //substituir por um texarea editável (com o conteudo anterior de notes, caso haja) 
    // e um botão de fechar 
    const noteDiv = `
        <div>
          <textarea class="note-content" rows="7" cols="50">${prevPackingList}</textarea>
          <div class = "add-btns">
            <button class="btn btn-success area-close"> Close </button>
          </div>
        </div>
      `;
    $('#weather').html(noteDiv);
    
    //elabborar a lógica para fechar uma nota.
    //salvar o conteudo atual da nota
    //restaurar a gui
    //atualizar, no array de trips, o campo packingList da viagem atual.
    $('button.area-close').on('click',()=> onClosePackingList(weatherDivContent,trip));
  }
      //falta salvar essa trip