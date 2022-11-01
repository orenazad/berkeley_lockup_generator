//TODO: Needs to be changed later for 2-Liners. 
function editUnitNames(layers, text, color) {
    var unitNameLayers = getLayerByName(layers, 'Unit Name Line Layers');
    var textFrames = unitNameLayers.textFrames;
    editTextFramesText(textFrames, text)
    editTextFramesFillColor(textFrames, color)
}

function editEndorserLines(layers, text, color) {
    var endorserLineLayers = getLayerByName(layers, 'Endorser Line Layers');
    var textFrames = endorserLineLayers.textFrames;
    editTextFramesText(textFrames, text)
    editTextFramesFillColor(textFrames, color)
}

function editWordmarks(layers, color) {
    var wordMarkLayer = getLayerByName(layers, 'Berkeley Wordmark Layers');
    var groupItems = wordMarkLayer.groupItems;
    for (var i = 0; i < groupItems.length; i++) {
        var compoundPaths = groupItems[i].compoundPathItems;
        for (var j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
}

function editUCLayers(layers, color) {
    var ucLayer = getLayerByName(layers, 'UC Line Layers');
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
    var tmLayer = getLayerByName(layers, 'Trademark Symbol Layers');
    var groupItems = tmLayer.groupItems;
    for (var i = 0; i < groupItems.length; i++) {
        var compoundPaths = groupItems[i].compoundPathItems;
        for (var j = 0; j < compoundPaths.length; j++) {
            compoundPaths[j].pathItems[0].fillColor = color;
        }
    }
}

function editBackgroundColors(layers, color) {
    var backgroundLayers = getLayerByName(layers, 'Background Layers');
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

function generateCMYKColor(cyan, magenta, yellow, black) {
    const newColor = new CMYKColor();
    newColor.cyan = cyan;
    newColor.magenta = magenta;
    newColor.yellow = yellow;
    newColor.black = black;
    return newColor;
}

function generateRGBColor(red, green, blue) {
    const newColor = new RGBColor();
    newColor.red = red;
    newColor.green = green;
    newColor.blue = blue;
    return newColor;
}


function doColorScheme(layers, unitName, endorserLine, wordmarkColor, textColor, backgroundColor) {
    // Generate CMYK Colors


    editUnitNames(layers, unitName, textColor)
    editEndorserLines(layers, endorserLine, textColor)
    editBackgroundColors(layers, backgroundColor)
    editWordmarks(layers, wordmarkColor)
    editUCLayers(layers, wordmarkColor)
    editTMLayers(layers, wordmarkColor)
}


function main() {

    if (app.documents.length == 0) {
        // Open the right document
    }

    saveLocation = File.saveDialog('Save Location')
    // if null we need to exit.
    // Folders need to exist before we can save to them, will need to create folder structure!


    var doc = app.activeDocument;
    var layers = doc.layers;

    // Double check that the active document is correct using the document name.

    // Generate colors
    const BerkeleyBlueCMYK = generateCMYKColor(100, 71, 10, 47);
    const WhiteCMYK = generateCMYKColor(0, 0, 0, 0)
    const CaliforniaGoldCMYK = generateCMYKColor(0, 32, 100, 0);

    doColorScheme(layers, 'Rausser', 'School of Natural Resources', BerkeleyBlueCMYK, BerkeleyBlueCMYK, WhiteCMYK);
    exportArtboardsAsPNG(doc, 'whiteBlue')
    doColorScheme(layers, 'Rausser', 'School of Natural Resources', WhiteCMYK, WhiteCMYK, BerkeleyBlueCMYK);
    exportArtboardsAsPNG(doc, 'blueWhite')
    doColorScheme(layers, 'Rausser', 'School of Natural Resources', CaliforniaGoldCMYK, WhiteCMYK, BerkeleyBlueCMYK);
    exportArtboardsAsPNG(doc, 'BlueYellow')
    doColorScheme(layers, 'Rausser', 'School of Natural Resources', BerkeleyBlueCMYK, BerkeleyBlueCMYK, CaliforniaGoldCMYK);
    exportArtboardsAsPNG(doc, 'YellowBlue')
}

main()


// Saving

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


    // Sort by color, not by size. We pass in the folder (with the named color) to each function
    // organization_name/color/{png/eps}{all the sizes will be here}


    // Hide University of California line and TM in EPS
    // See if you can use Pantone colors. 
