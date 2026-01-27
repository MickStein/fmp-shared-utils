import pkg from './package'

exports.plugin = {
  name: pkg.name,
  register: require('./lib/view'),
  once: true,
  pkg
}
