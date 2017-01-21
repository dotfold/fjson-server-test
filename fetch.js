// this is the browser code
fetch('http://localhost:8080/response.fjson')
  .then(function (response) {
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let partial = ''
    reader.read().then(function (result) {
      partial += decoder.decode(result.value, {
        stream: !result.done
      })
      console.log(partial)
      return partial
    })
  })
  .catch(e => console.log(e))
