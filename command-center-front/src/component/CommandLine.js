import React, { useState }  from 'react';

const CommandLine = () => {

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