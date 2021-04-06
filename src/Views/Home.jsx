import * as React from 'react';
import ProfileImage  from '../images/profileimage.png';
import useThemeMode from '../hooks/useThemeMode';
import cv from '../Files/cv.pdf';

function Home() {
     const [colorTheme, setTheme] = useThemeMode();
    const onResumeClick =()=> {
      window.open(cv);
    }

    return (
         <div class="flex items-center justify-center  bg-gray-300 dark:bg-gray-800 h-screen flex-wrap  lg:my-0">
    
          
          <div id="profile" class="w-full lg:w-2/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

            <div class="p-4 md:p-12 text-center lg:text-left">
              {/* <!-- Image for mobile view--> */}
              <img class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              src={ProfileImage}
              />
			
              <h1 class="text-3xl font-bold pt-8 lg:pt-0">Bashir Ibrahim Muhammad</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-gray-800 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> Software Engineer</p>
              <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-gray-800 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> Your Location - 25.0000° N, 71.0000° W</p>
              <p class="pt-8 text-sm">Web Application | Mobile Appplication | General IT Solutions</p>

              <div class="pt-12 pb-8">
              <a href="mailto:ibrahimembash@gmail.com?">
                <button  class="bg-green-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button> 
              </a>
              </div>

              <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a class="link" href="https://web.facebook.com/Odecy/" target="_blank"  data-tippy-content="@facebook_handle"><svg class="h-6 fill-current text-gray-600 hover:text-gray-800" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg></a>
                <a class="link" href="https://twitter.com/itsEmbash" target="_blank"  data-tippy-content="@twitter_handle"><svg class="h-6 fill-current text-gray-600 hover:text-gray-800" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
                <a class="link" href="https://www.github.com/embashgit/" target="_blank"  data-tippy-content="@github_handle"><svg class="h-6 fill-current text-gray-600 hover:text-gray-800" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                <a class="link" href="https://www.linkedin.com/in/embash/" target="_blank"  data-tippy-content="@linkedin_handle"><svg  class="h-6 fill-current text-gray-600 hover:text-gray-800" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a class="link" onClick={onResumeClick} target="_blank" ><svg role="img" class="h-6 fill-current text-gray-600 hover:text-gray-800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Resume</title><path d="M12.367 2.453a.822.822 0 0 0-.576.238L.241 14.213a.822.822 0 0 0-.241.584v.066c0-.323.209-.608.516-.709l7.275-2.318a2.437 2.437 0 0 0 1.584-1.592l2.318-7.267a.757.757 0 0 1 .719-.524zM0 14.863v5.047c0 .904.733 1.637 1.637 1.637h20.726c.904 0 1.637-.733 1.637-1.637V4.09c0-.904-.733-1.637-1.637-1.637h-9.951v.5l.088 9.861c.01 1.175-.962 2.14-2.137 2.14L0 14.862zM12 3.66l-2.148 6.735v.001a2.94 2.94 0 0 1-1.909 1.916l-6.716 2.141h9.136c.905 0 1.638-.734 1.637-1.639zm-10.363.975c-.905 0-1.638.734-1.637 1.638v7.473l9.135-9.111Z"/></svg> </a>
              </div>
			
              {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}

            </div>

          </div>
	
          {/* <!--Img Col--> */}
          <div class="w-full lg:w-1/5">
            {/* <!-- Big profile image for side bar (desktop) --> */}
            <img src={ProfileImage} class=" h-99 rounded-none lg:rounded-lg shadow-2xl hidden lg:block " style={{height:'30rem'}}/>
            {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
		
          </div>
	
	
          {/* <!-- Pin to top right corner --> */}
            <div class="absolute top-0 right-0 h-12 w-18 p-4">
            <button onClick={()=>setTheme(colorTheme)}  class="js-change-theme focus:outline-none">🌙</button>
            </div>

        </div>




        /* <div className="flex items-center justify-center h-screen bg-gray-300 dark:bg-gray-800 h-screen "  >
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md  overflow-hidden md:max-w-2xl ">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={Logo} alt="Man looking at item at a store"/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-white font-semibold">Case study</div>
            <p  onClick={()=>setTheme(colorTheme)} className="block mt-1 text-lg leading-tight font-medium text-black dark:text-gray-300 hover:underline">Finding customers for your new business</p>
            <p className="mt-2 text-gray-500 dark:text-gray-300">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
      </div>
    </div> */
    )
}

export default Home
