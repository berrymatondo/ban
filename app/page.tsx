import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import bgImage from "../public/propro.png";

export default function Home() {
  return (
    <section className="h-lvh p-2 bg-gradient-to-tr from-white to-blue-300">
      <div className="w-full h-1/4 p-1 bg-white rounded-lg">
        <div className="w-full h-full bg-neutral-200 rounded-lg overflow-hidden">
          {/*         <div className="relative  sm:hidden -z-10  m-1 rounded-lg h-1/2 overflow-hidden">
           */}{" "}
          <Image
            src={bgImage}
            alt="background"
            placeholder="blur"
            quality={100}
          />
          {/*       </div>
           */}
        </div>
      </div>
      <p className="text-4xl font-bold text-center text-purple-700">
        {" "}
        {
          "Retrouvez les différents corps de métier dans la famille ICC Belgique"
        }
      </p>
      <p className="text-center p-4 ">
        Annuaire des professionnels de ICC Belgique dont le but est de
        promouvoir la consommation intracommunautaire{" "}
      </p>
      <div className="w-full bg-white rounded-lg p-4">
        <p className="text-lg font-semibold">{"Que recherchez-vous ?"}</p>
        <Input placeholder="Je recherche ..." className="rounded-lg p-8 my-4" />
        <Button className="bg-blue-600 p-8 text-lg w-full my-4 rounded-full ">
          Rechercher
        </Button>
        <div className="flex items-center justify-between mt-4 ">
          <Button className="p-8 text-lg rounded-full bg-green-600">
            {"S'enregistrer"}
          </Button>
          <Button className="p-8 text-lg rounded-full" variant="outline">
            {"Mettre à jour mes données"}
          </Button>
        </div>
      </div>
    </section>
  );
}
