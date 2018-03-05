package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.junit.After;

public class ZipCodePage {

	WebDriver driver;

	By UF = By.name("UF");
	By LOCALITY = By.name("Localidade");
	By NEIGHBORHOOD = By.name("Bairro");
	By SEARCHBUTTON = By.className("btnform");

	public ZipCodePage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void abreSite(){
		driver.get("http://www.buscacep.correios.com.br/sistemas/buscacep/buscaLogBairro.cfm");
	}
	
	public void busca(String uf, String locality, String neighborhood){
		WebElement uf_dropdown = driver.findElement(UF);
		Select UF = new Select(uf_dropdown);
		UF.selectByValue(uf);
		driver.findElement(LOCALITY).sendKeys(locality);
		driver.findElement(NEIGHBORHOOD).sendKeys(neighborhood);
		driver.findElement(SEARCHBUTTON).click();
	}
}
