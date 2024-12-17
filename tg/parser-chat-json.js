const json = require("./result.json")
let lengthAceessData = 0
let lengthDenaedData = 0
let resultData = []

json.messages.forEach(msg => {
    
    if(Array.isArray(msg.text)) {
        let resultMsg = {
        }
        msg.text.forEach((txt, txtI) => {
            let key 
            if(typeof txt === "string") {
                key = txt.replace(/[\n:]/g, ' ').trim()
                if(key) resultMsg[key] = null
            }

            if(typeof txt === "object") {
                const keys = Object.keys(resultMsg)
                const lastKey = keys[keys.length - 1]
                if(lastKey) resultMsg[lastKey] = txt.text.replace(/[\n:]/g, '').trim()
            }
        })
        resultData.push(resultMsg)
        lengthAceessData++
    } else lengthDenaedData++
})

resultData.forEach(d => console.log(d))

console.log(lengthAceessData, lengthDenaedData)