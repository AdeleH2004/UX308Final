let sState = "WELCOME";

export function clearInput() {
    sState = "WELCOME";
}

export function handleInput(sInput) {
    let aReturn = [];
    const input = sInput.toLowerCase();

    switch (sState) {
        case "WELCOME":
            sState = "SHAPE_OR_STYLE";
            aReturn.push("Welcome to Naomi's Nails."); 
            break;

        case "SHAPE_OR_STYLE":
            if (input.includes("cut") || input.includes("hair") || input.includes("buzz")) {
                sState = "UPSELL_HAIR";
                aReturn.push("Nice choice. Would you like some shampoo to take home with you?");
            } else {
                sState = "LENGTH";
                aReturn.push("Nice choice. Short, medium, or long?");
            }
            break;

        case "LENGTH":
            sState = "UPSELL_NAILS";
            aReturn.push("Want to add gems?");
            break;

        case "UPSELL_NAILS":
            sState = "WELCOME"; 
            if (input.includes("yes")) {
                aReturn.push("Gems added.");
            } else {
                aReturn.push("No gems added.");
            }
            break;

        case "UPSELL_HAIR":
            sState = "WELCOME"; 
            if (input.includes("yes")) {
                aReturn.push("Shampoo added.");
            } else {
                aReturn.push("No shampoo added.");
            }
            break;
    }
    return aReturn;
}