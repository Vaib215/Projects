import NavBar from "./components/NavBar"
import SideBarExtended from "./components/SideBarExtended"
import Videos from "./components/Videos"

function App() {
  return (
    <div className="App flex h-screen overflow-hidden bg-[#0f0f0f] text-white">
      <NavBar/>
      <SideBarExtended/>
      <Videos/>
    </div>
  )
}

export default App
