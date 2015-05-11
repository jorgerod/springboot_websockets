package websocket.controllers;

import java.util.GregorianCalendar;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@RequestMapping("/chat")
public class ChatController {

    @RequestMapping(method=RequestMethod.GET)
    public String get (@RequestParam String text) {
        return new Gson().toJson(new Message(text)); 
    }
    
    class Message {
        private String text = null;
        private Long time = null;
        
        public Message (String text) {
            this.text = "Hola " + text;
            this.time = GregorianCalendar.getInstance().getTimeInMillis();
        }
    }
    
}
