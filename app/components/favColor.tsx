"use client";

import { useState } from "react";

export default function FavColor() {
    const [warna, setWarna] = useState("Biru");

    return (
        <div className= "container mx-auto p-4 text-center">
            <h1> Warna Favorit saya adalah {warna}</h1>
            <hr className="m-10" />
            <p> Ubah state warna ke warna:</p>
            <button
            className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Merah")}>
            Merah
            </button>

            <button
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Kuning")}>
            Kuning
            </button>

            <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Biru")}>
            Biru
            </button>

            <button
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Hijau")}>
            Hijau
            </button>

            <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Ungu")}>
            Ungu
            </button>
        </div>
    );
}