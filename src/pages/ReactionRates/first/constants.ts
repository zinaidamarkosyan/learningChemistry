export const maxStep_Zero = 18

export const tur_Text = [
  // display.reactant.name; A
  // display.product.name;  B
  [ // 0
    `This is a first order reaction.`,
    `Why don't you set the <span>initial concentration of A [A_0_]</span>, the reactant?.`,
  ],
  [ // 1
    `Great! Now you can set the <span>concentration of A at the end of the reaction [A<span class='sm_botom'>t</span>]</span> and the <span>time the reaction will last (t)</span>.`,
  ],
  [ // 2
    `The rate constant <span>k</span> is a value on which the <span>rate</span> depends. This dependency is often represented with the rate law or the rate equation.`,
  ],
  [ // 3
    `Rate laws or rate equations are mathematical expressions that describe the relationship \
    between the <span>rate</span> of a chemical reaction and the concentration of its reactants. \
    For this reaction, <span>k=0.069</span>.`,
  ],
  [ // 4
    `<p>For a reaction with one reactant it's usually written as <span>rate=k[A]</span><span class='sm_top'>order</span>.`,
    `For this reaction then, <span>rate=k[A]</span><span class='sm_top'>1</span>.</p>`,
  ],
  [ // 5 here goes next step automatically after action
    `<p style='font-size: 17px'>Half-life (t<span class='sm_botom'>1/2</span>)</span> is an expression to easily calculate the point in time at which the concentration of the reactant, in this case <span>A</span>, is half of what the \
    initial concentration was. For this reaction,</p>`,
    `<p style='font-size: 17px'> <span>t<span class='sm_botom'>1/2</span>=\
    In(1)/k=10.00s</span>.</p>`,
  ],
  [ // 6
    `<p>Let's watch how all the molecules are all changing!</p>`,
    `<p>As A disappears, B is being produced.</p>`,
    `<p>This happens at a variable <span>rate (in units of M/s)</span>, which is dependent on <span>k</span> and <span>[A]</span>.</p>`,
  ],
  [ // 7
    `For the previous zero order reaction, <span>rate</span> was constant because it was independent \
    of <span>[A]</span>, since <span>rate=k[A]<span class='sm_top'>0</span></span> is equivalent to <span>rate=k</span>, which is the rate constant.`,
  ],
  [ // 8
    `Now, let's try choosing a different reaction, which has a fixed rate constant, <span>k</span>.`,
    `<span>Choose a reaction above</span>.`,
  ],
  [ // 9
    `Great! You picked a reaction with a rate constant \(rateConstant.str(decimals: 2)).`,
    `Why don't you <span>set the initial concentration and initial time</span>?`,
  ],
  [ // 10
    `Awesome! Now set the time the reaction ends.`,
    `Notice how the final concentration varies as you adjust the final time.`,
  ],
  [ // 11
    `<p>Let's watch how all the molecules are all changing! As \
    C disappears, D is being produced.</p>`,
    `<p>This happens at a variable <span>rate (in units of M/s)</span>, which is dependent on <span>k</span>.</p>`,
  ],
  [ // 12
    `Amazing! Let's take a snapshot!`,
    `Try <span>dragging the time indicator</span> to scrub through the reaction time.`,
  ],
  [ // 13
    `Now, let's try choosing a different reaction, which has a fixed rate constant, <span>k</span>.`,
    `<span>Choose a reaction above</span>.`,
  ],
  [ // 14
    `Great! You picked a reaction with a rate constant \ 0.07.`,
    `Why don't you <span>set the initial concentration and initial time</span>?`,
  ],
  [ // 15
    `Awesome! Now set the final concentration of the reaction.`,
    `Notice how the final time varies as you adjust the final concentration.`,
  ],
  [ // 16
    `Let's watch how all the molecules changing! As \ E disappears, \ F is being produced.`,
    `This happens at a variable <span>rate (in units of M/s)</span>, which is dependent on <span>k</span>.`,
  ],
  [ // 17
    `Amazing, let's take another snapshot!`,
    `Try <span>dragging the time indicator</span> to scrub through the reaction time.`,
    `Then, let's take a quiz to review what we've learnt.`,
  ],
  // open Quiz
]

export const tur_Hightlights = [
  // 0   This is zero...
  [],

  // 1   Great! Now you ...
  [],

  // 2   The order of a ...
  ['tur_tutorialText', 'tur_stepPrevButton', 'tur_stepNextButton', 'tur_math1', 'tur_math2'],

  // 3   Half-lie (t12) ...
  ['tur_tutorialText', 'tur_stepPrevButton', 'tur_stepNextButton', 'tur_math3'],

  // 4   Let's watch how all...
  ['tur_tutorialText', 'tur_stepPrevButton', 'tur_stepNextButton', 'tur_canvasTime'],

  // 5   For this zero order ...
  ['tur_tutorialText', 'tur_stepPrevButton', 'tur_stepNextButton', 'tur_canvasTime'], // +

  // 6   You can click the....
  ['tur_tutorialText', 'tur_stepPrevButton', 'tur_stepNextButton', 'tur_watchMenuIcon'], // Choose reaction 'C to D'

  // 7   Amazing! Let's take...
  [],

  // 8   Now, let's try choosing...
  ['tur_tutorialText', 'tur_stepPrevButton', 'tur_stepNextButton', 'tur_chooseMenuIcon'],

  // 9   Great! You picked a...
  [],

  // 10   Awesome! Now set ...
  [],

  // 11   Let's watch how all the...
  [],

  // 12   Amazing, let's take...
  [],

  // 13   Now, let's try choosing... EF
  ['tur_tutorialText', 'tur_stepPrevButton', 'tur_stepNextButton', 'tur_chooseMenuIcon'],

  // 14   Great! You picked a ...
  [],

  // 15   Awesome! Now set the ...
  [],

  // 16   Let's watch how all ...
  [],

  // 17   Amazing, let's take ...
  [],
  // here goes to Quiz
]

