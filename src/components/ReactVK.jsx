import React from 'react'
import VK, {Group} from 'react-vk/dist/react-vk.esm';

const ReactVK = () => {
  return (
    <VK>
      <Group
        groupId={166562603}
        options={{mode: "4", no_cover: 0, wide: 1, width: "400", height: "600"}}
      />
    </VK>
  )
}

export default ReactVK