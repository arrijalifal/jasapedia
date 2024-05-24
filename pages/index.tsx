import Image from "next/image";
import SideImage from '@/public/images/sideimage.png';
import Link from "next/link";
import Main from "@/components/Main";

export default function Home() {
  return <Main>
    <div>
      <h1 className="">Jasapedia:</h1>
      <h1 className=" mt-2">Marketplace Jasa</h1>
      <p className="text-xl mt-8">Aplikasi jual-beli jasa untuk kebutuhan sehari-hari anda</p>
      <Link href={'/about'}><button className="text-xl border border-white px-4 py-2 rounded-xl mt-8">Pelajari Selengkapnya &gt;&gt;</button></Link>
    </div>
    <div className="pr-32">
      <Image src={SideImage} width={332} height={332} alt="side image"></Image>
    </div>
  </Main>
}
