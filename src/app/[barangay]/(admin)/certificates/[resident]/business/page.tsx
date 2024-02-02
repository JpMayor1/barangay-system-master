"use client";

import { Resident } from "@/lib/types";
import { Button, Input, Tooltip } from "@material-tailwind/react";
import dayjs from "dayjs";
import { renderAsync } from "docx-preview";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillPrinterFill } from "react-icons/bs";

type RouteProps = {
    params: {
        barangay: string,
        resident: string
    }
}

function Business({ params }: RouteProps) {
    const date = dayjs(new Date()).format('MMMM/D/YYYY').split('/')
    const [form, setForm] = useState<Partial<{ name: string, address: string, business: string, purok: string, day: string, month: string, year: string }>>({
        day: date[1],
        month: date[0],
        year: date[2]
    })

    useEffect(() => {
        fetch(
            '/api/person?'+ 
            new URLSearchParams({ 
                organization: params.barangay, 
                resident: params.resident 
            }),

        ).then(async res => {
            console.log(res.status);
            const resident: Resident = await res.json();

            const date = dayjs(new Date()).format('MMMM/D/YYYY').split('/');
            setForm({
                name: `${resident.firstname} ${resident.middlename} ${resident.lastname}`,
                address: resident.street,
                purok: resident.purok,
                day: date[1],
                month: date[0],
                year: date[2]
            })
        })

    }, [])

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
            <div className="printing-view w-[816px] h-[1156px] bg-white p-10">
                <div className="w-full h-full border-4 border-blue-900 relative">
                    <div className="w-full flex items-center justify-center gap-6 mt-12">
                        <div className="w-[100px] h-[100px]">
                            <Image
                                src={require('/public/logo.png')}
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
                                src={require('/public/daet-logo.png')}
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
                                value={form.name}
                                onChange={(ev) => setForm((prev) => ({ ...prev, name: ev.target.value }))}
                                className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                            />
                            of legal age. A resident of
                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                onChange={(ev) => setForm((prev) => ({ ...prev, address: ev.target.value }))}
                                className="text-center border-b-2 border-black w-[100px] outline-none bg-transparent"
                            />
                            Daet, Camarines Norte, is the owner of
                            <input
                                type="text"
                                name="business"
                                value={form.business}
                                onChange={(ev) => setForm((prev) => ({ ...prev, business: ev.target.value }))}
                                className="text-center border-b-2 border-black w-[150px] outline-none bg-transparent"
                            />
                            , located at Purok
                            <input
                                type="text"
                                name="purok"
                                value={form.purok}
                                onChange={(ev) => setForm((prev) => ({ ...prev, purok: ev.target.value }))}
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
                                value={form.day}
                                onChange={(ev) => setForm((prev) => ({ ...prev, day: ev.target.value}))}
                                className="text-center border-b-2 border-black w-5 outline-none"
                            />{" "}
                            day of{" "}
                            <input
                                type="text"
                                name="month"
                                value={form.month}
                                onChange={(ev) => setForm((prev) => ({ ...prev, month: ev.target.value}))}
                                className="text-center border-b-2 border-black w-20 outline-none"
                            />
                            ,
                            <input
                                type="text"
                                name="year"
                                value={form.year}
                                onChange={(ev) => setForm((prev) => ({ ...prev, year: ev.target.value}))}
                                className="text-center border-b-2 border-black w-20 outline-none"
                            />
                            .
                        </p>
                        <p className="mt-5">Certified by:</p>
                    </div>
                    {/* footer */}
                    <div className="w-full absolute left-0 bottom-1 z-10">
                        <Image
                            src={require('/public/footer.png')}
                            alt="Footer"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="w-[121px] h-[554px] absolute right-1 bottom-1">
                        <Image
                            src={require('/public/dahon.png')}
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
