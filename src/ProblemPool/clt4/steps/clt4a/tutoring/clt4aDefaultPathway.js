var hints = [{id: "clt4a-h1", type: "hint", dependencies: [], title: "", text: "Identify parts of the problem", variabilization: {}}, {id: "clt4a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12"], dependencies: ["clt4a-h1"], title: "", text: "What is the mean μ?", variabilization: {}}, {id: "clt4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["clt4a-h1"], title: "", text: "What is the standard deviation σ?", variabilization: {}}, {id: "clt4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["clt4a-h1"], title: "", text: "What is the sample size n?", variabilization: {}}, {id: "clt4a-h5", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["8, 25"], dependencies: ["clt4a-h1"], title: "", text: "What is the sample mean $$x̅$$?", variabilization: {}}, {id: "clt4a-h6", type: "hint", dependencies: ["clt4a-h2", "clt4a-h3", "clt4a-h4", "clt4a-h5"], title: "", text: "Draw a graph. Label the center with the mean. Shade the area between 8 and 25.", variabilization: {}}, {id: "clt4a-h7", type: "hint", dependencies: ["clt4a-h6"], title: "", text: "Find the z-scores for x̅ $$=$$ 8 and x̅ $$=$$ 25", variabilization: {}}, {id: "clt4a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["clt4a-h7"], title: "", text: "Use the following formula and plug in to find z-score for x̅ $$=$$ 8: z $$=$$ (x̅ - μ)/(σ/sqrt(n))", variabilization: {}}, {id: "clt4a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["13/4"], dependencies: ["clt4a-h7"], title: "", text: "Use the following formula and plug in to find z-score for x̅ $$=$$ 25: z $$=$$ (x̅ - μ)/(σ/sqrt(n))", variabilization: {}}, {id: "clt4a-h10", type: "hint", dependencies: ["clt4a-h8", "clt4a-h9"], title: "", text: "Determine the probability.", variabilization: {}}, {id: "clt4a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.3413"], dependencies: ["clt4a-h10"], title: "", text: "Look up the z-score you calculated in the z-table. What the probability when the z-score is -1?", variabilization: {}}, {id: "clt4a-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.4994"], dependencies: ["clt4a-h10"], title: "", text: "Look up the z-score you calculated in the z-table. What the probability when the z-score is 3.25?", variabilization: {}}, {id: "clt4a-h13", type: "hint", dependencies: ["clt4a-h11", "clt4a-h12"], title: "", text: "Add those 2 probabilities together", subHints: [{id: "clt4a-h13-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.8407"], dependencies: [], title: "", text: "What is 0.3413 + 0.4994?", variabilization: {}}, {id: "clt4a-h13-s2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["84.07%"], dependencies: [], title: "", text: "Convert decimal to percentage", variabilization: {}}, ], variabilization: {}}, ]; export {hints};