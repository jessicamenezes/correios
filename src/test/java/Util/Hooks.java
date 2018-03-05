package Util;

import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;

public class Hooks {

	WebDriver driver;
	@Before
	public void setUp() throws Exception {
		driver = new FirefoxDriver();
		System.setProperty("webdriver.gecko.driver",
		"C:\\Users\\jmenezes\\Downloads\\Correios\\geckodriver.exe");
		driver.manage().window().maximize();
	}
	
	@After
	public void tearDown() throws Exception {
		driver.close();
	}
	
}
