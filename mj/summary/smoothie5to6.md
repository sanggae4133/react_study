# react project modifying / Props & State
* Usage of Typesript, styled-components
* Understanding of Props & State by making todo list

## Typescript
React is Javascript, and Javascript is a Dynamic Programming Language<br/>
Dynamic Programming Language selects type of variables at runtime. <br/>
Thus, there's a probability to occur type bugs.<br/>
So in react, we can use static type analysis tool.<br/>
But now, we are going to use Typescript of Microsoft<br/>
[Typesript](https://www.typescriptlang.org/)<br/>
Typesciript can be used in various Javascript.

## Create react project
```shell
$ cd ./mj/smoothie
$ npx create-react-app my-app

$ cd my-app
$ npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest
$ touch tsconfig.json
```
tsconfig.json
```json
{
    "compilerOptions": {
        "target": "es5",
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
    },
    "include": [
        "src",
        "custom.d.ts"
    ]
}
```
change .js files to .tsx(Typescript JSX), . ts(Typescript Javascript)
* `./src/App.js` -> `./src/App.tsx`
* `./src/App.test.js` -> `./src/App.test.tsx`
* `./src/index.js` -> `./src/index.tsx`
* `./src/reportWebVitals.js` -> `./src/reportWebVitals.ts`
* `./src/setupTests.js` -> `./src/setupTests/ts`

modify files<br/>
Upper routines are complicated, thus react supports template
```shell
$ npx create-react-app my-app-typescript --template=typescript
```

## styled-compenents
```shell
$ npx create-react-app my-app-style --template=typescript
```
react generally developed based on components, and each components has own CSS.<br/>
react styled-components has advatages
* class name bug fix
* easy to manage CSS
* simple dynamic style
* CSS automatic configuration
```shell
#install
$ cd my-app-style
$ npm install --save styled-components
$ npm install --save-dev @types/styled-components jest-styled-components
```