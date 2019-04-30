const isEmail = require('isemail');

const isString = (val:any) => {
  return typeof val === 'string';
}

export const email = (str:string) => {
  return isString(str) && isEmail.validate(str, {errorLevel:false}) as boolean;
}

export const url = (str:string) => {
  // Regex courtesy of the top-rated StackOverflow post
  // for "Check if a Javascript string is a URL":
  //
  // https://stackoverflow.com/a/5717133/2128308

  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return isString(str) && !!pattern.test(str);
}

export const json = (str:string) => {
  try {
    if (isString(str)){
      JSON.parse(str);
      return true;
    } else {
      return false;
    }
  } catch (e) {
      return false;
  }
}

export const valyd = { email, url, json };

export default valyd;