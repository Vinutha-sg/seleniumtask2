package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import ExcelMethods.Xls_Reader;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ReandAndWrite {
	ChromeDriver driver = null;
	@When("^try to login page using credetials from excel$" )
	public void login()throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Library//chromedriver.exe");
		driver=new ChromeDriver();
		driver.navigate().to(" http://automationpractice.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10,TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@class='login']")).click();
		Thread.sleep(1000);
	}
	@Then("^read and write operation of excel$")
	public void read()throws InterruptedException
	{
		Xls_Reader reader = new Xls_Reader("D:\\moolya_assignment\\moolya.qa.poi\\login_details.xlsx");
		String sheetName = "credentials";
		
		int rowCount = reader.getRowCount(sheetName);

		for(int rowNum=2; rowNum<=rowCount; rowNum++){
			String loginId = reader.getCellData(sheetName, "username", rowNum);
			String password = reader.getCellData(sheetName, "password", rowNum);
			System.out.println(loginId + " " + password);
			driver.findElement(By.xpath("//input[@id='email']")).clear();
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(loginId);
			driver.findElement(By.xpath("//input[@id='passwd']")).clear();
			driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(password);
			driver.findElement(By.xpath("//span//i[@class='icon-lock left']")).click();
			Thread.sleep(3000);
			String text = driver.getTitle();
			System.out.println(text);
			String text2 = "My account - My Store";
			if(text.equalsIgnoreCase(text2))
			{
				String stext = "successful";
				System.out.println("The login is:"+stext);
				reader.setCellData(sheetName,"status", rowNum,stext);
				driver.findElement(By.xpath("//a[@class='logout']")).click();
			}
			else
			{	
				String ftext = driver.findElement(By.xpath("//div[@class='alert alert-danger']//p[text()='There is 1 error']/following-sibling::ol/li")).getText();
				System.out.print("There is an error:"+ftext);
				reader.setCellData(sheetName,"status", rowNum,ftext);
			}
			driver.navigate().refresh();
			Thread.sleep(2000);
		}
		
		
	}
	@Then ("^quit the browser$")
	public void quit()
	{
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.quit();
	}
}
