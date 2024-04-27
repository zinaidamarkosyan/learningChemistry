import useAppData from "../../../hooks/useAppData"
import styles from './kinetics.module.scss'
import { useCallback, useEffect, useState } from "react"
import EnergyProfile from "../../../components/EnergyProfile"
import ChartTime from "../../../components/ChartTime/ChartTime"
import ChartBar from "../../../components/ChartBar"
import MathContent from "../../../components/MathContent"
import TutorialControl from "../../../components/TutorialControl"
import { useHighLight } from "../../../hooks/useHighlight"
import { maxStep_Kinetics, stepsActions, tur_MathBlanks, tur_Hightlights, tur_Text } from "./constants"
import useFunctions from "../../../hooks/useFunctions"
import ChooseMenu from "../../../layout/ChooseMenu"
import WatchMenu from "../../../layout/WatchMenu"
import { dotColorList, sliderVertText } from "../../../constants"
import ChapterMenu from "../../../layout/ChapterMenu"
import ChartInA from "../../../components/ChartInA/ChartInA"
import { convertExpToHtml } from "../../../helper/functions"
import { EnergyCatalystContainer, EnergyCatalystMoveableItem } from "../../../components/EnergyCatalyst"
import { BeakerSettings, BeakerShape } from "../../../components/CanvasBeaker/BeakerShape"
import BeakerWater from "../../../components/CanvasBeaker/BeakerShape/BeakerWater"
import { ChamberF } from "../../../components/CanvasBeaker/Chamber/ChamberF"
import Chamber from "../../../components/CanvasBeaker/Chamber/Chamber"

