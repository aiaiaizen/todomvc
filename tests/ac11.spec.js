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

async function toggleAllTodos(page) {
  await page.click('.toggle-all');
  await page.waitForTimeout(1000);
}

async function goToActiveTab(page) {
  await page.click('.filters li:nth-child(2) a');
  await page.waitForTimeout(1000);
}

async function markTopTodoAsCompleted(page) {
  await page.click('.todo-list li:first-child .toggle');
  await page.waitForTimeout(1000);
}

async function deleteBottomTodo(page) {
  const bottomTodoItem = page.locator('.todo-list li:last-child');
  await bottomTodoItem.hover();
  await bottomTodoItem.locator('.destroy').click();
  await page.waitForTimeout(1000);
}

async function goToCompletedTab(page) {
  await page.click('.filters li:nth-child(3) a');
  await page.waitForTimeout(1000);
}

async function clearCompletedTodos(page) {
  await page.click('.clear-completed');
  await page.waitForTimeout(1000);
}

test.describe('Custom Chrome Path', () => {
  test('should allow a user to create tasks, complete all, remove completion, mark top as completed, delete bottom, and clear completed', async () => {
    const { browser, page } = await launchBrowser();

    // Add two tasks
    await addTodoItem(page, 'Buy groceries');
    await addTodoItem(page, 'Clean the house');

    // Mark all tasks as completed
    await toggleAllTodos(page);

    // Remove completion from all tasks
    await toggleAllTodos(page);

    // Go to the "Active" tab
    await goToActiveTab(page);

    // Mark the top task as completed
    await markTopTodoAsCompleted(page);

    // Delete the bottom task
    await deleteBottomTodo(page);

    // Go to the "Completed" tab
    await goToCompletedTab(page);

    // Clear all completed tasks
    await clearCompletedTodos(page);

    await page.waitForTimeout(2000);
    await browser.close();
  });
});
