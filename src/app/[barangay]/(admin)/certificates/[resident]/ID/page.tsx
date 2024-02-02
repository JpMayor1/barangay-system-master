'use client'

import { Resident } from "@/lib/types"
import { Input, Select, Option, Button, Tooltip } from "@material-tailwind/react"
import dayjs from "dayjs"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BsFillPrinterFill } from "react-icons/bs"
import { FaPen } from "react-icons/fa6"

type RouteProps = {
  params: {
      barangay: string,
      resident: string
  }
}

// source: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
function getAge(birthday: Date) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const row = "w-full row items-center gap-y-2 2xl:gap-x-2 2xl:gap-y-0 my-3";

function ID({ params }: RouteProps) {
  const [form, setForm] = useState<Partial<any>>({})

  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    fetch(
      '/api/person?'+ 
      new URLSearchParams({ 
          organization: params.barangay, 
          resident: params.resident 
      }),

  ).then(async res => {
      console.log(res.status);
      const { purok, street, ...resident}: Resident = await res.json();

      const date = dayjs(new Date()).format('MMMM/D/YYYY').split('/');
      setForm({  
        ...resident,
        address: `PUROK ${purok} Brgy. Borabod, Daet, Camarines Norte`
      })
  })

  }, [])

  return (
    <div className="w-full h-fit flex flex-col p-10 rounded-xl shadow-lg bg-white">
            <div className="w-auto fixed bottom-10 right-5 z-50">
              <div className="flex flex-col gap-y-5">
                <Tooltip content='Edit'>
                  <Button className='rounded-full py-6' color="green"
                      onClick={() => { setEditMode(!editMode) }}
                  >
                      <FaPen size={30} />
                  </Button>
                </Tooltip>
                <Tooltip content='Print'>
                  <Button className='rounded-full py-6' color="green"
                      onClick={() => {
                        setEditMode(false);

                        setTimeout(() => {
                          window.print()

                        }, 250)
                      }}
                  >
                      <BsFillPrinterFill size={30} />
                  </Button>
                </Tooltip>
              </div>
            </div>
      <div className="flex-auto">
        <div className="w-full h-full center row gap-x-2 printing-view">
          <div className="w-auto h-auto relative">
            <div className="absolute z-20">
              <div className="w-[220px] mt-[122px] ml-[170px]">
                <div className="flex flex-row justify-between text-[12.5px] font-semibold">
                  <div>{form.lastname}</div>
                  <div>{form.firstname}</div>
                  <div className="mr-4">{form.middlename}</div>
                </div>
                <div className="flex mt-5 flex-row justify-between text-[12.5px] font-semibold">
                  <div>{form.birthdate}</div>
                  <div className="mr-4">{form.civilStatus}</div>
                </div>
                <div className="flex mt-5 flex-row justify-between text-[12.5px] font-semibold">
                  <div className="ml-4">{form.gender}</div>
                  <div className="ml-10">{form.valid}</div>
                </div>
                <div className="w-full text-[12.5px] font-semibold mt-4">{form.address}</div>
              </div>
            </div>
            <Image
              width={450}
              height={550}
              alt="id_front"
              src={require('/public/id_front.png')}
            />
            <div>
              <div className="absolute z-20">
                <div className="w-[280px] mt-[38px] ml-[70px]">
                  <div className="flex flex-row justify-between">
                    <div className="text-[12.5px] font-semibold">{form.height}</div>
                    <div className="text-[12.5px] font-semibold">{form.weight}</div>
                  </div>
                  <div className="w-full text-[12.5px] font-semibold mt-2">{form.tin}</div>
                  <div className="w-full text-[12.5px] font-semibold mt-2">{form.sss}</div>
                  <div className="w-full mt-[60px] ml-24 text-[12.5px] font-semibold">
                    <div>{form.emergencyPerson}</div>
                    <div>{form.emergencyContact}</div>
                    <div className="ml-2">{form.emergencyAddress}</div>
                  </div>
                </div>
              </div>
              <Image
                width={450}
                height={550}
                alt="id_front"
                src={require('/public/id_back.png')}
              />
            </div>
          </div>

        </div>
      </div>

      {editMode ?
        <div className="w-full h-full row gap-x-2">
          <div className="flex-auto">
            <div className={row}>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="Firstname"
                  value={form.firstname}
                  onChange={(ev) => setForm((prev) => ({ ...prev, firstname: ev.target.value }))}
                />
              </div>
              <div className="flex-auto">
                <Input
                  type="text"
                  label="Middlename"
                  defaultValue={form.middlename ? form.middlename : ''}
                  onChange={(ev) => setForm((prev) => ({ ...prev, middlename: ev.target.value }))}
                />
              </div>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="Lastname"
                  defaultValue={form.lastname ? form.lastname : ''}
                  onChange={(ev) => setForm((prev) => ({ ...prev, lastname: ev.target.value }))}
                />
              </div>
            </div>

            <div className={row}>
              <div className="flex-auto">
                <Select
                  label="Gender"
                  defaultValue={form.gender}
                  onChange={(ev) => setForm((prev) => ({ ...prev, gender: ev }))}
                >
                  <Option value="MALE">Male</Option>
                  <Option value="FEMALE">Female</Option>
                </Select>
              </div>
              <div className="flex-auto">
                <Input
                  required
                  type="date"
                  label="Birthdate"
                  defaultValue={form.birthdate}
                  onChange={(ev) => setForm((prev) => ({ ...prev, birthdate: ev.target.value, age: Number(getAge(new Date(ev.target.value))) }))}
                />
              </div>
              <div className="flex-auto">
                <Input
                  required
                  min={1}
                  type="number"
                  label="Age"
                  value={form.birthdate ? getAge(new Date(form.birthdate)) : form.age}
                  onChange={(ev) => setForm((prev) => ({ ...prev, age: Number(ev.target.value) }))}
                />
              </div>
            </div>

            <div className={row}>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="Civil Status"
                  defaultValue={form.civilStatus ? form.civilStatus : ''}
                  onChange={(ev) => setForm((prev) => ({ ...prev, civilStatus: ev.target.value }))}
                />
              </div>
              <div className="flex-auto">
                <Input
                  required
                  type="date"
                  label="Valid Until"
                  value={new Date().toString()}
                  onChange={(ev) => setForm((prev) => ({ ...prev, valid: ev.target.value }))}
                />
              </div>
            </div>

            <div className="w-full">
              <Input
                required
                type="text"
                label="Address"
                value={form.address}
                onChange={(ev) => setForm((prev) => ({ ...prev, address: ev.target.value }))}
              />
            </div>
          </div>

          <div className="flex-auto">
            <div className={row}>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="Height"
                  value={form.height}
                  onChange={(ev) => setForm((prev) => ({ ...prev, height: ev.target.value }))}
                />
              </div>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="Weight"
                  value={form.width}
                  onChange={(ev) => setForm((prev) => ({ ...prev, weight: ev.target.value }))}
                />
              </div>
            </div>
            <div className={row}>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="TIN NO."
                  value={form.tin}
                  onChange={(ev) => setForm((prev) => ({ ...prev, tin: ev.target.value }))}
                />
              </div>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="SSS NO."
                  value={form.sss}
                  onChange={(ev) => setForm((prev) => ({ ...prev, sss: ev.target.value }))}
                />
              </div>
            </div>
            <div className={row}>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="Notify Person's Name"
                  value={form.emergencyPerson}
                  onChange={(ev) => setForm((prev) => ({ ...prev, emergencyPerson: ev.target.value }))}
                />
              </div>
              <div className="flex-auto">
                <Input
                  required
                  type="text"
                  label="Person's Contact"
                  value={form.emergencyContact}
                  onChange={(ev) => setForm((prev) => ({ ...prev, emergencyContact: ev.target.value }))}
                />
              </div>
            </div>
            <div className="w-full">
              <Input
                required
                type="text"
                label="Address"
                value={form.emergencyAddress}
                onChange={(ev) => setForm((prev) => ({ ...prev, emergencyAddress: ev.target.value }))}
              />
            </div>
          </div>
        </div>
        :
        <></>
      }
    </div>
  )
}

export default ID