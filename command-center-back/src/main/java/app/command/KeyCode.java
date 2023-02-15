package app.command;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "CC_KEYCODE")
public class KeyCode {
	
	@Id
	private int key_code;
	
	@Column
	private String key_name;
	@Column
	private String sts;
	@Column
	private Date create_date;
	@Column
	private String create_user;
	@Column
	private Date update_date;
	@Column
	private String update_user;
	
}
