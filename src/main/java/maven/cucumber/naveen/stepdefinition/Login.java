package maven.cucumber.naveen.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Login {
WebDriver driver;
@Given("^user is on rediffmail login page$")
public void user_is_on_rediffmail_login_page() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver=new ChromeDriver();
    driver.get("http://www.rediffmail.com");
    driver.manage().window().maximize();
    driver.findElement(By.xpath("//div[@class=\"icondiv\"]/a/div")).click();
}



@When("^user enter username and password$")
public void user_enter_username_and_password() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.id("login1")).sendKeys("ankitkrmittal");
    driver.findElement(By.id("password")).sendKeys("vidhu");
}

@When("^user click on login$")
public void user_click_on_login() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.xpath("//form[@name=\"loginform\"]/div/div[6]//input")).click();
}

@SuppressWarnings("deprecation")
@Then("^user should able to login$")
public void user_should_able_to_login() throws Throwable {
   String title=driver.getTitle();
   Assert.assertEquals("Welcome to Rediffmail:", title);
    
}

@Then("^driver instance should be terminated$")
public void driver_instance_should_be_terminated() throws Throwable {
    
    
}
@Then("^user is on home page$")
public void user_is_on_home_page()
{
	 
	driver.findElement(By.xpath("//table/tbody/tr/td[5]/table/tbody/tr/td/div[6]/a")).click();
	System.out.println(driver);
}

}
