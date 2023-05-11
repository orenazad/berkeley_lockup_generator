# Berkeley Lockup Generator Usage Guide<!-- omit from toc -->

- [Quick Start](#quick-start)
- [CMYK Exports](#cmyk-exports)
- [Export Options](#export-options)
- [Input Settings](#input-settings)
- [Output](#output)
- [Exported File Names and Artboard selection](#exported-file-names-and-artboard-selection)
- [Script Location](#script-location)


## Quick Start

The Lockup generator should be fairly straightforward to use, but I'll cover the more detailed nuances throughout this usage guide. Here are the basics:

To start using the Lockup script, open up **Adobe Illustrator**.
1. Download the script package and unzip it to a location of your choosing. For more details on script location see [Script Location](#script-location).
2. Using the menu bar, click on **File -> Scripts**, and navigate to the script file, `Berkeley_Lockup_Panel.js`.
3. Click on the top button labeled `Òpen Lockup File` to open a copy of the Lockup master document.
   1. The script automatically creates a copy of the master document in order to make sure the master document is never corrupted or changed accidentally. Don't ever open the master document directly.
4. If you plan on using the `CMYK` colorspace, you will now need to close the Lockup panel and change the document color mode to `CMYK`.
   1. Using the menu bar, click on **File -> Document Color Mode** and select `CMYK`. Do not be concerned about the incorrect looking colors on the document, these will automatically be fixed before export. The CMYK and RGB options are covered in more detail below.
   2. Re-open the script by following step 1, and continue with settings adjustment.
5. Select your settings / fill out any needed information and hit export!
6. Leave Illustrator **open** and **active**. Illustrator will not continue with the export otherwise.
7. Enjoy!


## CMYK Exports

The Master Lockup document is saved with `RGB` as its document colorspace. Due to limitations with Adobe's scripting API, the script cannot always automatically adjust the colorspace to `CMYK`, or vice versa. Therefore, the script itself will use the menu bar command in order to adjust the colorspace. However, the menu bar isn't directly available immediately after opening the document, which can cause issues if we attempt to adjust it automatically.

In order to work around this, if you plan on using the `CMYK`, you must manually change the document colorspace to `CMYK`. Doing so ***activates*** the menu bar, allowing the script to change the colorspace between RGB and CMYK as needed on it's own. *This should be done anytime the document is re-opened if `CMYK` is being used*.

The script automatically sets the correct `RGB` and `CMYK` colors throughout the exporting process. Since the original document colors are `RGB` the colors will initially look incorrect when the document colorspace is manually changed to `CMYK`. As mentioned, the script will automatically correct this.

The script is peppered with checks everywhere to warn you if there are any colorspace issues, and will instruct you on how to fix it.

## Export Options

- **Export PNG**: If selected, the script will export PNG files, along with any other selected file formats. Please note that PNG files do *not* support `CMYK`, so PNG files will only be created if `RGB` is selected. 

- **Export EPS**: If selected, the script will export EPS files, along with any other selected file formats. EPS supports both RBG and CMYK, and will therefore be created for both.

- **Export PDF**: If selected, the script will export PDF files, along with any other selected file formats. PDF supports both RBG and CMYK, and will therefore be created for both.

- **Hide Logo Option and TM on EPS/PDF**: If selected, the logo option (currently the UC line) and the Trademark symbol will be hidden on EPS and PDF exports. End users will be able to use Illustrator or other software to turn these layers back on, if they would like.

- **Remove Logo Option and TM on PNG**: If selected, the logo option (currently the UC line) and the Trademark symbol will be completely removed from PNG exports. These will not be able to be added back in to the exported image.

### **Colorspace**

- **RGB**: If selected, the script will export the *selected* file formats in RGB colorspace, as well as any other selected colorspaces.
- **CMYK**: If selected, the script will export the *selected* file formats in CMYK colorspace, as well as any other selected colorspaces. Please note that PNG files do not support CMYK colorspace, and so they will not be exported as a CMYK option. If both CMYK and RGB are selected, PNGs will be exported in the RGB colorspace as expected.


## Input Settings

The script has two options for input, manual ('Custom Input') or with a CSV file.

### **Custom Input**

Custom input works great for one-off jobs that need to be done quickly or for any sort of testing. Simply enter the relevant information in the three text boxes present. You *only* need to enter information in the relevant text boxes. If untouched, the default text in the boxes will not be used.

After filling out the relevant text boxes, select the *output path* as described below and select export! *The progress bar will not change when using the custom input option, but the script will alert you when finished.*

### **CSV File**

In order to use a CSV file, select the '**Use CSV**' radio button, which will activate all the CSV input settings. Use the button to the right of '**CSV Input Path**' in order to select the CSV file using your operating system's file explorer. The CSV file path will be displayed after selection.

The script expects the CSV file to follow a certain format. **Therefore, you should *only* use a CSV file downloaded from the designated Lockup Request Google Sheet.**

**Full CSV File**: If selected, the script will generate lockups, according to the settings selected in the panel, for every line in the CSV file. The progress bar will update and you will be alerted when the script is done.

**Single Line**: If selected, the script will generate one set of lockups, according to the settings selected in the panel, for the inputted line from the CSV file. The progress bar will not update, but you will be alerted when the script is done.

**Custom Range**: If selected, the script will generate several lockups, according to the settings selected in the panel, for a *range* of lines from the CSV file. **The line ranges are *inclusive* which means that the the entered *start* and *end* lines will *also* be exported, in addition to everything in between**. The progress bar will update and you will be alerted when the script is done.

## Output

Finally, you can select an output folder to export all the generated Lockups to. Use the button to the right of '**Outputh Path**' in order to select the desired folder using your operating system's file explorer. This folder will hold all the top-level 'Unit Name' folders, one for each individual Lockup request. The folders will be named as a concatenation of the first unit name line and the second, if it exists. So the 'template' is essentially: `unitNameLine1_unitNameLine2`. This will create the following folder structure:

<pre><code>
┌─────────────────────────────────┐
│ ../../../selectedOutputFolder/  │
└─────────────────────────────────┘
                 │
                 │     ┌─────────────────────────────┐
                 ├────▶│ unitNameLine1_unitNameLine2 │
                 │     └─────────────────────────────┘
                 │                    │
                 │                    │
                 │                    │    ┌──────────────────────────────┐
                 │                    ├───▶│ Horizontal Lockups (default) │
                 │                    │    └──────────────────────────────┘
                 │                    │
                 │                    │    ┌──────────────────────────────┐
                 │                    └───▶│       Vertical Lockups       │
                 │                         └──────────────────────────────┘
                 │
                 │
                 │     ┌─────────────────────────────┐
                 ├────▶│ unitNameLine1_unitNameLine2 │
                 │     └─────────────────────────────┘
                 │
                 │     ┌─────────────────────────────┐
                 └────▶│ unitNameLine1_unitNameLine2 │
                       └─────────────────────────────┘
</code></pre>
>**The script automatically overwrites files that share the same name and full file path as a lockup that is about to be exported.**

The script will also automatically copy a PDF explainer of the file structure into each top-level 'Unit Name' folder, for the use of end users.

## Exported File Names and Artboard selection

The script automatically selects which artboards to export based of the three inputs for each lockup request:
1. Unit Name Line 1 (required)
2. Unit Name Line 2 (optional)
3. Endorser Line (optional)

Based on the combination of which one of these are filled (or not!), the script will choose which of the 7 artboards to edit and output. The filename for each outputted artboard will be the *artboard name* in Illustrator, prepended with the file format. Such as: 

```
eps_Horizontal_Large_1_Line_No_Endorser.eps
pdf_Horizontal_Large_1_Line_No_Endorser.pdf
png_Horizontal_Large_1_Line_No_Endorser.png
```

Prepending the file format to the artboard name allows the files to be organized by default when sent to the end user, as most operating systems sort by name as the default option. End-users can still also sort by file format, ofcourse, but this keeps things looking tidy throughout delivery.

## Script Location

The script can be placed wherever you would like on your computer. However, I reccomend not nesting it through a series of folders so that you can access it easily. Because the script relies on other files nearby it for various tasks (such as the copying the master document of PDF file structure explainer), it cannot be placed in Adobe's default scripting location. Placing it in Adobe's default scripting location, even alongside the additional files, would break the script as that folder isn't granted full permissions. Unfortunately, this means it is impossible to have the script show up as a quick-select option on the menu bar under **File -> Scripts**.
