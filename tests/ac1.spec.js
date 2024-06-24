const { test, expect } = require('@playwright/test');

async function launchBrowser() {
  const browser = await require('playwright').chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // Choose Correct executable path 
      //use this executablePath if on mac: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
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
  await page.waitForTimeout(1000);
  const todoText = await page.innerText('.todo-list li:last-child .view label');
  expect(todoText).toBe(item);
}

async function deleteTodoItem(page, todoText) {
  const todoItem = page.locator('.todo-list li', { hasText: todoText });
  await todoItem.hover();
  await todoItem.locator('.destroy').click();
  await page.waitForTimeout(1000);
}

test.describe('Custom Chrome Path', () => {
  test('should allow a user to add two tasks and delete them', async () => {
    const { browser, page } = await launchBrowser();

    // Add two tasks
    await addTodoItem(page, 'Buy groceries');
    await addTodoItem(page, 'Clean the house');

    // Delete the tasks
    await deleteTodoItem(page, 'Buy groceries');
    await deleteTodoItem(page, 'Clean the house');

    await page.waitForTimeout(2000);
    await browser.close();
  });
});
