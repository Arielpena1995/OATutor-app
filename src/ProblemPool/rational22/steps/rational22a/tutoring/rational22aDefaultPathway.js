var hints = [{id: "rational22a-h1", type: "hint", dependencies: [], title: "Factoring", text: "First, we need to factor $$\\left(2\\right) d^2$$ + 15d + 25.", variabilization: {}}, {id: "rational22a-h2", type: "hint", dependencies: ["rational22a-h1"], title: "Split", text: "Split 15d to 10d and 5d.", variabilization: {}}, {id: "rational22a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) d\\left(d+\\left(5\\right)\\right)$$"], dependencies: ["rational22a-h2"], title: "Factoring", text: "What is the factoring of $$\\left(2\\right) d^2$$ + 10d?", variabilization: {}}, {id: "rational22a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$5\\left(d+\\left(5\\right)\\right)$$"], dependencies: ["rational22a-h3"], title: "Factoring", text: "What is the factoring of $$\\left(5\\right) d+\\left(25\\right)$$?", variabilization: {}}, {id: "rational22a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(\\left(2\\right) d+\\left(5\\right)\\right) \\left(d+\\left(5\\right)\\right)$$"], dependencies: ["rational22a-h4"], title: "Factoring", text: "Factor out the common factor $$d+\\left(5\\right)$$?", variabilization: {}}, {id: "rational22a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(\\left(2\\right) d+\\left(5\\right)\\right) \\left(\\left(2\\right) d-\\left(5\\right)\\right)$$"], dependencies: ["rational22a-h5"], title: "Factoring", text: "Factor $$\\left(4\\right) d^2$$ - 25 using difference of squares.", variabilization: {}}, {id: "rational22a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(\\left(5\\right) d-\\left(1\\right)\\right) \\left(\\left(5\\right) d+\\left(1\\right)\\right)$$"], dependencies: ["rational22a-h6"], title: "Factoring", text: "Factor $$\\left(25\\right) d^2$$ - 1 using difference of squares.", variabilization: {}}, {id: "rational22a-h8", type: "hint", dependencies: ["rational22a-h7"], title: "Factoring", text: "Next, we need to factor $$\\left(2\\right) d^2$$ - 15d + 25.", variabilization: {}}, {id: "rational22a-h9", type: "hint", dependencies: ["rational22a-h8"], title: "Split", text: "Split 15d to -10d and -5d.", variabilization: {}}, {id: "rational22a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2d(d-5)"], dependencies: ["rational22a-h9"], title: "Factoring", text: "What is the factoring of $$\\left(2\\right) d^2$$ - 10d?", variabilization: {}}, {id: "rational22a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5(d-5)"], dependencies: ["rational22a-h10"], title: "Factoring", text: "What is the factoring of $$-\\left(5\\right) d+\\left(25\\right)$$.", variabilization: {}}, {id: "rational22a-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(2d-5)(d-5)"], dependencies: ["rational22a-h11"], title: "Factoring", text: "Factor out the common factor (d-5).", variabilization: {}}, {id: "rational22a-h13", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\left(d+\\left(5\\right)\\right) \\left(d-\\left(5\\right)\\right)}{\\left(5\\right) d-\\left(1\\right)} \\left(\\left(5\\right) d+\\left(1\\right)\\right)$$"], dependencies: ["rational22a-h12"], title: "Simplify", text: "Cross out the same factors on top and bottom.", variabilization: {}}, ]; export {hints};