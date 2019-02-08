package maven.cucumber.naveen.testrunner;

import org.junit.runner.RunWith;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//
//@RunWith(Cucumber.class)
@CucumberOptions(
		features="src\\test\\java\\maven\\cucumber\\naveen\\features",
		glue={"maven.cucumber.naveen.stepdefinition"},
		format= {"pretty","html:test-output"},
		tags= {},
		dryRun=false,
		strict=true,
		monochrome=true
		)
public class TestRunner extends AbstractTestNGCucumberTests {

	
}
