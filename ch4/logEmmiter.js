const fs =  require('fs');
const fspromise =  require('fs').promises;
const path = require('path');
const {format} = require('date-fns');

const logEmmiter = async (message,fileName) => {
  try{
    if(!fs.existsSync(path.join(__dirname,"new"))){
      await fspromise.mkdir(path.join(__dirname,"new"))
    }
    await fspromise.appendFile(path.join(__dirname,"new",fileName),`the time is now ${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}\t${message}\n`)
  }catch(err){
    console.error(err);
  }
}

module.exports = logEmmiter;