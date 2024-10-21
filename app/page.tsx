import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
// import FavColor from "./components/favColor";
import "./putri-style.css";

export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      {/* <FavColor /> */}
    </section>
  );
}