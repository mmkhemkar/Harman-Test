import { test, expect } from "@playwright/test";

test("counter increase and reset", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("Increase").click();

  await expect(
    page.getByRole("heading", { name: "1", exact: true })
  ).toBeVisible();

  await page.getByText("Reset").click();

  await expect(
    page.getByRole("heading", { name: "0", exact: true })
  ).toBeVisible();
});