export const stepsActions = [
  // energyAB;          (A - 0, B - 1), (C - 2, D - 3), (E - 4, F - 5)
  // valuesC, canvaTimeSliderC, canvaTimeSliderT;
  //                    index-0: A index-1: B
  // canvaTimeSliderC;  0 - hidden, 1 - disabled, 2 - active
  // canvaTimeSliderT;  0 - hidden, 1 - disabled, 2 - active
  // valuesC;           0 ~ 100
  // valuesT;           0 ~ 20
  // beakerState;       0 - show empty dots, 1 - show A dots,
  //                    2 - Animation,       3 - AB dots
  // canvaTimeState;    0 - show Frame only, 1 - show Graph
  //                    2 - Animation,       3 - show End

  // 0   This is zero...
  { // 0
    valuesC: [0, 1],
    canvaTimeSliderC: [2, 0],
    canvaTimeSliderT: [2, 0],
    canvaTimeState: 0,
    canvaBeakerState: 1,
    isEnableChooseMenu: false,
  },
  // 1   Great! Now you ...
  { // 1
    canvaTimeSliderC: [1, 2],
    canvaTimeSliderT: [1, 2],
    canvaTimeState: 0,
    canvaBeakerState: 1,
  },
  // 2   The order of a ...
  { // 2
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 1,
    canvaBeakerState: 1,
  },
  // 3   Half-lie (t12) ...
  { // 3
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 1,
    canvaBeakerState: 1,
  },
  // 4   Let's watch how all...
  { // 4
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 2,
    canvaBeakerState: 2,
  },
  // 5   For this zero order ...
  { // 5
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 3,
    canvaBeakerState: 3,
  },
  // 6   You can click the....
  { // 6
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 3,
    canvaBeakerState: 3,
  },
  // 7   Amazing! Let's take...
  { // 7
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 3,
    canvaBeakerState: 3,
    isEnableChooseMenu: false,
  },
  // 8   Now, let's try choosing...
  { // 8
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 3,
    canvaBeakerState: 3,
    activeDotIndex: 0,
    isEnableChooseMenu: true,
  },
  // 9   Great! You picked a...
  { // 9
    canvaTimeSliderC: [2, 0],
    canvaTimeSliderT: [2, 0],
    canvaTimeState: 0,
    canvaBeakerState: 1,
    activeDotIndex: 1,
    isEnableChooseMenu: false,
  },
  // 10   Awesome! Now set ...
  { // 10
    canvaTimeSliderC: [1, 0],
    canvaTimeSliderT: [1, 2],
    canvaTimeState: 1,
    canvaBeakerState: 1,
  },
  // 11   Let's watch how all the...
  { // 11
    canvaTimeSliderC: [1, 0],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 2,
    canvaBeakerState: 2,
  },
  // 12   Amazing, let's take...
  { // 12
    canvaTimeSliderC: [1, 0],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 3,
    canvaBeakerState: 3,
    isEnableChooseMenu: false,
  },
  // 13   Now, let's try choosing... EF
  { // 13
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 1],
    canvaTimeState: 3,
    canvaBeakerState: 3,
    activeDotIndex: 1,
    isEnableChooseMenu: true,
  },
  // 14   Great! You picked a ...
  { // 14
    canvaTimeSliderC: [2, 0],
    canvaTimeSliderT: [2, 0],
    canvaTimeState: 0,
    canvaBeakerState: 1,
    activeDotIndex: 2,
    isEnableChooseMenu: false,
  },
  // 15   Awesome! Now set the ...
  { // 15
    canvaTimeSliderC: [1, 2],
    canvaTimeSliderT: [1, 0],
    canvaTimeState: 1,
    canvaBeakerState: 1,
  },
  // 16   Let's watch how all ...
  { // 16
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 0],
    canvaTimeState: 2,
    canvaBeakerState: 2,
  },
  // 17   Amazing, let's take ...
  { // 17
    canvaTimeSliderC: [1, 1],
    canvaTimeSliderT: [1, 0],
    canvaTimeState: 3,
    canvaBeakerState: 3,
  },
]

export const tur_MathBlanks = [
  [
    { left: 73, top: 115, width: 50 }, //0
    { left: 169, top: 98, width: 60 }, //1
    { left: 287, top: 98, width: 55 }, //2
    { left: 169, top: 136, width: 60 }, //3
    { left: 287, top: 136, width: 55 }, //4
    { left: 201, top: 185, width: 50 }, //5
    { left: 278, top: 185, width: 45 }, //6
    { left: 363, top: 185, width: 43 }, //7
    { left: 212, top: 237, width: 43 }, //8
    { left: 284, top: 237, width: 52 }, //9
    { left: 344, top: 237, width: 41 }, //10
  ],
  [
    { left: 212, top: 237, width: 43 }, //8
    { left: 344, top: 237, width: 41 }, //10
  ],
]
