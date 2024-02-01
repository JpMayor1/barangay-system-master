import Image from "next/image"
import Link from "next/link"
import id from "../../../../../public/id.png"
import indigency from "../../../../../public/indigency.png"
import clearance from "../../../../../public/certificate.png"
import business from "../../../../../public/business.png"

function Certificates({ params }: any) {
  return (
    <div className="w-full h-full row center gap-x-5">
      <Link
        className="w-auto p-5 rounded-xl bg-[#B7E5B4] text-black"
        href={`/${params.barangay}/certificates/ID`}
      >
        <Image
          alt="Barangay ID"
          width={290}
          height={310}
          src={id}
        />
        Barangay ID
      </Link>

      <Link
        className="w-auto p-5 rounded-xl bg-[#B7E5B4] text-black"
        href={`/${params.barangay}/certificates/indigency`}
      >
        <Image
          alt="indigency"
          width={190}
          height={210}
          src={indigency}
        />
        Barangay Indigency
      </Link>

      <Link
        className="w-auto p-5 rounded-xl bg-[#B7E5B4] text-black"
        href={`/${params.barangay}/certificates/clearance`}
      >
        <Image
          alt="clearance"
          width={190}
          height={210}
          src={clearance}
        />
        Barangay Clearance
      </Link>

      <Link
        className="w-auto p-5 rounded-xl bg-[#B7E5B4] text-black"
        href={`/${params.barangay}/certificates/business`}
      >
        <Image
          alt="Business Permit"
          width={190}
          height={210}
          src={business}
        />
        Business Permit
      </Link>
    </div>
  )
}

export default Certificates