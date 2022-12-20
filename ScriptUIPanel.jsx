
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":32,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Lockup Generator","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"settingsGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-2":{"id":2,"type":"Checkbox","parentId":5,"style":{"enabled":true,"varName":"epsCheckbox","text":"Export EPS","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-3":{"id":3,"type":"Checkbox","parentId":5,"style":{"enabled":true,"varName":"pngCheckbox","text":"Export PNG","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-4":{"id":4,"type":"Checkbox","parentId":5,"style":{"enabled":true,"varName":"hideCheckbox","text":"Hide UC and TM on EPS","preferredSize":[0,0],"alignment":null,"helpTip":"","checked":true}},"item-5":{"id":5,"type":"Panel","parentId":1,"style":{"enabled":true,"varName":"exportSettingsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export Settings","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-7":{"id":7,"type":"Panel","parentId":1,"style":{"enabled":true,"varName":"colorSpacePanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Colorspace","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-8":{"id":8,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"cmykCheckbox","text":"CMYK","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-9":{"id":9,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"rgbCheckbox","text":"RGB","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Progressbar","parentId":35,"style":{"enabled":true,"varName":"progressbar","preferredSize":[0,10],"alignment":"fill","helpTip":""}},"item-12":{"id":12,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"outputGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"left"}},"item-14":{"id":14,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"inputPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Input Settings","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-15":{"id":15,"type":"EditText","parentId":45,"style":{"enabled":true,"varName":"startRangeText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Start","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":"Starting CSV line to export. Inclusive."}},"item-16":{"id":16,"type":"EditText","parentId":45,"style":{"enabled":true,"varName":"endRangeText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"End","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":"Ending CSV line to export. Inclusive."}},"item-18":{"id":18,"type":"StaticText","parentId":45,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"-","justify":"left","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-21":{"id":21,"type":"Group","parentId":46,"style":{"enabled":true,"varName":"csvRangeGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-24":{"id":24,"type":"EditText","parentId":54,"style":{"enabled":true,"varName":"singleLineText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Line Number","justify":"center","preferredSize":[92,0],"alignment":null,"helpTip":"CSV line to export."}},"item-26":{"id":26,"type":"Panel","parentId":14,"style":{"enabled":false,"varName":"customInputPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Custom Input","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"center"}},"item-28":{"id":28,"type":"EditText","parentId":30,"style":{"enabled":true,"varName":"unitNameText1","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Unit Name Line 1","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"Always needed."}},"item-29":{"id":29,"type":"EditText","parentId":30,"style":{"enabled":true,"varName":"unitNameText2","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Unit Name Line 2","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"Can be left blank if not needed."}},"item-30":{"id":30,"type":"Group","parentId":26,"style":{"enabled":true,"varName":"unitNameGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-31":{"id":31,"type":"EditText","parentId":26,"style":{"enabled":true,"varName":"endorserLineText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Endorser Line","justify":"left","preferredSize":[242,0],"alignment":"left","helpTip":null}},"item-32":{"id":32,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"outputPathText","creationProps":{"truncate":"middle","multiline":false,"scrolling":false},"softWrap":false,"text":"Output Path:","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-33":{"id":33,"type":"IconButton","parentId":12,"style":{"enabled":true,"varName":"selectOututPathIconButton","text":"Edit","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,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"],"alignment":"center","helpTip":"Select the output path."}},"item-34":{"id":34,"type":"Button","parentId":49,"style":{"enabled":true,"varName":"exportButton","text":"Export","justify":"center","preferredSize":[215,0],"alignment":"fill","helpTip":""}},"item-35":{"id":35,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"progressPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Progress","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-36":{"id":36,"type":"EditText","parentId":35,"style":{"enabled":true,"varName":"progressText","creationProps":{"noecho":false,"readonly":true,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"done/total","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-37":{"id":37,"type":"Group","parentId":46,"style":{"enabled":true,"varName":"csvInputGroup","preferredSize":[270,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"center"}},"item-38":{"id":38,"type":"StaticText","parentId":37,"style":{"enabled":true,"varName":"csvInputPathText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"CSV Input Path: ","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-39":{"id":39,"type":"IconButton","parentId":37,"style":{"enabled":true,"varName":"selectCSVInputIconButton","text":"Edit","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,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"],"alignment":"center","helpTip":"Select the CSV file."}},"item-40":{"id":40,"type":"RadioButton","parentId":43,"style":{"enabled":true,"varName":"csvRadioButton","text":"Use CSV","preferredSize":[0,0],"alignment":"center","helpTip":"Select this in order to export from the CSV file. This will disable the custom input option.","checked":false}},"item-41":{"id":41,"type":"RadioButton","parentId":43,"style":{"enabled":true,"varName":"customInputRadioButton","text":"Use Custom Input","preferredSize":[0,0],"alignment":"center","helpTip":"Select this in order to export using a custom input. This will disable use of the CSV.","checked":false}},"item-43":{"id":43,"type":"Group","parentId":14,"style":{"enabled":true,"varName":"inputRadioButtonGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":56,"alignChildren":["right","center"],"alignment":null}},"item-45":{"id":45,"type":"Group","parentId":55,"style":{"enabled":true,"varName":"rangeTextGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-46":{"id":46,"type":"Panel","parentId":14,"style":{"enabled":false,"varName":"CSVPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"CSV","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-47":{"id":47,"type":"StaticText","parentId":0,"style":{"enabled":true,"varName":"titleText","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Berkeley Lockup Generator v1.0","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-48":{"id":48,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"OpenMasterFileButton","text":"Open Lockup File","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"The master lockup file needs to be opened for the script to work. ´"}},"item-49":{"id":49,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"center"}},"item-50":{"id":50,"type":"Button","parentId":49,"style":{"enabled":true,"varName":"cancelButton","text":"Cancel","justify":"center","preferredSize":[88,0],"alignment":"fill","helpTip":"Cancel and exit this window."}},"item-51":{"id":51,"type":"RadioButton","parentId":54,"style":{"enabled":true,"varName":"singleLineRadioButton","text":"Single Line","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-54":{"id":54,"type":"Group","parentId":21,"style":{"enabled":true,"varName":"singleLineGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":48,"alignChildren":["left","center"],"alignment":null}},"item-55":{"id":55,"type":"Group","parentId":21,"style":{"enabled":true,"varName":"customRangeGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":30,"alignChildren":["left","center"],"alignment":null}},"item-56":{"id":56,"type":"RadioButton","parentId":55,"style":{"enabled":true,"varName":"customRangeRadioButton","text":"RadioButton","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"RadioButton","parentId":21,"style":{"enabled":true,"varName":"fullCSVButton","text":"Full CSV File","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,47,48,1,5,3,2,4,7,8,9,14,43,40,41,46,21,57,54,51,24,55,56,45,15,18,16,37,38,39,26,30,28,29,31,12,32,33,49,34,50,35,36,10],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 


function createDialog() {

    // DIALOG
    // ======
    var dialog = new Window("dialog"); 
    dialog.text = "Lockup Generator"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

    var titleText = dialog.add("statictext", undefined, undefined, {name: "titleText"}); 
    titleText.text = "Berkeley Lockup Generator v1.0"; 

    var OpenMasterFileButton = dialog.add("button", undefined, undefined, {name: "OpenMasterFileButton"}); 
    OpenMasterFileButton.helpTip = "The master lockup file needs to be opened for the script to work. ´"; 
    OpenMasterFileButton.text = "Open Lockup File"; 
    OpenMasterFileButton.alignment = ["fill","top"]; 

    // SETTINGSGROUP
    // =============
    var settingsGroup = dialog.add("group", undefined, {name: "settingsGroup"}); 
    settingsGroup.orientation = "row"; 
    settingsGroup.alignChildren = ["left","center"]; 
    settingsGroup.spacing = 10; 
    settingsGroup.margins = 0; 

    // EXPORTSETTINGSPANEL
    // ===================
    var exportSettingsPanel = settingsGroup.add("panel", undefined, undefined, {name: "exportSettingsPanel"}); 
    exportSettingsPanel.text = "Export Settings"; 
    exportSettingsPanel.orientation = "column"; 
    exportSettingsPanel.alignChildren = ["left","top"]; 
    exportSettingsPanel.spacing = 10; 
    exportSettingsPanel.margins = 10; 

    var pngCheckbox = exportSettingsPanel.add("checkbox", undefined, undefined, {name: "pngCheckbox"}); 
    pngCheckbox.text = "Export PNG"; 
    pngCheckbox.value = true; 

    var epsCheckbox = exportSettingsPanel.add("checkbox", undefined, undefined, {name: "epsCheckbox"}); 
    epsCheckbox.text = "Export EPS"; 
    epsCheckbox.value = true; 

    var hideCheckbox = exportSettingsPanel.add("checkbox", undefined, undefined, {name: "hideCheckbox"}); 
    hideCheckbox.text = "Hide UC and TM on EPS"; 
    hideCheckbox.value = true; 

    // COLORSPACEPANEL
    // ===============
    var colorSpacePanel = settingsGroup.add("panel", undefined, undefined, {name: "colorSpacePanel"}); 
    colorSpacePanel.text = "Colorspace"; 
    colorSpacePanel.orientation = "column"; 
    colorSpacePanel.alignChildren = ["left","top"]; 
    colorSpacePanel.spacing = 10; 
    colorSpacePanel.margins = 10; 

    var cmykCheckbox = colorSpacePanel.add("checkbox", undefined, undefined, {name: "cmykCheckbox"}); 
    cmykCheckbox.text = "CMYK"; 
    cmykCheckbox.value = true; 

    var rgbCheckbox = colorSpacePanel.add("checkbox", undefined, undefined, {name: "rgbCheckbox"}); 
    rgbCheckbox.text = "RGB"; 

    // INPUTPANEL
    // ==========
    var inputPanel = dialog.add("panel", undefined, undefined, {name: "inputPanel"}); 
    inputPanel.text = "Input Settings"; 
    inputPanel.orientation = "column"; 
    inputPanel.alignChildren = ["left","top"]; 
    inputPanel.spacing = 10; 
    inputPanel.margins = 10; 

    // INPUTRADIOBUTTONGROUP
    // =====================
    var inputRadioButtonGroup = inputPanel.add("group", undefined, {name: "inputRadioButtonGroup"}); 
    inputRadioButtonGroup.orientation = "row"; 
    inputRadioButtonGroup.alignChildren = ["right","center"]; 
    inputRadioButtonGroup.spacing = 56; 
    inputRadioButtonGroup.margins = 0; 

    var csvRadioButton = inputRadioButtonGroup.add("radiobutton", undefined, undefined, {name: "csvRadioButton"}); 
    csvRadioButton.helpTip = "Select this in order to export from the CSV file. This will disable the custom input option."; 
    csvRadioButton.text = "Use CSV"; 
    csvRadioButton.alignment = ["right","center"]; 

    var customInputRadioButton = inputRadioButtonGroup.add("radiobutton", undefined, undefined, {name: "customInputRadioButton"}); 
    customInputRadioButton.helpTip = "Select this in order to export using a custom input. This will disable use of the CSV."; 
    customInputRadioButton.text = "Use Custom Input"; 
    customInputRadioButton.alignment = ["right","center"]; 

    // CSVPANEL
    // ========
    var CSVPanel = inputPanel.add("panel", undefined, undefined, {name: "CSVPanel"}); 
    CSVPanel.enabled = false; 
    CSVPanel.text = "CSV"; 
    CSVPanel.orientation = "column"; 
    CSVPanel.alignChildren = ["left","top"]; 
    CSVPanel.spacing = 10; 
    CSVPanel.margins = 10; 
    CSVPanel.alignment = ["fill","top"]; 

    // CSVRANGEGROUP
    // =============
    var csvRangeGroup = CSVPanel.add("group", undefined, {name: "csvRangeGroup"}); 
    csvRangeGroup.orientation = "column"; 
    csvRangeGroup.alignChildren = ["left","center"]; 
    csvRangeGroup.spacing = 10; 
    csvRangeGroup.margins = 0; 

    var fullCSVButton = csvRangeGroup.add("radiobutton", undefined, undefined, {name: "fullCSVButton"}); 
    fullCSVButton.text = "Full CSV File"; 

    // SINGLELINEGROUP
    // ===============
    var singleLineGroup = csvRangeGroup.add("group", undefined, {name: "singleLineGroup"}); 
    singleLineGroup.orientation = "row"; 
    singleLineGroup.alignChildren = ["left","center"]; 
    singleLineGroup.spacing = 48; 
    singleLineGroup.margins = 0; 

    var singleLineRadioButton = singleLineGroup.add("radiobutton", undefined, undefined, {name: "singleLineRadioButton"}); 
    singleLineRadioButton.text = "Single Line"; 

    var singleLineText = singleLineGroup.add('edittext {justify: "center", properties: {name: "singleLineText"}}'); 
    singleLineText.helpTip = "CSV line to export."; 
    singleLineText.text = "Line Number"; 
    singleLineText.preferredSize.width = 92; 

    // CUSTOMRANGEGROUP
    // ================
    var customRangeGroup = csvRangeGroup.add("group", undefined, {name: "customRangeGroup"}); 
    customRangeGroup.orientation = "row"; 
    customRangeGroup.alignChildren = ["left","center"]; 
    customRangeGroup.spacing = 30; 
    customRangeGroup.margins = 0; 

    var customRangeRadioButton = customRangeGroup.add("radiobutton", undefined, undefined, {name: "customRangeRadioButton"}); 
    customRangeRadioButton.text = "Custom Range"; 

    // RANGETEXTGROUP
    // ==============
    var rangeTextGroup = customRangeGroup.add("group", undefined, {name: "rangeTextGroup"}); 
    rangeTextGroup.orientation = "row"; 
    rangeTextGroup.alignChildren = ["left","center"]; 
    rangeTextGroup.spacing = 10; 
    rangeTextGroup.margins = 0; 

    var startRangeText = rangeTextGroup.add('edittext {justify: "center", properties: {name: "startRangeText"}}'); 
    startRangeText.helpTip = "Starting CSV line to export. Inclusive."; 
    startRangeText.text = "Start"; 
    startRangeText.alignment = ["left","center"]; 

    var statictext1 = rangeTextGroup.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "-"; 
    statictext1.alignment = ["left","center"]; 

    var endRangeText = rangeTextGroup.add('edittext {justify: "center", properties: {name: "endRangeText"}}'); 
    endRangeText.helpTip = "Ending CSV line to export. Inclusive."; 
    endRangeText.text = "End"; 
    endRangeText.alignment = ["left","center"]; 

    // CSVINPUTGROUP
    // =============
    var csvInputGroup = CSVPanel.add("group", undefined, {name: "csvInputGroup"}); 
    csvInputGroup.preferredSize.width = 270; 
    csvInputGroup.orientation = "row"; 
    csvInputGroup.alignChildren = ["left","center"]; 
    csvInputGroup.spacing = 10; 
    csvInputGroup.margins = 0; 
    csvInputGroup.alignment = ["center","top"]; 

    var csvInputPathText = csvInputGroup.add("statictext", undefined, undefined, {name: "csvInputPathText"}); 
    csvInputPathText.text = "CSV Input Path: "; 
    csvInputPathText.alignment = ["left","fill"]; 

    var selectCSVInputIconButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%0C%08%06%00%00%00o%12%C3%AD%C2%BC%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%0AIiCCPsRGB%20IEC61966-2.1%00%00H%C2%89%C2%9DSwX%C2%93%C3%B7%16%3E%C3%9F%C3%B7e%0FVB%C3%98%C3%B0%C2%B1%C2%97l%C2%81%00%22%23%C2%AC%08%C3%88%10Y%C2%A2%10%C2%92%00a%C2%84%10%12%40%C3%85%C2%85%C2%88%0AV%14%15%11%C2%9CHU%C3%84%C2%82%C3%95%0AH%C2%9D%C2%88%C3%A2%C2%A0(%C2%B8gA%C2%8A%C2%88Z%C2%8BU%5C8%C3%AE%1F%C3%9C%C2%A7%C2%B5%7Dz%C3%AF%C3%AD%C3%AD%C3%BB%C3%97%C3%BB%C2%BC%C3%A7%C2%9C%C3%A7%C3%BC%C3%8Ey%C3%8F%0F%C2%80%11%12%26%C2%91%C3%A6%C2%A2j%009R%C2%85%3C%3A%C3%98%1F%C2%8FOH%C3%84%C3%89%C2%BD%C2%80%02%15H%C3%A0%04%20%10%C3%A6%C3%8B%C3%82g%05%C3%85%00%00%C3%B0%03yx~t%C2%B0%3F%C3%BC%01%C2%AFo%00%02%00p%C3%95.%24%12%C3%87%C3%A1%C3%BF%C2%83%C2%BAP%26W%00%20%C2%91%00%C3%A0%22%12%C3%A7%0B%01%C2%90R%00%C3%88.T%C3%88%14%00%C3%88%18%00%C2%B0S%C2%B3d%0A%00%C2%94%00%00ly%7CB%22%00%C2%AA%0D%00%C3%AC%C3%B4I%3E%05%00%C3%98%C2%A9%C2%93%C3%9C%17%00%C3%98%C2%A2%1C%C2%A9%08%00%C2%8D%01%00%C2%99(G%24%02%40%C2%BB%00%60U%C2%81R%2C%02%C3%80%C3%82%00%C2%A0%C2%AC%40%22.%04%C3%80%C2%AE%01%C2%80Y%C2%B62G%02%C2%80%C2%BD%05%00v%C2%8EX%C2%90%0F%40%60%00%C2%80%C2%99B%2C%C3%8C%00%208%02%00C%1E%13%C3%8D%03%20L%03%C2%A00%C3%92%C2%BF%C3%A0%C2%A9_p%C2%85%C2%B8H%01%00%C3%80%C3%8B%C2%95%C3%8D%C2%97K%C3%923%14%C2%B8%C2%95%C3%90%1Aw%C3%B2%C3%B0%C3%A0%C3%A2!%C3%A2%C3%82l%C2%B1Ba%17)%10f%09%C3%A4%22%C2%9C%C2%97%C2%9B%23%13H%C3%A7%03L%C3%8E%0C%00%00%1A%C3%B9%C3%91%C3%81%C3%BE8%3F%C2%90%C3%A7%C3%A6%C3%A4%C3%A1%C3%A6f%C3%A7l%C3%AF%C3%B4%C3%85%C2%A2%C3%BEk%C3%B0o%22%3E!%C3%B1%C3%9F%C3%BE%C2%BC%C2%8C%02%04%00%10N%C3%8F%C3%AF%C3%9A_%C3%A5%C3%A5%C3%96%03p%C3%87%01%C2%B0u%C2%BFk%C2%A9%5B%00%C3%9AV%00h%C3%9F%C3%B9%5D3%C3%9B%09%C2%A0Z%0A%C3%90z%C3%B9%C2%8By8%C3%BC%40%1E%C2%9E%C2%A1P%C3%88%3C%1D%1C%0A%0B%0B%C3%AD%25b%C2%A1%C2%BD0%C3%A3%C2%8B%3E%C3%BF3%C3%A1o%C3%A0%C2%8B~%C3%B6%C3%BC%40%1E%C3%BE%C3%9Bz%C3%B0%00q%C2%9A%40%C2%99%C2%AD%C3%80%C2%A3%C2%83%C3%BDqanv%C2%AER%C2%8E%C3%A7%C3%8B%04B1n%C3%B7%C3%A7%23%C3%BE%C3%87%C2%85%7F%C3%BD%C2%8E)%C3%91%C3%A24%C2%B1%5C%2C%15%C2%8A%C3%B1X%C2%89%C2%B8P%22M%C3%87y%C2%B9R%C2%91D!%C3%89%C2%95%C3%A2%12%C3%A9%7F2%C3%B1%1F%C2%96%C3%BD%09%C2%93w%0D%00%C2%AC%C2%86O%C3%80N%C2%B6%07%C2%B5%C3%8Bl%C3%80~%C3%AE%01%02%C2%8B%0EX%C3%92v%00%40~%C3%B3-%C2%8C%1A%0B%C2%91%00%10g42y%C3%B7%00%00%C2%93%C2%BF%C3%B9%C2%8F%40%2B%01%00%C3%8D%C2%97%C2%A4%C3%A3%00%00%C2%BC%C3%A8%18%5C%C2%A8%C2%94%17L%C3%86%08%00%00D%C2%A0%C2%81*%C2%B0A%07%0C%C3%81%14%C2%AC%C3%80%0E%C2%9C%C3%81%1D%C2%BC%C3%80%17%02a%06D%40%0C%24%C3%80%3C%10B%06%C3%A4%C2%80%1C%0A%C2%A1%18%C2%96A%19T%C3%80%3A%C3%98%04%C2%B5%C2%B0%03%1A%C2%A0%11%C2%9A%C3%A1%10%C2%B4%C3%8118%0D%C3%A7%C3%A0%12%5C%C2%81%C3%ABp%17%06%60%18%C2%9E%C3%82%18%C2%BC%C2%86%09%04A%C3%88%08%13a!%3A%C2%88%11b%C2%8E%C3%98%22%C3%8E%08%17%C2%99%C2%8E%04%22aH4%C2%92%C2%80%C2%A4%20%C3%A9%C2%88%14Q%22%C3%85%C3%88r%C2%A4%02%C2%A9Bj%C2%91%5DH%23%C3%B2-r%149%C2%8D%5C%40%C3%BA%C2%90%C3%9B%C3%88%202%C2%8A%C3%BC%C2%8A%C2%BCG1%C2%94%C2%81%C2%B2Q%03%C3%94%02u%40%C2%B9%C2%A8%1F%1A%C2%8A%C3%86%C2%A0s%C3%91t4%0F%5D%C2%80%C2%96%C2%A2k%C3%91%1A%C2%B4%1E%3D%C2%80%C2%B6%C2%A2%C2%A7%C3%91K%C3%A8ut%00%7D%C2%8A%C2%8Ec%C2%80%C3%911%0Ef%C2%8C%C3%99a%5C%C2%8C%C2%87E%60%C2%89X%1A%26%C3%87%16c%C3%A5X5V%C2%8F5c%1DX7v%15%1B%C3%80%C2%9Ea%C3%AF%08%24%02%C2%8B%C2%80%13%C3%AC%08%5E%C2%84%10%C3%82l%C2%82%C2%90%C2%90GXLXC%C2%A8%25%C3%AC%23%C2%B4%12%C2%BA%08W%09%C2%83%C2%841%C3%82'%22%C2%93%C2%A8O%C2%B4%25z%12%C3%B9%C3%84xb%3A%C2%B1%C2%90XF%C2%AC%26%C3%AE!%1E!%C2%9E%25%5E'%0E%13_%C2%93H%24%0E%C3%89%C2%92%C3%A4N%0A!%25%C2%902I%0BIkH%C3%9BH-%C2%A4S%C2%A4%3E%C3%92%10i%C2%9CL%26%C3%AB%C2%90m%C3%89%C3%9E%C3%A4%08%C2%B2%C2%80%C2%AC%20%C2%97%C2%91%C2%B7%C2%90%0F%C2%90O%C2%92%C3%BB%C3%89%C3%83%C3%A4%C2%B7%14%3A%C3%85%C2%88%C3%A2L%09%C2%A2%24R%C2%A4%C2%94%12J5e%3F%C3%A5%04%C2%A5%C2%9F2B%C2%99%C2%A0%C2%AAQ%C3%8D%C2%A9%C2%9E%C3%94%08%C2%AA%C2%88%3A%C2%9FZIm%C2%A0vP%2FS%C2%87%C2%A9%134u%C2%9A%25%C3%8D%C2%9B%16C%C3%8B%C2%A4-%C2%A3%C3%95%C3%90%C2%9Aigi%C3%B7h%2F%C3%A9t%C2%BA%09%C3%9D%C2%83%1EE%C2%97%C3%90%C2%97%C3%92k%C3%A8%07%C3%A9%C3%A7%C3%A9%C2%83%C3%B4w%0C%0D%C2%86%0D%C2%83%C3%87Hb(%19k%19%7B%19%C2%A7%18%C2%B7%19%2F%C2%99L%C2%A6%05%C3%93%C2%97%C2%99%C3%88T0%C3%972%1B%C2%99g%C2%98%0F%C2%98oUX*%C3%B6*%7C%15%C2%91%C3%8A%12%C2%95%3A%C2%95V%C2%95~%C2%95%C3%A7%C2%AATUsU%3F%C3%95y%C2%AA%0BT%C2%ABU%0F%C2%AB%5EV%7D%C2%A6FU%C2%B3P%C3%A3%C2%A9%09%C3%94%16%C2%AB%C3%95%C2%A9%1DU%C2%BB%C2%A96%C2%AE%C3%8ERwR%C2%8FP%C3%8FQ_%C2%A3%C2%BE_%C3%BD%C2%82%C3%BAc%0D%C2%B2%C2%86%C2%85F%C2%A0%C2%86H%C2%A3Tc%C2%B7%C3%86%19%C2%8D!%16%C3%862e%C3%B1XB%C3%96rV%03%C3%AB%2Ck%C2%98Mb%5B%C2%B2%C3%B9%C3%ACLv%05%C3%BB%1Bv%2F%7BLSCs%C2%AAf%C2%ACf%C2%91f%C2%9D%C3%A6q%C3%8D%01%0E%C3%86%C2%B1%C3%A0%C3%B09%C3%99%C2%9CJ%C3%8E!%C3%8E%0D%C3%8E%7B-%03-%3F-%C2%B1%C3%96j%C2%ADf%C2%AD~%C2%AD7%C3%9Az%C3%9A%C2%BE%C3%9Ab%C3%ADr%C3%AD%16%C3%AD%C3%AB%C3%9A%C3%AFup%C2%9D%40%C2%9D%2C%C2%9D%C3%B5%3Am%3A%C3%B7u%09%C2%BA6%C2%BAQ%C2%BA%C2%85%C2%BA%C3%9Bu%C3%8F%C3%AA%3E%C3%93c%C3%ABy%C3%A9%09%C3%B5%C3%8A%C3%B5%0E%C3%A9%C3%9D%C3%91G%C3%B5m%C3%B4%C2%A3%C3%B5%17%C3%AA%C3%AF%C3%96%C3%AF%C3%91%1F704%086%C2%90%19l18c%C3%B0%C3%8C%C2%90c%C3%A8k%C2%98i%C2%B8%C3%91%C3%B0%C2%84%C3%A1%C2%A8%11%C3%8Bh%C2%BA%C2%91%C3%84h%C2%A3%C3%91I%C2%A3'%C2%B8%26%C3%AE%C2%87g%C3%A35x%17%3Ef%C2%ACo%1Cb%C2%AC4%C3%9Ee%C3%9Ck%3Cabi2%C3%9B%C2%A4%C3%84%C2%A4%C3%85%C3%A4%C2%BE)%C3%8D%C2%94k%C2%9Af%C2%BA%C3%91%C2%B4%C3%93t%C3%8C%C3%8C%C3%88%2C%C3%9C%C2%AC%C3%98%C2%AC%C3%89%C3%AC%C2%8E9%C3%95%C2%9Ck%C2%9Ea%C2%BE%C3%99%C2%BC%C3%9B%C3%BC%C2%8D%C2%85%C2%A5E%C2%9C%C3%85J%C2%8B6%C2%8B%C3%87%C2%96%C3%9A%C2%96%7C%C3%8B%05%C2%96M%C2%96%C3%B7%C2%AC%C2%98V%3EVyV%C3%B5V%C3%97%C2%ACI%C3%96%5C%C3%AB%2C%C3%ABm%C3%96WlP%1BW%C2%9B%0C%C2%9B%3A%C2%9B%C3%8B%C2%B6%C2%A8%C2%AD%C2%9B%C2%AD%C3%84v%C2%9Bm%C3%9F%14%C3%A2%14%C2%8F)%C3%92)%C3%B5Sn%C3%9A1%C3%AC%C3%BC%C3%AC%0A%C3%AC%C2%9A%C3%AC%06%C3%AD9%C3%B6a%C3%B6%25%C3%B6m%C3%B6%C3%8F%1D%C3%8C%1C%12%1D%C3%96%3Bt%3B%7Crtu%C3%8Cvlp%C2%BC%C3%AB%C2%A4%C3%A14%C3%83%C2%A9%C3%84%C2%A9%C3%83%C3%A9Wg%1Bg%C2%A1s%C2%9D%C3%B35%17%C2%A6K%C2%90%C3%8B%12%C2%97v%C2%97%17Sm%C2%A7%C2%8A%C2%A7n%C2%9Fz%C3%8B%C2%95%C3%A5%1A%C3%AE%C2%BA%C3%92%C2%B5%C3%93%C3%B5%C2%A3%C2%9B%C2%BB%C2%9B%C3%9C%C2%AD%C3%99m%C3%94%C3%9D%C3%8C%3D%C3%85%7D%C2%AB%C3%BBM.%C2%9B%1B%C3%89%5D%C3%83%3D%C3%AFA%C3%B4%C3%B0%C3%B7X%C3%A2q%C3%8C%C3%A3%C2%9D%C2%A7%C2%9B%C2%A7%C3%82%C3%B3%C2%90%C3%A7%2F%5Ev%5EY%5E%C3%BB%C2%BD%1EO%C2%B3%C2%9C%26%C2%9E%C3%960m%C3%88%C3%9B%C3%84%5B%C3%A0%C2%BD%C3%8B%7B%60%3A%3E%3De%C3%BA%C3%8E%C3%A9%03%3E%C3%86%3E%02%C2%9Fz%C2%9F%C2%87%C2%BE%C2%A6%C2%BE%22%C3%9F%3D%C2%BE%23~%C3%96~%C2%99~%07%C3%BC%C2%9E%C3%BB%3B%C3%BA%C3%8B%C3%BD%C2%8F%C3%B8%C2%BF%C3%A1y%C3%B2%16%C3%B1N%05%60%01%C3%81%01%C3%A5%01%C2%BD%C2%81%1A%C2%81%C2%B3%03k%03%1F%04%C2%99%04%C2%A5%075%05%C2%8D%05%C2%BB%06%2F%0C%3E%15B%0C%09%0DY%1Fr%C2%93o%C3%80%17%C3%B2%1B%C3%B9c3%C3%9Cg%2C%C2%9A%C3%91%15%C3%8A%08%C2%9D%15Z%1B%C3%BA0%C3%8C%26L%1E%C3%96%11%C2%8E%C2%86%C3%8F%08%C3%9F%10~o%C2%A6%C3%B9L%C3%A9%C3%8C%C2%B6%08%C2%88%C3%A0Gl%C2%88%C2%B8%1Fi%19%C2%99%17%C3%B9%7D%14)*2%C2%AA.%C3%AAQ%C2%B4Stqt%C3%B7%2C%C3%96%C2%AC%C3%A4Y%C3%BBg%C2%BD%C2%8E%C3%B1%C2%8F%C2%A9%C2%8C%C2%B9%3B%C3%9Bj%C2%B6rvg%C2%ACjlRlc%C3%AC%C2%9B%C2%B8%C2%80%C2%B8%C2%AA%C2%B8%C2%81x%C2%87%C3%B8E%C3%B1%C2%97%12t%13%24%09%C3%AD%C2%89%C3%A4%C3%84%C3%98%C3%84%3D%C2%89%C3%A3s%02%C3%A7l%C2%9A3%C2%9C%C3%A4%C2%9AT%C2%96tc%C2%AE%C3%A5%C3%9C%C2%A2%C2%B9%17%C3%A6%C3%A9%C3%8E%C3%8B%C2%9Ew%3CY5Y%C2%90%7C8%C2%85%C2%98%12%C2%97%C2%B2%3F%C3%A5%C2%83%20BP%2F%18O%C3%A5%C2%A7nM%1D%13%C3%B2%C2%84%C2%9B%C2%85OE%C2%BE%C2%A2%C2%8D%C2%A2Q%C2%B1%C2%B7%C2%B8J%3C%C2%92%C3%A6%C2%9DV%C2%95%C3%B68%C3%9D%3B%7DC%C3%BAh%C2%86OFu%C3%863%09OR%2By%C2%91%19%C2%92%C2%B9%23%C3%B3MVD%C3%96%C3%9E%C2%AC%C3%8F%C3%99q%C3%99-9%C2%94%C2%9C%C2%94%C2%9C%C2%A3R%0Di%C2%96%C2%B4%2B%C3%970%C2%B7(%C2%B7Of%2B%2B%C2%93%0D%C3%A4y%C3%A6m%C3%8A%1B%C2%93%C2%87%C3%8A%C3%B7%C3%A4%23%C3%B9s%C3%B3%C3%9B%15l%C2%85L%C3%91%C2%A3%C2%B4R%C2%AEP%0E%16L%2F%C2%A8%2Bx%5B%18%5Bx%C2%B8H%C2%BDHZ%C3%943%C3%9Ff%C3%BE%C3%AA%C3%B9%23%0B%C2%82%16%7C%C2%BD%C2%90%C2%B0P%C2%B8%C2%B0%C2%B3%C3%98%C2%B8xY%C3%B1%C3%A0%22%C2%BFE%C2%BB%16%23%C2%8BS%17w.1%5DR%C2%BAdxi%C3%B0%C3%92%7D%C3%8Bh%C3%8B%C2%B2%C2%96%C3%BDP%C3%A2XRU%C3%B2jy%C3%9C%C3%B2%C2%8ER%C2%83%C3%92%C2%A5%C2%A5C%2B%C2%82W4%C2%95%C2%A9%C2%94%C3%89%C3%8Bn%C2%AE%C3%B4Z%C2%B9c%15a%C2%95dU%C3%AFj%C2%97%C3%95%5BV%7F*%17%C2%95_%C2%ACp%C2%AC%C2%A8%C2%AE%C3%B8%C2%B0F%C2%B8%C3%A6%C3%A2WN_%C3%95%7C%C3%B5ym%C3%9A%C3%9A%C3%9EJ%C2%B7%C3%8A%C3%AD%C3%ABH%C3%AB%C2%A4%C3%ABn%C2%AC%C3%B7Y%C2%BF%C2%AFJ%C2%BDjA%C3%95%C3%90%C2%86%C3%B0%0D%C2%AD%1B%C3%B1%C2%8D%C3%A5%1B_mJ%C3%9Et%C2%A1zj%C3%B5%C2%8E%C3%8D%C2%B4%C3%8D%C3%8A%C3%8D%035a5%C3%AD%5B%C3%8C%C2%B6%C2%AC%C3%9B%C3%B2%C2%A16%C2%A3%C3%B6z%C2%9D%7F%5D%C3%8BV%C3%BD%C2%AD%C2%AB%C2%B7%C2%BE%C3%99%26%C3%9A%C3%96%C2%BF%C3%9Dw%7B%C3%B3%0E%C2%83%1D%15%3B%C3%9E%C3%AF%C2%94%C3%AC%C2%BC%C2%B5%2BxWk%C2%BDE%7D%C3%B5n%C3%92%C3%AE%C2%82%C3%9D%C2%8F%1Ab%1B%C2%BA%C2%BF%C3%A6~%C3%9D%C2%B8GwO%C3%85%C2%9E%C2%8F%7B%C2%A5%7B%07%C3%B6E%C3%AF%C3%ABjtol%C3%9C%C2%AF%C2%BF%C2%BF%C2%B2%09mR6%C2%8D%1EH%3Ap%C3%A5%C2%9B%C2%80o%C3%9A%C2%9B%C3%AD%C2%9Aw%C2%B5pZ*%0E%C3%82A%C3%A5%C3%81'%C3%9F%C2%A6%7C%7B%C3%A3P%C3%A8%C2%A1%C3%8E%C3%83%C3%9C%C3%83%C3%8D%C3%9F%C2%99%7F%C2%B7%C3%B5%08%C3%ABHy%2B%C3%92%3A%C2%BFu%C2%AC-%C2%A3m%C2%A0%3D%C2%A1%C2%BD%C3%AF%C3%A8%C2%8C%C2%A3%C2%9D%1D%5E%1DG%C2%BE%C2%B7%C3%BF~%C3%AF1%C3%A3cu%C3%875%C2%8FW%C2%9E%C2%A0%C2%9D(%3D%C3%B1%C3%B9%C3%A4%C2%82%C2%93%C3%A3%C2%A7d%C2%A7%C2%9E%C2%9DN%3F%3D%C3%94%C2%99%C3%9Cy%C3%B7L%C3%BC%C2%99k%5DQ%5D%C2%BDgC%C3%8F%C2%9E%3F%17t%C3%AEL%C2%B7_%C3%B7%C3%89%C3%B3%C3%9E%C3%A7%C2%8F%5D%C3%B0%C2%BCp%C3%B4%22%C3%B7b%C3%9B%25%C2%B7K%C2%AD%3D%C2%AE%3DG~p%C3%BD%C3%A1H%C2%AF%5Bo%C3%ABe%C3%B7%C3%8B%C3%ADW%3C%C2%AEt%C3%B4M%C3%AB%3B%C3%91%C3%AF%C3%93%7F%C3%BAj%C3%80%C3%95s%C3%97%C3%B8%C3%97.%5D%C2%9Fy%C2%BD%C3%AF%C3%86%C3%AC%1B%C2%B7n%26%C3%9D%1C%C2%B8%25%C2%BA%C3%B5%C3%B8v%C3%B6%C3%AD%17w%0A%C3%AEL%C3%9C%5Dz%C2%8Fx%C2%AF%C3%BC%C2%BE%C3%9A%C3%BD%C3%AA%07%C3%BA%0F%C3%AA%7F%C2%B4%C3%BE%C2%B1e%C3%80m%C3%A0%C3%B8%60%C3%80%60%C3%8F%C3%83Y%0F%C3%AF%0E%09%C2%87%C2%9E%C3%BE%C2%94%C3%BF%C3%93%C2%87%C3%A1%C3%92G%C3%8CG%C3%95%23F%23%C2%8D%C2%8F%C2%9D%1F%1F%1B%0D%1A%C2%BD%C3%B2d%C3%8E%C2%93%C3%A1%C2%A7%C2%B2%C2%A7%13%C3%8F%C3%8A~V%C3%BFy%C3%ABs%C2%AB%C3%A7%C3%9F%C3%BD%C3%A2%C3%BBK%C3%8FX%C3%BC%C3%98%C3%B0%0B%C3%B9%C2%8B%C3%8F%C2%BF%C2%AEy%C2%A9%C3%B3r%C3%AF%C2%AB%C2%A9%C2%AF%3A%C3%87%23%C3%87%1F%C2%BC%C3%8Ey%3D%C3%B1%C2%A6%C3%BC%C2%AD%C3%8E%C3%9B%7D%C3%AF%C2%B8%C3%AF%C2%BA%C3%9F%C3%87%C2%BD%1F%C2%99(%C3%BC%40%C3%BEP%C3%B3%C3%91%C3%BAc%C3%87%C2%A7%C3%90O%C3%B7%3E%C3%A7%7C%C3%BE%C3%BC%2F%C3%B7%C2%84%C3%B3%C3%BB-G8%C3%8F%00%00%00%20cHRM%00%00z%26%00%00%C2%80%C2%84%00%00%C3%BA%00%00%00%C2%80%C3%A8%00%00u0%00%00%C3%AA%60%00%00%3A%C2%98%00%00%17p%C2%9C%C2%BAQ%3C%00%00%00%09pHYs%00%00%0E%C3%84%00%00%0E%C3%84%01%C2%95%2B%0E%1B%00%00%01cIDAT(%C2%91%C3%8D%C2%92%C2%BFj%C3%82P%18%C3%85%C3%8F%C2%BD7p%2B%C2%91%C3%94%3F%C3%98%17(X%C3%B0%25%C2%8A%C3%8F%20Eps%2F%5D%1D%C3%BA%0E%C2%AE%5D%2CH%C2%A7%C2%80%3E%C2%80%C2%8B%C3%95E%C3%A8%C3%A6%C3%92%C2%B17q%10%C3%81%08FR%08I0%C3%B7%C3%ABR%C2%AD-H%C2%85.%C3%BD%C3%817%C2%9D%C3%83%C2%8Fo8%C2%8C%C2%88%00%00%C3%ADv%C3%BB%C2%A1%C3%99l%C3%9Ex%C2%9E%C3%87%C2%A5%C2%94%C3%88d2%C3%AF%C2%B5Z%C2%AD%3E%C2%99L%5E%C3%8A%C3%A5%C3%B2u%C2%A7%C3%93%C2%B9%C3%97Z%C2%9FEQD%C2%8C1X%C2%96%C3%85%C2%A6%C3%93%C2%A9%C3%93j%C2%B5%C3%AE%C2%82%20%08%40D%20%22x%C2%9EG%C3%B3%C3%B9%C2%9Cf%C2%B3%19)%C2%A5%C2%88%C2%88h8%1C%C2%BEI)%C3%91%C3%ADvo%C2%B5%C3%96c%C3%87qF%C2%AE%C3%AB%C2%8E%5D%C3%97%1D%C2%AFV%C2%AB%C2%91R%C3%AA%C2%B9%C3%91h%5C%10%11%0C%7C%C3%A2%C3%BB%C3%BEFJ%C2%99K%C3%93%14%00%C2%A0%C2%94B%C2%A5R%C2%B9%C3%AC%C3%B7%C3%BBv6%C2%9B%7D%1D%0C%066clW%C2%87%C2%94%C2%92%09!8%C3%A7%C3%BC%0A%C2%80%C2%B7%17i%C2%AD%C3%B5a%C2%91%C2%88%10%C3%871%C2%AA%C3%95j%3D%08%C2%82%C3%BAv%C2%BB%C3%85a%C2%AE%C2%B5F%C2%A9TB%C2%B1X%0C%01%C2%98%7B%C3%91O8%C3%A7H%C3%93%14%C3%8B%C3%A5%C3%B2X%05%C2%8B%C3%85%02%C2%96e%09%00%C3%A0G%5B'%60%18%06%C3%820%0C%C3%BF%2C%3A%C3%A4%1F%C2%8B8%C3%A7%7C7%C3%8ES!%220%C3%868%C2%80%C2%AF%1D%C3%A5%C3%B3%C3%B9%5C%1C%C3%87%C2%BB%C3%B0%24%C2%89%10%02%C2%85B%C3%A1%C3%BC%C3%9BG%C2%B6m%3F%C2%9A%C2%A6%C2%B9N%C2%92%C3%84%C2%8F%C2%A2%C3%A8%C3%97K%C2%92%C3%847Ms%C3%9D%C3%AB%C3%B5%C2%9E%00%C3%A0%03%C3%9E%C3%94%C3%8D%C3%93%C3%8F%01%16%14%00%00%00%00IEND%C2%AEB%60%C2%82"; 
    var selectCSVInputIconButton = csvInputGroup.add("iconbutton", undefined, File.decode(selectCSVInputIconButton_imgString), {name: "selectCSVInputIconButton", style: "toolbutton"}); 
    selectCSVInputIconButton.helpTip = "Select the CSV file."; 
    selectCSVInputIconButton.text = "Edit"; 
    selectCSVInputIconButton.alignment = ["left","center"]; 

    // CUSTOMINPUTPANEL
    // ================
    var customInputPanel = inputPanel.add("panel", undefined, undefined, {name: "customInputPanel"}); 
    customInputPanel.enabled = false; 
    customInputPanel.text = "Custom Input"; 
    customInputPanel.orientation = "column"; 
    customInputPanel.alignChildren = ["left","top"]; 
    customInputPanel.spacing = 10; 
    customInputPanel.margins = 10; 
    customInputPanel.alignment = ["center","top"]; 

    // UNITNAMEGROUP
    // =============
    var unitNameGroup = customInputPanel.add("group", undefined, {name: "unitNameGroup"}); 
    unitNameGroup.orientation = "row"; 
    unitNameGroup.alignChildren = ["left","center"]; 
    unitNameGroup.spacing = 10; 
    unitNameGroup.margins = 0; 

    var unitNameText1 = unitNameGroup.add('edittext {properties: {name: "unitNameText1"}}'); 
    unitNameText1.helpTip = "Always needed."; 
    unitNameText1.text = "Unit Name Line 1"; 

    var unitNameText2 = unitNameGroup.add('edittext {properties: {name: "unitNameText2"}}'); 
    unitNameText2.helpTip = "Can be left blank if not needed."; 
    unitNameText2.text = "Unit Name Line 2"; 

    // CUSTOMINPUTPANEL
    // ================
    var endorserLineText = customInputPanel.add('edittext {properties: {name: "endorserLineText"}}'); 
    endorserLineText.text = "Endorser Line"; 
    endorserLineText.preferredSize.width = 242; 
    endorserLineText.alignment = ["left","top"]; 

    // OUTPUTGROUP
    // ===========
    var outputGroup = dialog.add("group", undefined, {name: "outputGroup"}); 
    outputGroup.orientation = "row"; 
    outputGroup.alignChildren = ["left","top"]; 
    outputGroup.spacing = 10; 
    outputGroup.margins = 0; 
    outputGroup.alignment = ["left","top"]; 

    var outputPathText = outputGroup.add("statictext", undefined, undefined, {name: "outputPathText", truncate: "middle"}); 
    outputPathText.text = "Output Path:"; 
    outputPathText.alignment = ["left","fill"]; 

    var selectOututPathIconButton = outputGroup.add("iconbutton", undefined, File.decode(selectCSVInputIconButton_imgString), {name: "selectOututPathIconButton", style: "toolbutton"}); 
    selectOututPathIconButton.helpTip = "Select the output path."; 
    selectOututPathIconButton.text = "Edit"; 
    selectOututPathIconButton.alignment = ["left","center"]; 

    // GROUP1
    // ======
    var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 
    group1.alignment = ["center","top"]; 

    var exportButton = group1.add("button", undefined, undefined, {name: "exportButton"}); 
    exportButton.text = "Export"; 
    exportButton.preferredSize.width = 215; 
    exportButton.alignment = ["left","fill"]; 

    var cancelButton = group1.add("button", undefined, undefined, {name: "cancelButton"}); 
    cancelButton.helpTip = "Cancel and exit this window."; 
    cancelButton.text = "Cancel"; 
    cancelButton.preferredSize.width = 88; 
    cancelButton.alignment = ["left","fill"]; 

    // PROGRESSPANEL
    // =============
    var progressPanel = dialog.add("panel", undefined, undefined, {name: "progressPanel"}); 
    progressPanel.text = "Progress"; 
    progressPanel.orientation = "row"; 
    progressPanel.alignChildren = ["left","top"]; 
    progressPanel.spacing = 10; 
    progressPanel.margins = 10; 
    progressPanel.alignment = ["fill","top"]; 

    var progressText = progressPanel.add('edittext {properties: {name: "progressText", readonly: true}}'); 
    progressText.text = "done/total"; 

    var progressbar = progressPanel.add("progressbar", undefined, undefined, {name: "progressbar"}); 
    progressbar.maxvalue = 100; 
    progressbar.value = 50; 
    progressbar.preferredSize.height = 10; 
    progressbar.alignment = ["left","fill"]; 

    // LOGIC
    // =====

    // TODO: Add function for button to open master file.

    customInputPanel.enabled = customInputRadioButton.value;
    CSVPanel.enabled = csvRadioButton.value;
    singleLineText.enabled = singleLineRadioButton.value;
    rangeTextGroup.enabled = customRangeRadioButton.value;



    customInputRadioButton.onClick = function() {
        customInputPanel.enabled = customInputRadioButton.value;
        CSVPanel.enabled = csvRadioButton.value;
    }

    csvRadioButton.onClick = function() {
        customInputPanel.enabled = customInputRadioButton.value;
        CSVPanel.enabled = csvRadioButton.value;
    }

    // The following three radio buttons aren't actually grouped together, so extra care should be taken to make sure they disable the others.
    fullCSVButton.onClick = function() {
        // Unclick the other two buttons
        singleLineRadioButton.value = false;
        customRangeRadioButton.value = false;
        // Disable the other two text boxes
        singleLineText.enabled = false;
        rangeTextGroup.enabled = false;

    }

    singleLineRadioButton.onClick = function() {
        // Unclick the other two buttons
        customRangeRadioButton.value = false;
        fullCSVButton.value = false;

        // Disable the other text box
        rangeTextGroup.enabled = false;

        // Enable our textbox
        singleLineText.enabled = true;
    }

    customRangeRadioButton.onClick = function() {
        // Unclick the other two buttons
        fullCSVButton.value = false;
        singleLineRadioButton.value = false;

        // Disable the other text box
        singleLineText.enabled = false;

        // Enable our textbox
        rangeTextGroup.enabled = true;
    }



    dialog.show();


}