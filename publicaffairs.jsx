function editSingleUnitNames(layers, color, text) {
    var unitNameLayers = getLayerByName(layers, 'Unit Name Lines');
    var textFrames = unitNameLayers.textFrames;
    editTextFramesText(textFrames, text)
    editTextFramesFillColor(textFrames, color)
}

function editDoubleUnitNames(layers, color, line1, line2) {
    // TODO: Implement
    alert('Not implemented yet!')
}

// TODO: We won't be doing this like this. We should have an options dictionary that we pass around. If 'double' is in the options dictionary, we use the double only.
function editUnitNames(layers, color, line1, line2) {

    // Past this character limit, split the word into two lines.
    characterLimit = 100

    // If line2 is defined, move directly on to editing the double lined variants.
    if (line2 !== undefined) {
        editDoubleUnitNames(layers, color, line1, line2)
    } else {
        // All the text will be in line1, as line2 is undefined.
        if (line1.length > characterLimit) {
            // TODO: Somehow split this into two lines. Could we somehow just use illustrator for this?
            editDoubleUnitNames(layers, color, line1, line2)
        } else {
            editSingleUnitNames(layers, color, text)
        }
    }

}

function editEndorserLines(layers, color, text) {
    var endorserLineLayers = getLayerByName(layers, 'Endorser Lines');
    var textFrames = endorserLineLayers.textFrames;
    editTextFramesText(textFrames, text)
    editTextFramesFillColor(textFrames, color)
}

