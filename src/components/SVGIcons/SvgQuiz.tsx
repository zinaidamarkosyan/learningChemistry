const SvgQuiz = ({ width = 40, height = 40, fillColor = 'black', isActive = false }) => {
  const fillOpacity = isActive ? 1 : 0.5
  return (<svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
    fillOpacity={fillOpacity}
  >
    <g id="icomoon-ignore">
    </g>
    <path d="M16 3.205h-8.53c-2.551 0-4.265 1.714-4.265 4.265v17.733c0 0.842 0.314 3.592 4.357 3.592h21.233v-25.59h-12.795zM14.934 4.271v10.2l-2.611-2.378-2.899 2.44v-10.261h5.511zM7.47 4.271h0.887v12.552l3.938-3.313 3.706 3.374v-12.613h11.729v17.593h-20.259c-1.357 0-2.457 0.405-3.199 1.113v-15.508c0-1.943 1.256-3.199 3.199-3.199zM7.562 27.729c-2.444 0-3.151-1.109-3.269-2.17 0.002-1.646 1.189-2.628 3.177-2.628h20.259v4.798h-20.167z">
    </path>
  </svg>)
}
export default SvgQuiz