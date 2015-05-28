package websocket.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import websocket.model.Message;

@Service
public class MessageService implements IMessageService {

    @Autowired
    public SimpMessagingTemplate messagingTemplate = null;
    
    @Override
    public void sendMessage(Message message) {
        messagingTemplate.convertAndSend("/topic/chat".toString(), message);
    }

}
