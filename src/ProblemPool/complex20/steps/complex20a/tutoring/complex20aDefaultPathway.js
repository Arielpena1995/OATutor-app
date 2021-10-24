var hints = [{id: "complex20a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) i \\sqrt{3}$$"], dependencies: [], title: "Standard Form", text: "Write $$\\sqrt{-\\left(12\\right)}$$ in standard form: $$a+bi$$.", variabilization: {}}, {id: "complex20a-h2", type: "hint", dependencies: ["complex20a-h1"], title: "Comverting Division into Multiplication", text: "Write the division as multiplying by a fraction.", variabilization: {}}, {id: "complex20a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["complex20a-h2"], title: "Comverting Division into Multiplication", text: "What is the fraction such that multiplying by this fraction is equivalent to dividing by 2?", variabilization: {}}, {id: "complex20a-h4", type: "hint", dependencies: ["complex20a-h3"], title: "Distributive Property", text: "Distribute the $$\\frac{1}{2}$$ to each term in the complex number.", variabilization: {}}, {id: "complex20a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["complex20a-h4"], title: "Distributive Property", text: "What is $$2\\left(\\frac{1}{2}\\right)$$?", variabilization: {}}, {id: "complex20a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$i\\left(\\sqrt{3}\\right)$$"], dependencies: ["complex20a-h4"], title: "Distributive Property", text: "What is $$\\left(2\\right) i \\sqrt{3} \\frac{1}{2}$$?", variabilization: {}}, {id: "complex20a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(1\\right)+i\\left(\\sqrt{3}\\right)$$"], dependencies: ["complex20a-h5", "complex20a-h6"], title: "Adding Complex Numbers", text: "Add the terms in the numerator. What expression do you get?", variabilization: {}}, ]; export {hints};