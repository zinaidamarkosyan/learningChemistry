import { createContext, useState } from "react"
import { MenuList, routes } from "../constants"
import { PageMenuType } from "../helper/types"

interface IAppContext {
  // --- Description --- curMenu
  // menu name for opened page.
  curMenu: PageMenuType,
  setCurMenu: React.Dispatch<React.SetStateAction<PageMenuType>>,
  // --- Description --- curStep
  // current tutorial step for opened page.
  curStep: number,
  setCurStep: React.Dispatch<React.SetStateAction<number>>,

  // --- Description --- concentrationAB
  // ; minValue = 0, maxValue = 100
  // A: concentrationAB[0],  B: concentrationAB[1]    A > B
  valuesC: (number)[],
  setValuesC: React.Dispatch<React.SetStateAction<(number)[]>>,

  // --- Description --- reactionTime
  // ; minValue = 0, maxValue = 20
  // A: reactionTime[0],     B: reactionTime[1]       A < B
  valuesT: number[],
  setValuesT: React.Dispatch<React.SetStateAction<number[]>>,

  // playAnimation: boolean,
  // setPlayAnimation: React.Dispatch<React.SetStateAction<boolean>>,
  showTimeGraph: number,
  setShowTimeGraph: React.Dispatch<React.SetStateAction<number>>,
  showTimeIndexT: number[]
  setShowTimeIndexT: React.Dispatch<React.SetStateAction<number[]>>,
  showTimeIndexC: number[]
  setShowTimeIndexC: React.Dispatch<React.SetStateAction<number[]>>,
}

const initialState = {
  count: 0,

  stepPlay: 0,
  concentration: [70, 35],
  reactionTime: [10, 15],
  // playAnimation: false,
  showTimeGraph: 0,

  // 0: hidden, 1: disabled, 2: active
  showIndexC: [2, 0],
  showIndexT: [2, 0],
}

const AppContext = createContext({} as IAppContext)

export const AppDataProvider = (props: any) => {
  const { children } = props
  const [count, setCount] = useState(props.count || initialState.count || 0)

  const [curMenu, setCurMenu] = useState<PageMenuType>(MenuList.zero)
  const [curStep, setCurStep] = useState(props.stepMotion || initialState.stepPlay || 0)
  // const [curTurs, setCurTurs] = useState()
  const [valuesC, setValuesC] = useState<(number)[]>(initialState.concentration)
  const [concentrationCD, setConcentrationCD] = useState(initialState.concentration)
  const [concentrationEF, setConcentrationEF] = useState(initialState.concentration)
  const [valuesT, setValuesT] = useState<number[]>(initialState.reactionTime);
  // const [playAnimation, setPlayAnimation] = useState<boolean>(initialState.playAnimation)
  const [curConcentrationAB, setCurConcentrationAB] = useState<number[]>([])

  const [showTimeGraph, setShowTimeGraph] = useState<number>(initialState.showTimeGraph) //  0; show Frame,  1; show Graph, 2; show Animation, 3; show end of Animation
  const [showTimeIndexC, setShowTimeIndexC] = useState<number[]>(initialState.showIndexC)
  const [showTimeIndexT, setShowTimeIndexT] = useState<number[]>(initialState.showIndexT)

  // need update, don't use yet
  const updateStepPlay = (step: number) => {
    let update = curStep + step
    if (update < 0) update = 0
    else if (update > 5) update = 5
    setCurStep(update)
  }

  return (
    <AppContext.Provider
      value={{
        curMenu,
        setCurMenu,
        curStep,
        setCurStep,
        // updateStepPlay,
        valuesC,
        setValuesC,
        valuesT,
        setValuesT,
        // playAnimation,
        // setPlayAnimation,
// controllers - Time Canvas
        showTimeGraph,
        setShowTimeGraph,
        showTimeIndexT,
        setShowTimeIndexT,
        showTimeIndexC,
        setShowTimeIndexC,
// controllers - Energy Canvas
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext