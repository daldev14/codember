async function getFiles () {
  const response = await fetch('https://codember.dev/data/database_attacked.txt', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  return await response.text()
}

const formatData = (data) => data.split('\n').map((row) => row.split(','))

const validateAlphanumeric = (value) => /^[a-zA-Z0-9]+$/.test(value)
const validateMail = (value) => /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(value)
const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value)
const isString = (value) => typeof value === 'string'

const decryptMessage = (data) => data.map((row) => row[1].at(0)).join('')

function validData (allData) {
  const formattedData = formatData(allData)
  const validData = []
  const invalidData = []

  formattedData.forEach((row) => {
    if (!validateAlphanumeric(row[0])) return invalidData.push(row)
    if (!validateAlphanumeric(row[1])) return invalidData.push(row)
    if (!validateMail(row[2])) return invalidData.push(row)
    if (!isNumber(row[3])) return invalidData.push(row)
    if (!isString(row[4])) return invalidData.push(row)

    return validData.push(row)
  })

  return decryptMessage(invalidData)
}

getFiles().then(allData => {
  console.log(validData(allData))
})
