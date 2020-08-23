const axios = require("axios");

export default class FetchData {
    constructor() {

    }


    async getReceipe() {
        let data = await axios("https://www.themealdb.com/api/json/v1/1/random.php")
        this.result = data.data.meals[0];
        return this.result
    }
}
