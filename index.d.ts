export type StringValidator = (str:string) => boolean

export interface valyd {
  email: StringValidator
  url: StringValidator
  json: StringValidator
}

export default valyd;