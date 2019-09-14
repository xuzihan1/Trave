let defauleCity = '北京'
try {
  if (localStorage.city) {
    defauleCity = localStorage.city
  }
} catch (e) {
}

export default {
  city: defauleCity
}
