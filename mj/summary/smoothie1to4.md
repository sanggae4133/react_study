# react setting, testing
at `mj/smoothie`

## Homebrew
```shell
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
#after install
$ brew install node
```


## create-react-app
```shell
#install
$ npm install -g create-react-app
$ npm sreate-react-app my-app
$ cd my-app
$ npm start
```



## package.json
library, command script settings

## Jest
on `mj/smoothie/jest-test` 

JavaScript test Framework
```shell
$ npm init
```
### Jest installation, run
```shell
$ npm install --save-dev jest
```
modify package.json
```json
"scripts": {
    "test": "jest --watch"//run test automatically when file was modified
},
```
at shell
```shell
npm run test
```
### test file
ex) index
`index.test.js` is recognized as test file of `index.js`
### test funcitons
- main feature(usage example)
    - index.js
        ```js
        const func1 = (args) => {
            return `value`;
        };

        const func1 = (args) => {
            return true;
        };

        module.exports = {
            func1,
            func2,
        };
        ```

    - index.test.js
        ```js
        const { func1, func2, ... } = require('./index');

        describe('test index.js file', () => {
            it('function 1 works (explanation)', () => {
                expect(func1(`args`)).toBe(`expectedValue`);
            });

            it('function 2 works (explanation)', () => {
                expect(func2(`args`)).toBe(`expectedValue`);
            });
        })
        ```
- toEqual
Object Matcher
- toBeTruthy, toBeWorthy
Boolean Matcher
- toContain
check if Array contains value

### code coverage
```shell
npx jest --coverage
```

## react-testing-library
on `mj/smoothie/react-testing-library-test`

light solution for react component testing

runs on react-dom
### installation
```shell
$ npx create-react-app react-testing-library-test
$ npm install --save-dev @testing-libray/react
```

### usage
create-react-app originally supports test

at package.json
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",//test
    "eject": "react-scripts eject"
  },
```
to run, at shell
```shell
npm run test
```
Jest runs test code at App.test.js
```shell
 PASS  src/App.test.js
  ??? renders learn react link (24 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.193 s
Ran all test suites.
```
#### add test codes
App.test.js using Jest
```js
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders component correctly', () => {
    //container is the object that contains part which show on screen at react component
    const { container } = render(<App />); 
    
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    expect(container.getElementsByClassName('App-logo')).toHaveLength(1);
    expect(container.getElementsByClassName('App-logo')[0]).toHaveAttribute(
      'src',
      'logo.svg'
    );

    expect(container.getElementsByTagName('p')).toHaveLength(1);
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent(
      'Edit src/App.js and save to reload'
    );

    //snapshot test
    expect(container).toMatchSnapshot();

  });
});
```
press u to update snapshot
