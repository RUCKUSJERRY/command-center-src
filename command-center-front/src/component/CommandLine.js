import React  from 'react';

const CommandLine = () => {

    var keys = [];

    function keysEvent(e) {    
      const commandview = document.getElementById('commandview'); // 커멘드를 보여주는 곳
      const commandline = document.getElementById('commandline'); // 커멘드를 입력하는 곳
      console.log(commandline.value);

      var expression = RegExp(/^[ㄱ-ㅎ|가-힣]+$/);
      if (expression.test(commandline.value)){
        alert("please enter English");  
      }else{
        // backspace인 경우에는 commandview의 마지막 값을 지워준다.
        if (e.keyCode === 8) {
          keys.pop();
        } 
        // 그게 아닌 경우에는 중복된 값이 없는 경우에만 commandview에 값을 더해준다.
        else {
          if (!keys.includes(e.keyCode)) {
            keys.push(e.keyCode);
          }
        };

        // 현재 입력한 커멘드 값을 화면에 보여준다.
        commandview.innerHTML = keys;
      }

      // commandline의 value를 초기화 해준다.
      commandline.value = null;

    }

    return (
        <div>
          <div id="commandview">
          </div>
          <input
            type="text"
            name="command"
            id="commandline"
            placeholder="typing your command"
            onKeyUp={keysEvent}
          />
        </div>
        
    );
}
export default CommandLine;