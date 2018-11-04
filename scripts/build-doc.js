const { execSync } = require('child_process')
const { relative, resolve, join } = require('path')
const packageJson = require('../package.json')


const root = relative('.', resolve(__dirname, '..'))
const bin = join(root, 'node_modules/.bin')
const typedoc = join(bin, 'typedoc')

const exec = (cmd) => execSync(cmd).toString()

const name = `${packageJson.name} ${packageJson.version}`
const outputFolder = join(root, 'doc')

const inputFiles = ['src/index.ts', 'src/types.ts', 'src/api/types']
  .map((x) => join(root, x))
  .join(' ')

const theme = 'minimal'
const mode = 'modules'

const typedocArgs = `--name "${name}" --excludeExternals --readme none --out ${outputFolder}  --theme ${theme} --mode ${mode}`

const command = `${typedoc} ${typedocArgs} ${inputFiles}`

console.log(`> ${command}`)

try {
  console.log(exec(command))
} catch (e) {
  console.error(e.stdout.toString())
  console.error(e.stderr.toString())
}
