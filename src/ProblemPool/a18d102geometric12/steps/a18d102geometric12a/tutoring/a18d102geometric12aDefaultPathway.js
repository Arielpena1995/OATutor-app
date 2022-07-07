var hints = [{id: "a18d102geometric12a-h1", type: "hint", dependencies: [], title: "Formula for General Term", text: "To find the nth term, $$a_n$$, we use the formula with $$a_1$$ being the starting term and r being the common ratio that $$a_n=a_1 r^{n-1}$$.", variabilization: {}}, {id: "a18d102geometric12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["a18d102geometric12a-h1"], title: "Determine $$a_1$$", text: "What is $$a_1$$ in the formula above? Essentially, what is the starting term?", variabilization: {}}, {id: "a18d102geometric12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["a18d102geometric12a-h2"], title: "Determine r", text: "What is r? What is the common ratio?", subHints: [{id: "a18d102geometric12a-h3-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: [], title: "Ratio Between 7 and 14", text: "What is the common ratio between 7 and 14? Effectively, what is $$\\frac{14}{7}$$?", variabilization: {}}, {id: "a18d102geometric12a-h3-s2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: [], title: "Ratio Between 14 and 28", text: "What is the common ratio between 14 and 28? Effectively, what is $$\\frac{28}{14}$$?", variabilization: {}}, {id: "a18d102geometric12a-h3-s3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: [], title: "Ratio Between 28 and 56", text: "What is the common ratio between 28 and 56? Effectively, what is $$\\frac{56}{28}$$?", variabilization: {}}, {id: "a18d102geometric12a-h3-s4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: [], title: "Ratio Between 56 and 112", text: "What is the common ratio between 56 and 112? Effectively, what is $$\\frac{112}{56}$$?", variabilization: {}}, {id: "a18d102geometric12a-h3-s5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: [], title: "Ratio Between 112 and 224", text: "What is the common ratio between 112 and 224? Effectively, what is $$\\frac{224}{112}$$?", variabilization: {}}, {id: "a18d102geometric12a-h3-s6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: [], title: "Determining Common Ratio", text: "What is the common ratio between consecutive terms? What is r?", variabilization: {}}], variabilization: {}}, {id: "a18d102geometric12a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$a_n=7\\times2^{n-1}$$"], dependencies: ["a18d102geometric12a-h3"], title: "Writing the Formula", text: "What is the correct formula for the general term using the terms just determined?", choices: ["$$a_n=7\\times2^{n-1}$$", "$$a_n=2\\times7^{n-1}$$", "$$a_n=7\\times2^n$$", "$$a_n=2\\times7 n$$"], variabilization: {}}, ]; export {hints};