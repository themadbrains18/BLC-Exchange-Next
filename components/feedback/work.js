import React, { useContext } from 'react'
import Context from "../contexts/context";


const Work = () => {
  const { mode } = useContext(Context);
  return (
    <section className='bg-white dark:bg-black-v-3 py-10 md:py-20'>
      <div className='container flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl leading-[60px] font-noto font-bold self-center dark:text-white'>How Does It Work? </h1>
        <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 mt-12 gap-1 lg:gap-16 w-full ${mode === "dark" ? "qwe" : ""}`}>
          <div className='grid place-items-center'>

            <svg width="130px" height="130px"  viewBox="0 0 130 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>提交建议</title>

              <g id="意见反馈" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="Apple-TV" transform="translate(-432.000000, -1833.000000)"><g id="编组-26" transform="translate(432.000000, 1833.000000)"><g id="编组-31" transform="translate(38.026279, 46.000000)"><path d="M37.4737206,51.5 L37.4737206,58 C37.4737206,58.6903559 37.1938985,59.3153559 36.7414875,59.767767 C36.2890765,60.220178 35.6640765,60.5 34.9737206,60.5 L34.9737206,60.5 L16.9737206,60.5 C16.2833646,60.5 15.6583646,60.220178 15.2059536,59.767767 C14.7535426,59.3153559 14.4737206,58.6903559 14.4737206,58 L14.4737206,58 L14.4737206,51.5 L37.4737206,51.5 Z" id="矩形" stroke="#212833" strokeWidth={3} /><rect id="矩形" fill="#212833" x="15.9474411" y={63} width={20} height={3} rx="1.5" /><path d="M26.5,1.5 C33.4035594,1.5 39.6535594,4.29822031 44.1776695,8.82233047 C48.6865925,13.3312535 51.4811937,19.5544984 51.4998149,26.4310944 C50.7344073,34.3650359 45.3133478,41.6373059 41.1944902,47.2587932 C40.0671066,48.7974656 39.0277827,50.2180095 38.1818738,51.5 L38.1818738,51.5 L13.8750781,51.5 C13.2154272,50.3709509 12.3882601,49.0980126 11.4709598,47.717793 L11.4709598,47.717793 L10.9503536,46.9366489 C10.8468501,46.7816571 10.742453,46.6254422 10.6372718,46.4680539 C6.70245892,40.5801815 1.5,33.0006278 1.5,26.5 C1.5,19.5964406 4.29822031,13.3464406 8.82233047,8.82233047 C13.3464406,4.29822031 19.5964406,1.5 26.5,1.5 Z" id="椭圆形" stroke="#212833" strokeWidth={3} /><line x1="19.4753393" y1="43.9816203" x2="19.4753393" y2={27} id="路径-44" stroke="#1DA2B4" strokeWidth={3} strokeLinecap="round" /><circle id="椭圆形" stroke="#1DA2B4" strokeWidth={3} cx="15.5" cy="27.5" r={4} /><circle id="椭圆形备份-13" stroke="#1DA2B4" strokeWidth={3} cx="36.5" cy="27.5" r={4} /><rect id="矩形" fill="#1DA2B4" x={15} y={30} width={22} height={3} rx="1.5" /><line x1="32.5269251" y1="43.9816203" x2="32.5269251" y2="26.5" id="路径-44备份" stroke="#1DA2B4" strokeWidth={3} strokeLinecap="round" /></g><rect id="矩形" fill="#1DA2B4" x="97.0262794" y={73} width={22} height={3} rx="1.5" /><rect id="矩形备份-44" fill="#1DA2B4" x={10} y={73} width={22} height={3} rx="1.5" /><rect id="矩形备份-39" fill="#1DA2B4" transform="translate(103.980080, 50.601312) rotate(-30.000000) translate(-103.980080, -50.601312) " x="92.9800801" y="49.1013117" width={22} height={3} rx="1.5" /><rect id="矩形备份-40" fill="#1DA2B4" transform="translate(25.026279, 50.601312) scale(-1, 1) rotate(-30.000000) translate(-25.026279, -50.601312) " x="14.0262794" y="49.1013117" width={22} height={3} rx="1.5" /><rect id="矩形备份-41" fill="#1DA2B4" transform="translate(40.955093, 34.767528) scale(-1, 1) rotate(-52.000000) translate(-40.955093, -34.767528) " x="29.9550925" y="33.2675278" width={22} height={3} rx="1.5" /><rect id="矩形备份-43" fill="#1DA2B4" transform="translate(91.026279, 35.500000) rotate(-52.000000) translate(-91.026279, -35.500000) " x="80.0262794" y={34} width={22} height={3} rx="1.5" /><rect id="矩形备份-42" fill="#1DA2B4" transform="translate(64.026279, 28.500000) scale(-1, 1) rotate(-90.000000) translate(-64.026279, -28.500000) " x="53.0262794" y={27} width={22} height={3} rx="1.5" /></g></g></g>
            </svg>
            <span className='info-14-16'>Submit feedback</span>
          </div>
          
            <div className='hidden md:block bg-gradient-to-r from-[#fff] to-primary h-1 self-end'></div>
         
          <div className='grid place-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="130px" height="130px" viewBox="0 0 130 130" version="1.1"><title>团队审核</title><g id="意见反馈" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="Apple-TV" transform="translate(-895.000000, -1833.000000)" strokeWidth={3}><g id="编组-40" transform="translate(895.000000, 1833.000000)"><g id="编组-30" transform="translate(24.000000, 25.000000)"><path d="M35.5,79 L8,79 C3.581722,79 0,75.2768942 0,70.6842105 L0,8.31578947 C0,3.72310576 3.581722,0 8,0 L63,0 C67.418278,0 71,3.72310576 71,8.31578947 L71,32.3195264" id="路径" stroke="#212833" strokeLinecap="round" /><circle id="椭圆形" stroke="#1DA2B4" cx={61} cy={59} r="19.5" /><line x1={52} y1={59} x2="69.9985738" y2={59} id="路径-8" stroke="#1DA2B4" strokeLinecap="round" /><line x1={61} y1={68} x2={61} y2={50} id="路径-8" stroke="#1DA2B4" strokeLinecap="round" /><polyline id="路径-9" stroke="#212833" strokeLinecap="round" points="12 19.4769078 15.2994108 22 22 16" /><polyline id="路径-9备份" stroke="#212833" strokeLinecap="round" points="12 36.4769078 15.2994108 39 22 33" /><polyline id="路径-9备份-2" stroke="#212833" strokeLinecap="round" points="12 53.4769078 15.2994108 56 22 50" /><line x1={34} y1="19.5" x2={63} y2="19.5" id="路径-10" stroke="#212833" strokeLinecap="round" /><line x1="34.5" y1={38} x2="40.5" y2={38} id="路径-10备份" stroke="#212833" strokeLinecap="round" /></g></g></g></g></svg>
            <span className='info-14-16'>Team review</span>
          </div>
         
            <div className='hidden md:block bg-gradient-to-r from-[#fff] to-primary h-1 self-end'></div>

          <div className='grid place-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="130px" height="130px" viewBox="0 0 130 130" version="1.1"><title>发放奖励</title><g id="意见反馈" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="Apple-TV" transform="translate(-1355.000000, -1833.000000)" strokeWidth={3}><g id="编组-41" transform="translate(1355.000000, 1833.000000)"><g id="编组-32" transform="translate(17.000000, 22.000000)"><path d="M14,48.4591584 L14,25 L90,25 L90,77 C90,79.209139 88.209139,81 86,81 L39.5087128,81" id="路径" stroke="#212833" strokeLinecap="round" /><rect id="矩形" stroke="#212833" x={7} y={14} width={90} height={11} rx={4} /><g id="编组-27" transform="translate(38.000000, 0.000000)" stroke="#212833"><rect id="矩形" x={0} y={0} width={14} height={14} rx={4} /><rect id="矩形备份-26" x={14} y={0} width={14} height={14} rx={4} /></g><polyline id="路径-11" stroke="#1DA2B4" strokeLinecap="round" strokeLinejoin="round" points="38 32 38 60 52 52.6460877 66 60 66 32" /><circle id="椭圆形" stroke="#1DA2B4" cx="16.5" cy="69.5" r={15} /><path d="M12,64 L19,64 C20.6568542,64 22,65.3431458 22,67 C22,68.6568542 20.6568542,70 19,70 L12,70 L12,70 L12,64 Z" id="矩形" stroke="#1DA2B4" /><path d="M12,70 L19,70 C20.6568542,70 22,71.3431458 22,73 C22,74.6568542 20.6568542,76 19,76 L12,76 L12,76 L12,70 Z" id="矩形备份-27" stroke="#1DA2B4" /></g></g></g></g></svg>
            <span className='info-14-16'>Redeem your gift</span>
          </div>

        </div>

        <p className='mt-16 text-center info-14-16'>BLC-Exchange serves users globally, and we regard the safe and stable development of the platform as our top priority. Your valuable feedback helps us improve our product and create a better future together.</p>
        <span className='p-1 text-center info-14-16'>Let's get started! <a className='text-primary underline'>Click here to submit feedback.</a></span>

      </div>
    </section>
  )
}

export default Work
