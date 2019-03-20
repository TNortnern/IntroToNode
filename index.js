const chalk = require("chalk");
console.log(chalk.red("Hello World"));

var arr = [1, 1, 2, 2, 3, 5];
 
require("uniq")(arr);
console.log(chalk.green(arr));