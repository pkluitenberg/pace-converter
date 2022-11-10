function paceConverter(minutes, seconds, units) {
    const totalSeconds = minutes*60 + seconds
    const conversionConstant = 0.6213692038495188
    return units==='mins/mi' ? (totalSeconds*conversionConstant) : (totalSeconds*(1/conversionConstant))
  }

export default paceConverter;