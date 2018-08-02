# React Binary Tree

Surge deployment link: [React-tree](https://react-d3-tree.surge.sh)
* BFS
* DFS(Inorder, Preorder, Postorder)

### Components
* HTML - Generated structure of the web page.
* CSS - Web page styling options and details.
* ReactJS - Structure for deployment of the web page.
* d3 - Tree visualisation
* Enzyme + jest - Unit testing

### Folder Structure

After creation and a successful build, your project should have the following file structure:

```
tree/
  README.md
  node_modules/
  build/
  package.json
  .babelrc
  public/
    index.html
  src/
    __test__
        Menu.test.jsx
        TreeTravesal.test.jsx
        __snapshots__
        Menu.test.js.snap
        TreeTravesal.test.snap
    components/
        D3Tree.jsx
        Menu.jsx
        Tree.js
        TreeTravesal.jsx
    App.js
    App.test.js
    index.css
    index.js
    setupTests.js
```
* `public/index.html` is the page template.
* `src/index.js` is the JavaScript entry point.
* `src/App.js` is the component which contains the whole app.
* `src/components/` any new component can be added in this folder, given that the file is reused or should be unique in some way.
* `src/__tests__/` new tests related to all the components can be created in this folder, this project follows a `jest` testing suite.
* `src/__tests__/__snapshots` snapshots of component created for jest testing.
* `src/App.test.js/` is the entry point for all tests.
* `.babelrc` is used by babel for transpiling.
* `src/setupTests.js` is enzyme setup configuration.

### Installation

2. Running react app
```sh
$ git clone https://github.com/fragm3/React-tree
$ cd tree
$ npm install
$ npm run start
```