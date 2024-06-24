const { test, expect } = require('@playwright/test');

async function launchBrowser() {
  const browser = await require('playwright').chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false // Run in headful mode to observe the test
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://todomvc.com/examples/react/dist/');
  return { browser, page };
}

async function addTodoItem(page, item) {
  await page.fill('.new-todo', item);
  await page.press('.new-todo', 'Enter');
  await page.waitForSelector('.todo-list li');
  await page.waitForTimeout(1000); // Add a 1-second delay
  const todoText = await page.innerText('.todo-list li .view label');
  expect(todoText).toBe(item);
}

async function modifyTodoItem(page, oldText, newText) {
  const todoItem = page.locator('.todo-list li .view label', { hasText: oldText });
  await todoItem.click({ clickCount: 3 });
  await page.keyboard.press('Backspace');
  await page.keyboard.type(newText);
  await page.keyboard.press('Enter');
  await page.waitForSelector('.todo-list li .view label', { hasText: newText });
  await page.waitForTimeout(1000); // Add a 1-second delay
  const todoText = await page.innerText('.todo-list li .view label');
  expect(todoText).toBe(newText);
}

test.describe('Custom Chrome Path', () => {
  test('should allow a user to add, partially delete, and add to a todo', async () => {
    const { browser, page } = await launchBrowser();
    await addTodoItem(page, 'Buy groceries');
    await modifyTodoItem(page, 'Buy groceries', 'Buy grochicken');
    await page.waitForTimeout(2000); // Add a 2-second delay at the end
    await browser.close();
  });
});