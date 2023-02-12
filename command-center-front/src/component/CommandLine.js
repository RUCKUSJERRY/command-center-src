import React  from 'react';

const CommandLine = () => {

  //window.addEventListener("keydown", keysPressed, false);
  //window.addEventListener("keyup", keysReleased, false);
  
  var keys = [];
  
    function keysPressed(e) {
      // store an entry for every key pressed
      console.log('key = ' + e.keyCode);

      const commandview = document.getElementById('commandview');

      commandview.innerHTML = e.keyCode;

      // Ctrl + Shift + 5
      if (keys[17] && keys[16] && keys[53]) {
        // do something
      }
      
      // Ctrl + f
      if (keys[17] && keys[70]) {
        // do something
      
        // prevent default browser behavior
        e.preventDefault();	
      }
    }

    const keyEvent = (event) => {
      console.log('event.key = ' + event.key + ' / event.keyCode = ' + event.keyCode);
      if (event.key === 'Enter') {
        console.log('Enter key pressed');
      }
      //commandData = event.key;
    };

    return (
        <div>
          <div id="commandview">
          </div>
          <input
          type="text"
          name="command"
          placeholder="typing your command"
          onKeyDown={keysPressed}
          />
        </div>
    );
}

export default CommandLine;