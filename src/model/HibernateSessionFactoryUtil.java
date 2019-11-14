package model;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;
import java.io.File;

public class HibernateSessionFactoryUtil {
    private static SessionFactory sessionFactory;

    private HibernateSessionFactoryUtil() {}

    public static SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            try {
                ServletContext ctx = (ServletContext) FacesContext
                        .getCurrentInstance().getExternalContext().getContext();
                String deploymentDirectoryPath = ctx.getRealPath("/");
                Configuration configuration = new Configuration().configure(new File(deploymentDirectoryPath+"/WEB-INF/hibernate.cfg.xml"));
                sessionFactory = configuration.buildSessionFactory();
            } catch (Exception e) {
                System.out.println("Исключение!" + e);
            }
        }
        return sessionFactory;
    }
}