Acceptance Criteria
AC1// Add and delete todos 
User Story: As a user, I should be able to add and delete todos
Adding Todos
Given the user is on the TodoMVC app,
When the user inputs a task in the new todo input field and presses Enter,
Then the task should be added to the todo list.
Deleting Todos
Given there are tasks in the todo list,
When the user hovers over a task and clicks the delete button,
Then the task should be removed from the todo list.


AC2// Modify todo

User Story: As a user, I should be able to modify todos
Adding Todos
Given the user is on the TodoMVC app,
When the user inputs a task in the new todo input field and presses Enter,
Then the task should be added to the todo list.
Modifying Todos
Given a task exists in the todo list,
When the user clicks three times on the task text, presses Backspace to delete it, and types new text, then presses Enter,
Then the task should be updated with the new text.
Observing Changes
Given the tasks are added or modified,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.


AC3// ADD MODIFY COMPLETE CLEAR

User Story: As a user, I should be able to add modify complete and clear todos

Adding Todos
Given the user is on the TodoMVC app,
When the user inputs a task in the new todo input field and presses Enter,
Then the task should be added to the todo list.
Modifying Todos
Given a task exists in the todo list,
When the user clicks three times on the task text, presses Backspace to delete it, and types new text, then presses Enter,
Then the task should be updated with the new text.
Marking Todos as Completed
Given a task exists in the todo list,
When the user clicks the checkbox next to the task,
Then the task should be marked as completed.
Clearing Completed Todos
Given there are completed tasks in the todo list,
When the user clicks the "Clear completed" button,
Then all completed tasks should be removed from the todo list.
Observing Changes
Given the tasks are added, modified, marked as completed, or cleared,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.



Ac4// Add, Modify, and Verify Multiple Todos in TodoMVC

User Story: As a user, I should be able to add and modify multiple todos

Adding Multiple Todos
Given the user is on the TodoMVC app,
When the user inputs tasks "Buy groceries", "Clean the house", and "Walk the dog" in the new todo input field and presses Enter for each task,
Then each task should be added to the todo list.
Modifying Todos
Given the tasks "Buy groceries", "Clean the house", and "Walk the dog" exist in the todo list,
When the user clicks three times on each task text, presses Backspace to delete it, types the new text "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes", then presses Enter,
Then each task should be updated with the new text.
Verification of Changes
Given the tasks are added and modified,
When the changes are observed,
Then the task list should reflect the updated text for each task.



Ac5// Add, Modify, and Complete Multiple Todos in TodoMVC
User Story: As a user, I should be able to add, modify, and verify multiple todos effectively
Adding Multiple Todos
Given the user is on the TodoMVC app,
When the user inputs tasks "Buy groceries", "Clean the house", and "Walk the dog" in the new todo input field and presses Enter for each task,
Then each task should be added to the todo list.
Modifying Todos
Given the tasks "Buy groceries", "Clean the house", and "Walk the dog" exist in the todo list,
When the user clicks three times on each task text, presses Backspace to delete it, types the new text "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes", then presses Enter,
Then each task should be updated with the new text.
Marking Todos as Completed
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed.
Observing Changes
Given the tasks are added, modified, and marked as complete,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.




Ac6// Title: Add, Modify, Complete, and Re-modify Todos in TodoMVC

User Story: As a user, I should be able to add, modify, and mark my todos as complete effectively

Adding Multiple Todos
Given the user is on the TodoMVC app,
When the user inputs tasks "Buy groceries", "Clean the house", and "Walk the dog" in the new todo input field and presses Enter for each task,
Then each task should be added to the todo list.
Modifying Todos Initially
Given the tasks "Buy groceries", "Clean the house", and "Walk the dog" exist in the todo list,
When the user clicks three times on each task text, presses Backspace to delete it, types the new text "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes", then presses Enter,
Then each task should be updated with the new text.
Marking Todos as Completed Initially
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed.
Re-modifying Completed Todos
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" are marked as completed,
When the user clicks three times on each completed task text, presses Backspace to delete it, types the new text "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes", then presses Enter,
Then each task should be updated with the new text.
Re-marking Todos as Completed
Given the re-modified tasks "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed again.
Observing Changes
Given the tasks are added, modified, marked as complete, re-modified, and re-marked as complete,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.



