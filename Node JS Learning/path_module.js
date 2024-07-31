///------------------Path Module-------------------///

//...for particular file properties we write  path.functionname(__filename).

const path = require('path');

//Base name of the file
console.log("Path name of path "+path.basename('C:\\temp\\myfile.html'));  // myfile.html is the base name of the file

//Directory name of the file
console.log("Directory name of path "+ path.dirname('C:\\temp\\myfile.html'));  // C:\temp is the directory name of the file

//Extension name of the file
console.log("Extension name of path "+path.extname('C:\\temp\\myfile.docx'));  // .docx is the extension name of the file
// For particular file
console.log("Extension of this file is "+path.extname(__filename));

// Parse the file properties (Root,Dir,Base,Ext,Name)
console.log(path.parse(__filename));
