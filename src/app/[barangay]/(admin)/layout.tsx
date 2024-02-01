import Image from "next/image"
import Sidebar from "./Sidebar"
import { prisma } from "@/lib/prisma"
import logo from "../../../../public/logo.png"

type AdminLayoutProps = {
  children: React.ReactNode,
  params: {
    barangay: string
  }
}

export const revalidate = 30;
async function AdminLayout({ children, params }: AdminLayoutProps) {
  const organization = await prisma.organization.findUnique({ where: { id: params.barangay } });
  const image = await prisma.images.findFirst({ where: { owner: params.barangay, name: 'barangay' } });

  return (
    <div className="w-full h-full flex flex-col">
      <main className="flex-auto p-5 flex flex-row flex-nowrap">
        <section className="w-80 h-full flex flex-col rounded-xl shadow-md bg-white">
        <div className="w-full flex flex-col center py-10 rounded-t-xl bg-[#436850] text-white">
            <Image
            width={90}
            height={90}
            src={logo}
            alt="barangay_logo"
            />
            <h1 className="text-2xl font-semibold">Barangay Borabod</h1>
            <p className="text-base mt-1 text-white-gray-400">Management System</p>
          </div>
          <div className="flex-auto p-5 py-10">
            <Sidebar artifact={params.barangay} />
          </div>
        </section>
        <div className="flex-auto relative overflow-auto">
          <div className="w-full h-full px-5 absolute">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminLayout