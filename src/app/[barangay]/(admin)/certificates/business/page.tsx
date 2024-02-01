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

function Business() {
    return (
        <div className="w-full h-fit flex justify-center items-center">
            <div className="printing-view w-[816px] h-[1156px] bg-white p-10">
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
                            Barangay Business Certification
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
                            of legal age. A resident of
                            <input
                                type="text"
                                name="address"
                                className="text-center border-b-2 border-black w-[100px] outline-none bg-transparent"
                            />
                            Daet, Camarines Norte, is the owner of
                            <input
                                type="text"
                                name="business"
                                className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                            />
                            , located at Purok
                            <input
                                type="text"
                                name="purok"
                                className="text-center border-b-2 border-black w-5 outline-none bg-transparent"
                            />
                            , Barangay Borabod Daet Camarines Norte.
                        </p>
                        <p className="mt-5 z-20">
                            Further certifies that her business is in conformity
                            with the provision of existing Barangay Ordinance,
                            rules, and regulations being enforced in this
                            Barangay and not among those business or trade
                            activities being banned to be established or
                            conducted in the Barangay.
                        </p>
                        <p className="mt-5">
                            Furthermost, it certifies that this Barangay thru
                            the undersigned: INTERPOSE NO OBJECTION for the
                            issuance of the corresponding legal
                            documents/permits from the concerned offices needed
                            for the said establishment such as: securing
                            corresponding and legal documents for the business.
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
                            ,
                            <input
                                type="text"
                                name="year"
                                className="text-center border-b-2 border-black w-20 outline-none"
                            />
                            .
                        </p>
                        <p className="mt-5">Certified by:</p>
                    </div>
                    {/* footer */}
                    <div className="w-full absolute left-0 bottom-1 z-10">
                        <Image
                            src={footer}
                            alt="Footer"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="w-[121px] h-[554px] absolute right-1 bottom-1">
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

export default Business;
