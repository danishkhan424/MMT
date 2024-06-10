const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
    case "read":
     readFile(file);
    break;
    case "delete":
    deleteFile(file);
    break;
    case "create":
    createFile(file);
    break;
    case "append":
    appendFile(file, content);
    break;
    case "rename":
    renameFile(file, content);
    break;
    case "list":
    listFiles(file);
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}

function readFile(file) {
  try {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(`Error: ${error}`);
      } else {
        console.log(data);
      }
    })
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function deleteFile(file) {
  try {
    fs.unlink(file, (err) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        console.log(`File ${file} deleted successfully`);
      }
    })
  } catch (error) {
    console.log( `Error: ${error}` );
  }
}

function createFile(file) {
  try {
    fs.writeFile(file, "", (err) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        console.log(`File ${file} created successfully`);
      }
    })
  } catch (error) {
    console.log( `Error: ${error}` );
  }
}

function appendFile(file, content) {
  try {
    fs.appendFile(file,"\n" + content, (err) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        console.log(`File ${file} appended successfully`);
      }
    })
  } catch (error) {
    console.log( `Error: ${error}` );
  }
}

function renameFile(oldFileName, newFileName) {
  try {
    fs.rename(oldFileName, newFileName, (err) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        console.log(`File ${oldFileName} renamed successfully`);
      }
    })
  } catch (error) {
    console.log( `Error: ${error}` );
  }
}

function listFiles(file) {
  try {
    fs.readdir(file, (err, files) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        files.forEach(file => console.log(file));
      }
    })
  } catch (error) {
    console.log( `Error: ${error}` );
  }
}
/*
 - reading ( read )
 - deleting ( delete )
 - creating ( create )
 - appending ( append )
 - rename ( rename )
 - list ( list )

*/