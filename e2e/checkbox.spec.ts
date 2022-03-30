import { test, expect } from "@playwright/test";

//start 2:12pm
//end 2:38pm
test("checkbox stage 1", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('text=Checkboxes').click();
  const title = page.locator('h3');
  await expect(title).toHaveText("Checkboxes");
});
