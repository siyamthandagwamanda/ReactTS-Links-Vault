## Topic: ReactTS
## Title: Task 2 - ReactTS Links Vault

## SDLC Principles For Task 2.

#                          Gather Requirements.
 - The Goal is to develop a React and TypeScriptts application that allows users to save, manage, and
   search using localStorage and components-based-structure

  - landing page empty at start (Main layout with Floating Button) interactivity through two popup    screens. Popup 1 Add Links screen with save Links button, Second screen view added links with edit and delete button. Be able to close popup screens.

 -  Idea Components: Component i'll use (ill try and use most).
    popup screen componets 
    Header/LinkForm/Linklist/LinkCard/SearchBar/LinkModel.


# Functional Components

- User can add a link 
- User can delete a link
- User can edit a link
- User can search for a link
- User can store data in LocalStorage.

##                               Design
##                              Design 1

## Ui screen user will see, 2 Popup screens / UI Mockup structure.
## Question ? Store present data to enable search existing data
## Component 1: Initial Dashboard View (state: On Run).

   +----------------------------------------------------------------------+
  |                  MY LINKS VAULT DASHBOARD                             |
  |                    Manage data entries.                               |
  |                                                                       |
  |                                                                       |
  |                 --------------------------                            |
  |                |   existing data.         |                           |
  |                |                          |                           |   
  |                |                          |                           |
  |                 ---------------------------                           |
  |                                                                       |
  |                                                                       |
  |                                                                       |
  |                                                                       |
  |                                                           [ + ]       |
  |                                            # Floating Action Button   |
   +----------------------------------------------------------------------+ 

##                            Design 2 First PopUp Screen

## State : Data that changes.
## Component 2: First Screen View (State: Click Floating button)
## Question ? Search existing data.
## Add a Tip : Fill out all fields to keep your vault organized.
## search bar to accept how many character to determine length.
## Add links apply css style to separate labels and input fields (nb//placeholders).
## Delete / Save Button (clicks/hover/background color) border-radius: 0ch advanced width (:
## Edit / Delete in second PopUp screen.


- Clicking the + button activates
- the background backdrop blur and slides open the unified searching and creation window directly in the screen center.

   +----------------------------------------------------------------------+
  |                  MY LINKS VAULT DASHBOARD                              |
  |   +------------------------------------------------------------+       |
  |   | Vault Manager                                           (X)|       |
  |   | ---------------------------------------------------------- |       |  
  |   | Search Vault Titles                                        |       |
  |   | [Search existing links _______]                            |       |
  |   | +--------------------------------------------------+       |       |   
  |   | | TIP: Fill out all fields to.                     |       |       |
  |   | +--------------------------------------------------+       |       |
  |   | Add  New Links                                             |       |
  |   | - Title.          [ Enter Title ]                          |       |
  |   | - Link(Url).      [ Enter Url   ]                          |       |
  |   | - Description.    [ What link for? ]                       |       |
  |   | - Tags #          [ e.g., documentation ]                  |       |
  |   |                                                            |       |
  |   +------------------------------------------------------------+       |
  |                                          [ Delete ] [ Save ]           |
   +----------------------------------------------------------------------+ 

##  Design 3 Second PopUp Screen
## Component 3: Second screen view ( State: Save Form )
## Submitting a valid form instantly closes Screen 1 and opens Screen 2. for all your saved content



# UI Functional 
# How localStorage is used.

- Local Storage is the browser's built-in storage that saves data as key-value pairs. It allows information
- It allows information to remain available even after the browser is refreshed or closed.

- when a user saves a link, the application converts the list of links into into JSON string, i'll use 
  (JSON.Stringify())

- LocalStorage, e.g., setItem()
- When the application starts, it retrievs the saved data from localStorage. use e.g., seItem()

- 














