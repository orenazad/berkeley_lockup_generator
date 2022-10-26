

var layers = app.activeDocument.layers;


function editUnitNames(layers, text, color) {
    var unitName = getLayerByName(layers, 'Unit Name Layers');
    var textFrames = unitName.textFrames;
    editTextFrameItems(textFrames, text)
    }


function getLayerByName(layers, name) {
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].name == name) {
            return layers[i];
            }
    }
}

function editTextFrameItemsText(textFrames, text) {
    for (var i = 0; i < textFrames.length; i++) {
        textFrames[i].contents = text
        }
    }

function editTextFrameItemsFillColor(textFrames, color) {
        for (var i = 0; i < textFrames.length; i++) {
        textFrames[i].textPath.fillColor = 
        }
    }

function generateCMYKColor(black, cyan, magenta, yellow) {
    const newColor = new CMYKColor();
    BerkeleyBlueColor.black = black
    BerkeleyBlueColor =
    }


editUnitNames(layers, 'test', 'test')