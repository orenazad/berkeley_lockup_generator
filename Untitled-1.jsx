if (app.documents.length == 0) {
    // Open the right document
}
var doc = app.activeDocument;//Gets the active document
var fleName = doc.name.slice(0, 9);//Get the file code number not the full name;
var numArtboards = doc.artboards.length;//returns the number of artboards in the document
var filePath = (app.activeDocument.fullName.parent.fsName).toString().replace(/\\/g, '/');

$.writeln("fleName= ",fleName)
$.writeln("numArtboards= ",numArtboards)
$.writeln("filePath= ",filePath);

var options = new ExportOptionsPNG24();

for (var i = 0; i < numArtboards; i++ ) {
    doc.artboards.setActiveArtboardIndex( i ); 

    options.artBoardClipping = true;  

    var artboardName = doc.artboards[i].name;
    $.writeln("artboardName= ", artboardName);
        var destFile = new File(filePath + "/" + fleName + " " +  artboardName + ".png");
        $.writeln("destFile= ",destFile);
          doc.exportFile(destFile,ExportType.PNG24,options);
    }

function calculateArtboardRange() {
    return '';
}
function exportArtboardsAsEPS() {
    alert('eps!')
    var newFile = new File('/Users/orenazad/Desktop/PA-work/test');
    var saveOpts = new EPSSaveOptions ();
    alert('yay')
    saveOpts.saveMultipleArtboards = true;
    saveOpts.artboardRange = calculateArtboardRange();

    doc.saveAs(newFile, saveOpts);
    // Should rename file here, according to which artboards were exported. OR, maybe if it exports artboard names?
}

exportArtboardsAsEPS()


// Sort by color, not by size. We pass in the folder (with the named color) to each function
// organization_name/color/{png/eps}{all the sizes will be here}