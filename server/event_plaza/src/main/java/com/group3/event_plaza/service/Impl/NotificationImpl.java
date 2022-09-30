package com.group3.event_plaza.service.Impl;

import com.group3.event_plaza.model.Notification;
import com.group3.event_plaza.model.User;
import com.group3.event_plaza.repository.NotificationRepository;
import com.group3.event_plaza.repository.UserRepository;
import com.group3.event_plaza.service.MessageService;
import com.group3.event_plaza.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationImpl implements NotificationService, MessageService {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private  UserRepository userRepository;

    private NotificationRepository notificationRepository;


    /**
     * Send private notification to user
     * @param email
     */
    @Override
    public void notifyUser(String email,String message) {
        simpMessagingTemplate.convertAndSendToUser(email,
                "/notification","Notification Sent to"+email);

    }



    @Override
    public void eventNotification(String eventId,String content){
            simpMessagingTemplate.convertAndSend("/event/"+eventId+"/notification","Event Update");

    }


    @Override
    public void create() {

    }

    @Override
    public List<Notification> getAll() {
        return notificationRepository.findAll();
    }

    @Override
    public void update(Notification notification) {

    }
}