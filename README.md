Tests are being run with open-source tool playwright 

Instructions on How to Run the Tests:

Prerequisites:

Node.js: Make sure you have Node.js installed on your system. You can download it from the official website: https://nodejs.org
Playwright: Playwright is a browser automation library that allows you to interact with web pages and perform tests. It will be installed as a dependency in the next step.


Installation:

Open your terminal or command prompt.
Navigate to the directory where you want to clone the repository.
Clone the repository by running the command: git clone https://github.com/aiaiaizen/todomvc.git
Change into the cloned repository's directory: cd todomvc
Install the project dependencies by running the command: npm install
This command will install Playwright and any other required dependencies specified in the package.json file.


Running the Tests:

Install chrome: npx playwright install chrome

Clear cache if you cant install chrome: rm -rf /Users/charles/Library/Caches/ms-playwright


## Configuration

### Setting the Chrome Executable Path

The `playwright.config.js` file contains a configuration option called `executablePath` that specifies the location of the Chrome executable on your system. You may need to adjust this path based on your operating system and Chrome installation location.

#### For macOS:
Locate Chrome:

Open Finder and go to Applications.
Right-click on Google Chrome and select Show Package Contents.
Navigate to Contents/MacOS.
Note the path: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome.
Set executablePath:

In your Playwright script, 

The default path for Chrome on macOS is:
`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

If Chrome is installed in a different location on your macOS system, update the `executablePath` accordingly.

#### For Windows:

Locate Chrome:

Open File Explorer and go to C:\Program Files\Google\Chrome\Application.
Note the path: C:\Program Files\Google\Chrome\Application\chrome.exe.
Set executablePath:

In your Playwright script, 

The default path for Chrome on Windows is:
`C:\Program Files\Google\Chrome\Application\chrome.exe`

If Chrome is installed in a different location on your Windows system, update the `executablePath` accordingly. Make sure to use double backslashes (`\\`) in the file path.

#### For Linux:
Locate Chrome: Open a terminal and type: which google-chrome

Note the output path, typically /usr/bin/google-chrome.
Set executablePath:

In your Playwright script, 

On Linux, you can usually find the Chrome executable at:
`/usr/bin/google-chrome`

If Chrome is installed in a different location on your Linux system, update the `executablePath` accordingly.

If you are unsure about the exact path, you can follow these steps to find the Chrome executable on your system:

1. Open Chrome and click on the three-dot menu in the upper-right corner.
2. Go to "Help" > "About Google Chrome".
3. In the "About" tab, you will see the Chrome installation path.

Use this path to set the `executablePath` in the `playwright.config.js` file.



To run the Playwright tests, use the following command: npx playwright test
This command will execute all the test files in the project.
Playwright will launch the specified browser (e.g., Chrome) and run the tests in headless mode by default.
If you want to run the tests in headed mode (with the browser visible), you can use the --headed flag: npx playwright test --headed
To run a specific test file, you can specify the file path: npx playwright test tests/example.spec.js


Configuration:

The tests are configured to run on the TodoMVC React application hosted at: https://todomvc.com/examples/react/dist/
If you want to run the tests on a different URL or local development server, you can modify the baseURL in the test files.
The tests are set to run on Chrome browser by default. If you want to use a different browser, you can modify the launchBrowser function in the test files to specify the desired browser (e.g., firefox, webkit).


Test Files:

The test files are located in the tests directory of the repository.
Each test file focuses on a specific feature or functionality of the todo application.
The test files follow the naming convention: *.spec.js (e.g., ac1.spec.js, ac2.spec.js).


Run The Files: npx playwright test *.spec.js, e.g npx playwright test ac1.spec.js


Implementation Strategy:

Test Structure:

The tests are organized into separate test files based on the functionality being tested.
Each test file contains a describe block that groups related test cases together.
Inside each describe block, individual test cases are defined using the test function.
The test cases are written in a readable and descriptive manner, explaining the expected behavior of the application.


Page Object Model:

The Page Object Model (POM) pattern is used to enhance the maintainability and reusability of the tests.
The launchBrowser function is used to launch the browser and navigate to the todo application URL.
Separate functions are created for common actions like adding a todo item (addTodoItem), modifying a todo item (modifyTodoItem), and marking a todo item as completed (markTodoAsCompleted).
These functions encapsulate the interactions with the application's UI elements and provide a higher-level API for the test cases.


Test Data:

The test data is hard-coded within the test cases themselves.
Example todo items like "Buy groceries" and "Clean the house" are used to demonstrate the functionality.
You can modify the test data to include different todo items or use dynamic data generation techniques if needed.


Assertions:

The tests use the expect function from the Playwright library to make assertions.
Assertions are used to verify the expected behavior of the application after performing certain actions.
Examples of assertions include checking the text content of todo items, verifying the completion status of todo items, and ensuring the correct number of todo items are present.


Test Coverage:

The tests cover various scenarios and functionalities of the todo application, including:

Adding new todo items
Modifying existing todo items
Marking todo items as completed
Deleting todo items
Clearing completed todo items
Navigating between different tabs (All, Active, Completed)


The tests aim to provide a good coverage of the core features of the application.
However, there may be additional edge cases or scenarios that are not covered in these tests.
