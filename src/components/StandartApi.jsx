import React, { useEffect } from 'react'

const StandartApi = () => {
  useEffect(() => {
    VK.Widgets.Group("vk_groups", {mode: 4, wide: 1, width: 400, height: 600, color1: "000000", color2: "ffffff", color3: "5181B8"}, 166562603)
  }, [])
  return (
    <div id={'vk_groups'} />
  )
}

export default StandartApi