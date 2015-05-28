package websocket.services;

import websocket.model.Message;

public interface IMessageService {
    void sendMessage(Message message);
}
