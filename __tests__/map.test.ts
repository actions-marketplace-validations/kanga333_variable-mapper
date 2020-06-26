import {ParameterMapList} from '../src/map'

// The json can be parsed and the value can be retrieved.
test('match', () => {
  const params = new ParameterMapList('{"key":{"env":"value"}}')
  const got = params.match('key')
  expect(got.ok).toBe(true)
  expect(got.value).toMatchObject(new Map([['env', 'value']]))
})