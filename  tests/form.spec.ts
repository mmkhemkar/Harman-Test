import { test, expect } from "@playwright/test";

test("user can submit form", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("Form Validation").click();

  await page.getByPlaceholder("Name").fill("John");

  await page.getByPlaceholder("Age").fill("25");

  await page.getByPlaceholder("Email").fill("john@test.com");

  await page
    .getByPlaceholder("Password")
    .fill("Password@123");

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain(
      "User Added Successfully"
    );
    await dialog.accept();
  });

  await page.getByText("Submit").click();
});