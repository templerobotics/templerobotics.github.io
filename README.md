# Temple Robotics Website

This is the github pages repository used for hosting the Temple Robotics website. This website uses react for a single page static website, using the database located at `public/db.json` to fetch events.

## Adding Events

The event database is located [here](public/db.json). Add an event by appending to the array. Events will need to be removed manually, as gh-pages cannot host a dynamic webpage. An example `json` can be seen below.

The date format: `mm/dd/yyyy`
The only other accepted format is an empty string, meaning the date has not been decided yet

**Important:** Make sure to increment the id

```json
[
 {
  "title": "Title of the event",
  "description": "Description of the event",
  "date": "04/22",
  "location": "Engineering building",
  "id": 0
 },
 {
  "title": "Title of the event 2",
  "description": "Description of the event 2",
  "date": "04/23",
  "location": "Engineering building",
  "id": 1
 }
]
```

## Changing Data

There is information on changing certain data in [this README](./src/data/README.md). This includes things such as changing the photo galleries or adding new photos to them, adding to the home carousel, adding to the rocksat table, etc.

## Getting the Environment Setup

It should be pretty simple getting the website set up on vscode. First you will need to download [Node.js](https://nodejs.org/en/).

Once the newest version of `Node.js` is installed, you can install the node packages with npm as follows

```shell
    npm i
```

Your environment should now be set up!

## Using the Environment

Once the environment is set up, there are a few commands once should know for deploying locally and to the gh-pages branch.

```sh
    npm start # Start the website locally at http://localhost:3000/website-2.0
    npm run deploy # Deploy the website to gh-pages. This should do all the work for you!
```

## VScode Extensions Being Used

I use the following extensions in my environment:

- [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter)
- [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
- [CSS-in-JS](https://marketplace.visualstudio.com/items?itemName=paulmolluzzo.convert-css-in-js)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- [Open In Browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)
- [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
