//----ECMAScript modules
// For ECMAScript modules we must have a export function in mjs file

function body(str){
    console.log(`${str}, if your want to become a backened Developer. You must see our tutorial`);
    return " ";
}
function printname(str){
    console.log("\t\t\tHello "+ str +"!");
    return " ";
}
  
  function mainwelcome(){
      console.log("\t\t\tWelcome! to Node js Crash Course Practice....")
      return " ";
  }
export {body,printname,mainwelcome};