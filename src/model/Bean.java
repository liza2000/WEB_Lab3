package model;

import org.hibernate.Session;

import javax.faces.bean.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@ManagedBean(name = "Bean", eager = true)
@SessionScoped
public class Bean implements Serializable {
    private String enterX = null;
    private String enterY = null;
    private String enterR = null;

    public String getEnterX(){
        return enterX;
    }
    public String getEnterY(){
        return enterY;
    }
    public String getEnterR(){
        return enterR;
    }

    public void setEnterX(String enterX){
        if (enterX.isEmpty()) return;
        try {
        this.enterX = String.format("%.2f",Double.parseDouble(enterX.replace(",","."))).replace(",",".");
    }catch (NumberFormatException e){
        System.out.println(e.getMessage());
        this.enterX="0";
    }
    }
    public void setEnterY(String enterY){
        if (enterY.isEmpty()) return;
        try {
            this.enterY = String.format("%.2f",Double.parseDouble(enterY.replace(",","."))).replace(",",".");
        }catch (NumberFormatException e){
            System.out.println(e.getMessage());
            this.enterY="0";
        }

    }
    public void setEnterR(String enterR){
        try {
        this.enterR = enterR;
        }catch (NumberFormatException e){
            System.out.println(e.getMessage());
            this.enterR="";
        }
    }
    public String getEnterYForm(){
        return this.enterY;
    }

    public void setEnterYForm(String enterY){
        if (enterY.isEmpty()) return;
        try {
          double y =  Double.parseDouble(enterY.replace(",","."));
          y=y>4.99?4.99: y<-2.99?-2.99:y;
            this.enterY = String.format("%.2f",y).replace(",",".");
        }catch (NumberFormatException e){
            System.out.println(e.getMessage());
            this.enterY="0";
        }


    }



    public List<Point> getHitsList() {

        List<Point> list;
        List<Point> pointList=new ArrayList<>();
        try{
            Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
            session.beginTransaction();
            list =  (List<Point>)session.createQuery("From Point").list();
            session.close();
            for (int i=list.size()-1;i>=0;i--) pointList.add(list.get(i));
        } catch (Exception e){
            System.out.println(e.getMessage());;
        }

        return pointList;


    }

    public void addToList(){
        try{

            if(enterR.equals("")) return ;

            double xx = parse(enterX);
            double yy = parse(enterY);
            double rr = parse(enterR);

            Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
            session.beginTransaction();

            Point point=new Point(xx,yy,rr);
            session.save(point);
            session.getTransaction().commit();
            session.close();

        }catch(Exception e){
            System.out.println(e);
        }
    }

    private double parse(String s) {
        try{
                return Double.parseDouble(s);
    }catch (NumberFormatException e){
        System.out.println(e.getMessage());
        return 0;
    }
    }

}
