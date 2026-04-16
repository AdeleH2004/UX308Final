let currentState = welcoming

export function handleInput(sInput, addPoint) {
  return currentState(sInput, addPoint)
}

export function clearInput() {
  currentState = welcoming
}

function welcoming(sInput, addPoint) {
  let messages = []
  currentState = chooseShape
  messages.push("Welcome to Naomi's Nails.")
  messages.push("What nail shape would you like? Coffin, square, or round?")
  return messages
}

function chooseShape(sInput, addPoint) {
  let messages = []
  const choice = sInput.toLowerCase()

  if (choice.includes("coffin") || choice.includes("square") || choice.includes("round")) {
    currentState = chooseLength
    messages.push("Nice choice. Short, medium, or long?")
  } else {
    messages.push("Please choose coffin, square, or round.")
  }

  return messages
}

function chooseLength(sInput, addPoint) {
  let messages = []
  const choice = sInput.toLowerCase()

  if (choice.includes("short") || choice.includes("medium") || choice.includes("long")) {
    currentState = upsellGems
    messages.push("Want to add gems?")
  } else {
    messages.push("Please choose short, medium, or long.")
  }

  return messages
}

function upsellGems(sInput, addPoint) {
  let messages = []
  currentState = welcoming

  const choice = sInput.toLowerCase()

  if (choice.includes("yes") || choice.includes("gems")) {
    messages.push("Gems added.")
  } else {
    messages.push("No gems added.")
  }

  if (addPoint) {
    addPoint()
  }

  messages.push("All set. Appointment booked.")
  return messages
}