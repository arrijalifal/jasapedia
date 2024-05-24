import Main from "@/components/Main";
import Image from "next/image";
import instagram from '@/public/images/instagram.png';
import Link from "next/link";

export default function ContactPage() {
    return <Main flex={false}>
        <h1>Kontak Kami</h1>
        <p className="mt-3">Silakan kontak kami jika ada pertanyaan atau masukan</p>
        <Link href={'https://instagram.com/jasapedia.co'}>
            <button className="border rounded-xl flex items-center p-2 mt-3">
                <Image src={instagram} width={32} alt='instagram logo' />
                <p className="ml-2">jasapedia.co</p>
            </button>
        </Link>
        <div className="mt-3 border w-[22rem] p-3 rounded-xl">
            <h2 className="font-medium text-xl">Alamat</h2>
            <p className="mt-3">DEPARTEMEN TEKNIK KOMPUTER<br />
                Fakultas Teknologi Elektro dan Informatika Cerdas<br />
                Institut Teknologi Sepuluh Nopember<br />
                Gedung Tower 2 ITS Lantai 2 Kampus ITS Sukolilo<br />
                Surabaya, 60111
            </p>
        </div>
    </Main>
}