Ac7// Title: Add, Modify, Complete, Re-modify, Re-complete, and Clear Todos in TodoMVC

User Story: As a user, I should be able to manage my todos effectively through multiple stages of modifications and completions

Adding Todos
Given the user is on the TodoMVC app,
When the user inputs a task "Buy groceries" in the new todo input field and presses Enter,
Then the task should be added to the todo list.
Modifying Todos
Given the task "Buy groceries" exists in the todo list,
When the user clicks three times on the task text, presses Backspace to delete it, types the new text "Buy grochicken", then presses Enter,
Then the task should be updated with the new text.
Marking Todos as Completed
Given the task "Buy grochicken" exists in the todo list,
When the user clicks the checkbox next to the task,
Then the task should be marked as completed.
Re-modifying Completed Todos
Given the task "Buy grochicken" is marked as completed,
When the user clicks three times on the completed task text, presses Backspace to delete it, types the new text "Buy groceries and chicken", then presses Enter,
Then the task should be updated with the new text.
Re-marking Todos as Completed
Given the re-modified task "Buy groceries and chicken" exists in the todo list,
When the user clicks the checkbox next to the task,
Then the task should be marked as completed again.
Clearing Completed Todos
Given the task "Buy groceries and chicken" is marked as completed,
When the user clicks the "Clear completed" button,
Then the completed task should be removed from the todo list.
Observing Changes
Given the tasks are added, modified, completed, re-modified, re-completed, and cleared,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.




Ac8// Title: Add, Modify, Complete, Re-modify, Re-complete, and Clear Todos in TodoMVC

User Story: As a user, I should be able to add, modify, complete, re-modify, re-complete, and clear todos effectively

Adding Multiple Todos
Given the user is on the TodoMVC app,
When the user inputs tasks "Buy groceries", "Clean the house", and "Walk the dog" in the new todo input field and presses Enter for each task,
Then each task should be added to the todo list.
Modifying Todos Initially
Given the tasks "Buy groceries", "Clean the house", and "Walk the dog" exist in the todo list,
When the user clicks three times on each task text, presses Backspace to delete it, types the new text "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes", then presses Enter,
Then each task should be updated with the new text.
Marking Todos as Completed Initially
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed.
Re-modifying Completed Todos
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" are marked as completed,
When the user clicks three times on each completed task text, presses Backspace to delete it, types the new text "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes", then presses Enter,
Then each task should be updated with the new text.
Re-marking Todos as Completed
Given the re-modified tasks "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed again.
Clearing Completed Todos
Given the tasks "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes" are marked as completed,
When the user clicks the "Clear completed" button,
Then the completed tasks should be removed from the todo list.
Observing Changes
Given the tasks are added, modified, marked as complete, re-modified, re-completed, and cleared,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.




Ac9// Title: Add, Modify, Complete, Re-modify, Re-complete, and Clear Todos in TodoMVC
User Story: As a user, I should be able to add, modify, complete, re-modify, re-complete, and clear multiple todos effectively
Adding Multiple Todos
Given the user is on the TodoMVC app,
When the user inputs tasks "Buy groceries", "Clean the house", and "Walk the dog" in the new todo input field and presses Enter for each task,
Then each task should be added to the todo list.
Modifying Todos Initially
Given the tasks "Buy groceries", "Clean the house", and "Walk the dog" exist in the todo list,
When the user clicks three times on each task text, presses Backspace to delete it, types the new text "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes", then presses Enter,
Then each task should be updated with the new text.
Marking Todos as Completed Initially
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed.
Re-modifying Completed Todos
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" are marked as completed,
When the user clicks three times on each completed task text, presses Backspace to delete it, types the new text "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes", then presses Enter,
Then each task should be updated with the new text.
Re-marking Todos as Completed
Given the re-modified tasks "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed again.
Clearing Completed Todos
Given the tasks "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes" are marked as completed,
When the user clicks the "Clear completed" button,
Then the completed tasks should be removed from the todo list.
Observing Changes
Given the tasks are added, modified, marked as complete, re-modified, re-completed, and cleared,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.



