package websocket;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import websocket.model.Message;
import websocket.services.IMessageService;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SpringbootWebsocketApplication.class)
public class SpringbootWebsocketApplicationTests {

    @Autowired
    public IMessageService messageService;
	@Test
	public void contextLoads() throws InterruptedException {
	    
	    messageService.sendMessage(new Message("caca", "email"));
	}

}
