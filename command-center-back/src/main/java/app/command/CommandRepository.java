package app.command;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandRepository extends JpaRepository<KeyCode, Long> {
	List<KeyCode> findAll();
}
