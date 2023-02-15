package app.command;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CommandController {
	
	@Autowired
	CommandService commandService;
	
	@RequestMapping(value = "/command/getKeyCode")
	@ResponseBody
	public List getKeyCode() {
		return commandService.getKeyCode();
	}
}
