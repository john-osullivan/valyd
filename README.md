# valyd
A dead simple library for validating various types of strings.  Ships with Typescript bindings.

## Usage
```javascript
import valyd from 'valyd';

valyd.email('example@gmail.com') // Returns true

valyd.json('"{"testObj":{"a":1,"b":2}}"') // Returns true

valyd.url('https://google.com') // Returns true
```

## API
All methods are synchronous.
- `valyd.json(str:string) => boolean`: Returns true if the provided string can be successfully JSON parsed.
- `valyd.email(str:string) => boolean`: Returns true if the provided string is a valid email, as determined by `isEmail` in its simplest configuration.
- `valyd.url(str:string) => boolean`: Returns true if the provided string is a valid URL, as determined by [the Regex from the top-rated Stack Overflow post](https://stackoverflow.com/a/5717133/2128308).