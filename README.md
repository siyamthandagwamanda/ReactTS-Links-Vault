<img src="https://socialify.git.ci/siyamthandagwamanda/ReactTS-Links-Vault/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="ReactTS-Links-Vault" width="640" height="320" />

# Link Vault

A small React + TypeScript app for saving, searching, editing and
deleting your favourite links, persisted locally in the browser via
`localStorage`. No backend, no auth — just a local vault.

## Features

- Add a link with a title, URL, description and optional tags
- Edit or delete any saved link
- Search across title, URL, description and tags as you type
- Data survives a page refresh (persisted to `localStorage`)

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.         typescriptlang.org/)
- [Vite](https://vite.dev) for dev server + build
- No external UI/state libraries — plain `useState`/`useEffect`

## Project structure
src/
├── Types/
│ └── Link.ts 
# shared Link interface
├── Components/
│ ├── LinkCard/ 
# renders one saved link
│ ├── SavedLinks/ 
# search box + list of LinkCards
│ ├── Modal/ 
# generic overlay/dialog wrapper
│ └── LinkForm/ 
# create/edit form, rendered inside Modal
├── App.tsx 
# owns state, wires everything together
└── main.tsx 
# React entry point