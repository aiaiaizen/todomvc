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
  const todoText = await page.innerText('.todo-list li:last-child .view label');
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
  const modifiedTodoItem = page.locator('.todo-list li .view label', { hasText: newText });
  const todoText = await modifiedTodoItem.innerText();
  expect(todoText).toBe(newText);
}

async function markTodoAsCompleted(page, todoText) {
  const todoItem = page.locator('.todo-list li', { hasText: todoText });
  await todoItem.locator('.toggle').check();
  await page.waitForTimeout(1000);
}

test.describe('Custom Chrome Path', () => {
  test('should allow a user to add three tasks, modify them, mark them as complete, modify them again, and mark them as complete again', async () => {
    const { browser, page } = await launchBrowser();

    // Add three tasks
    await addTodoItem(page, 'Buy groceries');
    await addTodoItem(page, 'Clean the house');
    await addTodoItem(page, 'Walk the dog');

    // Modify the tasks from top to bottom
    await modifyTodoItem(page, 'Buy groceries', 'Buy groceries and vegetables');
    await modifyTodoItem(page, 'Clean the house', 'Clean the entire house');
    await modifyTodoItem(page, 'Walk the dog', 'Walk the dog for 30 minutes');

    // Mark the tasks as complete from top to bottom
    await markTodoAsCompleted(page, 'Buy groceries and vegetables');
    await markTodoAsCompleted(page, 'Clean the entire house');
    await markTodoAsCompleted(page, 'Walk the dog for 30 minutes');

    // Modify the tasks again from top to bottom
    await modifyTodoItem(page, 'Buy groceries and vegetables', 'Buy groceries, vegetables, and fruits');
    await modifyTodoItem(page, 'Clean the entire house', 'Clean the entire house and garage');
    await modifyTodoItem(page, 'Walk the dog for 30 minutes', 'Walk the dog for 45 minutes');

    // Mark the tasks as complete again from top to bottom
    await markTodoAsCompleted(page, 'Buy groceries, vegetables, and fruits');
    await markTodoAsCompleted(page, 'Clean the entire house and garage');
    await markTodoAsCompleted(page, 'Walk the dog for 45 minutes');

    await page.waitForTimeout(2000);
    await browser.close();
  });
});