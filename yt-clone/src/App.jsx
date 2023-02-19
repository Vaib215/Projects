import NavBar from "./components/NavBar"
import SideBarExtended from "./components/SideBarExtended"

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-[#0f0f0f] text-white">
      <NavBar/>
      <SideBarExtended/>
    </div>
  )
}

export default App
