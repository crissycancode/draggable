const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

draggableElements.forEach(element => {
  element.addEventListener('dragstart', dragStart);
  // element.addEventListener('drag', drag);
  // element.addEventListener('dragend', dragEnd);
});

droppableElements.forEach(element => {
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', drop);
});

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.id);
  
}

function dragEnter(e){
  if(!e.target.classList.contains('dropped')){
    e.target.classList.add("droppable-hover");
  }
  
}


function dragOver(e) {
  if(!e.target.classList.contains('dropped')){
    e.preventDefault();
  }
}

function dragLeave(e){
  e.target.classList.remove("droppable-hover");
}

function drop(e) {
  e.preventDefault();
  const tar = e.target;
  tar.classList.remove("droppable-hover");
  const draggableElementData = e.dataTransfer.getData('text');
  const droppableElementData = tar.getAttribute('data-draggable-id');

  if(draggableElementData === droppableElementData){
    
    tar.classList.add('dropped');
    const draggableElement = document.getElementById(draggableElementData);
    tar.style.backgroundColor = draggableElement.style.color;

    draggableElement.classList.add('dragged');
    draggableElement.setAttribute('draggable', 'false');
    console.log(draggableElement.id);
    tar.innerHTML = '';
    tar.innerHTML += `<i class="fas fa-${draggableElement.id} draggable" draggable="true" style= "justify-content: center; color: white;" id="cat"></i>`;
  }

}

function dropOver(e) {
  //droppable hoover

}
