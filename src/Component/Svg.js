import React from 'react'

const HomeIcon = ({onHover, Focus,width,height}) => {
  return (
    <svg version="1.1"
    viewBox="0 0 512 512"  space="preserve" width={width} height={height}>

       <path fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`} d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064
           c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57
           c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"/>
  
       <path fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`} d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52
           s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053
           c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89
           c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024
           c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847
           C455.549,238.499,449.593,232.543,442.246,232.543z"/>
 
</svg>
  )
}

export const GallaryIcon = ({onHover, Focus,width,height}) => {
  return (
    <svg version="1.1" id="Capa_1" 
     viewBox="0 0 430.23 430.23"  space="preserve"  width={width} height=
     {height}>

			<path  fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`} d="M217.875,159.668c-24.237,0-43.886,19.648-43.886,43.886c0,24.237,19.648,43.886,43.886,43.886
				c24.237,0,43.886-19.648,43.886-43.886C261.761,179.316,242.113,159.668,217.875,159.668z M217.875,226.541
				c-12.696,0-22.988-10.292-22.988-22.988c0-12.696,10.292-22.988,22.988-22.988h0c12.696,0,22.988,10.292,22.988,22.988
				C240.863,216.249,230.571,226.541,217.875,226.541z"/>
			<path  fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`} d="M392.896,59.357L107.639,26.966c-11.071-1.574-22.288,1.658-30.824,8.882c-8.535,6.618-14.006,16.428-15.151,27.167
				l-5.224,42.841H40.243c-22.988,0-40.229,20.375-40.229,43.363V362.9c-0.579,21.921,16.722,40.162,38.644,40.741
				c0.528,0.014,1.057,0.017,1.585,0.01h286.824c22.988,0,43.886-17.763,43.886-40.751v-8.359
				c7.127-1.377,13.888-4.224,19.853-8.359c8.465-7.127,13.885-17.22,15.151-28.212l24.033-212.114
				C432.44,82.815,415.905,62.088,392.896,59.357z M350.055,362.9c0,11.494-11.494,19.853-22.988,19.853H40.243
				c-10.383,0.305-19.047-7.865-19.352-18.248c-0.016-0.535-0.009-1.07,0.021-1.605v-38.661l80.98-59.559
				c9.728-7.469,23.43-6.805,32.392,1.567l56.947,50.155c8.648,7.261,19.534,11.32,30.825,11.494
				c8.828,0.108,17.511-2.243,25.078-6.792l102.922-59.559V362.9z M350.055,236.99l-113.894,66.351
				c-9.78,5.794-22.159,4.745-30.825-2.612l-57.469-50.678c-16.471-14.153-40.545-15.021-57.992-2.09l-68.963,50.155V149.219
				c0-11.494,7.837-22.465,19.331-22.465h286.824c12.28,0.509,22.197,10.201,22.988,22.465V236.99z M409.112,103.035
				c-0.007,0.069-0.013,0.139-0.021,0.208l-24.555,212.114c0.042,5.5-2.466,10.709-6.792,14.106c-2.09,2.09-6.792,3.135-6.792,4.18
				V149.219c-0.825-23.801-20.077-42.824-43.886-43.363H77.337l4.702-40.751c1.02-5.277,3.779-10.059,7.837-13.584
				c4.582-3.168,10.122-4.645,15.674-4.18l284.735,32.914C401.773,81.346,410.203,91.545,409.112,103.035z"/>
	
</svg>
  )
}

