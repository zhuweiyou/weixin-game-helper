const {exec} = require('child_process')

module.exports = cmd =>
  new Promise(resolve =>
    exec(cmd, (error, stdout, stderr) =>
      resolve(stdout || stderr)
    )
  )
