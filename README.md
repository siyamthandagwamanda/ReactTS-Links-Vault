ReactTS Links Vault

For this project, the SDLC begins by identifying the requirements, such as storing links, searching, editing, deleting, and saving data using localStorage. The application is then designed with reusable React components, implemented using React and TypeScript

Agile methodology

This project follows the Agile methodology, where development is completed in small, manageable iterations

1. Create the project and design the user interface.
2. Implement the "Add Link" functionality.
3. Implement viewing, searching, editing, and deleting links.
4. Improve responsiveness, test the application, and fix bugs.
5. read from localStorage when initializing state and write to it inside your CRUD functions.

next step: 
Create the link Interface.
This interface defines the structure of every link stored in the application.

property	Data Type	Purpose.
____________________________________________________________
id	        number	     Unique identifier for each link
title	    string	     Website title
url	        string	     Website address
description	string	     Brief description of the website
tags	    string	     Optional keywords used for searching

next step:
create the Modal Component.
It a resuable (popup) window that displays content above the main page. It will be used whenever the user wants to add a new link or edit an existing link. Using a reusable modal avoids duplicating code and keeps the app organized.

when the user clicks the floating + button.
1. showForm changes from false to true.
2. App.tsx displays the LinkForm component.
3. LinkForm is wrapped inside the Modal component.
4. The Modal darkens the background and displays a centered popup.
5. Clicking the × button calls the close() function, hiding the popup.

next step:
The next component is LinkForm:
1. Enter the title
2. Enter the URL
3. Enter the Description
4. Enter Optional Tags
5. Save a new link
6. Update an existing link
7. Store the data in localStorage using only useState.

Create the LinkForm Component.
The LinkForm component allows users to create a new link or edit an existing one. It is displayed inside the Modal component. The form uses React's useState hook to manage user input, and when the user clicks Save Link, the data is stored in both the application state and localStorage.

When the popup opens,
1. the input fields are empty for a new link.
2. if the user clicks Edit, the fields are automatically  filled with the selected links information.
3. When Save Link is clicked
the required fields are validated. a new link is created or the existing one is updated. The links state is required. The updated array is saved to localStorage. The popup closes. 
4. App.tsx will pass the updated links state to SavedLinks, the displayed list refreshes automatically.

next step
Create SavedLinks component:
Display all saved links. Include the search bar. Filter links by Title, Url, Description, or Tags.
Render each link using the reusable LinkCard component.

The search text is stored using useState.
As the user types, the filter() array method checks every saved link. The search looks for matches in:
Title, Url, Description, Tags
Matching links are displayed using the LinkCard component. If no links match, a 
"No links found." message is displayed.

next step:
Create LinkCard component:
It will display each saved link with its details and provide Edit and Delete buttons to complete the CRUD functionality.

The LinkCard component is responsible for displaying the details of a single saved link. It also provides the Edit and Delete buttons, completing the CRUD functionality. When the user clicks Edit, the selected link is sent back to App.tsx,
which opens the popup with the existing information. When Delete is clicked, the link is removed from both the application state and loc