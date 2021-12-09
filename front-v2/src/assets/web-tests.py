from selenium import webdriver
from selenium.webdriver.common.keys import Keys


def loginTest_whenPasswordPass_returnError():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/login")
    assert "QDate" in driver.title
    elem = driver.find_element_by_id("login")
    elem.clear()
    elem.send_keys("Bohdan")
    elem.send_keys(Keys.ENTER)
    assert "Missed password." in driver.page_source
    driver.close()


def loginTest_whenLoginPass_returnError():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/login")
    assert "QDate" in driver.title
    elem = driver.find_element_by_id("password")
    elem.clear()
    elem.send_keys("123")
    elem.send_keys(Keys.ENTER)
    assert "Missed name." in driver.page_source
    driver.close()


def loginTest_successfully():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/login")
    assert "QDate" in driver.title
    login = driver.find_element_by_id("login")
    elem = driver.find_element_by_id("password")
    login.clear()
    login.send_keys("Bohdan")
    elem.clear()
    elem.send_keys("123")
    elem.send_keys(Keys.ENTER)
    assert "http://localhost:4200/qdate/search" in driver.current_url
    driver.close()


def registrationTest_whenEmailAndPasswordPass_returnError():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/registration")
    assert "QDate" in driver.title
    elem = driver.find_element_by_id("login")
    elem.clear()
    elem.send_keys("Bohdan")
    elem.send_keys(Keys.ENTER)
    assert "Missed name and email" not in driver.page_source
    assert "http://localhost:4200/qdate/search" not in driver.current_url
    driver.close()


def registrationTest_whenLoginAndPasswordPass_returnError():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/registration")
    assert "QDate" in driver.title
    elem = driver.find_element_by_id("email")
    elem.clear()
    elem.send_keys("123@ukr.net")
    elem.send_keys(Keys.ENTER)
    assert "Missed name and password" not in driver.page_source
    assert "http://localhost:4200/qdate/search" not in driver.current_url
    driver.close()


def registrationTest_whenUserAlreadyExist_successfull():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/registration")
    assert "QDate" in driver.title
    elem = driver.find_element_by_id("email")
    login = driver.find_element_by_id("login")
    password = driver.find_element_by_id("password")
    elem.clear()
    elem.send_keys("123@ukr.net")
    login.send_keys("Bohdan")
    password.send_keys("123")
    password.send_keys(Keys.ENTER)
    assert "http://localhost:4200/qdate/search" in driver.current_url
    driver.close()


def updateTest_whenSetNewName_successfull():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/profile")
    assert "QDate" in driver.title
    elem = driver.find_element_by_id("update-button")
    elem.click()
    name = driver.find_element_by_id("new-name")
    name.send_keys("Ilia")
    name.send_keys(Keys.ENTER)
    driver.refresh()
    current_name = driver.find_element_by_id("username")
    assert "Ilia" == current_name
    driver.close()

def sendMessage_successfull():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/qdate/chat")
    assert "QDate" in driver.title
    elem = driver.find_element_by_id("textarea")
    elem.send_keys("Hello")
    send_button = driver.find_element_by_id("send-message")
    send_button.click()
    name = driver.find_element_by_id("li-text")
    assert name.is_enabled()
    driver.close()

