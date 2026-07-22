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
  |                |                          |                           |
  |                |   message                |                           |   
  |                |   nothing to show        |                           |
  |                |   click                  |                           |
  |                 -------------------------                             |
  |                                                                       |
  |                                                                       |
  |                                                                       |
  |                                                                       |
  |                                                           [ + ]       |
  |                                            # Floating Action Button   |
   +----------------------------------------------------------------------+ 

##                            Design 2

## State : Data that changes.
## Component 2: First Screen View (State: Click Floating button)
## Question ? Search existing data.
## Add a Tip : Fill out all fields to keep your vault organized.
## search bar to accept how many character to determine length.
## Add links apply css style to separate labels and input fields (nb//placeholders).
## Cancel / Save Button (clicks/hover/background color) border-radius: 0ch advanced width (:

- Clicking the + button activates
- the background backdrop blur and slides open the unified searchingand creation window directly in the screen center.

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
  |   | - Title.          [           ]                            |       |
  |   | - Link(Url).      [           ]                            |       |
  |   | - Description.    [           ]                            |       |
  |   | - Tags #          [           ]                            |       |
  |   |                                                            |       |
  |   +------------------------------------------------------------+       |
  |                                          [     ]     [      ]          |
   +----------------------------------------------------------------------+ 






















