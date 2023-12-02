async function getFiles () {
  const response = await fetch('https://codember.dev/data/files_quarantine.txt', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })

  return await response.text()
}

function fileSystem (files) {
  const ALL_FILES = files.split('\n')
  const validFiles = ALL_FILES.filter((file) => isValid(file))

  return validFiles[32]
}

const isValid = (file) => {
  const alphanumeric = file.split('-')[0]
  const checksum = file.split('-')[1]

  let comparedChecksum = new Map()

  for (const char of alphanumeric) {
    if (comparedChecksum.has(char)) { comparedChecksum.set(char, comparedChecksum.get(char) + 1) } else comparedChecksum.set(char, 1)
  }

  comparedChecksum = Array.from(comparedChecksum)
    .map(([key, value]) => {
      if (value > 1) return
      return key
    })
    .join('')

  return comparedChecksum === checksum
}

getFiles().then(allFiles => {
  console.log(fileSystem(allFiles))
})
