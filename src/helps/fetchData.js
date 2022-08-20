// const fetchData = (setData) => {
//   fetch('./data/data.json')
//     .then(function (res) {
//       return res.json()
//     })
//     .then(function (data) {
//       // store Data in State Data Variable
//       setData(data)
//     })
//     .catch(function (err) {
//       console.log(err, ' error')
//     })
// }
const fetchData = (setData) => {
  fetch('./data/data.json')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      // store Data in State Data Variable
      setData(data)
    })
    .catch(function (err) {
      console.log(err, ' error')
    })
}
const fetchDataById = (setData, id) => {
  fetch('./data/data.json')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      // store Data in State Data Variable
      const item = data.reduce(
        (acc, item) => (item.id === id ? (acc = item) : acc),
        0
      )
      setData(item)
    })
    .catch(function (err) {
      console.log(err, ' error')
    })
}

export default { fetchData, fetchDataById }
