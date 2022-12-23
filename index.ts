/// <reference types="./ts-types/"/>

function getLayerByName(layers: Layers, name: string) {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].name == name) {
            return layers[i];
        }
    }
}

function editTextFramesText(textFrames: TextFrameItems, line1: string, line2?: string) {
    for (let i = 0; i < textFrames.length; i++) {
        if (line2 == undefined) {
            textFrames[i].contents = line1;
        } else {
            textFrames[i].lines[0].contents = line1;
            textFrames[i].lines[1].contents = line2;
        }
    }
}

function editTextFramesFillColor(textFrames: TextFrameItems, color: Color) {
    for (let i = 0; i < textFrames.length; i++) {
        textFrames[i].textRange.fillColor = color;
    }
}

function createOutlines(layers: Layers, textFrames: TextFrameItems) {
    let layer: Layer = textFrames.parent as Layer;
    layer.locked = false

    let groupItems = []
    for (let i = 0; i < textFrames.length; i++) {
        let textFrameDuplicate = textFrames[i].duplicate()
        groupItems[i] = textFrameDuplicate.createOutline()
    }
    layer.locked = true

    return groupItems
}

function deleteGroupItems(groupItemList: GroupItem[]) {
    let layer: Layer = groupItemList[0].parent as Layer;
    layer.locked = false
    for (let i = 0; i < groupItemList.length; i++) {
        groupItemList[i].remove()
    }
    layer.locked = true
}

function translateTextFrames(textFrames: TextFrameItems, dx: number, dy: number) {
    let layer = textFrames.parent as Layer;
    layer.locked = false

    for (let i = 0; i < textFrames.length; i++) {
        textFrames[i].translate(dx, dy)
    }
    layer.locked = true
}

function editUnitText(layers: Layers, options: {}, unitNames: string[]) {
    if (options['useDoubleUnitLine']) {
        let layer = getLayerByName(layers, 'Double Unit Name Lines')
        const textFrames = layer.textFrames;

        layer.locked = false;
        editTextFramesText(textFrames, unitNames[0], unitNames[1]);
        layer.locked = true;
    } else {
        let layer = getLayerByName(layers, 'Single Unit Name Lines');
        const textFrames = layer.textFrames;

        layer.locked = false;
        editTextFramesText(textFrames, unitNames[0]);
        layer.locked = true;
    }
}

function editUnitColor(layers: Layers, color: Color) {
    // Returns all the unit text frames for convenience.

    // Single Lines
    let layer = getLayerByName(layers, 'Single Unit Name Lines');
    let textFramesSingle = layer.textFrames;

    // Unlock, edit the fill color, and lock
    layer.locked = false;
    editTextFramesFillColor(textFramesSingle, color);
    layer.locked = true;

    // Double Lines
    layer = getLayerByName(layers, 'Double Unit Name Lines');
    let textFramesDouble = layer.textFrames;

    // Unlock, edit the fill color, and lock
    layer.locked = false; 
    editTextFramesFillColor(textFramesDouble, color);
    layer.locked = true;

    return [textFramesSingle, textFramesDouble]
}

