const message =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

const messageToArray = message.split("")
let count = 0
let result = ""

for (let item of message) {
  if (item === "&") result += count
  if (item === "#") count++
  if (item === "@") count--
  if (item === "*") count *= count
}

console.log(result)
