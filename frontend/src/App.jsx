import React from 'react'
import rohan2 from "./assets/rohan2.png"
import TextType from './Components/TextType';


const App = () => {
  return (
    <div>


      {/* navbar */}

      <div className='fixed z-50 flex  justify-between w-full text-black sm:pl-5  md:pl-10 md:pr-10 sm:pr-2 pl-10   pr-10 border-b-1 border-sky-400  items-center h-18 bg-slate-950'>
        <div>
          <h1 className='text-2xl w-50 flex font-black text-pink-400'>Rohan Waseem</h1>
        </div>
        <div className='flex sm:gap-2 lg:gap-5 xl:gap-10 gap-10 text-sky-400 font-bold'>
         <a href="#about"> <div className='hidden sm:block'><h1>About</h1></div></a>
          <a href="#experience"> <div className='hidden sm:block'><h1>Experience</h1></div></a>
         <a href="#skills">  <div className='hidden sm:block'><h1>Skills</h1></div></a>
           <a href="#projects"><div className='hidden sm:hidden md:block'><h1 >Projects</h1></div></a>
          <a href="#contact"> <div className='hidden sm:block'><h1>Contact</h1></div></a>


        </div>
      </div>

      {/* pic page  */}

      <div className='w-full h-screen flex-col lg:pb-15 bg-slate-950 pt- flex items-center  justify-center'>

    


<div className='w-35 transition-transform duration-300 hover:scale-105'>
  <img src={rohan2} alt="" className='bg-white rounded-4xl' />
</div>


        <div className='flex justify-center items-center'>
          <h1 className='text-4xl font-bold   text-sky-400 text-center mt-8 md:text-6xl '>Mern Stack Developer</h1>
        </div>




        <TextType
          text={["Web App Development", "Software Development", "Happy coding!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="|"
          texts={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]}
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.2}
          className='text-2xl md:text-3xl pt-2 text-white'
        />




        {/* button  */}

        <div className='flex gap-5 md:pt-7 md:gap-7 pt-5 text-lg'>
          <a href="#projects">
          <div className='bg-cyan-600 pl-4 pr-4 lg:pl-8 lg:pr-8 lg:pt-2 lg:pb-2 pt-1 pb-1 md:pl-6 md:pr-6 rounded-2xl transition-transform duration-300 hover:translate-y-1 text-white'><button>
            View Projects</button></div>
</a>

<a href="#contact">
          <div className='bg-cyan-600 pl-4 md:pl-6 md:pr-6 lg:pl-8 lg:pr-8 lg:pt-2 lg:pb-2 pr-4 pt-1 pb-1 rounded-2xl text-white transition-transform duration-300 hover:translate-y-1'><button>
            Conatct Us </button></div></a>
        </div>



      </div>



{/* About page  */}

<div id="about" className='w-full h-full lg:h-screen pb-15 sm:pb-40 md:pb-20   bg-slate-950 pt-5 '>

  <div className='text-sky-400 relative z-10 sm:pr-90 pr-65 lg:relative lg:top-20  lg:pr-100  lg:text-5xl  md:pr-30  2xl:pr-130 2xl:text-5xl  text-4xl pl-10 font-bold'>
    <h1>About Me</h1>


  </div>
  
  <div className='flex justify-center items-center  h-full'>
  <div className='bg-slate-900  md:h-90 lg:h-100 xl:w-250 2xl:w-280 text-gray-100 rounded-2xl text-lg m-10  flex justify-center'>
    <h1 className='pt-8 pl-10 pr-8 pb-5'><p>I am a passionate MERN Stack Developer with hands-on experience in building modern and responsive web applications using React.js, Node.js, Express.js, and MongoDB.</p>

<p className='mt-2'>I have completed professional training in both frontend and backend development and enjoy creating real-world solutions.</p>

<p className='mt-2'>As a fast learner and team player, I am continuously improving my skills in web development, API integration, and Machine Learning.</p>

<p className='mt-2 pb-2 '>I am seeking opportunities to contribute, learn, and grow as a full-stack developer.</p>

<p className='mt-2 pb-2 hidden md:block'>I am actively learning Machine Learning and Data Science to expand my expertise in intelligent systems and data-driven applications</p>


<p className='mt-2 pb-2 hidden lg:block'>I am always eager to learn new technologies and take on challenging projects that help me grow as a software developer</p>


</h1>
  </div>
  </div>

</div>


{/* professinal exxperience  */}


<div id='experience' className='w-full h-full xl:h-130  bg-slate-950 pt-5'>
  <div className='text-sky-400  text-5xl pl-10 lg:relative xl:top-17 font-bold'>
    <h1>Professional Experience</h1>


  </div>

<div className='flex justify-center items-center h-full'>
<div className='pl-10 pr-10 flex  gap-5  items-center justify-center  flex-wrap'>


    <div className='bg-slate-900 flex flex-col lg:h-90 hover:border-cyan-400 z-10  hover:border-2 transition-transform duration-300 hover:-translate-y-1 rounded-2xl justify-center  items-center h-65 mt-10 sm:w-[46%] sm:h-70 lg:w-[30%]'>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Decode Lab</h1></div>

    <div><h1 className='text-white italic mt-1'>May 2026 – Present </h1></div>

    <div><h1 className='text-white italic mt-1'> Mern Stack Development internship </h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Developed responsive and interactive web interfaces using HTML, Tailwind CSS, JavaScript, and React JS during frontend development training.</h1></div>

  </div>

   <div className='bg-slate-900 flex flex-col lg:h-90 hover:border-cyan-400 hover:border-2 transition-transform duration-300 hover:-translate-y-1 rounded-2xl justify-center  items-center h-65 mt-10 sm:w-[46%] sm:h-70 lg:w-[30%]'>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>TECHNOSYS</h1></div>

    <div><h1 className='text-white italic mt-1'>Nov 2024 – Jan 2026</h1></div>

    <div><h1 className='text-white italic mt-1'>MERN Stack Development Trainee  </h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Completed hands-on training in full-stack web development using the MERN stack.Built 
and practised real-world projects. </h1></div>

  </div>

    <div className='bg-slate-900 flex flex-col lg:h-90 hover:border-cyan-400 hover:border-2 transition-transform duration-300  hover:-translate-y-1 rounded-2xl justify-center  items-center h-65 mt-10 sm:w-[46%] sm:h-70 lg:w-[30%]'>
    <div>
    <h1 className='text-xl text-sky-400 font-bold '>MAXIMAL CONSULTANCY </h1></div>

    <div><h1 className='text-white italic mt-1'>Apr 2024 – Nov 2024</h1></div>

    <div><h1 className='text-white italic mt-1'>Frontend Development Trainee </h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Completed frontend development training with focus on building modern, responsive web 
interfaces.HTML Tailwind CSS JavaScript React JS </h1></div>

  </div>
  

  
  </div>
  </div>

</div>


{/* Core Skills */}

<div id='skills' className='w-full h-screen  bg-slate-950 pt-5'>
   <div className='text-sky-400 sm:relative sm:top-30 lg:top-45  lg:text-5xl text-4xl pl-10 font-bold'>
    <h1>Core Skills</h1>


  </div>

<div className='flex  items-center justify-center h-full'>
  <div className='pl-10 pr-10 flex items-center justify-center flex-wrap gap-5 mt-1'>


 <div className='bg-slate-900 transition-transform duration-300 sm:h-20 hover:-translate-y-1 flex rounded-2xl justify-center hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%]  '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>Node JS </h1></div>
  </div>

  <div className='bg-slate-900 flex rounded-2xl justify-center sm:h-20 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%] '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>React JS </h1></div>
  </div>


 <div className='bg-slate-900 flex rounded-2xl justify-center sm:h-20 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%] '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>Express JS </h1></div>
  </div>


 <div className='bg-slate-900 flex rounded-2xl justify-center sm:h-20 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%] '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>MongoDB </h1></div>
  </div>

   <div className='bg-slate-900 flex rounded-2xl sm:h-20 justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%] '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>HTML </h1></div>
  </div>

   <div className='bg-slate-900 sm:h-20 flex rounded-2xl justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%] '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>Tailwind CSS </h1></div>
  </div>

   <div className='bg-slate-900 sm:h-20 flex rounded-2xl justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%] '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>Fast API Integration </h1></div>
  </div>

   <div className='bg-slate-900 sm:h-20 flex rounded-2xl justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:border-2  items-center h-15  w-full sm:w-[48%] lg:w-[30%] '>
    <div className=''>
    <h1 className='text-2xl  font-bold text-white'>Machine Learning </h1></div>
  </div>


  </div>

  </div>
</div>


{/* feature project  */}

<div id='projects' className='w-full h-full lg:h-screen pb-20 bg-slate-950 pt-5'>
    <div className='text-sky-400  text-5xl pl-10 font-bold'>
    <h1>Feature Projects</h1>


  </div>


<div className='lg:flex lg:items-center lg:justify-center h-full'>
<div className='pl-10 pr-10 flex  gap-5  items-center justify-center  flex-wrap'>


  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>


    <div><h1 className='text-white italic mt-1'>E-commerce Website</h1></div>

        <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Rainbow Cash & Carry</h1></div>

    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>A modern and responsive e-commerce platform that enables users to browse products, manage their cart, and complete secure online purchases seamlessly.</h1></div>

    <div className='pt-5'><a href='https://github.com/RohanWaseem/rainbowcashandcarry' target='blank' className='bg-sky-400  pl-8 pr-8 rounded-2xl  pt-1 pb-1 w-40'>GitHub</a></div>

  </div>

    <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>

    <div><h1 className='text-white italic mt-1'>Point Of Sale</h1></div>


    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Business Management Software</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>A comprehensive POS solution for managing sales, inventory, customers, and business operations efficiently in real time.</h1></div>

    <div className='pt-5'><a href='https://github.com/RohanWaseem/Sky-Limit-Software' target='blank' className='bg-sky-400  pl-8 pr-8 rounded-2xl  pt-1 pb-1 w-40'>GitHub</a></div>


  </div>

 
  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>

    <div><h1 className='text-white italic mt-1'>Website</h1></div>


    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Note App</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>A simple and intuitive note-taking application that allows users to create, organize, edit, and manage notes efficiently across their daily tasks and ideas.</h1></div>

    <div className='pt-5'><a href='https://github.com/RohanWaseem/noteapp' target='blank' className='bg-sky-400  pl-8 pr-8 rounded-2xl  pt-1 pb-1 w-40'>GitHub</a></div>


  </div>


  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>

    <div><h1 className='text-white italic mt-1'>School Website</h1></div>


    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Life School</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>An educational platform designed to teach essential life skills, personal development, and practical knowledge to help individuals succeed in real-world situations.</h1></div>

    <div className='pt-5'><a href='https://github.com/RohanWaseem/Life-Schools' target='blank' className='bg-sky-400  pl-8 pr-8 rounded-2xl  pt-1 pb-1 w-40'>GitHub</a></div>


  </div>

  
  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>

    <div><h1 className='text-white italic mt-1'>Website</h1></div>


    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Maximal Consultancy</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Leading community operations, technical is event management, and team coordination activities.</h1></div>

    <div className='pt-5'><a href='https://github.com/RohanWaseem/maximal-consultancy' target='blank' className='bg-sky-400  pl-8 pr-8 rounded-2xl  pt-1 pb-1 w-40'>GitHub</a></div>


  </div>

  



  
  

  
  </div>
</div>

</div>



{/* Why Hire Me */}

<div className='w-full h-full lg:h-screen pb-20 bg-slate-950 pt-5'>
    <div className='text-sky-400 lg:relative lg:top-10 text-5xl pl-10 font-bold'>
    <h1>Why Hire Me</h1>


  </div>


<div className='h-full lg:flex lg:items-center lg:justify-center'>
<div className='pl-10 pr-10 flex  gap-5  items-center justify-center  flex-wrap'>


  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Leadership Skills</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Experienced in leading teams, managing university events, and coordinating technical communities professionally.</h1></div>

  </div>

  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex flex-col transition-transform duration-300 hover:-translate-y-1 rounded-2xl justify-center  items-center h-50 mt-10  sm:w-[46%] sm:h-60 lg:w-[30%]'>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Problem Solving Mindset</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Focused on solving real-world challenges through logical thinking, creativity, and modern web solutions.</h1></div>

  </div>

    <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex flex-col transition-transform duration-300 hover:-translate-y-1 rounded-2xl justify-center  items-center h-50 mt-10 sm:w-[46%] sm:h-60 lg:w-[30%]'>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Strong Communication</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Skilled in hosting, public speaking, presentations, and delivering impactful communication.</h1></div>

  </div>
  
  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex flex-col transition-transform duration-300 hover:-translate-y-1 rounded-2xl justify-center  items-center h-50 mt-10 sm:w-[46%] sm:h-60 lg:w-[30%]'>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Focused & Dedicated</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Passionate about continuous learning, growth, and improving technical and professional skills.</h1></div>

  </div>
  

  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex flex-col transition-transform duration-300 hover:-translate-y-1 rounded-2xl justify-center  items-center h-50 mt-10 sm:w-[46%] sm:h-60 lg:w-[30%]'>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>On-Time Project Delivery</h1></div>


    <div><h1 className='pl-10 pr-10 mt-1 flex items-center text-white'>Dedicated to completing projects efficiently with proper planning, organization, and time management.</h1></div>

  </div>

  </div>

</div>
</div>


{/* Social Media Accouts*/}

<div className='w-full h-full lg:h-screen pb-20 bg-slate-950 pt-5'>
    <div className='text-sky-400 lg:relative lg:top-30   text-5xl pl-10 font-bold'>
    <h1>Social Media Accounts</h1>


  </div>


<div className='lg:flex lg:items-center lg:justify-center h-full'>

<div className='pl-10 pr-10 flex  gap-5  items-center justify-center  flex-wrap'>


  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:h-40 lg:w-[30%] '>
  
    <div>
      <a href="https://www.linkedin.com/in/rohan-waseem-65a81827a"  target='blank' className='text-2xl text-sky-400 font-bold'>LinkedIn</a>
    </div>

  <div>
      <a href="https://www.linkedin.com/in/rohan-waseem-65a81827a" target='blank'  className='pl-10 pr-10 mt-1 flex items-center text-white'>Professional Profile & Networking</a>
    </div>


  </div>

  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:h-40 lg:w-[30%] '>
  
    <div>
      <a href="" className='text-2xl text-sky-400 font-bold'>Website</a>
    </div>

  <div>
      <a href="" className='pl-10 pr-10 mt-1 flex items-center text-white'>Personal Developer Portfolio</a>
    </div>


  </div>

    <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:h-40 lg:w-[30%] '>
  
    <div>
      <a href="https://github.com/RohanWaseem" target='blank' className='text-2xl text-sky-400 font-bold'>GitHub</a>
    </div>

  <div>
      <a href="https://github.com/RohanWaseem" target='blank' className='pl-10 pr-10 mt-1 flex items-center text-white'>Mern Stack Project & Source code</a>
    </div>


  </div>

    <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:h-40 lg:w-[30%] '>
  
    <div>
      <a href="https://www.facebook.com/profile.php?id=100089737486454" target='blank' className='text-2xl text-sky-400 font-bold'>Facebook</a>
    </div>

  <div>
      <a href="https://www.facebook.com/profile.php?id=100089737486454" target='blank' className='pl-10 pr-10 mt-1 flex items-center text-white'>Personal Information</a>
    </div>


  </div>
  
<div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:h-40 lg:w-[30%] '>
  
    <div>
      <a href="" className='text-2xl text-sky-400 font-bold'>Instagram</a>
    </div>

  <div>
      <a href="" className='pl-10 pr-10 mt-1 flex items-center text-white'>Personal Branding.</a>
    </div>


  </div>
 
  
<div className='bg-slate-900 hover:border-cyan-400 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-50 mt-10 w-full sm:w-[46%] sm:h-60 lg:h-40 lg:w-[30%] '>
  
    <div>
      <a href="https://www.fiverr.com/sellers/rohanwaseem_dev/edit" target='blank' className='text-2xl text-sky-400 font-bold'>Fiver</a>
    </div>

  <div>
      <a href="https://www.fiverr.com/sellers/rohanwaseem_dev" target='blank' className='pl-10 pr-10 mt-1 flex items-center text-white'></a>
    </div>


  </div>

 

    
  
  </div>
  </div>

</div>


{/* Contact with me */}

<div id='contact' className='w-full h-screen pb-20 bg-slate-950 pt-5'>
    <div className='text-sky-400 lg:relative lg:top-30  text-5xl pl-10 font-bold'>
    <h1>Contact With Me</h1>


  </div>



<div className=' lg:flex lg:flex-col lg:justify-center lg:items-center h-full'>
<div className='pl-10 pr-10 flex  gap-5  items-center justify-center  flex-wrap'>


  <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 lg:h-80 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-46 mt-5 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Email</h1></div>


    <div><h1 className='pl-10 pr-10 flex items-center text-white italic  mt-5'>rohanwaseem985@gmail.com</h1></div>

  </div>

    <div className='bg-slate-900 hover:border-cyan-400 hover:border-2 lg:h-80 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-46 mt-5 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>WhatsApp</h1></div>


    <div><h1 className='pl-10 pr-10 flex items-center text-white italic mt-5'>0322-4730996</h1></div>

  </div>

  
  <div className='bg-slate-900 hover:border-cyan-400 lg:h-80 hover:border-2 flex transition-transform duration-300 hover:-translate-y-1 flex-col rounded-2xl justify-center  items-center h-46  mt-5 w-full sm:w-[46%] sm:h-60 lg:w-[30%] '>
    <div>
    <h1 className='text-2xl text-sky-400 font-bold'>Availability</h1></div>


    <div><h1 className='pl-10 pr-10 flex items-center text-white italic mt-5'>Open for Internships, Freelance, Mern Stack Development & Software Development.</h1></div>

  </div>

  
  </div>
  </div>

</div>


    </div>
  )
}

export default App