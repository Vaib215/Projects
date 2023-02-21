import React from 'react'
import NavList from './NavList'
import {MdHomeFilled,MdOutlineOutlinedFlag,MdOutlineHelpOutline,MdOutlineFeedback,MdOutlineMovie,MdOutlineMusicNote,MdLocalFireDepartment,MdOutlineSubscriptions,MdOutlineVideoLibrary,MdHistory,MdOutlinePersonalInjury} from 'react-icons/md'
import {FcFilmReel,FcBusinessman,FcManager,FcDebt,FcNightPortrait} from 'react-icons/fc'
import {BsBroadcast} from 'react-icons/bs'
import {IoNewspaperOutline,IoSettingsOutline,IoTrophyOutline,IoBulbOutline} from 'react-icons/io5'
import {FiShoppingBag} from 'react-icons/fi'
import {RiVideoLine} from 'react-icons/ri'
import {AiOutlineClockCircle, AiOutlineScissor,AiOutlineDown} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {TbHanger2} from 'react-icons/tb'

const SideBarExtended = () => {
  return (
    <aside className='fixed mt-16 w-64 h-[90vh] overflow-auto mr-auto'>
      <ul className='flex flex-col mx-3'>
        <NavList active icon={<MdHomeFilled size={24}/>}>Home</NavList>
        <NavList icon={<FcFilmReel size={24}/>}>Shorts</NavList>
        <NavList icon={<MdOutlineSubscriptions size={24}/>}>Subscriptions</NavList>
      </ul>
      <hr className='border-gray-700 mx-3 my-3'/>
      <ul className='flex flex-col mx-3'>
        <NavList icon={<MdOutlineVideoLibrary size={24}/>}>Library</NavList>
        <NavList icon={<MdHistory size={24}/>}>History</NavList>
        <NavList icon={<RiVideoLine size={24}/>}>Your Videos</NavList>
        <NavList icon={<AiOutlineClockCircle size={24}/>}>Watch Later</NavList>
        <NavList icon={<AiOutlineScissor size={24}/>}>Your Clips</NavList>
        <NavList icon={<AiOutlineDown size={24}/>}>Show More</NavList>
      </ul>
      <hr className='border-gray-700 mr-3 my-3'/>
      <h3 className='mx-6 text-lg'>Subscriptions</h3>
      <ul className='flex flex-col mx-3'>
        <NavList icon={<FcBusinessman size={24}/>}>Vaib</NavList>
        <NavList icon={<FcManager size={24}/>}>Sanam</NavList>
        <NavList icon={<MdOutlinePersonalInjury size={24}/>}>NetworkChuck</NavList>
        <NavList icon={<FcDebt size={24}/>}>WebDevSimplified</NavList>
        <NavList icon={<FcNightPortrait size={24}/>}>Hitesh Chaudhary</NavList>
        <NavList icon={<AiOutlineDown size={24}/>}>Show 116 More</NavList>
      </ul>
      <hr className='border-gray-700 mr-3 my-3'/>
      <h3 className='mx-6 text-lg'>Explore</h3>
      <ul className='flex flex-col mx-3'>
        <NavList icon={<MdLocalFireDepartment size={24}/>}>Trending</NavList>
        <NavList icon={<FiShoppingBag size={24}/>}>Shopping</NavList>
        <NavList icon={<MdOutlineMusicNote size={24}/>}>Music</NavList>
        <NavList icon={<MdOutlineMovie size={24}/>}>Movies</NavList>
        <NavList icon={<BsBroadcast size={24}/>}>Live</NavList>
        <NavList icon={<SiYoutubegaming size={24}/>}>Gaming</NavList>
        <NavList icon={<IoNewspaperOutline size={24}/>}>News</NavList>
        <NavList icon={<IoTrophyOutline size={24}/>}>Sports</NavList>
        <NavList icon={<IoBulbOutline size={24}/>}>Learning</NavList>
        <NavList icon={<TbHanger2 size={24}/>}>Fashion & Beauty</NavList>
      </ul>
      <hr className='border-gray-700 mr-3 my-3'/>
      <ul className='flex flex-col mx-3'>
        <NavList icon={<IoSettingsOutline size={24}/>}>Settings</NavList>
        <NavList icon={<MdOutlineOutlinedFlag size={24}/>}>Report history</NavList>
        <NavList icon={<MdOutlineHelpOutline size={24}/>}>Help</NavList>
        <NavList icon={<MdOutlineFeedback size={24}/>}>Send feedback</NavList>
      </ul>
    </aside>
  )
}

export default SideBarExtended