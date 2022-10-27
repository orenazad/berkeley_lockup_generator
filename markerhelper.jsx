/* General functions */
function importMarkers() {

  // The currently selected "document". Likely either a 'WaveDocument' or Multitrack session.
  const activeDoc = app.activeDocument;
  const sampleRate = activeDoc.sampleRate;

  // Read in the first two columns of the CSV.
  CSVLists  = openAndReadCSV();
  timecodes = CSVLists[0];
  notes     = CSVLists[1];

  // Convert the timecode list to samples
  samples = convertTimecodeArraytoSamples(timecodes, sampleRate);

  delays = {
    '00:03:14:20': 5,
    '00:40:16:18': 5
  }

  for (var key in delays) {
    samples = addDelay(samples, sampleRate, key, delays[key])
  }

  createMarkers(samples, notes);
}

function openAndReadCSV() {
  var fileObj = File.openDialog('Open CSV File', 'CSV:*.csv');
  var success = fileObj.open('r');
  if (!success) {
    alert("Could not open CSV file correctly!")
    throw "Couldn't open selected file in read mode."
  }
  var timecodes = [];
  var notes = [];
  while (true) {
    var CSVline = fileObj.readln();
    if (CSVline == '') {
      // Assuming there are no gaps, we are done reading.
      // TODO: Maybe just check EOF here? Remind Arian not to have gap.
      break;
    }

    // TODO: Remind Arian not to put a comma in the "Note" section. That will be a bad time.
    // Split the values by the comma
    lineValues = CSVline.split(',')
    if (lineValues.length != 2) {
      alert("More than one column found! Number of columns: " + lineValues.length + ". This is likely because there was a comma ',' somewhere in your Timecode or Notes column.");
      throw "Incorrect lineValues length.";
    }

    // Push the first column into timecodes
    timecodes.push(lineValues[0])

    // Remove quotes from "Note" column for cleanliness
    lineValues[1] = lineValues[1].replace(/"/g, '')

    // Push the second column into notes
    notes.push(lineValues[1])
  }

  if (timecodes.length != notes.length) {
    alert("Timecode Column and Note Column are not the same length.")
    throw "Timecode Column and Note Column are not the same length."
  }

  if (timecodes[0] != 'Timecode') {
    alert("Timecode column was not properly labeled!. The given label was: " + timecodes[0] + ".");
    throw "Timecode column was not properly labeled!";
  }

  if (notes[0] != 'Note') {
    alert("Note column was not properly labeled!. The given label was: " + notes[0] + ".");
    throw "Note column was not properly labeled!";
  }

  // Remove the two labels
  timecodes.shift()
  notes.shift()

  return [timecodes, notes]
}

function convertTimecodeArraytoSamples(timecodes, sampleRate) {
  for (var i = 0; i < timecodes.length; i++) {
    timecodes[i] = timecodeToSamples(timecodes[i], sampleRate);
  }
  return timecodes;
}

function timecodeToSamples(timecode, sampleRate) {
  time = timecode.split(':');
  if (time.length != 4) {
    alert("Timecode length isn't four. Given timecode length is: " + time.length + ".");
    throw "Incorrect timecode length";
  }
  var minutes = (time[0] * 60) + Number(time[1]);
  var seconds = (minutes * 60) + Number(time[2]);
  // Ignore frames, the extra granularity isn't needed.
  return seconds * sampleRate;
}

// https://larryjordan.com/articles/adobe-audition-cc-using-markers/ -> discusses marker types
function createMarkers(samples, notes, activeDoc) {

  // HACK: This should be global or something.
  const magicString = "Automatically Imported Marker";

  // HACK: This should be passed in. 
  activeDoc = app.activeDocument;

  // Find the time of the last marker to be created
  maxSample = Math.max.apply(Math, samples);

  // We can't create the markers if the Multitrack session isn't long enough, and can't extend it ourselves. 
  // Don't move forward unless all markers can be created.
  if (maxSample > activeDoc.duration) {
    alert("Max Sample: " + maxSample)
    alert("Duration: " + activeDoc.duration)
    alert("The max specified timecode is longer than the duration of the selected document. Please ensure that the Multitrack session or Wave Document is the correct length.")
    throw "Document duration not long enough."
  }

  for (var i = 0; i < samples.length; i++) {
    activeDoc.addMarker(samples[i], 0, notes[i], 'cue', magicString);
  }
}

// There is no "removeMarker" method and the markers array is read-only.
// For the time being this doesn't work.
function removeImportedMarkers() {
  activeDoc = app.activeDocument;
  markerList = activeDoc.markers;

  for (var i = 0; i < markerList.length; i++) {
    marker = markerList[i];
    if (marker.description == magicString) {
      markerList.splice(i)
    }
  }

}

function addDelay(samples, sampleRate, timeToDelay, delayLength) {

  delayTime = timecodeToSamples(timeToDelay, sampleRate)
  delayLength = delayLength * sampleRate;

  for (var i = 0; i < samples.length; i++) {
    currTime = samples[i];
    if (currTime >= delayTime) {
      samples[i] = currTime + delayLength;
    }
  }
  return samples;
}