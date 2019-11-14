package model;

import javax.persistence.*;

@Entity
@Table(name="points")
public class Point{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(nullable = false)
    private Integer id;
    @Column(nullable = false)
    private Double r;
    @Column(nullable = false)
    private Double x;
    @Column(nullable = false)
    private Double y;
    @Column(nullable = false)
    private Boolean isInArea;

    public Point(Double x, Double y, Double r){
        this.x = x;
        this.y = y;
        this.r = r;
        setIsInArea();
    }


    public Point() {}

    public void setR(Double r) {
        this.r = r;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public void setIsInArea(Boolean inArea) {
        isInArea = inArea;
    }

    public Double getX() {
        return x;
    }

    public Double getY() {
        return y;
    }

    public Double getR() {
        return r;
    }

    public Boolean getInArea() {
        return isInArea;
    }

    private void setIsInArea() {
        if (x>0) {isInArea = x<=r/2 && y<=0 && Math.abs(y)<=r; return;}
        if (y>=0) { isInArea = x*x+y*y<=r*r; return;}
        isInArea = 2*Math.abs(x)+Math.abs(y)<=r;
    }
}
