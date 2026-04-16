import { handleInput, clearInput } from '../src/Order.js';

describe("Salon chatbot flow", function () {

    beforeEach(function () {
        clearInput();
    });

    it("welcoming message", function () {
        const aResults = handleInput("hi");
        expect(aResults[0]).toBe("Welcome to Naomi's Nails.");
    });

    it("choose shape", function () {
        handleInput("hi");
        const aResults = handleInput("coffin");
        expect(aResults[0]).toBe("Nice choice. Short, medium, or long?");
    });

    it("choose length", function () {
        handleInput("hi");
        handleInput("square");
        const aResults = handleInput("long");
        expect(aResults[0]).toBe("Want to add gems?");
    });

    it("upsell nails yes", function () {
        handleInput("hi");
        handleInput("round");
        handleInput("short");
        const aResults = handleInput("yes");
        expect(aResults[0]).toBe("Gems added.");
    });

    it("upsell nails no", function () {
        handleInput("hi");
        handleInput("coffin");
        handleInput("medium");
        const aResults = handleInput("no");
        expect(aResults[0]).toBe("No gems added.");
    });

    it("hair path test", function () {
        handleInput("hi");
        const aResults = handleInput("buzz cut");
        expect(aResults[0]).toBe("Nice choice. Would you like some shampoo to take home with you?");
    });

    it("upsell hair yes", function () {
        handleInput("hi");
        handleInput("hair");
        const aResults = handleInput("yes");
        expect(aResults[0]).toBe("Shampoo added.");
    });
});