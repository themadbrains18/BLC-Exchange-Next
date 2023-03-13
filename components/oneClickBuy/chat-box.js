import {useContext} from 'react';
import Context from "/components/contexts/context";
const ChatBox = () => {
    const {mode } = useContext(Context);

    return(
        <div className='max-w-[450px] w-full mx-auto md:ml-[auto] md:mr-0 border border-[#cccccc7d] rounded-lg shadow-lg'>
            {/* about user */}
            <div className="flex items-center gap-[20px] grow-[1.6] p-[14px] border-b border-[#cccccc7d]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#e8f6f7] dark:bg-[#8ed0d9] flex">
                <span className="m-auto text-primary dark:text-white info-14-16">A</span>
            </div>
            <div className="">
                <p className="info-14 !text-start !text-black hover:!text-black dark:!text-white">Arti</p>
                <p className="info-12 !text-start">Total trades (buy <span>76</span> | sell <span>406</span>)&nbsp; &nbsp;<span className="info-12 block sm:inline !text-start">Average release <span>2</span></span></p>
                
                <p className="info-12 !text-start">Registration Time <span>22-10-06</span></p>
            </div>
            </div>
            {/* chat component */}
            <div className="p-[14px] max-h-[400px] h-full overflow-x-auto flex flex-col	gap-[10px]">
                <div className="left">
                    <div className="w-[30px] h-[30px] rounded-full dark:bg-[#8ed0d9] bg-[#e8f6f7] flex">
                        <span className="m-auto text-primary dark:text-white info-14">A</span>
                    </div>
                    <div className="mt-[4px] p-[10px] rounded-lg min-w-[60px] max-w-fit w-full dark:bg-[#8ed0d9] bg-[#cccccc4f]">
                        <p className="info-12 dark:text-white text-black">hii</p>
                    </div>
                </div>
                <div className="right">
                    <div className="w-[30px] h-[30px] ml-[auto] rounded-full dark:bg-[#8ed0d9] bg-[#e8f6f7] flex">
                        <span className="m-auto text-primary dark:text-white info-14">B</span>
                    </div>
                    <div className="mt-[4px] ml-[auto] p-[10px] rounded-lg min-w-[60px] max-w-fit w-full dark:bg-[#8ed0d9] bg-[#cccccc4f]">
                        <p className="info-12 dark:text-white text-black">hii</p>
                    </div>
                </div>
            </div>
            {/* send messsage */}
            <div className="border-t border-[#cccccc7d] p-[14px] !py-[7px]">
                <div className="flex items-center gap-[15px]">
                    <input type="text" className="border-0 w-full outline-none info-12 dark:!text-white bg-transparent !text-black"  placeholder="input messsage..." />
                    <input type="file" className="hidden" id="fileUpload" />
                    <label htmlFor="fileUpload" className="cursor-pointer" > 
                        <svg width="24px" height="20px" viewBox="0 0 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Outlined" transform="translate(-610.000000, -376.000000)">
                                <g id="Action" transform="translate(100.000000, 100.000000)">
                                <g id="Outlined-/-Action-/-perm_media" transform="translate(510.000000, 274.000000)">
                                    <g>
                                    <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                                    <path fill={mode === "dark" ? "white" : "#000"}  d="M2,6 L0,6 L0,11 L0.01,11 L0,20 C0,21.1 0.9,22 2,22 L20,22 L20,20 L2,20 L2,6 Z M7,15 L21,15 L17.5,10.5 L15,13.51 L11.5,9 L7,15 Z M22,4 L14,4 L12,2 L6,2 C4.9,2 4.01,2.9 4.01,4 L4,16 C4,17.1 4.9,18 6,18 L22,18 C23.1,18 24,17.1 24,16 L24,6 C24,4.9 23.1,4 22,4 Z M22,16 L6,16 L6,4 L11.17,4 L12.58,5.41 L13.17,6 L22,6 L22,16 Z" id="🔹-Icon-Color" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </g>
                        </svg>
                    </label>
                    <button className="cta">Send</button>
                </div>
            </div>
        </div>
    )

}

export default ChatBox;