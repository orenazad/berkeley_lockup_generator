function editUnitNames(layers, text, color) {
    var unitName = getLayerByName(layers, 'Unit Name Layers');
    var textFrames = unitName.textFrames;
    editTextFramesText(textFrames, text)
    editTextFramesFillColor(textFrames, color)
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





function doThingy() {
    var layers = app.activeDocument.layers;

    // Generate CMYK Colors
    const BerkeleyBlueColorCMYK = generateCMYKColor(100, 71, 10, 47);
    const CaliforniaGoldColorCMYK = generateCMYKColor(0, 32, 100, 0);

    // Generate RGB Colors
    const BerkeleyBlueColorRGB = generateRGBColor(0, 50, 98);
    editUnitNames(layers, 'test1', BerkeleyBlueColor)
}

doThingy()