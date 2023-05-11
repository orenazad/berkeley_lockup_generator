# Berkeley Lockup Generator Build Instructions <!-- omit from toc -->

**Note: These are the build instructions for the Lockup Generator tool. This is meant as a guide for future development. For instructions on how to use the tool itself, please see [how-to.md or how-to.pdf](how-to.md). Those usage guides are also delivered with every packaged distribution of the tool as well.**

## Build Instructions

1. **Install Node.js and npm**: If you haven't installed Node.js and npm, you can download and install them from [here](https://nodejs.org/en/download/). npm comes with Node.js, so if you install Node.js, you get npm installed on your machine as well.

2. **Clone the repository**: Open a terminal or command prompt and clone the repository using the following command:

    ```
    git clone https://github.com/orenazad/PA-work.git
    ```
   
3. **Navigate into the project directory**: Once the repository is cloned, navigate into the project directory by typing:

    ```
    cd PA-work
    ```

4. **Install the dependencies**: Install the project dependencies by running:

    ```
    npm install
    ```

    This command installs all the dependencies listed in your `package.json` file. See below for more info on the dependencies.

5. **Build the project**: Run the build script defined in your `package.json`:

    ```
    npm run build
    ```

    This command will compile the TypeScript files into JavaScript, copy specified files to the `dist` directory, and bundle your JSX files nicely into a single file for delivery. **Please see more details about build complexities down below.**

    In order to build the project after making changes, you should run:

    ```
    npm run clean
    npm run build
    ```

And that's it! You've successfully built the project. From here, you can work on the panel or zip up the `dist` directory for distribution.

Please note that these instructions assume that you have `git` installed on your machine. If not, you can download it from [here](https://git-scm.com/downloads). 

## Adobe ExtendScript 

ExtendScript is an extended form of JavaScript (following the ECMA-262 specification) developed by Adobe for use in all of their Creative Cloud applications. The [Adobe ExtendScript Guide](https://extendscript.docsforadobe.dev/introduction/extendscript-overview.html) and the [Illustrator Scripting Guide](https://ai-scripting.docsforadobe.dev/) contain all the documentation needed to get up to date on the intracies of ExtendScript and how use it with Illustrator.

## Dependencies

The first two dependencies are development dependencies. This means they aren't needed for the end user, but are necessary for developing and building the app.

1. **`typescript (4.9.4)`:** Typescript is a statically typed superset of Javascript that compiles to plain JavaScript, which ExtendScript is based off of. Since TypeScript requires static typing, generated types are needed for all of Adobe's ExtendScript types. You can find these in [ts-types](src/ts-types/).
   1. The typescript types are maintained by the scripting community [here](https://github.com/aenhancers/Types-for-Adobe), though I've made some corrections to the files in this repository.
2. **`extendscript-bundlr (0.4.0)`:** This tool allows us to bundle several ExtendScript files into one final script for delivery. It uses the includes at the top of ExtendScript files, but this has been slightly complicated by TypeScript. Details are explained below in the Build Details. 

The following dependency is needed for the end-user, but is automatically bundled into the final deliverable.

3. **[Extend Script CSV Reader:](https://github.com/ff6347/extendscript.csv)** This is used to parse CSV files using Adobe's ExtendScript. Other CSV reading routines or libraries don't use the old ECMA-262 standard for JavaScript, so they may not work. This is included as [src/CSV.js](src/CSV.js), and is automatically bundled into the final Javascript deliverable.

## Build Details

The build details have been slightly complicated by a few of ExtendScript's and TypeScript's quirks, and some of the interactions between the two. 

See [package.json](package.json):
```json
"scripts": {
    "compile": "npx tsc",
    "copy-ai": "mkdir ./dist && cp ./src/Lockup-Master-Document.ai ./dist/Lockup-Master-Document.ai",
    "copy-fileStructurePDF": "cp ./src/File-structure.pdf ./dist/File-structure.pdf",
    "copy-howToPDF": "cp ./how-to.pdf ./dist/how-to.pdf",
    "copy-csvjs": "cp src/CSV.js ./tmp",
    "prepend-includes": "node prepend.js",
    "bundle-jsx": "npx exsbundlr --input tmp/ScriptUIPanel.js -o dist/Berkeley_Lockup_Panel.js",
    "build": "npm run compile && npm run copy-csvjs && npm run prepend-includes && npm run copy-ai && npm run copy-howToPDF && npm run copy-fileStructurePDF && npm run bundle-jsx && npm run clean-temp",
    "clean-temp": "rm -r ./tmp",
    "clean-dist": "rm -r ./dist",
    "clean": "npm run clean-dist && npm run clean-temp"
  }
```

In order from the `npm run build` command:

1. `npm run compile`: This compiles `ScriptUIPanel.ts` and `utilities.ts` into their corresponding JS files. As you can see in [tsconfig.json](tsconfig.json), the out directory is set to `/tmp`. 
2. `npm run copy-csvjs`: This copies the CSV ExtendScript library into the `tmp` folder. Where it will eventually be bundled with the other Javascript files into one file.
3. `npm run prepend-includes`: This command runs [prepend.js](prepend.js), which prepends ExtendScript includes onto the generated ScriptUIPanel.js in the `tmp` directory. These needed to be added after compilation, as these lines throw specific Typescript compiler errors which cannot be ignored. Further, the typescript compiler has been configured to remove all comments, so these must be added back in.
   * The TSC has been configured to remove comments to avoid errors in ExtendScript. In order to ignore certain TypeScript errors due to the quirks of ExtendScript, the following is used:
   ```ts
   //@ts-expect-error
   ```
   * However, due to the `@` in the comment, ExtendScript attempts to use this line, as it is exactly similiar to how includes are used in ExtendScript, causing an error:
   ```js
   //@include 'utilities.js'
   ```
   * To summarize, both TypeScript and ExtendScript use `//@` differently, so this is necessary to avoid errors on either end.
4. `npm run copy ai`: This creates the *distribution directory* `/dist`, and copies the Lockup Master document into it.
5. `npm run copy-howToPDF`: Copies the how-to PDF into the distribution directory.
6. `npm run copy-fileStructurePDF`: Copies the file structure PDF into the distribution directory.
7. `npm run bundle-jsx`: This uses the ExtendScript Bundler to bundle every JS file that is included in `tmp/ScriptUIPanel.js`. As such, these will be the includes written in `prepend.js`. It outputs the final single file to `dist/Berkeley_Lockup_Panel.js`, which can be run in Illustrator!
8. `npm run clean-temp`: Deletes the `tmp` folder that was created in the build process. There are also two other clean commands that you can see above, but aren't used in the build process!

## Tip: ScriptUI Builder

[scriptui.joonas.me](https://scriptui.joonas.me/) is a great website you can use to make changes to the UI of the panel far more efficiently than by writing the native code. You can import the commented code at the top of `ScriptUIPanel.ts` into the webapp to load the current ScriptUI details. The current version of the panel has had slight adjustments made outside of the website, however, so they are not currently 1:1 but are extremely close.