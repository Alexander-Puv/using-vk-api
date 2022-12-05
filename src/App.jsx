import VK, {Group} from 'react-vk/dist/react-vk.esm';
import './App.css'

function App() {
  return (
    <div className="App">
      <VK>
        <Group
          groupId={166562603}
          options={{mode: "4", no_cover: 0, wide: 1, width: "400", height: "600"}}
        />
      </VK>
    </div>
  )
}

export default App
