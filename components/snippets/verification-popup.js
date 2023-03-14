
import Link from "next/link";
import { useContext } from "react";
import Context from "/components/contexts/context";
import { useSession } from "next-auth/react";

export default function VerificationPopup({popupData:{popup,showPopup}}) {
    const { mode, setClick } = useContext(Context);
    const {data:session} =useSession()

    return (
        <div className={`${popup ? "opacity-1 visible fixed top-[50%]" : "opacity-0 invisible top-[55%]"}  duration-300 z-[20] fixed  left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%] dark:bg-black-v-5 bg-white p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto`}>
            <div className="max-w-[24px] w-full ml-auto cursor-pointer" onClick={() => { setClick(false); showPopup(false) }}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                    <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                                        c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                                        l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                                        l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                                        C61.42,57.647,61.42,54.687,59.595,52.861z" />
                </svg>
            </div>
            <p className="info-16-22 dark:!text-white !text-black mt-[15px] text-center">P2P trading requires the following verification to be completed first</p>

            <div className="flex items-center justify-between gap-[15px] mt-[24px]">
                <div className="flex items-center gap-[15px] grow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={mode === "dark" ? "#1da2b4" : "currentcolor"}
                        height="24"
                        width="24"
                    >
                        <path d="M1 20v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q17 16.35 17 17.2V20Zm18 0v-3q0-1.1-.612-2.113-.613-1.012-1.738-1.737 1.275.15 2.4.512 1.125.363 2.1.888.9.5 1.375 1.112Q23 16.275 23 17v3ZM9 12q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 1.65-1.175 2.825Q10.65 12 9 12Zm10-4q0 1.65-1.175 2.825Q16.65 12 15 12q-.275 0-.7-.062-.425-.063-.7-.138.675-.8 1.037-1.775Q15 9.05 15 8q0-1.05-.363-2.025Q14.275 5 13.6 4.2q.35-.125.7-.163Q14.65 4 15 4q1.65 0 2.825 1.175Q19 6.35 19 8ZM3 18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q10.4 15 9 15t-2.775.337Q4.85 15.675 3.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q11 8.825 11 8t-.587-1.412Q9.825 6 9 6q-.825 0-1.412.588Q7 7.175 7 8t.588 1.412Q8.175 10 9 10Zm0 8ZM9 8Z" />
                    </svg>
                    <p className="info-14 !text-grey hover:!text-grey grow ">KYC</p>
                </div>
                <div>
                    <Link className="info-12 !text-primary" href="/dashboard/verified" onClick={() => { setClick(false) }}>{session?.user?.kycstatus !== undefined?'Bind':'Set Now'}</Link>
                </div>
            </div>

            <div className="flex items-center justify-between gap-[15px] mt-[24px]">
                <div className="flex items-center gap-[15px] grow">
                    <div className="max-w-[22px] w-full">
                        <svg className=" w-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100.354 100.352" style={{ enableBackground: 'new 0 0 100.354 100.352' }} xmlSpace="preserve">
                            <path fill={mode === "dark" ? "#1da2b4" : "currentcolor"} d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462
                                            c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029
                                            c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02
                                            c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465
                                            c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125
                                            c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011
                                            c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061
                                            c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059
                                            c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018
                                            c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117
                                            c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121
                                            c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071
                                            c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03
                                            c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z
                                            M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472
                                            L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481
                                            l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z" />
                        </svg>
                    </div>
                    <p className="info-14 !text-grey hover:!text-grey grow ">Bind email</p>
                </div>
                <div>
                    <Link className="info-12 !text-primary" href="/dashboard/bindemail" onClick={() => { setClick(false) }}>{session?.user?.email !== ''?'Bind':'Set Now'}</Link>
                </div>
            </div>

            <div className="flex items-center justify-between gap-[15px] mt-[24px]">
                <div className="flex items-center gap-[15px] grow">
                    <div className="max-w-[22px] w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
                            <path stroke={mode === "dark" ? "#1da2b4" : "currentcolor"} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </div>
                    <p className="info-14 !text-grey hover:!text-grey grow ">Bind Phone Number</p>
                </div>
                <div>
                    <Link className="info-12 !text-primary" href="/dashboard/bindmobile" onClick={() => { setClick(false) }}>{session?.user?.number !== ''?'Bind':'Set Now'}</Link>
                </div>
            </div>

            <div className="flex items-center justify-between gap-[15px] mt-[24px]">
                <div className="flex items-center gap-[15px] grow">
                    <div className="max-w-[22px] w-full">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 203.096 203.096" style={{ enableBackground: 'new 0 0 203.096 203.096' }} xmlSpace="preserve">
                            <g>
                                <path fill={mode === "dark" ? "#1da2b4" : "currentcolor"} d="M153.976,73.236h-3.308V49.115C150.669,22.033,128.634,0,101.549,0C74.465,0,52.43,22.033,52.43,49.115v24.121H49.12
                                            c-9.649,0-17.5,7.851-17.5,17.5v94.859c0,9.649,7.851,17.5,17.5,17.5h104.856c9.649,0,17.5-7.851,17.5-17.5V90.736
                                            C171.476,81.087,163.626,73.236,153.976,73.236z M67.43,49.115C67.43,30.304,82.736,15,101.549,15
                                            c18.813,0,34.119,15.304,34.119,34.115v24.121H67.43V49.115z M156.476,185.596c0,1.355-1.145,2.5-2.5,2.5H49.12
                                            c-1.355,0-2.5-1.145-2.5-2.5V90.736c0-1.355,1.145-2.5,2.5-2.5H59.93h83.238h10.808c1.355,0,2.5,1.145,2.5,2.5V185.596z" />
                                <path fill={mode === "dark" ? "#1da2b4" : "currentcolor"} d="M101.547,116.309c-4.142,0-7.5,3.357-7.5,7.5v28.715c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-28.715
                                            C109.047,119.666,105.689,116.309,101.547,116.309z" />
                            </g>
                        </svg>
                    </div>
                    <p className="info-14 !text-grey hover:!text-grey grow ">Fund password</p>
                </div>
                <div>
                    <Link className="info-12 !text-primary" href="/dashboard/fund-password" onClick={() => { setClick(false) }}>{session?.user?.tradingPassword !== ''?'Bind':'Set Now'}</Link>
                </div>
            </div>
        </div>
    )
}