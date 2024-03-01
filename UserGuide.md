User Guide

Feature:
Set default account type of admin account to administrator
How to Use:
Admin account type is automatically set upon running ./nodebb setup for the first time
This only applies to the first setup admin account and not to other accounts which join the “administrator” group
How to Test:
Account type of administrator should read as “administrator” instead of “student” in all instances where account type can be seen (e.g. profile page, posts, global user list)
Administrator account should not appear in user list when filtering for students
Additional tests were not added for this feature because it is mostly a visual change and can be verified by reading the account type string in the locations stated above

Feature:
Display account type under username in profile page
Display account type next to username in posts
Display account type under username in global user list
How to Use:
Create any account normally, noting the account type selected during registration
How to Test:
After the account has been made, verify that the account type appears as a string in parentheses in the locations stated above
Additional tests were not added for this feature because it is a visual change and can be verified by reading the account type string in the location stated above

Feature:
Filter global user list for instructors and students
How to Use:
Create an instructor account “Instructor” and a student account “Student”
After the accounts have been made, navigate to the Users page found in the header bar
How to Test:
Verify that there is an “Instructors” button and a “Students” button next to the “Most Reputation” button
Upon clicking the “Instructors” button, the tab name should change to “Instructors | NodeBB”, the navigation crumbs should read “Home / Users / Instructors”, and only instructor accounts should remain in the list of users under the buttons
Upon clicking the “Students” button, the tab name should change to “Students | NodeBB”, the navigation crumbs should read “Home / Users / Students”, and only student accounts should remain in the list of users under the buttons
Added automated tests in “test/controllers.js” for loading the “/users?section=instructors” and “/users?section=students” filter pages, which ensures that the pages are loading correctly and allows the user to verify the remaining visual changes manually
Feature:
Increase user reputation based on upvoter account type
How to Use:
Create any account normally, noting the account type used during registration
Use the account to upvote any post normally
How to Test:
Upon an upvote by an instructor account, the post owner’s reputation should automatically increase by 2
Upon an upvote by any other account, the post owner’s reputation should automatically increase by 1
Added automated tests in “test/posts.js” for upvotes, unvotes, and downvotes, which ensures that reputation is increasing and decreasing as expected for instructor account types

Feature:
Mark topic as resolved
Mark topic as unresolved
How to Use:
Create any account normally, noting the account type selected during registration
After the account has been made, if the account is an administrator, instructor, or the owner of the topic, navigate to a topic and click on the individual topic menu to see the “Mark Resolved” button is the post is unresolved, or the “Mark Unresolved” button is the post is resolved
In the category topic list, resolved topics titles should be green and unresolved topic titles should be red
On the topic page, if the topic is resolved, the information bar under the title should show “Resolved ✓”
How to Test:
Verify that there is a “Mark Resolved” button (if the topic is unresolved) or a “Mark Unresolved” button (if the topic is resolved) in the topic menu list, just above the divider above “Delete post”
Upon clicking the “Mark Resolved” button, a pop-up notification should appear stating that “Topic has been marked as resolved”, on a reload of the page, “Resolved ✓” should be displayed next to the , and on navigating back to the topic list on a specific category’s page, the topic title should be green
Upon clicking the “Mark Unresolved” button, a pop-up notification should appear stating that “Topic has been marked as unresolved”, the “Resolved ✓” should disappear, and on navigating back to the topic list on a specific category’s page, the topic title should be red
Added automated tests in “test/user.js” which ensures that the function isInstructor correctly identifies instructor accounts
Added automated tests in “test/topics.js” which ensures that the resolved and unresolved button work only for the post owner, instructors, and administrators, and the fields are being set correctly
Note: this feature only includes button names and alerts for marking a topic as resolved or unresolved in en-GB and en-US, so it currently fails the i18n test in the testing suite.

Feature:
Create reading lists to save posts for later perusal
How to Use:
Click the “Reading Lists” icon in the navigation bar
If not logged in, log in with an account
Click the “New Reading List” button
How to Test:
Check that clicking the “Reading Lists” icon prompts the user to log in if they have not done so already
Confirm that clicking the “Reading Lists” icon navigates to the Reading Lists page
Confirm that the buttons “New Reading List” and “Delete Reading List” buttons are displayed correctly
Added automated tests in “test/controllers.js” for loading the Reading Lists page at endpoint “/lists”

Feature:
Users can register recruiter accounts
Recruiters cannot create posts
How to Use:
Create any account normally, but click on the “Recruiter” account type
How to Test:
Try to make a post and see that there is an error raised regarding user permissions.
Go to the account page and see that the user has account type “Recruiter” (using the new “view account type on profile” feature).
