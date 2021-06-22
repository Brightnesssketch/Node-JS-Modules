// const fs = require('fs')

// const content = 'I am in love with node JS!'

// fs.writeFile('week4.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
  
// })

// const fs = require('fs')

// fs.readFile('WEEK4.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   const content = data

// fs.writeFile('week5.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }

// })

// const fs = require('fs')

// const content = 'data'

// fs.writeFile('week4.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
  
// })
const fs = require('fs')

const folderName = 'Days-of-the-week'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
fs.readFile('WEEK4.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const content = data

fs.writeFile('Days-of-the-week/week6.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }

})
})