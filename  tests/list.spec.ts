import { test, expect } from "@playwright/test";

test("list items render correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("List Rendering").click();

  await expect(page.getByText("Apple", { exact: true })).toBeVisible();

  await expect(page.getByText("Banana")).toBeVisible();
});