const ReactionKinetics = () => {
  const {
    curStep,
    valuesC,
    setValuesC,
    valuesT,
    setValuesT,
    canvaTimeSliderC,
    setCanvaTimeSliderC,
    canvaTimeSliderT,
    setCanvaTimeSliderT,
    canvaTimeState,
    setCanvaTimeState,
    setCurStep,
    canvaBeakerState,
    setCanvaBeakerState,
    setTimeframe,
    isEnableChooseMenu,
    setIsEnableChooseMenu,
    activeDotIndex,
    setActiveDotIndex,
  } = useAppData()

  const {
    updatePageFromMenu,
    getNextMenu,
  } = useFunctions()

  const { highlightElement, removeHighlightElement, isHighlight } = useHighLight()
  const [catalystItemStates, setCatalystItemStates] = useState([3, 2, 2])

  // *** Setup tutorial actions here
  const tutorials = Array.from(Array(tur_Text.length).keys()).map(idx => {
    return {
      text: tur_Text[idx],
      highlight: tur_Hightlights[idx],
      actions: stepsActions[idx],
    }
  })

  // *** Tutorial-ACTIONS  - curStep changes
  const curActions = tutorials[curStep]?.actions as any
  useEffect(() => {
    console.log('*** Tutorial-ACTIONS  - curStep changes', { curStep })
    // console.log('curActions: ', { curActions, curStep })
    if (curActions) {
      if (curActions?.canvaTimeState !== undefined) {
        setCanvaTimeState(curActions.canvaTimeState)
      }
      if (curActions?.canvaBeakerState !== undefined) {
        setCanvaBeakerState(curActions.canvaBeakerState)
      }
      if (curActions?.isEnableChooseMenu !== undefined) {
        console.log('zzz curActions.isEnableChooseMenu', curActions.isEnableChooseMenu)
        setIsEnableChooseMenu(curActions.isEnableChooseMenu)
      }
      if (curActions?.activeDotIndex !== undefined) {
        console.log('zzz curActions.activeDotIndex', curActions.activeDotIndex)
        setActiveDotIndex(curActions.activeDotIndex)
      }
      if (Array.isArray(curActions?.canvaTimeSliderC)) {
        setCanvaTimeSliderC(curActions.canvaTimeSliderC)
      }
      if (Array.isArray(curActions?.canvaTimeSliderT)) {
        setCanvaTimeSliderT(curActions.canvaTimeSliderT)
      }
    }

  }, [curStep, curActions])

  const handleClickChooseMenuItem = () => {
    onStepChange(1)
  }

  const getFormula = () => {
    const c1 = (valuesC[0] ?? 0) / 100
    const c2 = (valuesC[1] ?? 0) / 100
    const t1 = valuesT[0]
    const At = c2
    const A0 = c1
    const k = ((1 / At) - (1 / A0)) / t1
    const t_12 = 1 / (k * A0)
    const rate = k * (At * At)

    const exp0 = `\\[ k = A e^{-Ea/RT}\\]`
    const exp1 = `\\[ ln(k) = ln(A) - \\frac{Ea}{RT}\\]`
    const exp2 = `\\[ ln(\\frac{k1}{k2}) = \\frac{Ea}{R}(\\frac{T_1 - T_2}{T_1T_2}) \\]`
    const exp4 = `\\[ ln(\\frac{1.3}{1.3}) = \\frac{9e3}{8.31}(\\frac{400 - 400}{400 x 400}) \\]`

    return {
      exp0,
      exp1,
      exp2,
      exp4,
    }
  }

  const getTurTextByStep = useCallback(() => {
    const c1 = (valuesC[0] ?? 0) / 100
    const c2 = (valuesC[1] ?? 0) / 100
    const t1 = valuesT[0]
    const At = c2
    const A0 = c1
    const k = ((1 / At) - (1 / A0)) / t1
    const t_12 = 1 / (k * A0)
    const rate = k * (At * At)
    // console.log({c1, c2, t1, t2, lnA0, lnAt, k, t_12, rate})

    // turText can be undefined on new page due to curStep(lazy changes of state variable)
    const turTxt = tur_Text[curStep]
    const turVal = [
      k.toFixed(3),   // val[0]
      t_12.toFixed(2),// val[1]
      k.toFixed(2),   // val[2]
    ]
    const update = turTxt?.map((item) => {
      // const update: string[] = []
      let res = ''
      if (typeof item === 'function') {
        res = item(turVal)
      } else {
        res = item
      }
      return convertExpToHtml(res)
    }) ?? []
    return update
  }, [curStep])

  // get available next step number
  const getNextStep = (step: number) => {
    let update = curStep + step
    if (update < 0) {
      update = 0
      console.log('getNextStep 0', { update })
      updatePageFromMenu(getNextMenu(-1))
      return
    }
    else if (update >= maxStep_Kinetics) {
      update = maxStep_Kinetics - 1
      updatePageFromMenu(getNextMenu(1))
      return
    }

    return update
  }
  // call when click prev step
  const onStepChange = (step: number) => {
    console.log('===onStepChange===', { step })
    const nextStep = getNextStep(step)
    console.log({ nextStep })
    if (nextStep === undefined) return
    if (curStep === nextStep) return
    // Tutorial-Highlight
    removeHighlightElement(tutorials[curStep]?.highlight)
    if (tutorials[nextStep]?.highlight?.length > 0) {
      highlightElement(tutorials[nextStep].highlight)
    }

    console.log({ curStep })
    setCurStep(nextStep)
  }
  // remove highlighted elements when page opens
  useEffect(() => {
    return () => removeHighlightElement(tutorials[curStep]?.highlight)
  }, [])


  const width = 290
  const height = 320
  const concentration = 0.4
  const settings = new BeakerSettings(290, true)

  console.log({ settings })

  const activeGases = [
    {
      id: 3,
      particleSize: 6,  // ** control gas cirle size
      color: 0x00d0f0,  // ** control gas color
      name: 'Oxygen',
      symbol: <>O<sub>2</sub></>,
      svgSymbol: <>O<tspan baselineShift="sub">2</tspan></>,
      mass: 1
    },
    {
      id: 9,
      particleSize: 6,  // ** control gas cirle size
      color: 0xff0000,  // ** control gas color
      name: 'Hydrogen',
      symbol: <>H<sub>2</sub></>,
      svgSymbol: <>H<tspan baselineShift="sub">2</tspan></>,
      mass: 1
    },
  ]
  const gasProportions = [5, 5];  // ** control counts here
  const isPlaying = true
  const allowEscape = false
  const escapeSpeed = 1000
  const temperature = 0.01

  const [count, setCount] = useState(0)

  return <div className={styles.container}>
    <ChapterMenu />
    <ChooseMenu isEnable={isEnableChooseMenu} onClickItem={() => handleClickChooseMenuItem()} />
    {/* <WatchMenu /> */}

    <div className={styles.reactionDrawContainer}>
      <button
        onClick={() => setCount(count + 1)}
      >TEST</button>
      <EnergyCatalystContainer
        catalystTypes={[0, 1, 3]}
        catalystItemStates={catalystItemStates}
        setCatalystItemStates={(val) => setCatalystItemStates(val)}
      />
      <div className={styles.reactionBeaker}>
        <div style={{ position: 'relative' }}>
          <BeakerShape
            width={width}
            height={height}
            settings={settings}
            waterlevel={0.4}
          />
          {/* <ChamberF
            width={width}
            height={height}
            activeGases={activeGases}
            gasProportions={gasProportions}
            isPlaying={isPlaying}
            allowEscape={allowEscape}
            escapeSpeed={escapeSpeed}
            temperature={temperature}
            count={count}
          /> */}
          <Chamber
            width={width}
            height={height}
            activeGases={activeGases}
            gasProportions={gasProportions}
            isPlaying={isPlaying}
            allowEscape={allowEscape}
            escapeSpeed={escapeSpeed}
            temperature={temperature}
          />
        </div>
        {/* <EnergyProfile
          valuesC={valuesC}
          valuesT={valuesT}
          beakerDotColor={dotColorList[activeDotIndex]}
          beakerState={canvaBeakerState}
          onEndPlay={() => onStepChange(1)}
        /> */}
      </div>
    </div>
    <div className={styles.reactionContentContainer}>
      <div className={styles.reactionChartRow}>
        <div className={styles.chartInA}>
          <ChartInA
            valuesC={valuesC}
            canvaTimeSliderC={canvaTimeSliderC}
            valuesT={valuesT}
            canvaTimeSliderT={canvaTimeSliderT}
            canvaTimeState={canvaTimeState}
            onTimeframeChange={val => setTimeframe(val)}
            colors={dotColorList[activeDotIndex]}
            textVert={`In(${'A'})`}
            textHoriz={`Time`}
          />
        </div>
        <div className={styles.chartInA}>
          <ChartInA
            valuesC={valuesC}
            canvaTimeSliderC={canvaTimeSliderC}
            valuesT={valuesT}
            canvaTimeSliderT={canvaTimeSliderT}
            canvaTimeState={canvaTimeState}
            onTimeframeChange={val => setTimeframe(val)}
            colors={dotColorList[activeDotIndex]}
            textVert={`In(${'A'})`}
            textHoriz={`Time`}
          />
        </div>
      </div>
      <div className={styles.reactionContentRow}>
        <MathContent
          className={styles.mathContent}
          {...getFormula()}
          blanks={tur_MathBlanks[curStep]}
          blanksCount={11}
        />
        <TutorialControl
          turText={getTurTextByStep()}
          onStepChange={onStepChange}
          isDisableNextButton={isEnableChooseMenu}
        />
      </div>
    </div>
    {isHighlight && <div className='overlay'></div>}
  </div>
}
export default ReactionKinetics
