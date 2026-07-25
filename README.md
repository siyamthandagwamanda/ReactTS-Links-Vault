#ReactTS Links Vault

For this project, the SDLC begins by identifying the requirements, such as storing links, searching, editing, deleting, and saving data using localStorage. The application is then designed with reusable React components, implemented using React and TypeScript

#Agile methodology

This project follows the Agile methodology, where development is completed in small, manageable iterations

1: Create the project and design the user interface.
2: Implement the "Add Link" functionality.
3: Implement viewing, searching, editing, and deleting links.
4: Improve responsiveness, test the application, and fix bugs.
5: read from localStorage when initializing state and write to it      inside your CRUD functions.

#next step: 
Create the link Interface.
This interface defines the structure of every link stored in the application.

#Property	Data Type	Purpose
____________________________________________________________
id	        number	     Unique identifier for each link
title	    string	     Website title
url	        string	     Website address
description	string	     Brief description of the website
tags	    string	     Optional keywords used for searching

#next step:
Create the Modal Component.
It a resuable popup window that displays content above the main page. It will be used whenever the user wants to add a new link or edit an existing link. Using a reusable modal avoids duplicating code and keeps the app organized.