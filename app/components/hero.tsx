import foto from "../foto.jpg";

function Profile() {
    return <img src={foto.src} alt="Putri Amelia Profile" className="fotoku" />;
  }

  export default function Hero() {
    return (
  <div className="container mx-auto p-2 text-center">
        <h1 className="text-black font-bold">CV ONLINE</h1>
        <h1 className="text-2xl:">Putri Amelia Nurfitri</h1>
        <Profile />
        <p>Saya Putri Amelia, mahasiswa Ma'soem University Prodi Sistem Informasi</p>
        </div>
    );
}