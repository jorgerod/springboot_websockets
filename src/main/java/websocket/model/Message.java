package websocket.model;

import java.util.GregorianCalendar;

public class Message {
    private String mail = null;
    private String text = null;
    private Long time = null;
    
    public Message (){}
    
    public Message (String text, String mail) {
        this.text = text;
        this.mail = mail;
        this.time = GregorianCalendar.getInstance().getTimeInMillis();
    }

    public Message(Message message) {
        this.text = message.getText();
        this.mail = message.getMail();
        this.time = GregorianCalendar.getInstance().getTimeInMillis();
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
