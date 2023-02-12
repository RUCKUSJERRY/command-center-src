import React, { useState }  from 'react';

const CommandLine = () => {

  window.addEventListener("keydown", keysPressed, false);
  window.addEventListener("keyup", keysReleased, false);
  
  var keys = [];
  
    function keysPressed(e) {
      // store an entry for every key pressed
      keys[e.keyCode] = true;
      console.log('keys = ' + e.keyCode);
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

    const [commandData] = useState({
        command: "",
      });

    const keyEvent = (event) => {
      console.log('event.key = ' + event.key + ' / event.keyCode = ' + event.keyCode);
      if (event.key === 'Enter') {
        console.log('Enter key pressed');
      }
      //commandData = event.key;
    };
    
    function keysReleased(e) {
      // mark keys that were released
      keys[e.keyCode] = false;
    }

    return (
        <input
        type="text"
        name="command"
        placeholder="typing your command"
        value={commandData.command}
        onKeyDown={keyEvent}
        />
    );
}

export default CommandLine;