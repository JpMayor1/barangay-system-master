"use client";

import { Button, Input } from "@material-tailwind/react";
import dayjs from "dayjs";
import { renderAsync } from "docx-preview";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "../../../../../../public/logo.png";
import daetLogo from "../../../../../../public/daet-logo.png";
import footer from "../../../../../../public/footer.png";
import dahon from "../../../../../../public/dahon.png";

function Indigency() {
    return (
        <div className="w-full h-fit flex justify-center items-center">
            <div className="printing-view w-[816px] h-[1056px] bg-white p-10">
                <div className="w-full h-full border-4 border-green-500 p-[1px]">
                    <div className="w-full h-full border border-green-500 relative">
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
                                Certificate of Indigency
                            </h1>
                        </div>

                        <div className="mt-5 px-14 font-cambria text-[16px] z-20">
                            <p>TO WHOM IT MAY CONCERN:</p>
                            <p className="mt-5  z-20">
                                This is to certify that{" "}
                                <input
                                    type="text"
                                    name="name"
                                    className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                                />
                                ,{" "}
                                <input
                                    type="text"
                                    name="age"
                                    className="text-center border-b-2 border-black w-7 outline-none"
                                />{" "}
                                years of age,{" "}
                                <input
                                    type="text"
                                    name="status"
                                    className="text-center border-b-2 border-black w-16 outline-none"
                                />
                                , a bonafide resident of Purok{" "}
                                <input
                                    type="text"
                                    name="purok"
                                    className="text-center border-b-2 border-black w-5 outline-none"
                                />
                                , Barangay Borabod Daet, Camarines Norte.
                            </p>
                            <p className="mt-5 z-20">
                                Furthermost, it is here then to certify as per
                                record of the Barangay thru Census that{" "}
                                <input
                                    type="text"
                                    name="name"
                                    className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                                />{" "}
                                belongs to the indigent family of this locality.
                            </p>
                            <p className="mt-5 z-20">
                                Issued this{" "}
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
                                ,{" "}
                                <input
                                    type="text"
                                    name="year"
                                    className="text-center border-b-2 border-black w-20 outline-none"
                                />{" "}
                                at Barangay Hall Borabod Daet, Camarines Norte
                                in connection with his/her application
                                requirement for{" "}
                                <input
                                    type="text"
                                    name="purpose"
                                    className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                                />{" "}
                                of his/her common in law{" "}
                                <input
                                    type="text"
                                    name="relative"
                                    className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                                />
                                .
                            </p>
                            <p className="mt-5">Certified by:</p>
                        </div>
                        {/* footer */}
                        <div className="w-full absolute left-0 bottom-8 z-20">
                            <Image
                                src={footer}
                                alt="Footer"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="w-[121px] h-[554px] absolute right-1 bottom-8 z-0">
                            <Image
                                src={dahon}
                                alt="dahon"
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Indigency;
