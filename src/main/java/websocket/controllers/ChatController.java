package websocket.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import websocket.model.Message;
import websocket.services.IMessageService;

@RestController
@RequestMapping("/chat")
public class ChatController {
    
    
    @Autowired
    public IMessageService messageService = null;

    @RequestMapping(method=RequestMethod.GET, value="/send")
    public void send (Message message) {
        messageService.sendMessage(new Message(message));
    }
    
    @RequestMapping(method=RequestMethod.GET, value="/login")
    public Boolean login (String mail) {
        return true;
    }
}
