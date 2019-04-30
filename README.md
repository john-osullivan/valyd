# valyd
A dead simple library for validating various types of strings. (Work in Progress)

## API
- `valyd.json(str:string) => boolean`: Returns true if the provided string can be successfully JSON parsed.
- `valyd.email(str:string) => boolean`: Returns true if the provided string is a valid email, as determined by `isEmail`.
- `valyd.url(str:string) => boolean`: Returns true if the provided string is a valid URL, as determined by the Regex from the top-rated Stack Overflow post.