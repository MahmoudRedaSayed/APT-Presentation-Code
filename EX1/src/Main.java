import Controllers.CustomerController;
import Models.CustomerModel;
import Views.CustomerView;

public class Main {
    public static void main(String args[])
    {
        CustomerModel model=new CustomerModel("Mahmoud",22);
        CustomerView view=new CustomerView();
        CustomerController controller=new CustomerController(model,view);
        controller.UpdateView();
        controller.SetCustomerAge(23);
        controller.SetCustomerName("3amo Kotb");
        controller.UpdateView();
    }
}
