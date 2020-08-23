import "jquery"
export function renderResult(result) {

    // rendering meal image
    (function renderImage(strMealThumb) {
        const mealImg = $("#mealImg");
        mealImg.attr("src", strMealThumb)
    })(result['strMealThumb']);

    // rendering meal title
    (function renderTitle(title) {
        const mealTitle = $("#title")
        mealTitle.html(title);
    })(result['strMeal']);

    // rendering tags
    (function renderTags(tags) {
        if (tags) {
            tags = tags.split(',');
            let data = ''
            tags.forEach(tag => {
                if (tag) {
                    data += `
                <span
                    class="uppercase my-2 text-xs mr-3 text-white bg-indigo-500 font-bold py-2 px-3 rounded-full"
                >
                ${tag}
                </span>
                `
                }
            });

            $("#tags").html(data);
        }
        else {
            $("#tags").html('');
        }
    })(result["strTags"]);

    // render instructions
    (function renderInstruction(instruction) {
        let data = instruction.split('\r\n')

        let inst = '';

        let cnt = 1;

        for (let item of data) {
            if (item != '') {
                inst += `
            <div class="mb-5">
                <span class="font-medium mr-4 text-lg">STEP ${cnt}:</span>
                ${item}
            </div>
            `
                cnt++;
            }
        }

        $("#instruction").html(inst);


    })(result['strInstructions']);

    // render ingredient
    (function renderIngredient(data) {
        let res = ''
        for (let i = 1; i <= 20; i++) {
            let item = data['strIngredient' + i]
            console.log(item)
            if (item) {
                res += `
                <dd class="flex my-3">
                    <p class="text-lg font-medium flex items-center">
                        ${i}. ${item}
                        <span
                            class="text-xs text-white font-medium mx-5 bg-blue-500 px-3 py-1 rounded-full"
                            >${data["strMeasure" + i]}</span
                        >
                    </p>
                </dd>
                `
            }
        }
        $("#ingredient").html(res);
    })(result);

    //render video
    (function renderVide() {
        let url = result['strYoutube'];

        url = url.split('=');
        url = url[url.length - 1];
        $("#videoTut").attr("src", `https://www.youtube.com/embed/${url}`)
    })();
}

export function clearResult() {
    console.log("AWD")
    $("#result").addClass("hidden");
}

export function showResult() {
    $("#result").removeClass("hidden");

}
