import { prisma } from "@/lib/prisma"
import Image from "next/image"

type RouteProps = {
  params: {
    barangay: string
  }
}

async function Page({ params }: RouteProps) {
  const background = await prisma.images.findFirst({ where: { owner: params.barangay,  name: 'background' } })

  return (
    <div className='w-full'>
      {background ? 
        <Image
          width={1280}
          height={720}
          alt="barangay-icon"
          className=""
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          src={`data:${background.type};base64,${Buffer.from(background.content as any).toString('base64')}`}
          />
          :
          <></>
      }
    </div>
  )
}

export default Page