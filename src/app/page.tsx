import Image from "next/image";
import { TbMessageCircle2 } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <header className="flex items-center justify-between px-5 h-24  w-full">
        <h1 className="font-black text-[#181718] text-[1.975rem]">ID Jovem</h1>

        <div className="icons flex gap-2 items-center">
          <span className="text-green-500 text-3xl">
            <TbMessageCircle2 />
          </span>
          <span className="text-[#5a595b] text-xl">
            <SlOptionsVertical />
          </span>
        </div>
      </header>

      <div className="cardArea px-10 pt-5  rotate-90">
        <div className="card h-full mb-5 w-[530px] bg-gray-700 px-8 py-16 relative flex flex-col  ">
          <div className="header">
            <h1 className="font-black text-[#181718] text-[1.975rem]">
              ID Jovem
            </h1>
          </div>
          <div className="infos flex gap-8 mt-5">
            <div className="foto  w-32 h-36">
              <Image
                src={"/foto.jpg"}
                width={384}
                height={384}
                alt="ddd"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className={` ${inter.className} tracking-wider informacoes text-xs text-white`}
            >
              <span className="name ">Marcos Vinicios Ragazzi Araujo</span>

              <div className="flex justify-between mt-5">
                <span className="flex flex-col">
                  24/02/2001
                  <span className="text-[10px]">Nascimento</span>
                </span>
                <span className="flex flex-col">
                  05/03/2024
                  <span className="text-[10px]">Valido até</span>
                </span>
              </div>

              <span className="flex flex-col mt-5">
                16556738425
                <span className="text-[10px]">NIS</span>
              </span>
            </div>
          </div>

          <div className="qrCode w-24 h-24 bg-white top-0 right-0 absolute mr-7"></div>
          <span
            className={` ${inter.className} tracking-wider informacoes text-[9px] font-light text-white pt-2`}
          >
            *Este documento deve ser apresentado junto com o documento oficial
            de identificação.
          </span>
        </div>
      </div>

      <div className="buttonsArea  flex flex-col mt-[180px] py-10 px-10  gap-5  font-light ">
        <span className="w-full bg-[#37995F] justify-center text-center rounded-xl pb-4 pt-6 text-white">
          TROCAR FOTO
        </span>
        <span className="w-full bg-[#37995F] justify-center text-center rounded-xl pb-4 pt-6 text-white">
          GERAR ID DE OUTRO JOVEM{" "}
        </span>
        <span className="w-full bg-[#5C5A5C] justify-center text-center rounded-xl pb-4 pt-6 text-white">
          VOLTAR
        </span>
      </div>

      <div className=" bottomBar barBottom w-full h-14 fixed bottom-0 left-0 "></div>
    </main>
  );
}
