import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

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
      className="fixed flex items-center justify-center inset-0 bg-dark/20 backdrop-blur-sm z-10"
      onClick={action}
    >
      <div
        className="w-full overflow-scroll z-11 sm:w-180 h-screen sm:aspect-square sm:h-auto bg-secondary"
        onClick={(e) => e.stopPropagation()}
      >
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
        <div className="px-8 py-6">
          <h1 className="text-2xl">{name}</h1>
          <p className="my-4 text-black/60">{description}</p>
          <Link
            onClick={action}
            href={`/contact?type=custom&message=${encodeURIComponent(`Hi, I'm interested in ordering a style similar to "${name}" (${type}). Could you please provide more details?`)}`}
            className="btn bg-primary hover:bg-primary-dark"
          >
            Order Similar Style
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StyleDetails;
