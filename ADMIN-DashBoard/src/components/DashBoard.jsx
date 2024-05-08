import React from 'react'
import logo1 from '../assets/logo1.png'
import home from '../assets/Home.png'
import msg from '../assets/Message-Mail.png'
import event from '../assets/Event Calendar.png'
import bar from '../assets/bar Chart Analysis.png'
import form from '../assets/Form.png'
import briefcase from '../assets/briefcase.png'
import folder from '../assets/Multi Folder.png'
import add from '../assets/Add.png'
import flag from '../assets/Flag.png'
import user from '../assets/Multi User.png'
import shield from '../assets/Privacy Shield.png'
import setting from '../assets/Setting-Gear.png'
import chat from '../assets/Chat.png'
import ques from '../assets/Question Mark.png'
import moon from '../assets/Half Moon.png'
import sun from '../assets/Sun-Brightness.png'
import pic1 from '../assets/pic1.png'
import bell from '../assets/Notification Bell.png'
import exit from '../assets/Logout-Exit.png'
import search from '../assets/Search-Magnifier.png'
import graph from '../assets/vector.png'
import wallet from '../assets/Wallet.png'
import cart from '../assets/Cart.png'
import thermo from '../assets/Thermometer.png'
import cap from '../assets/Graduation cap.png'
import trophy from '../assets/Trophy.png'
import star from '../assets/Star Rating.png'
import clock from '../assets/Sandclock.png'
import group from '../assets/Group.png'
import thumb from '../assets/Thumb-Like.png'
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import cursor from '../assets/cursor.png'



