package Controllers;
import Models.CustomerModel;
import Views.CustomerView;


public class CustomerController {
    CustomerModel model;
    CustomerView  view;

    public CustomerController(CustomerModel model,CustomerView view)
    {
        this.model=model;
        this.view=view;
    }
    public void SetCustomerName(String name)
    {
        model.SetName(name);
    }
    public void SetCustomerAge(int age)
    {
        model.SetAge(age);
    }
    public void UpdateView()
    {
        view.CustomerInfo(model.GetName(),model.GetAge());
    }

}
