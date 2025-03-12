import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IMedicine } from "@/types";
import Link from "next/link";

const MedicineCard = ({ medicine }: { medicine: IMedicine }) => {
  // console.log(medicine);

  return (
    <Card className="w-full text-center border-gray-300 shadow-md p-4 mx-auto">
      <Image
        width={800}
        height={800}
        src={medicine.medi_image}
        alt={medicine.name}
        className="w-full h-full object-cover rounded-md"
      />
      <CardContent>
        <Link href={`/medicines/${medicine?._id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mt-3">
            {medicine.name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-green-600">${medicine.price}</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="outline">Add to Cart</Button>
          <Button>Buy Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
