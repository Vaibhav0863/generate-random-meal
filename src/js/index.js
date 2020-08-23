import "../css/style.css"
import "jquery"
import FetchData from "./model/fetchData"
import * as render from "./view/renderResult";

let state = {}
const get_meal = $("#getMeal");

async function getData() {
    const result = new FetchData()
    state.result = await result.getReceipe();
    render.clearResult();
    await render.renderResult(state.result);
    render.showResult()

}

get_meal.click(getData)
