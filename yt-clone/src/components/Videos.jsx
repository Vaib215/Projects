import React from 'react'
import Video from './Video'

const Videos = () => {
  const videos = [
    {
      title: 'Honest Quickies: Upcoming Bollywood Movies 2023 | Must Watch Bollywood...',
      duration: '6:49',
      channel: 'MenXP',
      channelId: 'https://yt3.ggpht.com/h-UdnxwJKY4JLNUEI82u3ac4YWiNk_j7-Px6dcltCM-7rQPGBBsq78YoXqyFmU6JG1bwn5HD=s88-c-k-c0x00ffffff-no-rj',
      view: '11K',
      time: '8 hours ago',
      code: 'p6c1A5fc3gs',
    },
    {
      title: 'Creating a REST API with Node.js and MongoDB',
      duration: '36:16',
      channel: 'Traversy Media',
      channelId: 'https://yt3.googleusercontent.com/ytc/AL5GRJXycfHq8uGLjANIDAfB6g_wsbEfeKkdWQcDUe73PQ=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '409K',
      time: '1 year ago',
      code: '2jqok-WgelI',
    },
    {
      title: 'Python OOP Tutorial - Working with Classes for Beginners',
      duration: '1:17:50',
      channel: 'Corey Schafer',
      channelId: 'https://yt3.googleusercontent.com/ytc/AL5GRJU64hyd4LIAGwFLDx7mLVVi6NprN6CL9oxKeuGF=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '1.1M',
      time: '3 years ago',
      code: 'ZDa-Z5JzLYM',
    },
    {
      title: 'Node.js Crash Course',
      duration: '1:29:57',
      channel: 'Traversy Media',
      channelId: 'https://yt3.googleusercontent.com/ytc/AL5GRJXycfHq8uGLjANIDAfB6g_wsbEfeKkdWQcDUe73PQ=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '1.5M',
      time: '2 years ago',
      code: 'fBNz5xF-Kx4',
    },
    {
      title: 'React.js vs Vue.js - Which Framework to Learn in 2021?',
      duration: '16:25',
      channel: 'DesignCourse',
      channelId: 'https://yt3.googleusercontent.com/ytc/AL5GRJWY80gxThRSwokhM6AjIWFituZfpPlq8QGk2UPmcQ=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '184K',
      time: '3 months ago',
      code: '82tZAPMHfT4',
    },
    {
      title: 'PHP Tutorial - Full Course for Beginners',
      duration: '5:21:17',
      channel: 'freeCodeCamp.org',
      channelId: 'https://yt3.googleusercontent.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '4.4M',
      time: '2 years ago',
      code: 'OK_JCtrrv-c',
    },
    {
      title: 'Introduction to C++ Programming',
      duration: '1:23:50',
      channel: 'freeCodeCamp.org',
      channelId: 'https://yt3.googleusercontent.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '1.7M',
      time: '3 years ago',
      code: 'Rub-JsjMhWY',
    },
    {
      title: 'Data Structures and Algorithms in JavaScript (Full Course)',
      duration: '6:04:34',
      channel: 'freeCodeCamp.org',
      channelId: 'https://yt3.googleusercontent.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '2.7M',
      time: '1 year ago',
      code: 'BBpAmxU_NQo',
    },
    {
      title: 'Python Tutorial for Beginners [Full Course] 2019',
      duration: '4:26:52',
      channel: 'Programming with Mosh',
      channelId: 'https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj-mo',
      view: '13M',
      time: '2 years ago',
      code: 'YYXdXT2l-Gg',
    },
    {
      title: 'Angular 12 Tutorial - Learn Angular 12 in this Crash Course',
      duration: '2:38:43',
      channel: 'edureka!',
      channelId: 'https://yt3.ggpht.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s68-c-k-c0x00ffffff-no-rj',
      view: '98K',
      time: '4 months ago',
      code: '88rSZG2mUYs',
    },
  ];

  return (
    <div className='videos mt-16 ml-64 flex-1 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 overflow-y-auto' >
      {
        videos.map((video, index) => (
          <Video key={index} {...video} />
        ))
      }
    </div >
  )
}

export default Videos