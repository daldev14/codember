const allPasswords = data.split("\n")
const validPasswords = []
const invalidPasswords = []

function isValid(out) {
  const password = out.split(" ")
  const pass = password[2]
  const letter = password[1][0]
  const separator = password[0].indexOf("-")
  const min = password[0].slice(0, separator)
  const max = password[0].slice(separator + 1)
  let quantity = 0

  for (let char of pass) if (char === letter) quantity++

  return {
    pass,
    isValid: quantity >= min && quantity <= max ? true : false,
  }
}

for (let password of allPasswords) {
  const result = isValid(password)
  if (result.isValid) validPasswords.push(result.pass)
  else invalidPasswords.push(result.pass)
}