export default function DashBoard() {
    return (
        <section className='flex'>

            {/* ==============================   Menu-Section    ==================================== */}
            <div className='backg1'>
                {/* Logo and Headings */}
                <div className='flex gap-4 items-center'>
                    <img src={logo1} className='w-[39.89px] h-[39.89px]' alt="" />
                    <h1 className="text-white text-[32px] font-medium font-['Sora']">
                        Dashify
                    </h1>
                </div>

                <div>
                    <p className="opacity-50 text-white text-opacity-80 text-xl font-normal font-['Roboto'] mt-3">
                        General
                    </p>
                </div>




                {/*=========== General Section  ============= */}

                <div>
                    <div className='mt-[10px] flex flex-col'>
                        <div className='backg2 gradient'>
                            <img src={home} className='icon' alt="" />
                            <p className=" text-white text-[19px] font-normal font-['Roboto'] ">Dashboard</p>
                        </div>

                        <div className='flex gap-[120px] ml-[6px] items-center mt-3'>
                            <div className="text-white text-[23px] flex items-center gap-3 font-normal font-['Roboto'] ">
                                <img src={msg} className='icon opacity-50' alt="" />
                                <p className=" text-white text-[19px] font-normal font-['Roboto'] opacity-50">Message</p>
                            </div>

                            <div className='rounded-full color1 w-[26px] h-[26px] text-center'>
                                <p className="text-white text-sm font-medium font-['Roboto'] text-center 
                                opacity-50 mt-1">
                                    2
                                </p>
                            </div>
                        </div>

                        <div className='backg2 flex gap-[115px]'>
                            <div className="text-white text-[23px] flex items-center gap-3 font-normal font-['Roboto']" >
                                <img src={event} className='icon opacity-50' alt="" />
                                <p className=" text-white text-[19px] font-normal font-['Roboto'] opacity-50">Schedule</p>
                            </div>

                            <div className='flex'>
                                <div className='rounded-full color1 text-center ml-5'>
                                    <p className="text-white text-sm font-medium font-['Roboto'] text-center 
                                     opacity-50 mt-1 w-[26px] h-[26px]">
                                        3
                                    </p>
                                </div>
                                <img src={add} className='w-[30px] h-[30px] opacity-50 ml-3' alt="" />
                            </div>
                        </div>

                        <div className='backg2 opacity-50'>
                            <img src={bar} className='icon' alt="" />
                            <p className=" text-white text-[19px] font-normal font-['Roboto']">Analysis</p>
                        </div>

                        <div className='backg2 opacity-50'>
                            <img src={form} className='icon' alt="" />
                            <p className=" text-white text-[19px] font-normal font-['Roboto']">News</p>
                        </div>

                        <div className='backg2 opacity-50'>
                            <img src={briefcase} className='icon' alt="" />
                            <p className=" text-white text-[19px] font-normal font-['Roboto']">Recruitment</p>
                        </div>

                        <div className='backg2 opacity-50 items-center gap-[191px]'>
                            <div className="text-white text-[23px] flex items-center gap-3 font-normal font-['Roboto']" >
                                <img src={folder} className='icon' alt="" />
                                <p className=" text-white text-[19px] font-normal font-['Roboto']">Project</p>
                            </div>
                            <img src={add} className='w-[30px] h-[30px]' alt="" />
                        </div>
                    </div>

                </div>

                <div className='border w-[74%] mt-2 bg-white opacity-10 ml-1'></div>




                {/* ========  Myspace Section  ============= */}
                <div>
                    <p className="opacity-50 text-white text-opacity-80 text-xl font-normal font-['Roboto'] mt-3">
                        Myspace
                    </p>
                </div>
                <div className='mt-3'>
                    <div className='backg2 opacity-50'>
                        <img src={flag} className='icon' alt="" />
                        <p className=" text-white text-[19px] font-normal font-['Roboto']">Activity</p>
                    </div>

                    <div className='backg2 opacity-50'>
                        <img src={user} className='icon' alt="" />
                        <p className=" text-white text-[19px] font-normal font-['Roboto']">Shared</p>
                    </div>

                    <div className='backg2 opacity-50'>
                        <img src={shield} className='icon' alt="" />
                        <p className=" text-white text-[19px] font-normal font-['Roboto']">Privacy</p>
                    </div>
                </div>
                <div className='border w-[74%] mt-2 bg-white opacity-10 ml-1'></div>




                {/* =======  Support - Section ============ */}
                <div>
                    <p className="opacity-50 text-white text-opacity-80 text-xl font-normal font-['Roboto'] mt-3">
                        Support
                    </p>
                </div>
                <div className='mt-3'>
                    <div className='backg2 opacity-50'>
                        <img src={setting} className='icon' alt="" />
                        <p className=" text-white text-[19px] font-normal font-['Roboto']">Setting</p>
                    </div>

                    <div className='backg2 opacity-50'>
                        <img src={ques} className='icon' alt="" />
                        <p className=" text-white text-[19px] font-normal font-['Roboto']">Help!</p>
                    </div>

                    <div className='backg2 opacity-50'>
                        <img src={chat} className='icon' alt="" />
                        <p className=" text-white text-[19px] font-normal font-['Roboto']">Chat</p>
                    </div>
                </div>
                <div className='border w-[74%] mt-2 bg-white opacity-10 ml-1'></div>



                {/*=========== Light/Dark Modes =========== */}
                <div className='flex mt-5 items-center gap-9 opacity-50'>
                    <div className="w-[87.71px] h-[36.66px] p-[7.35px] bg-purple-100 bg-opacity-5 rounded-[29.42px]
                     shadow justify-center items-center gap-[25.01px] inline-flex">
                        <div className="bg-white bg-opacity-20 rounded-full shadow ">
                            <img src={sun} className='w-[56.77px] h-[36.77px]' alt="" />
                        </div>
                        <img src={moon} alt="" />
                    </div>
                    <p className="text-white text-[19px] font-normal font-['Roboto']">Darkmode</p>
                </div>



                {/* ========  Dashview Section  ============= */}
                <div className='flex mt-5 items-center gap-[90px]'>
                    <div className='flex items-center gap-3'>
                        <img src={pic1} className='w-9 h-9' alt="" />
                        <p className="text-white text-[20px] font-normal font-['Roboto']">DashView</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <img src={bell} className='w-7 h-7' alt="" />
                        <img src={exit} className='w-7 h-7' alt="" />
                    </div>
                </div>

            </div>




            {/* ==============================   Menu-Section    ==================================== */}
            <div className='backg4'>
                {/* Navbar ========================== */}
                <div className='flex items-center justify-between'>
                    <p className="text-white text-[42px] font-normal ml-7 font-['Sora']">Dashboard Overview</p>
                    <div className='flex items-center gap-8'>
                        <div className='w-[620.90px] h-[69.30px] pl-[27.72px] py-[6.93px] bg-[#242038]
                            rounded-[13.86px] justify-start items-center gap-[27.72px] inline-flex'>
                            <img src={search} className="w-7 h-7 relative" alt="" />
                            <p className="opacity-50 text-white text-xl font-normal font-['Roboto']">Search</p>
                        </div>
                        <div class="w-[69.30px] h-[69.30px] pl-[16.64px] pr-[16.66px] py-[16.65px] bg-[#242038]
                         rounded-[6.93px] justify-center items-center inline-flex">
                            <img src={setting} className='w-7 h-7' alt="" />
                        </div>
                    </div>
                </div>



                {/*  =========================   Main Section ====================================== */}
                <div className='flex mt-6'>
                    {/* =======================First PART =================== */}
                    <div className='relative  p-7 '>
                        {/* Graph Chart============================ */}
                        <div className=' bg-[#242038] rounded-[27.72px] border-2 border-white
                        border-opacity-10 items-center p-7'>
                            <div className='flex items-center justify-between'>
                                <h3 className="text-white text-[28px] font-normal font-['Sora']">Overview</h3>
                                <div className='flex items-center justify-center gap-7'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <div className="w-[22.18px] h-[22.18px] bg-red-400 rounded-full"></div>
                                        <p className="text-white text-xl font-normal font-['Roboto']">Deals</p>
                                    </div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <div className="w-[22.18px] h-[22.18px] bg-purple-600 rounded-full"></div>
                                        <p className="text-white text-xl font-normal font-['Roboto']">Revenue</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex mt-[75px] ml-6'>
                                <div className='flex flex-col gap-4'>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">$600</p>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">$500</p>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">$400</p>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">$300</p>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">$200</p>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">$100</p>
                                </div>

                                <div className='mt-[32px] relative'>
                                    <img src={graph} className='z-[-1]' alt="" />
                                    {/* <div className='border1 z-10'></div> */}
                                </div>
                            </div>

                            <div className='ml-[124px] mt-4'>
                                <div className='flex gap-[47px]'>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">Jan</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">Feb</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">Mar</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">April</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">May</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">Jun</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">Jul</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">Aug</p>
                                    <p className="opacity-20 text-white text-[19px] font-normal font-['Roboto']">Spt</p>
                                </div>
                            </div>
                        </div>


                        {/* ============== Project-section ================ */}
                        <div className='w-[867.58px] h-[485.08px] relative bg-[#242038] rounded-[27.72px] border-2 border-white
                        border-opacity-10 p-7 mt-6'>
                            <div className='flex justify-between items-center'>
                                <h1 className="text-white text-[28px] font-normal font-['Sora']">Top Project's</h1>
                                <p className="text-white text-[22.18px] font-normal font-['Roboto']">All</p>
                            </div>

                            <div className='mt-8 flex gap-[50px] pl-6'>
                                <p className="opacity-50 text-white text-[22px] font-normal font-['Sora']">No</p>
                                <p className="opacity-50 text-white text-[22px] font-normal font-['Sora'] ml-2">Project</p>
                                <p className="opacity-50 text-white text-[22px] font-normal font-['Sora'] ml-[40px]">Satrt</p>
                                <p className="opacity-50 text-white text-[22px] font-normal font-['Sora'] ml-1">Lead</p>
                                <p className="opacity-50 text-white text-[22px] font-normal font-['Sora'] ml-[40px]">Company</p>
                                <p className="opacity-50 text-white text-[22px] font-normal font-['Sora'] ml-12">Value</p>
                            </div>

                            <div className='mt-5 flex gap-[53px] pl-6 items-center'>
                                <h3 className="text-white text-[19px] font-normal font-['Roboto']">1</h3>
                                <div className='flex items-center gap-3 ml-4'>
                                    <div className="backg5 rounded-xl">
                                        <img src={wallet} className=' w-5 h-5' alt="" />
                                    </div>
                                    <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                        Finance
                                    </p>
                                </div>
                                <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto'] ml-3">
                                    25/05
                                </p>

                                <p className="w-[110.88px] opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                    Alice
                                </p>

                                <p className="w-[180.17px] opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-1">
                                    ByteSync, Inc.
                                </p>

                                <p className=" opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-16">
                                    $250.00
                                </p>
                            </div>

                            <div className='border w-[92%] mt-2 bg-white opacity-10 ml-1'></div>



                            <div className='mt-5 flex gap-[53px] pl-6 items-center'>
                                <h3 className="text-white text-[19px] font-normal font-['Roboto']">1</h3>
                                <div className='flex items-center gap-3 ml-4'>
                                    <div className="backg5 rounded-xl">
                                        <img src={cart} className=' w-5 h-5' alt="" />
                                    </div>
                                    <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                        Ecommerce
                                    </p>
                                </div>
                                <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto'] ml-3">
                                    25/05
                                </p>

                                <p className="w-[110.88px] opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                    Sarah
                                </p>

                                <p className="w-[180.17px] opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-1">
                                    AeroWave Co.
                                </p>

                                <p className=" opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-16">
                                    $250.00
                                </p>
                            </div>

                            <div className='border w-[92%] mt-2 bg-white opacity-10 ml-1'></div>


                            <div className='mt-5 flex gap-[53px] pl-6 items-center'>
                                <h3 className="text-white text-[19px] font-normal font-['Roboto']">1</h3>
                                <div className='flex items-center gap-3 ml-4'>
                                    <div className="backg5 rounded-xl">
                                        <img src={thermo} className=' w-5 h-5' alt="" />
                                    </div>
                                    <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                        Health
                                    </p>
                                </div>
                                <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto'] ml-3">
                                    25/05
                                </p>

                                <p className="w-[110.88px] opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                    Sarah
                                </p>

                                <p className="w-[180.17px] opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-1">
                                    AeroWave Co.
                                </p>

                                <p className=" opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-16">
                                    $250.00
                                </p>
                            </div>

                            <div className='border w-[92%] mt-2 bg-white opacity-10 ml-1'></div>



                            <div className='mt-5 flex gap-[53px] pl-6 items-center'>
                                <h3 className="text-white text-[19px] font-normal font-['Roboto']">1</h3>
                                <div className='flex items-center gap-3 ml-4'>
                                    <div className="backg5 rounded-xl">
                                        <img src={cap} className=' w-5 h-5' alt="" />
                                    </div>
                                    <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                        Education
                                    </p>
                                </div>
                                <p className="opacity-80 text-white text-[19px] font-normal font-['Roboto'] ml-3">
                                    25/05
                                </p>

                                <p className="w-[110.88px] opacity-80 text-white text-[19px] font-normal font-['Roboto']">
                                    Sarah
                                </p>

                                <p className="w-[180.17px] opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-1">
                                    AeroWave Co.
                                </p>

                                <p className=" opacity-80 text-white text-[19px] font-normal font-['Roboto'] mr-16">
                                    $250.00
                                </p>
                            </div>

                            <div className='border w-[92%] mt-2 bg-white opacity-10 ml-1'></div>
                        </div>


                        {/* ====== Task-Percentage Section ==================== */}
                        <div className='mt-6 flex gap-10'>
                            <div className="w-[261.47px] h-[243.93px] pl-[27.71px] pr-[72.76px] pt-[27.72px] pb-[47.26px]
                            bg-[#242038] rounded-[27.72px] border-2 border-white border-opacity-10 flex-col 
                            justify-start items-start gap-[34.65px] inline-flex">
                                <div className="w-[69.30px] h-[69.30px] pl-[16.65px] pr-[16.64px] py-[16.65px] bg-white bg-opacity-5
                             rounded-[6.93px] justify-center items-center inline-flex">
                                    <img src={trophy} alt="" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className="text-white text-[28px] font-normal font-['Sora']">Completed</p>
                                    <h5 className="text-white text-[19px] font-normal font-['Sora']">25+</h5>
                                </div>
                            </div>

                            <div className="w-[261.47px] h-[243.93px] pl-[27.71px] pr-[72.76px] pt-[27.72px] pb-[47.26px]
                            bg-[#242038] rounded-[27.72px] border-2 border-white border-opacity-10 flex-col 
                            justify-start items-start gap-[34.65px] inline-flex">
                                <div className="w-[69.30px] h-[69.30px] pl-[16.65px] pr-[16.64px] py-[16.65px] bg-white bg-opacity-5
                             rounded-[6.93px] justify-center items-center inline-flex">
                                    <img src={star} alt="" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className="text-white text-[28px] font-normal font-['Sora']">Reviews</p>
                                    <h5 className="text-white text-[19px] font-normal font-['Sora']">105+</h5>
                                </div>
                            </div>

                            <div className="w-[261.47px] h-[243.93px] pl-[27.71px] pr-[72.76px] pt-[27.72px] pb-[47.26px]
                            bg-[#242038] rounded-[27.72px] border-2 border-white border-opacity-10 flex-col 
                            justify-start items-start gap-[34.65px] inline-flex">
                                <div className="w-[69.30px] h-[69.30px] pl-[16.65px] pr-[16.64px] py-[16.65px] bg-white bg-opacity-5
                             rounded-[6.93px] justify-center items-center inline-flex">
                                    <img src={clock} alt="" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className="text-white text-[28px] font-normal font-['Sora']">Working</p>
                                    <h5 className="text-white text-[19px] font-normal font-['Sora']">15+</h5>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* =========================== Second PART ============================== */}
                    <div>
                        {/* Customer-Section  ============= */}
                        <div className="w-[528px] h-[380.80px] relative  rounded-[27.72px] border-2 flex
                         flex-col border-white border-opacity-10 bg-[#242038] mt-7 p-5">
                            <div className='flex justify-start'>
                                <h1 className="text-white text-[28px] font-normal font-['Sora']">Customer</h1>
                            </div>
                            <div className='items-center flex justify-center mt-7'>
                                <img src={group} alt="" />
                            </div>
                            <div className='flex items-center justify-between px-10 mt-12'>
                                <div className='flex gap-3'>
                                    <img src={thumb} className='w-9 h-9 relative' alt="" />
                                    <p className="text-white text-[22.72px] font-normal font-['Sora']">Direct</p>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={flag} className='w-9 h-9 relative' alt="" />
                                    <p className="text-white text-[22.72px] font-normal font-['Sora']">Social</p>
                                </div>
                            </div>
                        </div>


                        {/* Contact-Section ======================== */}
                        <div className='w-[524.80px] h-[90.09px] px-[27.72px] py-[13.86px] bg-[#242038] rounded-[27.72px] 
                            border-2 border-white border-opacity-10 justify-between items-center inline-flex mt-9'>
                            <div className='flex gap-3 items-center'>
                                <div className=''>
                                    <img src={m1} alt="" />
                                </div>
                                <div className='flex justify-start flex-col'>
                                    <h2 className="text-white text-[28px] font-normal font-['Sora']">Sarah Johnson</h2>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">
                                        Hi there!
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-end gap-1'>
                                <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">5:10am</p>
                                <div className='rounded-full color1 w-[26px] h-[26px] text-center'>
                                    <p className="text-white text-sm font-medium font-['Roboto'] text-center 
                                opacity-50 mt-1">
                                        2
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[524.80px] h-[90.09px] px-[27.72px] py-[13.86px] bg-[#242038] rounded-[27.72px] 
                            border-2 border-white border-opacity-10 justify-between items-center inline-flex mt-9'>
                            <div className='flex gap-3 items-center'>
                                <div className=''>
                                    <img src={m2} alt="" />
                                </div>
                                <div className='flex justify-start flex-col'>
                                    <h2 className="text-white text-[28px] font-normal font-['Sora']">Alice</h2>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">
                                        What are doing?
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-end gap-1'>
                                <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">5:10am</p>
                                <div className='rounded-full color1 w-[26px] h-[26px] text-center'>
                                    <p className="text-white text-sm font-medium font-['Roboto'] text-center 
                                opacity-50 mt-1">
                                        5
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='w-[524.80px] h-[90.09px] px-[27.72px] py-[13.86px] bg-[#242038] rounded-[27.72px] 
                            border-2 border-white border-opacity-10 justify-between items-center inline-flex mt-9'>
                            <div className='flex gap-3 items-center'>
                                <div className=''>
                                    <img src={m3} alt="" />
                                </div>
                                <div className='flex justify-start flex-col'>
                                    <h2 className="text-white text-[28px] font-normal font-['Sora']">Alice</h2>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">
                                        What the fuck!
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col items-end gap-1'>
                                <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">5:10am</p>
                                <div className='rounded-full color1 w-[26px] h-[26px] text-center'>
                                    <p className="text-white text-sm font-medium font-['Roboto'] text-center 
                                opacity-50 mt-1">
                                        5
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* =========  Messanger-Section =============== */}
                        <div className='w-[522.37px] h-[454.59px] relative bg-[#242038] mt-12 rounded-[27.72px] border-2
                         border-white border-opacity-10'>
                            <div className='w-[524.80px] h-[90.09px] px-[27.72px] py-[13.86px] justify-between
                             items-center inline-flex mt-5'>
                                <div className='flex gap-3 items-center'>
                                    <div className=''>
                                        <img src={m1} alt="" />
                                    </div>
                                    <div className='flex justify-start flex-col'>
                                        <h2 className="text-white text-[28px] font-normal font-['Sora']">Sarah Johnson</h2>
                                        <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">
                                            Online
                                        </p>
                                    </div>
                                </div>

                                <div className='flex flex-col items-end gap-1'>
                                    <p className="opacity-50 text-white text-[19px] font-normal font-['Roboto']">5:10am</p>
                                </div>
                            </div>


                            <div className="w-[293.82px] h-[47.12px] p-[13.86px] bg-white bg-opacity-5 rounded-[13.86px] justify-center
                             items-center gap-[13.86px] inline-flex ml-7 mt-7">
                                <p className="text-white text-[19px] font-normal font-['Roboto']">How's it going?</p>
                            </div>


                            <div className="w-[293.82px] h-[102.56px] p-[13.86px] bg-white bg-opacity-5 rounded-[13.86px] 
                            justify-center items-center gap-[13.86px] inline-flex mt-[73px] ml-[210px]">
                                <p className="text-white text-[19px] font-normal font-['Roboto']">
                                    Not too bad, thanks for asking. How about yours?
                                </p>
                            </div>

                            <div className="w-[522px] h-[91.06px] p-[27.53px] bg-white bg-opacity-0 border-t
                             border-white border-opacity-20 justify-between items-center inline-flex">
                                <p className="text-white text-[19px] font-normal font-['Roboto']">
                                    Alice is Typing.......
                                </p>
                                <img src={cursor} className="w-9 h-9 relative"></img>
                            </div>
                        </div>

                    </div>
                </div>

            </div >


        </section >
    )
}

