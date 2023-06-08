    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const message = document.getElementById('message');

    //selects all items that are draggable 
    const draggableItems = document.querySelectorAll('.draggable');
    draggableItems.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });

    function dragStart(event) {
      event.target.classList.add('dragging');
    }

    function dragEnd(event) {
      event.target.classList.remove('dragging');
    }

    function allowDrop(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      const draggedItem = document.querySelector('.dragging');
      event.target.appendChild(draggedItem);

      //success message!
      message.textContent = 'Item dropped successfully!';
    }

    function reset() {

      //Reset items by appending back elements to container 1
      const items = container2.querySelectorAll('.item');
      items.forEach(item => {
        container1.appendChild(item);
      });

      
      message.textContent = '';
    }