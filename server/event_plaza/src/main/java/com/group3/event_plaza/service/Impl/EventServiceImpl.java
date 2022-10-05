package com.group3.event_plaza.service.Impl;

import com.group3.event_plaza.common.lang.RoleUser;
import com.group3.event_plaza.model.Category;
import com.group3.event_plaza.model.Event;
import com.group3.event_plaza.model.Role;
import com.group3.event_plaza.model.User;
import com.group3.event_plaza.repository.CategoryRepository;
import com.group3.event_plaza.repository.EventRepository;
import com.group3.event_plaza.repository.RoleRepository;
import com.group3.event_plaza.repository.UserRepository;
import com.group3.event_plaza.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    RoleRepository roleRepository;



    @Override
    public void createEvent(Principal user,Event event) {
        User owner =  userRepository.findUserByEmail(user.getName());
        Role organizer = roleRepository.findByRoleId(RoleUser.ROLE_ORGANIZER.getId());
        owner.getRole().add(organizer);
        event.setOwner(owner);
        Category category = categoryRepository.findByCategoryId(1);
        event.setCategory(category);
        eventRepository.save(event);
    }

    @Override
    public Event getEvent(int eventId) {
        Event event = eventRepository.findByEventId(eventId);
        return event;
    }

    public List<Event> searchEvent(String keyword){
        List<Event> list = eventRepository.findByTitleContains(keyword);
        return list;
    }

    @Override
    public  List<Event> getLatestEvent(){
        List<Event> list = eventRepository.findTop9ByOrderByEventIdDesc();
        return list;
    }

    @Override
    public List<Event> getCurrentUserEvents(int id){
        List<Event> list = eventRepository.findEventByOwner(id);
        return list;
    }

    @Override
    public List<Event> getAllEvent(){
        List<Event> list = eventRepository.findAll();
        return list;
    }
}