export  const ContactIcon =({onHover, Focus,width,height}) => {
  return (
    <svg version="1.1" 
    viewBox="0 0 512 512"  space="preserve"  width={width} height=
     {height}>
     <path  fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`}  d="M256,60c-57.897,0-105,47.103-105,105c0,35.943,18.126,69.015,48.487,88.467c31.003,19.863,69.06,21.974,104.426,5.703
			c7.525-3.462,10.82-12.37,7.357-19.896c-3.462-7.525-12.369-10.82-19.896-7.358c-25.86,11.898-53.454,10.545-75.703-3.709
			C193.961,214.298,181,190.669,181,165c0-41.355,33.645-75,75-75s75,33.645,75,75c0,8.271-6.729,15-15,15
			c-7.558,0-14.618-5.732-14.998-14.772C301.001,165.152,301,165.076,301,165c0-24.813-20.187-45-45-45s-45,20.187-45,45
			s20.187,45,45,45c11.516,0,22.031-4.353,29.999-11.494C293.966,205.648,304.483,210,316,210c24.813,0,45-20.187,45-45
			C361,107.103,313.897,60,256,60z M270.789,167.406C269.631,174.535,263.45,180,256,180c-8.271,0-15-6.729-15-15s6.729-15,15-15
			c7.691,0,14.04,5.82,14.895,13.285C270.671,164.648,270.634,166.035,270.789,167.406z"/>
    <path  fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`}  d="M480.999,196.976c-0.004-3.879-1.566-7.756-4.393-10.583L421,130.787V15c0-8.284-6.716-15-15-15H106
            c-8.284,0-15,6.716-15,15v115.787l-55.606,55.606c-0.052,0.052-0.096,0.11-0.147,0.163c-2.811,2.896-4.24,6.709-4.246,10.42
            c0,0.01-0.001,0.019-0.001,0.029V467c0,24.845,20.216,45,45,45h360c24.839,0,45-20.207,45-45V197.005
            C481,196.995,480.999,196.986,480.999,196.976z M421,173.213L444.787,197L421,220.787V173.213z M121,137.005
            c0-0.003,0-0.007,0-0.01V30h270v106.995c0,0.003,0,0.007,0,0.01v113.782L309.787,332H202.213L121,250.787V137.005z M91,173.213
            v47.574L67.213,197L91,173.213z M61,460.787V233.213L174.787,347L61,460.787z M82.214,482l119.999-120h107.574l119.999,120H82.214
            z M451,460.787L337.213,347L451,233.213V460.787z"/>  
    </svg>
  )
}


