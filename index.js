/// <reference types="./ts-types/"/>
function getLayerByName(layers, name) {
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].name == name) {
            return layers[i];
        }
    }
}
function editTextFramesText(textFrames, line1, line2) {
    for (var i = 0; i < textFrames.length; i++) {
        if (line2 == undefined) {
            textFrames[i].contents = line1;
        }
        else {
            textFrames[i].lines[0].contents = line1;
            textFrames[i].lines[1].contents = line2;
        }
    }
}
function editTextFramesFillColor(textFrames, color) {
    for (var i = 0; i < textFrames.length; i++) {
        textFrames[i].textRange.fillColor = color;
    }
}
function createOutlines(layers, textFrames) {
    var layer = textFrames.parent;
    layer.locked = false;
    var groupItems = [];
    for (var i = 0; i < textFrames.length; i++) {
        var textFrameDuplicate = textFrames[i].duplicate();
        groupItems[i] = textFrameDuplicate.createOutline();
    }
    layer.locked = true;
    return groupItems;
}
function deleteGroupItems(groupItemList) {
    var layer = groupItemList[0].parent;
    layer.locked = false;
    for (var i = 0; i < groupItemList.length; i++) {
        groupItemList[i].remove();
    }
    layer.locked = true;
}
function translateTextFrames(textFrames, dx, dy) {
    var layer = textFrames.parent;
    layer.locked = false;
    for (var i = 0; i < textFrames.length; i++) {
        textFrames[i].translate(dx, dy);
    }
    layer.locked = true;
}
function editUnitText(layers, line1, line2) {
    // If line2 is undefined, only edit the single line variants.
    if (line2 == undefined) {
        var layer = getLayerByName(layers, 'Single Unit Name Lines');
        var textFrames = layer.textFrames;
        layer.locked = false;
        editTextFramesText(textFrames, line1);
        layer.locked = true;
    }
    else {
        var layer = getLayerByName(layers, 'Double Unit Name Lines');
        var textFrames = layer.textFrames;
        layer.locked = false;
        editTextFramesText(textFrames, line1, line2);
        layer.locked = true;
    }
}
function editUnitColor(layers, color) {
    // Returns all the unit text frames for convenience.
    // Single Lines
    var layer = getLayerByName(layers, 'Single Unit Name Lines');
    var textFramesSingle = layer.textFrames;
    // Unlock, edit the fill color, and lock
    layer.locked = false;
    editTextFramesFillColor(textFramesSingle, color);
    layer.locked = true;
    // Double Lines
    layer = getLayerByName(layers, 'Double Unit Name Lines');
    var textFramesDouble = layer.textFrames;
    // Unlock, edit the fill color, and lock
    layer.locked = false;
    editTextFramesFillColor(textFramesDouble, color);
    layer.locked = true;
    return [textFramesSingle, textFramesDouble];
}
function editWordmarks(layers, color) {
    var layer = getLayerByName(layers, 'Berkeley Wordmarks');
    var groupItems = layer.groupItems;
    layer.locked = false;
    for (var i = 0; i < groupItems.length; i++) {
        var compoundPaths = groupItems[i].compoundPathItems;
        for (var j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
    layer.locked = true;
}
function editUCLayers(layers, color) {
    var layer = getLayerByName(layers, 'UC Lines');
    var compoundPaths = layer.compoundPathItems;
    layer.locked = false;
    for (var i = 0; i < compoundPaths.length; i++) {
        compoundPaths[i].pathItems[0].fillColor = color;
    }
    var paths = layer.pathItems;
    for (var i = 0; i < paths.length; i++) {
        paths[i].fillColor = color;
    }
    layer.locked = true;
}
function editTMLayers(layers, color) {
    var layer = getLayerByName(layers, 'Trademark Symbols');
    var groupItems = layer.groupItems;
    layer.locked = false;
    for (var i = 0; i < groupItems.length; i++) {
        var compoundPaths = groupItems[i].compoundPathItems;
        for (var j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
    layer.locked = true;
}
function editBackgroundColors(layers, color) {
    var layer = getLayerByName(layers, 'Backgrounds');
    var backgrounds = layer.pathItems;
    layer.locked = false;
    for (var i = 0; i < backgrounds.length; i++) {
        backgrounds[i].fillColor = color;
    }
    layer.locked = true;
}
function doFullEdit(doc, layers, options, colorSchemes, unitNames, endorserLine) {
    // 1. Edit the TEXT only for the unit names
    editUnitText(layers, unitNames[0], unitNames[1]);
    // 2. Edit the TEXT only for the endorser line
    var endorserTextFrames = getLayerByName(layers, 'Endorser Lines').textFrames;
    editTextFramesText(endorserTextFrames, endorserLine);
    // 3. Do color operations and save the file for every color in the chosen color scheme.
    for (var i = 0; i < colorSchemes.length; i++) {
        doColorsAndSave(doc, layers, options, colorSchemes[i]);
    }
}
function doColorsAndSave(doc, layers, options, colorScheme) {
    var textColor = colorScheme[0];
    var wordmarkColor = colorScheme[1];
    var backgroundColor = colorScheme[2];
    // 4. Edit the colors for the background, wordmark etc
    editBackgroundColors(layers, backgroundColor);
    editWordmarks(layers, wordmarkColor);
    editUCLayers(layers, wordmarkColor);
    editTMLayers(layers, wordmarkColor);
    // 5. Edit the color for the unit names
    var unitTextFrames = editUnitColor(layers, textColor);
    // 6. Edit the color for the endorser lines
    var endorserTextFrames = getLayerByName(layers, 'Endorser Lines').textFrames;
    editTextFramesFillColor(endorserTextFrames, textColor);
    // 7. Convert textFrames to outlines
    var unitTextSingleGroup = createOutlines(layers, unitTextFrames[0]);
    var unitTextDoubleGroup = createOutlines(layers, unitTextFrames[1]);
    var endorserTextGroup = createOutlines(layers, endorserTextFrames);
    // 8. Move the textframes so that they can't be accessed in the EPS
    var dx = -10000;
    var dy = 0;
    translateTextFrames(unitTextFrames[0], dx, dy);
    translateTextFrames(unitTextFrames[1], dx, dy);
    translateTextFrames(endorserTextFrames, dx, dy);
    // 9: Save as EPS File: For the EPS file, we have the option for hiding the UC Text and Trademark
    if (options['exportEPS']) {
        getLayerByName(layers, 'UC Lines').visible = !(options['hideUCandTMonEPS']);
        getLayerByName(layers, 'Trademark Symbols').visible = !(options['hideUCandTMonEPS']);
        exportArtboardsAsEPS(doc, options);
    }
    // 10: Enable the UC Text and Trademark then save as PNG file
    getLayerByName(layers, 'UC Lines').visible = true;
    getLayerByName(layers, 'Trademark Symbols').visible = true;
    if (options['exportPNG']) {
        // TODO: Export as PNG
    }
    // 11. Delete the Group Items (the traced text)
    deleteGroupItems(unitTextSingleGroup);
    deleteGroupItems(unitTextDoubleGroup);
    deleteGroupItems(endorserTextGroup);
    // 12: Unmove the textFrames
    translateTextFrames(unitTextFrames[0], -dx, -dy);
    translateTextFrames(unitTextFrames[1], -dx, -dy);
    translateTextFrames(endorserTextFrames, -dx, -dy);
}
//TODO: use this
function getArtboardOutputFilepath(index) {
    // This is the dictionary from artboard numbers to output paths. 
    // Edit here if the artboards change order, you would like to change output paths, or you add a new artboard.
    // TODO: Either have a failsafe / default option, or alert when there isn't a pair found in here.
    // TODO: This should be wrapped in a function.
    // Should maybe use artboard names instead of numbers?
    var outputPathDict = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'for',
        5: 'five',
        6: 'six',
        7: 'seven'
    };
    return outputPathDict[index];
}
function openMasterDocument(only_check) {
    // This script should be right next to the master-AI document.
    // TODO: Double check that this is in CMYK Color. Or RGB, Whatever they want.
    // TODO: This should be a relative path.
    // TODO: This should be versioned.
    var masterDocumentFileName = 'Lockup-Master-Document.ai';
    var masterDocumentFilePath = '/Users/orenazad/Desktop/PA-work/' + masterDocumentFileName;
    // Only check that the master document is open and active, don't open it automatically.
    if (only_check) {
        if (app.activeDocument.name == masterDocumentFileName) {
            return app.activeDocument;
        }
        else {
            alert("The master document was not open when checking! Make sure to have the Master document open and active before hitting the 'export' button.");
            return false;
        }
    }
    // Either there are no documents open, or the master document is not opened.
    if (app.documents.length == 0 || !app.getIsFileOpen(masterDocumentFilePath)) {
        var masterDocumentFile = new File(masterDocumentFilePath);
        if (!masterDocumentFile.exists) {
            alert('Error: Could not open master document file at path:' + masterDocumentFilePath);
            return false;
        }
        app.open(masterDocumentFile);
    }
    else { // The master document is open, make it the active document.
        for (var i = 0; i < app.documents.length; i++) {
            if (app.documents[i].name == masterDocumentFileName) {
                app.activeDocument = app.documents[i];
                return app.activeDocument;
            }
        }
    }
    return false;
}
function main() {
    // TODO: This needs fixing to use relative locations.
    var saveLocation = '/Users/orenazad/Desktop/PA-work/output/test';
    createFolderPathIfNotExist(saveLocation);
    // This should have the option to change the output folder. 
    if (saveLocation == undefined) {
        // Could add a default location here?
        alert('No file location selected! Please re-run the script and select a file location to continue.');
        return;
    }
    // Folders need to exist before we can save to them, will need to create folder structure!
    // This is the active document we will be using.
    // Double check that the active document is correct using the document name.
    // TODO: We can open the active document here for them probably.
    // TODO: This code shouldn't really run in main, we need to move a lot of this code to only be called when neccessary. For example, if we have a button for them to open the active document this shouldn't be called until actual exporting.
    var doc = app.activeDocument;
    // if (doc.name != masterDocumentFileName) {
    //     alert('This script is running on the incorrect document. Please make sure the Master Document is the current active document.')
    //     alert('Current Active Document: ' + doc.name)
    //     return
    // }
}
// Saving
// We can pass in a boolean here to hide the TM like Neil said.
function exportArtboardsAsEPS(doc, options) {
    var newEPSFile = new File('/Users/orenazad/Desktop/PA-work/test');
    var saveOptions = new EPSSaveOptions();
    saveOptions.saveMultipleArtboards = true;
    saveOptions.artboardRange = calculateArtboardRange(options);
    doc.saveAs(newEPSFile, saveOptions);
    // Should rename file here, according to which artboards were exported. OR, maybe if it exports artboard names?
}
function calculateArtboardRange(options) {
    if (options['useDoubleUnitLine']) {
        if (options['useEndorserLine']) {
            return '3,4,5,7';
        }
        return '4,5,7';
    }
    if (options['useEndorserLine']) {
        return '1,2,6';
    }
    return '2,6';
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
// Needs testing
function createFolderPathIfNotExist(path) {
    var f = new Folder(path);
    if (!f.exists) {
        f.create();
    }
    if (!f.exists) {
        alert('Error: Could not create folder at path:' + path);
    }
    return f;
}
// Sort by color, not by size. We pass in the folder (with the named color) to each function
// organization_name/color/{png/eps}{all the sizes will be here}
// Hide University of California line and TM in EPS
////////////////
// These functions are for generating the RGB and CMYK colors.
////////////////
function generateColors(colorSpace, colorName) {
    var colorDictCMYK = {
        'blue': [100, 71, 10, 47],
        'gold': [0, 32, 100, 0],
        'white': [0, 0, 0, 0]
    };
    // TODO: Fill in RGB Values
    var colorDictRGB = {
        'blue': [],
        'gold': [],
        'white': []
    };
    if (colorSpace == 'CMYK') {
        return generateCMYKColor(colorDictCMYK[colorName]);
    }
    else if (colorSpace == 'RGB') {
        return generateRGBColor(colorDictRGB[colorName]);
    }
    else {
        alert('Color Space argument was incorrect! Provided Color Space:' + colorSpace);
    }
}
function generateCMYKColor(colorList) {
    var newColor = new CMYKColor();
    newColor.cyan = colorList[0];
    newColor.magenta = colorList[1];
    newColor.yellow = colorList[2];
    newColor.black = colorList[3];
    return newColor;
}
function generateRGBColor(colorList) {
    var newColor = new RGBColor();
    newColor.red = colorList[0];
    newColor.green = colorList[1];
    newColor.blue = colorList[2];
    return newColor;
}
