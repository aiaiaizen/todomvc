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
  await page.waitForTimeout(1000);
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
  await page.waitForTimeout(1000);
  const todoText = await page.innerText('.todo-list li .view label');
  expect(todoText).toBe(newText);
}

async function markTodoAsCompleted(page, todoText) {
  const todoItem = page.locator('.todo-list li', { hasText: todoText });
  await todoItem.locator('.toggle').check();
  await page.waitForTimeout(1000);
}

async function clearCompletedTodos(page) {
  await page.click('.clear-completed');
  await page.waitForTimeout(1000);
}

test.describe('Custom Chrome Path', () => {
  test('should allow a user to add, modify, complete, and clear a todo', async () => {
    const { browser, page } = await launchBrowser();
    await addTodoItem(page, 'Buy groceries');
    await modifyTodoItem(page, 'Buy groceries', 'Buy grochicken');
    await markTodoAsCompleted(page, 'Buy grochicken');
    await clearCompletedTodos(page);
    await page.waitForTimeout(2000);
    await browser.close();
  });
});