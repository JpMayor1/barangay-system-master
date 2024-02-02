"use client";

import { Button, Input, Tooltip } from "@material-tailwind/react";
import dayjs from "dayjs";
import { renderAsync } from "docx-preview";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "../../../../../../public/logo.png";
import daetLogo from "../../../../../../public/daet-logo.png";
import footer from "../../../../../../public/footer.png";
import dahon from "../../../../../../public/dahon.png";
import { BsFillPrinterFill } from "react-icons/bs";

function Clearance() {
    return (
        <div className="w-full h-fit flex justify-center items-center">
            <div className="w-auto fixed bottom-10 right-20">
                <Tooltip content='Print'>
                <Button className='rounded-full py-6' color="green"
                    onClick={() => { window.print() }}
                >
                    <BsFillPrinterFill size={30} />
                </Button>
                </Tooltip>
            </div>
            <div className="printing-view w-[816px] h-[1056px] bg-white p-10">
                <div className="w-full h-full border-4 border-blue-900 relative">
                    <div className="w-full flex items-center justify-center gap-6 mt-12">
                        <div className="w-[100px] h-[100px]">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-full w-full"
                            />
                        </div>

                        <div className="text-center text-[15px] font-tahoma ">
                            <p>Republic of the Philippines</p>
                            <p>Province of Camarines Norte</p>
                            <p>MUNICIPALITY OF DAET</p>
                            <p>
                                <b>BARANGAY BORABOD</b>
                            </p>
                        </div>

                        <div className="w-[100px] h-[100px]">
                            <Image
                                src={daetLogo}
                                alt="Daet Logo"
                                className="h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <h1 className="text-center text-xl font-bold">
                            OFFICE OF THE SANGGUNIANG BARANGAY
                        </h1>
                    </div>

                    <div className="mt-5">
                        <h1 className="text-center text-3xl font-old-english underline">
                            Barangay Certification
                        </h1>
                    </div>

                    <div className="mt-5 px-14 font-cambria text-[16px] z-20">
                        <p>TO WHOM IT MAY CONCERN:</p>
                        <p className="mt-5">
                            This is to certify that{" "}
                            <input
                                type="text"
                                name="name"
                                className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                            />
                            , of legal age. single, is a bonafide resident of
                            Borabod, is personally known to me of good moral
                            character and a law abiding citizen.
                        </p>
                        <p className="mt-5 z-20">
                            Further, certifies that{" "}
                            <input
                                type="text"
                                name="name"
                                className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                            />{" "}
                            has not been charge much less convicted of any
                            infraction of laws as well as in Barangay Ordinance
                            and any offense involving turpitudes.
                        </p>
                        <p className="mt-5">
                            This certification was issued upon the request of
                            the name mentioned above in connection with her
                            application requirements for Enrollment
                        </p>
                        <p className="mt-5">
                            Given this{" "}
                            <input
                                type="text"
                                name="day"
                                className="text-center border-b-2 border-black w-5 outline-none"
                            />{" "}
                            day of{" "}
                            <input
                                type="text"
                                name="month"
                                className="text-center border-b-2 border-black w-20 outline-none"
                            />
                            .
                        </p>
                        <p className="mt-5">Certified by:</p>
                    </div>
                    {/* footer */}
                    <div className="w-full absolute left-0 bottom-5 z-10">
                        <Image
                            src={footer}
                            alt="Footer"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="w-[121px] h-[554px] absolute right-1 bottom-5">
                        <Image
                            src={dahon}
                            alt="dahon"
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clearance;
