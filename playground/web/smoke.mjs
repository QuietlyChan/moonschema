import { validate_json, version } from './moonschema.js'
console.log('version:', version())
const schema = `{ "type": "object", "required": ["name"], "properties": { "name": { "type": "string" } } }`
console.log('valid  :', validate_json(schema, `{"name": "Alice"}`))
console.log('invalid:', validate_json(schema, `{"name": 42}`))
console.log('broken :', validate_json(`{ nope`, `null`))
