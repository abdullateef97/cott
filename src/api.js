
function response(responseObj){
    return {
        error: responseObj.error || false,
        message: responseObj.message || "",
        data: responseObj.data || null
    }
}
export function calculateNoOfBananas(bananas, camels, distance, eats){

    let no_of_banana_per_camel = bananas / camels;
    if(no_of_banana_per_camel > 1000) {
        return response({error: true,
                    message: `Insufficient no of camels for one trip, you would need ${bananas/camels} camels for one trip`})
    }

    let no_of_banana_a_camel_eats = distance * eats;

    let no_of_bananas_a_camel_carries_to_market = no_of_banana_per_camel - no_of_banana_a_camel_eats;
    let total_left_over_bananas = no_of_bananas_a_camel_carries_to_market * camels;
    return response({
        data: total_left_over_bananas
    })
}

export function calculateOptimumCamels(bananas){
    let optimum = bananas / 1000;
    return response({
        data: optimum
    })
}



