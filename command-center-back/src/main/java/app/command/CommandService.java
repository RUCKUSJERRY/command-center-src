package app.command;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommandService {

	@Autowired
	CommandRepository commandRepository;
	
	public List getKeyCode() {
		
		List keyList = commandRepository.findAll();
		
		return keyList;
	}
	
}
