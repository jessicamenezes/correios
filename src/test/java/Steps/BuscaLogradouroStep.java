package Steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import Pages.ZipCodePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuscaLogradouroStep {

	WebDriver driver;
	ZipCodePage zipcode = new ZipCodePage(driver);

	@Given("^I want to find a Zip Code")
	public void iWantToFindAZipCode() throws Throwable {
	zipcode.abreSite();	
	}
	
	@When("^I select \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void WhenISelectUfAndLocalityAndNeighborhood(String uf, String locality, String neighborhood) throws Throwable {
	zipcode.busca(uf, locality, neighborhood);	
	}

	@Then("^user should be able to search sucessfully$")
	public void userShouldBeAbleToSearchSucessfully() throws Throwable {
	
	}


}
