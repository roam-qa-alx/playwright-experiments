import { test, expect } from "@playwright/test";

test("checkbox stage 1 @one", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator('text=Checkboxes').click();
  const title = page.locator('h3');
  await expect(title).toHaveText("Checkboxes");
  expect(await page.isChecked('#checkboxes :nth-child(1)')).toBeFalsy();
  expect(await page.isChecked('#checkboxes :nth-child(3)')).toBeTruthy();
  await page.check('#checkboxes :nth-child(1)');
  await page.uncheck('#checkboxes :nth-child(3)');
  expect(await page.isChecked('#checkboxes :nth-child(1)')).toBeTruthy();
  expect(await page.isChecked('#checkboxes :nth-child(3)')).toBeFalsy();
});

test.beforeEach(async({page})=> {
  await page.goto('/');
})

test("checkbox stage 2 @two", async ({ page }) => {
  // home page
  const checkboxLink = await page.locator('text=Checkboxes');
  checkboxLink.click();
  // checkboxes page
  const title = page.locator('h3');
  await expect(title).toHaveText("Checkboxes");
  let checkbox1 = '#checkboxes :nth-child(1)';
  let checkbox2 = '#checkboxes :nth-child(3)';
  expect(await page.isChecked(checkbox1)).toBeFalsy();
  expect(await page.isChecked(checkbox2)).toBeTruthy();
  await page.check(checkbox1);
  await page.uncheck(checkbox2);
  expect(await page.isChecked(checkbox1)).toBeTruthy();
  expect(await page.isChecked(checkbox2)).toBeFalsy();
});


