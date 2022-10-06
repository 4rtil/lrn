package com.swiatekbrzezinski.artur.roomwebapp.service;

import com.swiatekbrzezinski.artur.roomwebapp.data.RoomRepository;
import com.swiatekbrzezinski.artur.roomwebapp.models.Room;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

}
