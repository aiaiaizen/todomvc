const { test, expect } = require('@playwright/test');

test.describe('Custom Chrome Path', () => {
  test('should launch Chrome from a specific path', async () => {
    const browser = await require('playwright').chromium.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Choose Correct executable path 
      //use this executablePath if on mac: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
       headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.fill('.new-todo', 'Buy groceries');
    await page.press('.new-todo', 'Enter');

    // Add delay to observe the browser
    await page.waitForTimeout(10000);

    const todoText = await page.innerText('.todo-list li .view label');
    expect(todoText).toBe('Buy groceries');
    
    // Add another delay before closing the browser
    await page.waitForTimeout(10000);
    
    await browser.close();
  });
});
