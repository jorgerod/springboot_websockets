package websocket.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Message {
    private String type = null;
    private String text = null;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Date time = new Date();
    
    public Message (){}
    
    public Message (String text, String type) {
        this.text = text;
        this.type = type;
    }

    public Message(Message message) {
        this.text = message.getText();
        this.type = message.getType();
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