function editWordmarks(layers: Layers, color: Color) {
    const layer = getLayerByName(layers, 'Berkeley Wordmarks');
    const groupItems = layer.groupItems;

    layer.locked = false; 
    for (let i = 0; i < groupItems.length; i++) {
        const compoundPaths = groupItems[i].compoundPathItems;
        for (let j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
    layer.locked = true;
}

function editUCLayers(layers: Layers, color: Color) {
    const layer = getLayerByName(layers, 'UC Lines');
    const compoundPaths = layer.compoundPathItems;
    layer.locked = false;

    try {
        for (let i = 0; i < compoundPaths.length; i++) {
            compoundPaths[i].pathItems[0].fillColor = color;
        }
        const paths = layer.pathItems;
        for (let i = 0; i < paths.length; i++) {
            paths[i].fillColor = color;
        }
    } catch (e) {
        alert("Error 8705 caught. This is likely because you may have 'canceled' an operation, leaving the document in a bad state. Although I've worked around it, this initially happened when Illustrator attempted to overwrite a document, and you choose to cancel that operation. Please re-open or re-download the document to fix this, and report to Oren if it happens again.");
        throw e;
    }

    layer.locked = true;
}

function editTMLayers(layers: Layers, color: Color) {
    const layer = getLayerByName(layers, 'Trademark Symbols');
    const groupItems = layer.groupItems;
    layer.locked = false; 

    for (let i = 0; i < groupItems.length; i++) {
        const compoundPaths = groupItems[i].compoundPathItems;
        for (let j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
    
    layer.locked = true;
}

function editBackgroundColors(layers: Layers, color: Color) {
    const layer = getLayerByName(layers, 'Backgrounds');
    const backgrounds = layer.pathItems;

    layer.locked = false; 
    for (let i = 0; i < backgrounds.length; i++) {
        backgrounds[i].fillColor = color;
    }
    layer.locked = true;
}

function doCSVFullEdit(doc: Document, layers: Layers, options: {}, colorSchemes: Color[][], csvLine: Object) {
    const unitNameLine1 = csvLine['Unit Name Line 1']
    const unitNameLine2 = csvLine['Unit Name Line 2']
    const endorserLine = csvLine['Endorser Line']
    doFullEdit(doc, layers, options, colorSchemes, [unitNameLine1, unitNameLine2], endorserLine)
}


function doFullEdit(doc: Document, layers: Layers, options: {}, colorSchemes: Color[][], unitNames: string[], endorserLine: string) {

    if (typeof unitNames[0] === undefined ||  unitNames[0] == 'Unit Name Line 1' || unitNames[0] == "") {
        alert('Unit Name Line 1 has not been filled out.');
        return;
    }
    if (typeof unitNames[1] === undefined || unitNames[1] == 'Unit Name Line 2' || unitNames[1] == '') {
        options['useDoubleUnitLine'] = false;
     }
    if (typeof endorserLine === undefined || endorserLine == 'Endorser Line' || endorserLine == '') {
        options['useEndorserLine'] = false;
    }

    // 1. Edit the TEXT only for the unit names
    editUnitText(layers, options, unitNames);

    // 2. Edit the TEXT only for the endorser line
    if (options['useEndorserLine']) {
        const endorserTextFrames = getLayerByName(layers, 'Endorser Lines').textFrames;
        editTextFramesText(endorserTextFrames, endorserLine);
    }

    // 3. Do color operations and save the file for every color in the chosen color scheme.
    for (let i = 0; i < colorSchemes.length; i++) {
        doColorsAndSave(doc, layers, options, colorSchemes[i]);
    }
}

function doColorsAndSave(doc: Document, layers: Layers, options: {}, colorScheme: Color[]) {

    const textColor = colorScheme[0];
    const wordmarkColor = colorScheme[1];
    const backgroundColor = colorScheme[2];

    // 4. Edit the colors for the background, wordmark etc
    editBackgroundColors(layers, backgroundColor);
    editWordmarks(layers, wordmarkColor);
    editUCLayers(layers, wordmarkColor);
    editTMLayers(layers, wordmarkColor);

    // 5. Edit the color for the unit names
    const unitTextFrames = editUnitColor(layers, textColor);

    // 6. Edit the color for the endorser lines
    const endorserTextFrames = getLayerByName(layers, 'Endorser Lines').textFrames;
    editTextFramesFillColor(endorserTextFrames, textColor);

    // 7. Convert textFrames to outlines
    let unitTextSingleGroup = createOutlines(layers, unitTextFrames[0]);
    let unitTextDoubleGroup = createOutlines(layers, unitTextFrames[1]);
    let endorserTextGroup = createOutlines(layers, endorserTextFrames);

    // 8. Move the textframes so that they can't be accessed in the EPS
    const dx: number = -10000
    const dy: number = 0
    translateTextFrames(unitTextFrames[0], dx, dy)
    translateTextFrames(unitTextFrames[1], dx, dy)
    translateTextFrames(endorserTextFrames, dx, dy)

    // 9: Save as EPS File: For the EPS file, we have the option for hiding the UC Text and Trademark
    if (options['exportEPS']) {
        getLayerByName(layers, 'UC Lines').visible = !(options['hideUCandTMonEPS'])
        getLayerByName(layers, 'Trademark Symbols').visible = !(options['hideUCandTMonEPS']);
        exportArtboardsAsEPS(doc, options)
    }

    // 10: Enable the UC Text and Trademark then save as PNG file
    getLayerByName(layers, 'UC Lines').visible = true
    getLayerByName(layers, 'Trademark Symbols').visible = true
    if (options['exportPNG']) {
        // TODO: Export as PNG
    }


    // 11. Delete the Group Items (the traced text)
    deleteGroupItems(unitTextSingleGroup)
    deleteGroupItems(unitTextDoubleGroup)
    deleteGroupItems(endorserTextGroup)

    // 12: Unmove the textFrames
    translateTextFrames(unitTextFrames[0], -dx, -dy)
    translateTextFrames(unitTextFrames[1], -dx, -dy)
    translateTextFrames(endorserTextFrames, -dx, -dy)

}

//TODO: use this
function getArtboardOutputFilepath(index) {
    // This is the dictionary from artboard numbers to output paths. 
    // Edit here if the artboards change order, you would like to change output paths, or you add a new artboard.
    // TODO: Either have a failsafe / default option, or alert when there isn't a pair found in here.
    // TODO: This should be wrapped in a function.
    // Should maybe use artboard names instead of numbers?
    const outputPathDict = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'for',
        5: 'five',
        6: 'six',
        7: 'seven',
    };
    return outputPathDict[index]
}

function openMasterDocument(only_check: boolean) {
    // This script should be right next to the master-AI document.
    // TODO: Double check that this is in CMYK Color. Or RGB, Whatever they want.
    // TODO: This should be a relative path.
    // TODO: This should be versioned.
    const masterDocumentFileName = 'Lockup-Master-Document.ai';
    const masterDocumentFilePath = '/Users/orenazad/Desktop/PA-work/' + masterDocumentFileName;

    // Only check that the master document is open and active, don't open it automatically.
    if (only_check) {
        if (app.documents.length > 0 && app.activeDocument.name == masterDocumentFileName) {
            return app.activeDocument;
        } else {
            alert("The lockup document was not open when checking! Make sure to have the Master document open and active before hitting the 'export' button.")
            return false;
        }
    }
    // Either there are no documents open, or the master document is not opened.
    if (app.documents.length == 0 || !app.getIsFileOpen(masterDocumentFilePath)) {
        const masterDocumentFile = new File(masterDocumentFilePath)
        if (!masterDocumentFile.exists) {
            alert('Error: Could not open lockup document file at path:' + masterDocumentFilePath)
            return false;
        }
        app.open(masterDocumentFile);
    } else { // The master document is open, make it the active document.
        if (app.activeDocument.name == masterDocumentFileName) {
            alert('The lockup document is already open and active!');
            return app.activeDocument;
        }
        for (let i = 0; i < app.documents.length; i++) {
            if (app.documents[i].name == masterDocumentFileName) {
                app.activeDocument = app.documents[i];
                return app.activeDocument;
            }
        }
    }
    return false;
}

//TODO: This should not have a hard set filepath.
function exportArtboardsAsEPS(doc: Document, options: {}) {
    let newEPSFile: File = new File('/Users/orenazad/Desktop/PA-work/output/test/tt');
    let saveOptions: EPSSaveOptions = new EPSSaveOptions();
    saveOptions.saveMultipleArtboards = true;
    saveOptions.artboardRange = calculateArtboardRange(options);
    // Exception 8700 thrown here if we try to overwrite a file, and the user cancels. This will mess up the whole script.
    // We can prevent this by catching and continuing.
    try {
        doc.saveAs(newEPSFile, saveOptions);
    } catch (error) {
    }
}

function calculateArtboardRange(options: {}) {
    if (options['useDoubleUnitLine']) {
        if (options['useEndorserLine']) {
            return '3,4,5,7'
        }
        return '4,5,7'
    }
    if (options['useEndorserLine']) {
        return '1,2,6'
    }
    return  '2,6'
}

// // Need to have some sort of global variable or something here to determine whether or not to export Double-lines.
// function exportArtboardsAsPNG(doc: Document, colorVariation) {

//     var fleName = doc.name.slice(0, 9);//Get the file code number not the full name;
//     var numArtboards = doc.artboards.length;//returns the number of artboards in the document
//     var filePath = (doc.fullName.parent.fsName).toString().replace(/\\/g, '/')

//     $.writeln("fleName= ", fleName)
//     $.writeln("numArtboards= ", numArtboards)
//     $.writeln("filePath= ", filePath);

//     var options = new ExportOptionsPNG24();

//     for (var i = 0; i < numArtboards; i++) {
//         doc.artboards.setActiveArtboardIndex(i);

//         options.artBoardClipping = true;

//         var artboardName = doc.artboards[i].name;
//         $.writeln("artboardName= ", artboardName);
//         var fullCompleteFilePath = filePath + "/" + colorVariation + "/" + fleName + " " + artboardName + ".png"
//         var destFile = new File(fullCompleteFilePath);
//         $.writeln("destFile= ", destFile);
//         doc.exportFile(destFile, ExportType.PNG24, options);
//     }
// }

// TODO: Needs testing
// TODO: Need a delete file if already exist.
function createFolderPathIfNotExist(path) {
    let f = new Folder(path);
    if (!f.exists) {
        f.create();
    }
    if (!f.exists) {
        alert('Error: Could not create folder at path:' + path)
    }
    return f;
}

    // Sort by color, not by size. We pass in the folder (with the named color) to each function
    // organization_name/color/{png/eps}{all the sizes will be here}


////////////////
// COLOR
////////////////
// These functions are for generating the RGB and CMYK colors.

function generateColors(colorSpace, colorName: string) {
    const colorDictCMYK = {
        'blue' : [100, 71,  10, 47],
        'gold' : [  0, 32, 100,  0],
        'white': [  0,  0,   0,  0],
    };
    // TODO: Fill in RGB Values
    const colorDictRGB = {
        'blue' : [],
        'gold' : [],
        'white': [],
    };

    if (colorSpace == 'CMYK') {
        return generateCMYKColor(colorDictCMYK[colorName])
    }
    else if (colorSpace == 'RGB') {
        return generateRGBColor(colorDictRGB[colorName])
    }
    else {
        alert('Color Space argument was incorrect! Provided Color Space:' + colorSpace)
    }
}

function generateCMYKColor(colorList) {
    const newColor = new CMYKColor();
    newColor.cyan = colorList[0];
    newColor.magenta = colorList[1];
    newColor.yellow = colorList[2];
    newColor.black = colorList[3];
    return newColor;
}

function generateRGBColor(colorList) {
    const newColor = new RGBColor();
    newColor.red = colorList[0];
    newColor.green = colorList[1];
    newColor.blue = colorList[2];
    return newColor;
}