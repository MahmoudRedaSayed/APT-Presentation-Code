package Models;

public class CustomerModel {
    private String customerName;
    private int  customerAge;
    public CustomerModel(String name,int age)
    {
        this.customerName=name;
        this.customerAge=age;
    }
    public void SetName(String name)
    {
        this.customerName=name;
    }

    public void SetAge(int age)
    {
        this.customerAge=age;
    }

    public String GetName()
    {
        return customerName;
    }


    public int GetAge()
    {
        return customerAge;
    }
}
