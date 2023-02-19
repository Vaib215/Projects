const NavBar = () => {
  return (
    <nav className="fixed w-full bg-[#0f0f0f] top-0 px-4 py-2 flex items-center justify-between">
      <div className="left-nav flex gap-4">
        <img className="w-10 p-2 rounded-full hover:bg-gray-500 cursor-pointer hover:bg-opacity-25" src="https://img.icons8.com/ios-filled/50/ffffff/menu-rounded.png" />
        <a href='/' className="logo flex items-center gap-2 ">
          <img src="https://img.icons8.com/laces/36/ffffff/youtube-play.png" />
          <h1 className="text-2xl font-semibold tracking-tighter">VaibTube</h1>
        </a>
      </div>
      <div className="center-nav w-2/5 flex gap-2">
        <div className="search-bar rounded-full w-full overflow-hidden flex items-center border-gray-500 border-[1px]">
          <input type="search" className="bg-black rounded-l-full w-full px-4 py-2 text-lg accent-white" placeholder="Search" />
          <img src="https://img.icons8.com/ios-glyphs/52/ffffff/search--v1.png" className="rounded-r-full w-16 py-2 px-5 bg-[#222222]" />
        </div>
        <button className="w-12 p-3 rounded-full hover:bg-gray-500 bg-gray-700 bg-opacity-25 cursor-pointer hover:bg-opacity-25">
          <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/microphone.png" />
        </button>
      </div>
      <div className="right-nav flex gap-3">
        <button className="w-12 p-3 rounded-full hover:bg-gray-500 hover:bg-opacity-25">
          <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/48/ffffff/external-add-video-social-media-interface-anggara-basic-outline-anggara-putra.png" />
        </button>
        <button className="w-12 p-3 rounded-full hover:bg-gray-500 hover:bg-opacity-25">
          <img src="https://img.icons8.com/material-outlined/52/ffffff/appointment-reminders--v1.png" />
        </button>
        <button className="w-12 p-2 rounded-full bg-green-700 hover:bg-opacity-25">
          <h1 className="text-lg font-bold">T</h1>
        </button>
      </div>
    </nav>
  )
}

export default NavBar