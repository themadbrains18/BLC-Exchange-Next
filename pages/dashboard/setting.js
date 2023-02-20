import {useContext} from 'react'
import Layout from '@/components/layout/layout'
import Context from '@/components/contexts/context';
import Link from 'next/link';
const Setting = ({account}) => {
  const { mode } = useContext(Context);
  return (
    <Layout data={account} slug="dashboard">
        <div className="py-20  w-full px-[24px] ">
          <div className="mb-[20px]">
            <h3 className="section-secondary-heading mb-6">Security Settings</h3>
            <div className="divide-y px-[24px] shadow-lg rounded-lg	">
              
              <div className="flex items-center flex-col sm:flex-row justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row grow items-center">
                  <div className="max-w-[38px] w-full"> 
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50"  xmlSpace="preserve">
                      <g>
                        <g>
                          <path fill={mode === "dark" ? "white" : "currentcolor"} className="st43" d="M25.1,46.1c-8.7,0-15.7-7-15.7-15.7v-4.6c0-3.3,2.7-5.9,5.9-5.9h19.5c3.3,0,5.9,2.7,5.9,5.9v4.6
                    C40.8,39,33.7,46.1,25.1,46.1z M15.3,21.8c-2.2,0-3.9,1.8-3.9,3.9v4.6c0,7.6,6.1,13.7,13.7,13.7s13.7-6.1,13.7-13.7v-4.6
                    c0-2.2-1.8-3.9-3.9-3.9H15.3z" />
                          <path fill={mode === "dark" ? "white" : "currentcolor"} className="st43" d="M34.3,21.8c-0.6,0-1-0.4-1-1V18c0-4.5-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2v2.8c0,0.6-0.4,1-1,1
                    c-0.6,0-1-0.4-1-1V18c0-5.6,4.6-10.2,10.2-10.2S35.3,12.4,35.3,18v2.8C35.3,21.3,34.8,21.8,34.3,21.8z" />
                          <path fill={mode === "dark" ? "white" : "currentcolor"} className="st43" d="M25.1,36.4c-0.6,0-1-0.4-1-1v-5.5c0-0.6,0.4-1,1-1s1,0.4,1,1v5.5C26.1,36,25.6,36.4,25.1,36.4z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className='sm:text-start text-center'>
                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Password</p>
                    <p className="info-12 ">Password to log into your account</p>
                  </div>
                </div>
                <Link href="#" className='info-14-16 !text-primary'>Modify</Link>
              </div>

              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                  <div className="max-w-[38px] w-full"> 

                  <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24">
                    <line className="a" x1="18.5" y1="19.5" x2="5.5" y2="19.5"   stroke={mode === "dark" ? "white" : "#000"} />
                    <path d="M12,20.75a.75.75,0,1,0,.75.75.749.749,0,0,0-.75-.75Z"   stroke={mode === "dark" ? "white" : "#000"} />
                    <rect className="a" x="5.5" y="0.5" width={13} height={23} rx={2} ry={2} stroke={mode === "dark" ? "white" : "#000"}  />
                  </svg>
                    
                  </div>
                  <div className='sm:text-start text-center'>
                  <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Mobile</p>
                    <p className="info-12 ">Used to log in, withdraw, retrieve passwords, modify security settings, and perform security verification when managing APIs</p>
                  </div>
                </div>
                <button className='cta'>Settings</button>
              </div>

              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                  <div className="max-w-[38px] w-full"> 

                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
                          <path fill={mode === "dark" ? "white" : "#000"}  d="M93,19H7c-1.1,0-2,0.9-2,2v58c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2
                    c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0.1c0,0,0,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
                    c0,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1s0.1,0,0.2,0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0
                    c0,0,0.1,0,0.1,0h86c0.2,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0,0.2-0.1,0.2-0.2
                    c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2l0.1-0.1c0,0,0,0,0-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.2
                    c0-0.1,0-0.1,0.1-0.2s0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1V21C95,19.9,94.1,19,93,19z M9,32.1l27,21.4
                    L9,74.9V32.1z M12.8,77l26.5-21l9.5,7.5c0.4,0.3,0.8,0.4,1.2,0.4s0.9-0.1,1.2-0.4l9.5-7.5l26.5,21H12.8z M91,74.9L64,53.5l27-21.4
                    V74.9z M91,27l-1.2,1L50,59.5L10.2,28L9,27v-4h82V27z" />
                  </svg>
                    
                  </div>
                  <div className='sm:text-start text-center'>
                  <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Email</p>
                    <p className="info-12 ">Used to log in, withdraw, retrieve passwords, modify security settings, and perform security verification when managing APIs</p>
                  </div>
                </div>
                <Link href="#" className='info-14-16 !text-primary'> Turn Off Verification</Link>
              </div>

              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                  <div className="max-w-[38px] w-full"> 
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 475.092 475.092" xmlSpace="preserve">
                        <g>
                          <g>
                            <path fill={mode === "dark" ? "white" : "#000"} d="M273.372,302.498c-5.041-6.762-10.608-13.045-16.7-18.842c-6.091-5.804-12.183-11.088-18.271-15.845
                      c-6.092-4.757-11.659-9.329-16.702-13.709c-5.042-4.374-9.135-8.945-12.275-13.702c-3.14-4.757-4.711-9.61-4.711-14.558
                      c0-6.855,2.19-13.278,6.567-19.274c4.377-5.996,9.707-11.799,15.986-17.417c6.28-5.617,12.559-11.753,18.844-18.415
                      c6.276-6.665,11.604-15.465,15.985-26.412c4.373-10.944,6.563-23.458,6.563-37.542c0-16.75-3.713-32.835-11.136-48.25
                      c-7.423-15.418-17.89-27.412-31.405-35.976h38.54L303.2,0H178.441c-17.699,0-35.498,1.906-53.384,5.72
                      c-26.453,5.9-48.723,19.368-66.806,40.397C40.171,67.15,31.129,90.99,31.129,117.637c0,28.171,10.138,51.583,30.406,70.233
                      c20.269,18.649,44.585,27.978,72.945,27.978c5.71,0,12.371-0.478,19.985-1.427c-0.381,1.521-1.043,3.567-1.997,6.136
                      s-1.715,4.62-2.286,6.14c-0.57,1.521-1.047,3.375-1.425,5.566c-0.382,2.19-0.571,4.428-0.571,6.71
                      c0,12.563,6.086,26.744,18.271,42.541c-14.465,0.387-28.737,1.67-42.825,3.86c-14.084,2.19-28.833,5.616-44.252,10.28
                      c-15.417,4.661-29.217,11.42-41.396,20.27c-12.182,8.854-21.317,19.366-27.408,31.549C3.533,361.559,0.01,374.405,0.01,386.017
                      c0,12.751,2.857,24.314,8.565,34.69c5.708,10.369,13.035,18.842,21.982,25.406c8.945,6.57,19.273,12.083,30.978,16.562
                      c11.704,4.47,23.315,7.659,34.829,9.562c11.516,1.903,22.888,2.854,34.119,2.854c51.007,0,90.981-12.464,119.909-37.397
                      c26.648-23.223,39.971-50.062,39.971-80.517c0-10.855-1.57-20.984-4.712-30.409C282.51,317.337,278.42,309.254,273.372,302.498z
                      M163.311,198.722c-9.707,0-18.937-2.475-27.694-7.426c-8.757-4.95-16.18-11.374-22.27-19.273
                      c-6.088-7.898-11.418-16.796-15.987-26.695c-4.567-9.896-7.944-19.792-10.135-29.692c-2.19-9.895-3.284-19.318-3.284-28.265
                      c0-18.271,4.854-33.974,14.562-47.108c9.705-13.134,23.411-19.701,41.112-19.701c12.563,0,23.935,3.899,34.118,11.704
                      c10.183,7.804,18.177,17.701,23.984,29.692c5.802,11.991,10.277,24.407,13.417,37.257c3.14,12.847,4.711,24.983,4.711,36.403
                      c0,19.036-4.139,34.317-12.419,45.833C195.144,192.964,181.775,198.722,163.311,198.722z M242.251,413.123
                      c-5.23,8.949-12.319,15.94-21.267,20.981c-8.946,5.048-18.509,8.758-28.693,11.14c-10.183,2.385-20.889,3.572-32.12,3.572
                      c-12.182,0-24.27-1.431-36.258-4.284c-11.99-2.851-23.459-7.187-34.403-12.991c-10.944-5.8-19.795-13.798-26.551-23.982
                      c-6.757-10.184-10.135-21.744-10.135-34.69c0-11.419,2.568-21.601,7.708-30.55c5.142-8.945,11.709-16.084,19.702-21.408
                      c7.994-5.332,17.319-9.713,27.979-13.131c10.66-3.433,20.937-5.808,30.833-7.139c9.895-1.335,19.985-1.995,30.262-1.995
                      c6.283,0,11.043,0.191,14.277,0.567c1.143,0.767,4.043,2.759,8.708,5.996s7.804,5.428,9.423,6.57
                      c1.615,1.137,4.567,3.326,8.85,6.563c4.281,3.237,7.327,5.661,9.135,7.279c1.803,1.618,4.421,4.045,7.849,7.279
                      c3.424,3.237,5.948,6.043,7.566,8.422c1.615,2.378,3.616,5.28,5.996,8.702c2.38,3.433,4.043,6.715,4.998,9.855
                      c0.948,3.142,1.854,6.567,2.707,10.277c0.855,3.72,1.283,7.569,1.283,11.57C250.105,393.713,247.487,404.182,242.251,413.123z" />
                            <polygon fill={mode === "dark" ? "white" : "#000"} points="401.998,73.089 401.998,0 365.449,0 365.449,73.089 292.358,73.089 292.358,109.636 365.449,109.636 
                      365.449,182.725 401.998,182.725 401.998,109.636 475.081,109.636 475.081,73.089 		" />
                          </g>
                        </g>
                      </svg>

          
                  </div>
                  <div className='sm:text-start text-center'>
                  <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Google Authenticator</p>
                    <p className="info-12 ">Used to log in, withdraw, retrieve passwords, modify security settings, and perform security verification when managing APIs</p>
                  </div>
                </div>
                <button className='cta'>Settings</button>
              </div>

              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] grow flex-col sm:flex-row  items-center">
                  <div className="max-w-[38px] w-full"> 
                    
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                          <path fillRule="evenodd"  fill={mode === "dark" ? "white" : "#000"} clipRule="evenodd" d="M14.2425 3.02985C14.7783 3.1638 15.1041 3.70673 14.9701 4.24253L10.9701 20.2425C10.8362 20.7783 10.2933 21.1041 9.75746 20.9701C9.22167 20.8362 8.89591 20.2933 9.02986 19.7575L13.0299 3.75746C13.1638 3.22166 13.7067 2.8959 14.2425 3.02985ZM6.70711 6.29289C7.09763 6.68341 7.09763 7.31658 6.70711 7.7071L2.41421 12L6.70711 16.2929C7.09763 16.6834 7.09763 17.3166 6.70711 17.7071C6.31658 18.0976 5.68342 18.0976 5.29289 17.7071L0.292893 12.7071C-0.0976311 12.3166 -0.0976311 11.6834 0.292893 11.2929L5.29289 6.29289C5.68342 5.90236 6.31658 5.90236 6.70711 6.29289ZM17.2929 6.29289C17.6834 5.90236 18.3166 5.90236 18.7071 6.29289L23.7071 11.2929C24.0976 11.6834 24.0976 12.3166 23.7071 12.7071L18.7071 17.7071C18.3166 18.0976 17.6834 18.0976 17.2929 17.7071C16.9024 17.3166 16.9024 16.6834 17.2929 16.2929L21.5858 12L17.2929 7.7071C16.9024 7.31658 16.9024 6.68341 17.2929 6.29289Z"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width={24} height={24} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
          
                  </div>
                  <div className='sm:text-start text-center'>
                  <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Fund Code</p>
                    <p className="info-12 ">Protect your account from unauthorized withdrawals and P2P trading.</p>
                  </div>
                </div>
                <button className='cta'>Settings</button>
              </div>

              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                  <div className="max-w-[38px] w-full"> 
                    
                    <svg version={1.0} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                      <path fill={mode === "dark" ? "white" : "#000"} d="M60,10.001c-7.363,0-13.333,5.97-13.333,13.333c0,6.204,4.258,11.373,10,12.861v35.471c0,6.445-5.225,11.666-11.667,11.666
                c-6.445,0-11.667-5.221-11.667-11.666v-3.334H40L26.667,48.334v23.332c0,10.13,8.209,18.333,18.333,18.333
                s18.333-8.203,18.333-18.333V36.195c5.739-1.488,10-6.657,10-12.861C73.333,15.971,67.363,10.001,60,10.001z M60,30
                c-3.682,0-6.667-2.984-6.667-6.666s2.985-6.667,6.667-6.667s6.667,2.985,6.667,6.667S63.682,30,60,30z" />
                    </svg>
                  </div>
                  <div className='sm:text-start text-center'>
                  <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Anti-phishing code</p>
                    <p className="info-12 ">To protect yourself from counterfeit emails, the emails you receive from Bitget will contain the anti-phishing code you've set</p>
                  </div>
                </div>
                <button className='cta'>Settings</button>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[20px]">

            <div className="p-[20px] shadow-lg flex items-center justify-between rounded-lg">
              <div>
                <h4 className="section-secondary-heading mb-[20px]" >Account Activity</h4>
                <button className="info-14-16 !text-primary">Delete Account</button>
              </div>
              <button className="cta">More</button>
            </div>

            <div className="p-[20px] shadow-lg flex items-center justify-between rounded-lg">
              <div>
                <h4 className="section-secondary-heading mb-[20px]" >Device Management</h4>
              </div>
              <button className="cta">Manage</button>
            </div>
            
          </div>

          <div className="p-[20px] shadow-lg rounded-lg">
              <h4 className="section-secondary-heading mb-[20px]" >Third-party Account Management</h4>

              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                    <div className="max-w-[38px] w-full"> 
                        <svg viewBox="0 0 47 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Social-Icons---Isolated" transform="translate(-389.000000, -727.000000)">
                              <g id="Google" transform="translate(389.000000, 727.000000)">
                                <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05" />
                                <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EA4335" />
                                <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853" />
                                <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4" />
                              </g>
                            </g>
                          </g>
                        </svg>
                    </div>
                    <div className='sm:text-start text-center'>
                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Google account</p>
                      <p className="info-12 ">For quick login to your account</p>
                    </div>
                  </div>
                  <Link href="#" className='info-14-16 !text-primary'>Change</Link>
              </div>

              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                    <div className="max-w-[38px] w-full"> 
                          <svg viewBox="0 0 41 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <g id="Social-Icons---Isolated" transform="translate(-55.000000, -951.000000)" fill="#0B0B0A">
                                <path d="M82.1747352,958.792499 C83.7401771,956.771699 84.9268831,953.915484 84.497649,951 C81.9390773,951.177808 78.948466,952.814769 77.2034752,954.948463 C75.6127843,956.88177 74.3054439,959.757742 74.816036,962.549042 C77.6130711,962.636535 80.4998807,960.960061 82.1747352,958.792499 L82.1747352,958.792499 Z M96,986.217241 C94.8806249,988.712195 94.3419782,989.827022 92.8999761,992.03692 C90.8884674,995.121745 88.052156,998.962958 84.5341199,998.991182 C81.4116524,999.02505 80.6064879,996.94498 76.3674507,996.970382 C72.1284135,996.99296 71.2446963,999.030695 68.116618,998.999649 C64.6013873,998.968603 61.9137648,995.502761 59.9022561,992.417937 C54.2745205,983.79849 53.6825702,973.680377 57.1529137,968.298162 C59.6217109,964.476705 63.5156776,962.241407 67.1739863,962.241407 C70.8968204,962.241407 73.2393723,964.296075 76.3225635,964.296075 C79.3131747,964.296075 81.1339127,962.235762 85.4402807,962.235762 C88.7002153,962.235762 92.1537261,964.022307 94.6113015,967.10431 C86.5540449,971.546683 87.8585799,983.121127 96,986.217241 L96,986.217241 Z" id="Apple" />
                              </g>
                            </g>
                          </svg>
                    </div>
                    <div className='sm:text-start text-center'>
                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Apple ID</p>
                      <p className="info-12 ">To protect yourself from counterfeit emails, the emails you receive from Bitget will contain the anti-phishing code you've set</p>
                    </div>
                  </div>
                  <Link href="#" className='info-14-16 !text-primary'>Set</Link>
              </div> 
              
              <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-[20px]">  
                <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                    <div className="max-w-[38px] w-full"> 
                         
            <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM19.6 35L20.0083 28.8823L20.008 28.882L31.1369 18.839C31.6253 18.4055 31.0303 18.1941 30.3819 18.5873L16.6473 27.2523L10.7147 25.4007C9.4335 25.0084 9.4243 24.128 11.0023 23.4951L34.1203 14.5809C35.1762 14.1015 36.1953 14.8345 35.7922 16.4505L31.8552 35.0031C31.5803 36.3215 30.7837 36.6368 29.68 36.0278L23.6827 31.5969L20.8 34.4C20.7909 34.4088 20.7819 34.4176 20.7729 34.4264C20.4505 34.7403 20.1837 35 19.6 35Z" fill="black" />
            </svg>
                    </div>
                    <div className='sm:text-start text-center'>
                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Apple ID</p>
                      <p className="info-12 ">To protect yourself from counterfeit emails, the emails you receive from Bitget will contain the anti-phishing code you've set</p>
                    </div>
                  </div>
                  <Link href="#" className='info-14-16 !text-primary'>Set</Link>
              </div> 

            </div>
        </div>
    </Layout> 
  )
}
export async function getServerSideProps(context) {
    let data = await fetch("http://localhost:3000/api/hello");
  
    let menu = await data.json();
    return {
      props: {
        account: menu.specialNav.account,
      }, // will be passed to the page component as props
    };
  }
export default Setting;