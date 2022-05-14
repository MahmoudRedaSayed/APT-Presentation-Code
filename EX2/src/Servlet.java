import javax.servlet.http.*;
import java.io.IOException;

import java.sql.*;
import java.sql.ResultSet;
import java.lang.Math;





public class Servlet extends HttpServlet {
    public Model model;
    public void init(){
        model=new Model();
    }
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.addHeader("Access-Control-Allow-Origin", "*");
        res.setContentType("text/html");
        String Joke=model.randomJoke();
        System.out.printf("{\"data\":\""+Joke+"\"}");
        res.getWriter().println("{\"data\":\""+Joke+"\"}");

        }
    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.addHeader("Access-Control-Allow-Origin", "*");
        res.setContentType("text/html");
        String joke=req.getParameter("joke");
        model.insertJoke(joke);
        res.getWriter().println("{\"data\":\"done\"}");
    }


    class Model {
        private Connection connect;
        private Statement stmt;

        public Model() {
            try {
                try {
                    Class.forName("com.mysql.cj.jdbc.Driver");
                } catch (Exception e) {

                }
                connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/jokes", "root", "");
                this.stmt = connect.createStatement();
                if (connect != null) {
                    System.out.println("Connected to database");
                } else {
                    System.out.println("Cannot connect to database");
                }

            } catch (SQLException e) {

            }
        }
        public String randomJoke()
        {
            int maxId,minId;
            try {
                ResultSet resultSet=this.stmt.executeQuery("Select Max(Id) as maxId , Min(Id) as minId from joke ;");
                if(resultSet.next())
                {
                    maxId=resultSet.getInt("maxId");
                    minId=resultSet.getInt("minId");
                    int id= (int) Math.ceil((Math.random()*(maxId-minId)));
                    resultSet=this.stmt.executeQuery("Select * from joke where Id="+id+" ;");
                    if(resultSet.next())
                    {
                        String value= resultSet.getString("JokeText");
                        return value;
                    }

                }
                else
                {
                    return "There is no jokes";
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return "There is no jokes";
        }


        public void insertJoke(String joke)
        {
            try{
                this.stmt.executeUpdate("insert into joke (JokeText) values ('"+joke+"')");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    
    }

