import Main from "@/components/Main";

export default function About() {
    return <Main flex={false}>
        <div className="w-4/5 text-justify">
            <h1>Apa itu jasapedia?</h1>
            <p className="mt-4">Aplikasi marketplace jasa yang memungkinkan pengguna untuk membeli layanan jasa secara online. Konsepnya mirip dengan marketplace e-commerce, namun fokusnya adalah pada jasa, bukan barang fisik. Pengguna dapat mencari dan memilih penyedia jasa berdasarkan kebutuhan mereka, seperti jasa pemeliharaan rumah, jasa penitipan hewan, jasa potong rumput, jasa pemasangan AC, dan banyak lagi.</p>
            <h1 className="mt-4">Latar Belakang</h1>
            <p className="mt-4">Platform jual beli jasa dirancang untuk mengatasi masalah pencarian jasa yang kurang informatif bagi pengguna dan kurangnya akses untuk penjual jasa yang ingin mempromosikan keahliannya. Dengan menyediakan platform yang memungkinkan pengguna untuk dengan mudah menemukan jasa yang mereka butuhkan dan memberikan ruang bagi para penjual jasa untuk memamerkan keahlian mereka, platform ini bertujuan untuk menciptakan ekosistem yang lebih efisien dan inklusif dalam pertukaran jasa. Dengan demikian, orang yang membutuhkan jasa dapat dengan cepat menemukan penyedia jasa yang tepat, sementara para penjual jasa memiliki akses lebih luas untuk memperluas jangkauan pasar mereka dan meningkatkan peluang kerja.</p>
        </div>
    </Main>
}