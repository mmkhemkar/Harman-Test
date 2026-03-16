import { test, expect } from "@playwright/test";

test("navigation between pages", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("Form Validation").click();

  await expect(page.getByText("Form Validation")).toBeVisible();

  await page.getByText("List Rendering").click();

  await expect(
    page.getByText("List Rendering with Keys")
  ).toBeVisible();
});