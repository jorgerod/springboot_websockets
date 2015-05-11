package websocket.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greeting")
public class HelloWorldController {

    @RequestMapping(method=RequestMethod.GET)
    public String get (@RequestParam String name) {
        return "Hola,, " + name; 
    }
    
}