export const ShowProject =({onHover, Focus,width,height}) => {
  return (
    <svg version="1.1" 
    viewBox="0 0 430.23 430.23"  space="preserve"  width={width} height={height}>
    <path fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`}  d="M327.374,156.521c-2.925-4.269-72.659-104.544-162.371-104.544C75.275,51.977,5.55,152.253,2.625,156.522
    c-3.5,5.109-3.5,11.845,0,16.955c2.925,4.268,72.65,104.546,162.378,104.546c89.712,0,159.446-100.277,162.371-104.545
    C330.875,168.368,330.875,161.631,327.374,156.521z M165.003,248.023c-60.285,0-113.439-60.364-131.273-83.037
    c17.804-22.695,70.818-83.009,131.273-83.009c60.26,0,113.408,60.338,131.257,83.022
    C278.403,187.693,225.259,248.023,165.003,248.023z"/>
    <path  fill={`${Focus? '#fff' :onHover? '#fff':'#777777' }`}  d="M165.003,123.345c-23.015,0-41.67,18.627-41.67,41.654c0,23.028,18.655,41.655,41.67,41.655
    c23,0,41.669-18.627,41.669-41.655C206.672,141.972,188.003,123.345,165.003,123.345z"/>
    </svg>
  )
}

/*media icons */


export const FacebookIcon =({onHover, width,height}) => {
  return (
    <svg viewBox="0 0 24 24" width={width} height= {height}>
    <path fill={`${onHover? '#fff':'#777777' }`} d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/>

    </svg>
  )
}

export const TwitterIcon =({onHover,width,height}) => {
    return (
      <svg  version="1.1" viewBox="0 0 50 50" width={width} height= {height}>
          <path  fill={`${onHover? '#fff':'#777777' }`} d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z "/>
      </svg>
    )
  }

  export const LinkedInIcon =({onHover,width,height}) => {
    return (
      <svg viewBox="0 0 24 24" width={width} height= {height}>
    <path fill={`${onHover? '#fff':'#777777' }`} d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/>          
      </svg>
    )
  }

  export const GithubIcon =({onHover,width,height}) => {
    return (
      <svg viewBox="0 0 50 50" width={width} height= {height}>
    <path fill={`${onHover? '#fff':'#777777' }`} d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>          
      </svg>
    )
  }

  export const ArrowDownIcon =({onHover, width,height}) => {
    return (
      <svg>
  
      </svg>
    )
  }

  export const WorldWebIcon =({onHover,width,height}) => {
    return (
      <svg version="1.1" id="Capa_1" 
      viewBox="0 0 430.23 430.23"  space="preserve" className="globe">
          <path fill={`${onHover? '#fff':'#777777' }`} d="M491.624,157.382C451.874,64.229,359.504,0,255,0C112.87,0,0,117.257,0,257c0,140.94,114.049,255,255,255
			c139.896,0,257-113.029,257-255C512,222.584,505.145,189.068,491.624,157.382z M468.759,180.604
			c-26.273-20.795-60.224-35.303-92.732-44.537c-9.227-32.541-23.706-66.497-44.674-92.842
			C395.184,66.094,445.879,116.779,468.759,180.604z M377.179,242.009C385.367,242.107,392,248.789,392,257
			s-6.633,14.893-14.821,14.991c-0.058-0.004-0.114-0.016-0.172-0.019c-0.251-0.016-0.497-0.006-0.745-0.009
			c-7.924-0.389-14.256-6.936-14.261-14.953c0-0.003,0-0.006,0-0.01c0-0.004,0-0.006,0-0.01c0.005-7.914,6.174-14.397,13.954-14.937
			c0.036,0,0.071,0.005,0.106,0.005c0.313,0,0.629-0.01,0.946-0.03C377.065,242.024,377.121,242.013,377.179,242.009z M270,32.49
			c28.747,9.494,55.002,45.537,72.028,95.552c-23.004-4.397-47.219-7.041-72.028-7.803V32.49z M270,150.252
			c28.407,0.923,55.873,4.462,81.323,10.389c4.036,17.239,7.032,35.586,8.794,54.658c-11.874,4.825-21.235,14.572-25.537,26.701H270
			V150.252z M270,272h64.58c4.302,12.13,13.665,21.879,25.54,26.703c-1.68,18.302-4.493,36.029-8.347,52.827
			c-17.469,3.972-35.956,6.872-55.067,8.599c-4.823-11.879-14.573-21.246-26.706-25.549V272z M178.573,43.492
			c-10.084,12.907-19.249,28.492-27.223,46.542C150.9,90.021,150.453,90,150,90c-28.597,0-50.241,26.571-43.901,54.847
			C81.38,154.198,60.27,165.962,43.546,179.4C66.335,116.389,116.051,66.342,178.573,43.492z M165,135c0,8.271-6.729,15-15,15
			s-15-6.729-15-15s6.729-15,15-15S165,126.729,165,135z M122.681,170.725c1.342,1.028,2.739,1.986,4.193,2.861
			c-3.667,21.449-5.949,44.995-6.642,68.414h-87.79C41.425,214.177,74.67,187.625,122.681,170.725z M120.227,272
			c0.729,24.854,3.262,48.647,7.361,70.943C77.42,326.424,41.807,300.7,32.449,272H120.227z M43.315,333.262
			c26.13,20.509,59.645,34.413,91.942,43.318c10.254,37.259,25.219,68.848,43.512,92.116
			C115.938,446.001,66.019,396.089,43.315,333.262z M240,479.461c-35.619-11.951-59.264-59.618-71.024-95.155
			c13.905,2.577,28.285,4.531,42.983,5.823c4.169,13.642,14.659,24.545,28.041,29.291V479.461z M240,334.58
			c-12.132,4.303-21.882,13.668-26.705,25.546c-18.638-1.694-36.492-4.507-53.246-8.273c-5.588-24.931-8.924-51.888-9.805-79.853
			H240V334.58z M240,242h-89.756c0.67-21.42,2.746-42.876,6.048-62.449c15.107-2.124,27.833-11.768,34.245-25.022
			c16.087-2.319,32.649-3.734,49.463-4.269V242z M240,120.248c-15.711,0.47-31.227,1.672-46.398,3.608
			c-2.314-9.049-7.385-17-14.252-22.924c16.427-36.601,38.054-60.846,60.65-68.399V120.248z M255,392
			c-8.211,0-14.893-6.633-14.991-14.82c0.004-0.058,0.016-0.114,0.019-0.173c0.015-0.248,0.005-0.491,0.009-0.736
			C240.421,368.339,246.975,362,255,362c8.025,0,14.579,6.339,14.963,14.271c0.003,0.246-0.007,0.489,0.009,0.736
			c0.004,0.059,0.015,0.115,0.019,0.173C269.893,385.367,263.211,392,255,392z M270,479.549V419.42
			c13.382-4.746,23.871-15.648,28.041-29.29c15.245-1.337,30.16-3.385,44.578-6.093C330.49,419.871,305.92,467.885,270,479.549z
			 M331.947,468.682c21.08-26.419,35.365-60.183,44.448-92.449c32.193-8.935,66.083-22.962,92.378-43.551
			C445.971,395.768,395.513,445.911,331.947,468.682z M384.278,342.511c2.595-13.758,4.554-27.965,5.844-42.468
			c13.646-4.168,24.551-14.859,29.298-28.243h60.027C467.574,306.844,419.631,330.757,384.278,342.511z M419.42,242
			c-4.747-13.384-15.652-23.875-29.297-28.043c-1.333-15.029-3.386-29.753-6.11-44.007c35.808,12.235,83.482,36.556,95.435,72.05
			H419.42z"/>
      </svg>
    )
  }


  export const menuIcon = ({onHover, Focus,width,height}) => {
    return (
     <svg>
    <path fill={`${onHover? '#fff':'#777777' }`} style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
     </svg>
    )
  }
  
export default HomeIcon
