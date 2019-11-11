import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(
      by.css("app-root app-home app-header .typewriter-text")
    ).getText() as Promise<string>;
  }
}
