let b = new Promise((resolve, reject) => {
  let a = 1 + 2
  if(a == 2) {
    resolve('success')
  } else {
    reject('failed')
  }
})
b.then((message) => {
  console.log('this is in the then ' + message)
}).catch((message) => {
  console.log('this is in the catch ' + message)
})
//=================================================
function makeRequest(location){
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`)
    if(location === 'Google') {
      resolve('Google says hi')
    } else {
        reject('We can only talk to Google')
      }
    })
  }
  function processRequest(response){
    return new Promise((resolve, reject) => {
      console.log(`Processing response + ${response}`)
      resolve(`Extra infromation + ${response}`)
    })
  }

//   makeRequest('Google').then(response => {
//     console.log('Response recieved')
//     return processRequest(response)
//   }).then(processResponse => {
//     console.log(processResponse)
//   }).catch(err => {
//     console.log(err)
// })

async function doWork() {
  try{ // when we need to catch error, if code can fail
  const response = await makeRequest('Google')
  console.log('Response recieved')
  const processedResponse =  processRequest(response)
  } catch (err) {
    console.log(err)
  }
}
doWork()