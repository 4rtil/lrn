package com.swiatekbrzezinski.artur.roomwebapp.data;

import com.swiatekbrzezinski.artur.roomwebapp.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