Ac10// Add, Modify, Complete, Re-modify, Re-complete, and Clear Todos in TodoMVC
User Story: As a user, I should be able to add, modify, complete, re-modify, re-complete, and clear multiple todos effectively
Adding Multiple Todos
Given the user is on the TodoMVC app,
When the user inputs tasks "Buy groceries", "Clean the house", and "Walk the dog" in the new todo input field and presses Enter for each task,
Then each task should be added to the todo list.
Modifying Todos Initially
Given the tasks "Buy groceries", "Clean the house", and "Walk the dog" exist in the todo list,
When the user clicks three times on each task text, presses Backspace to delete it, types the new text "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes", then presses Enter,
Then each task should be updated with the new text.
Marking Todos as Completed Initially
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed.
Re-modifying Completed Todos
Given the tasks "Buy groceries and vegetables", "Clean the entire house", and "Walk the dog for 30 minutes" are marked as completed,
When the user clicks three times on each completed task text, presses Backspace to delete it, types the new text "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes", then presses Enter,
Then each task should be updated with the new text.
Re-marking Todos as Completed
Given the re-modified tasks "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes" exist in the todo list,
When the user clicks the checkbox next to each task,
Then each task should be marked as completed again.
Clearing Completed Todos
Given the tasks "Buy groceries, vegetables, and fruits", "Clean the entire house and garage", and "Walk the dog for 45 minutes" are marked as completed,
When the user clicks the "Clear completed" button,
Then the completed tasks should be removed from the todo list.
Observing Changes
Given the tasks are added, modified, marked as complete, re-modified, re-completed, and cleared,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.



Ac11// Create, Complete, Uncomplete, Filter, and Manage Todos in TodoMVC
User Story: As a user, I should be able to create tasks, complete them, uncomplete them, filter tasks, mark individual tasks as completed, delete tasks, and clear completed tasks effectively
Adding Multiple Todos
Given the user is on the TodoMVC app,
When the user inputs tasks "Buy groceries" and "Clean the house" in the new todo input field and presses Enter for each task,
Then each task should be added to the todo list.
Marking All Todos as Completed
Given multiple tasks exist in the todo list,
When the user clicks the "Toggle All" checkbox,
Then all tasks should be marked as completed.
Uncompleting All Todos
Given all tasks are marked as completed,
When the user clicks the "Toggle All" checkbox again,
Then all tasks should be marked as active.
Navigating to Active Tab
Given the user wants to view only active tasks,
When the user clicks on the "Active" filter tab,
Then only active tasks should be displayed.
Marking the Top Task as Completed
Given there are active tasks,
When the user clicks the checkbox next to the top task,
Then that task should be marked as completed.
Deleting the Bottom Task
Given there are multiple tasks,
When the user hovers over the bottom task and clicks the delete button,
Then the bottom task should be deleted.
Navigating to Completed Tab
Given the user wants to view only completed tasks,
When the user clicks on the "Completed" filter tab,
Then only completed tasks should be displayed.
Clearing Completed Todos
Given there are completed tasks,
When the user clicks the "Clear completed" button,
Then all completed tasks should be removed from the todo list.
Observing Changes
Given the tasks are added, marked as complete, uncompleted, filtered, individually marked as complete, deleted, and cleared,
When the changes are observed,
Then the task list should reflect the updated state after the specified delays.
