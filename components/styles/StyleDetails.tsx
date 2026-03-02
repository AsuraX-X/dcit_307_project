import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const StyleDetails = ({
  name,
  type,
  description,
  image,
  action,
}: {
  name: string;
  type: string;
  description: string;
  image: string;
  action: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed flex sm:h-auto h-screen items-center justify-center inset-0 bg-dark/20 backdrop-blur-sm z-10"
      onClick={action}
    >
      <div
        className="relative w-full flex flex-col z-11 sm:w-180 h-screen sm:aspect-square sm:h-auto bg-secondary overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={action}
          className="sm:hidden absolute top-4 right-4 z-20 p-1 bg-transparent border border-secondary text-secondary backdrop-blur-sm"
          aria-label="Close"
        >
          <X size={22} />
        </button>
        <div>
          <Image
            src={image}
            alt={"Style Image"}
            width={0}
            height={0}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-8 space-y-4 py-12">
          <h1 className="text-2xl">{name}</h1>
          <p className=" text-black/60">{description}</p>
          <Link
            onClick={action}
            href={`/contact?type=custom&message=${encodeURIComponent(`Hi, I'm interested in ordering a style similar to "${name}" (${type}). Could you please provide more details?`)}`}
          >
            <button className="btn bg-primary hover:bg-primary-dark">
              Order Similar Style
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StyleDetails;
