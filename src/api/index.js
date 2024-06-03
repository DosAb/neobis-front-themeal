import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
    headers: {
      'Content-Type': 'application/json'
    },
})

export const getRandomMeal = () => instance.get('random.php')
export const getMealDetails = (id) => instance.get(`lookup.php`, { params: { i: id } })
export const searchMeals = (search) => instance.get(`search.php?s=${search}`)