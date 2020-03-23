$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login to E-site",
  "description": "",
  "id": "login-to-e-site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login and read the message",
  "description": "",
  "id": "login-to-e-site;login-and-read-the-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "try to login page using credetials from excel",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "read and write operation of excel",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ReandAndWrite.login()"
});
formatter.result({
  "duration": 27521843463,
  "status": "passed"
});
formatter.match({
  "location": "ReandAndWrite.read()"
});
formatter.result({
  "duration": 76996025383,
  "status": "passed"
});
formatter.match({
  "location": "ReandAndWrite.quit()"
});
formatter.result({
  "duration": 638507350,
  "status": "passed"
});
});141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VINUTHA\u0027, ip: \u0027192.168.0.118\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\VINUTH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56376}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a8ba75eb8a88e848c56bde8c94893e75\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.ReandAndWrite.read(ReandAndWrite.java:37)\r\n\tat ✽.Then read and write operation of excel(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ReandAndWrite.quit()"
});
formatter.result({
  "status": "skipped"
});
});