function editWordmarks(layers, color) {
    var wordMarkLayer = getLayerByName(layers, 'Berkeley Wordmarks');
    var groupItems = wordMarkLayer.groupItems;
    for (var i = 0; i < groupItems.length; i++) {
        var compoundPaths = groupItems[i].compoundPathItems;
        for (var j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
}

function editUCLayers(layers, color) {
    var ucLayer = getLayerByName(layers, 'UC Lines');
    var compoundPaths = ucLayer.compoundPathItems;
    for (var i = 0; i < compoundPaths.length; i++) {
        compoundPaths[i].pathItems[0].fillColor = color;
    }
    var paths = ucLayer.pathItems;
    for (var i = 0; i < paths.length; i++) {
        paths[i].fillColor = color;
    }
}

function editTMLayers(layers, color) {
    var tmLayer = getLayerByName(layers, 'Trademark Symbols');
    var groupItems = tmLayer.groupItems;
    for (var i = 0; i < groupItems.length; i++) {
        var compoundPaths = groupItems[i].compoundPathItems;
        for (var j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
}

function editBackgroundColors(layers, color) {
    var backgroundLayers = getLayerByName(layers, 'Backgrounds');
    var backgrounds = backgroundLayers.pathItems;
    for (var i = 0; i < backgrounds.length; i++) {
        backgrounds[i].fillColor = color;
    }
}

function getLayerByName(layers, name) {
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].name == name) {
            return layers[i];
        }
    }
}

function editTextFramesText(textFrames, text) {
    for (var i = 0; i < textFrames.length; i++) {
        textFrames[i].contents = text
    }
}

function editTextFramesFillColor(textFrames, color) {
    for (var i = 0; i < textFrames.length; i++) {
        var textFrame = textFrames[i]
        textFrames[i].textRange.fillColor = color
    }
}


function doColorScheme(layers, unitName, endorserLine, wordmarkColor, textColor, backgroundColor) {

    // 1. Edit the background color for each artboard.
    editBackgroundColors(layers, backgroundColor)

    // 2. Edit the Unit Names. TODO: Pass options dictionary here. 
    editUnitNames(layers, textColor, unitName)

    // 3. Edit the endorser line.
    editEndorserLines(layers, textColor, endorserLine)
    editWordmarks(layers, wordmarkColor)
    editUCLayers(layers, wordmarkColor)
    editTMLayers(layers, wordmarkColor)
}

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



function main() {

    // This script should be right next to the master-AI document.
    // TODO: Double check that this is in CMYK Color. Or RGB, Whatever they want.
    // TODO: This should be a relative path.
    // TODO: This should be versioned.
    const masterDocumentFileName = 'Lockup-Master-Document.ai';
    const masterDocumentFilePath = '/Users/orenazad/Desktop/PA-work/' + masterDocumentFileName;
    if (app.documents.length == 0 || !app.getIsFileOpen(masterDocumentFilePath)) {
        const masterDocumentFile = new File(masterDocumentFilePath)
        if (!masterDocumentFile.exists) {
            alert('Error: Could not open master document file at path:' + masterDocumentFilePath)
        }
        var doc = app.open(masterDocumentFile);
    }

    // TODO: This needs fixing to use relative locations.
    const saveLocation = '/Users/orenazad/Desktop/PA-work/output/test'
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

    if (doc.name != masterDocumentFileName) {
        alert('This script is running on the incorrect document. Please make sure the Master Document is the current active document.')
        alert('Current Active Document: ' + doc.name)
        return
    }

    var layers = doc.layers;

    // Should unlock all layers here.

    const BerkeleyBlueCMYK = generateColors('CMYK', 'blue')
    const CaliforniaGoldCMYK = generateColors('CMYK', 'gold')
    const WhiteCMYK = generateColors('CYMK', 'white')

    // doColorScheme(layers, 'Rausser', 'School of Natural Resources', BerkeleyBlueCMYK, BerkeleyBlueCMYK, WhiteCMYK);
    // // exportArtboardsAsPNG(doc, 'whiteBlue')
    // doColorScheme(layers, 'Rausser', 'School of Natural Resources', WhiteCMYK, WhiteCMYK, BerkeleyBlueCMYK);
    // // exportArtboardsAsPNG(doc, 'blueWhite')
    // doColorScheme(layers, 'Rausser', 'School of Natural Resources', CaliforniaGoldCMYK, WhiteCMYK, BerkeleyBlueCMYK);
    // // exportArtboardsAsPNG(doc, 'BlueYellow')
    // doColorScheme(layers, 'Rausser', 'School of Natural Resources', BerkeleyBlueCMYK, BerkeleyBlueCMYK, CaliforniaGoldCMYK);
    // // exportArtboardsAsPNG(doc, 'YellowBlue')
}

main()


// Saving

// We can pass in a boolean here to hide the TM like Neil said.
function exportArtboardsAsEPS() {
    alert('eps!')
    var newFile = new File('/Users/orenazad/Desktop/PA-work/test');
    var saveOpts = new EPSSaveOptions();
    alert('yay')
    saveOpts.saveMultipleArtboards = true;
    saveOpts.artboardRange = calculateArtboardRange();

    doc.saveAs(newFile, saveOpts);
    // Should rename file here, according to which artboards were exported. OR, maybe if it exports artboard names?
}

function calculateArtboardRange() {
    return '';
}

// Need to have some sort of global variable or something here to determine whether or not to export Double-lines.
function exportArtboardsAsPNG(doc, colorVariation) {

    var fleName = doc.name.slice(0, 9);//Get the file code number not the full name;
    var numArtboards = doc.artboards.length;//returns the number of artboards in the document
    var filePath = (doc.fullName.parent.fsName).toString().replace(/\\/g, '/')

    $.writeln("fleName= ", fleName)
    $.writeln("numArtboards= ", numArtboards)
    $.writeln("filePath= ", filePath);

    var options = new ExportOptionsPNG24();

    for (var i = 0; i < numArtboards; i++) {
        doc.artboards.setActiveArtboardIndex(i);

        options.artBoardClipping = true;

        var artboardName = doc.artboards[i].name;
        $.writeln("artboardName= ", artboardName);
        var fullCompleteFilePath = filePath + "/" + colorVariation + "/" + fleName + " " + artboardName + ".png"
        var destFile = new File(fullCompleteFilePath);
        $.writeln("destFile= ", destFile);
        doc.exportFile(destFile, ExportType.PNG24, options);
    }
}

// Needs testing
function createFolderPathIfNotExist(path) {
    var f = new Folder(path);
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


    // Hide University of California line and TM in EPS
    // See if you can use Pantone colors.

    // If they enter the form on two lines, but it can fit on one, we can force it onto one line. 



////////////////
// These functions are for generating the RGB and CMYK colors.
////////////////

function generateColors(colorSpace, colorName) {
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