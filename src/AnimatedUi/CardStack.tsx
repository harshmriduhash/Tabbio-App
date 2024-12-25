import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let interval: any;

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 15;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isPaused) startFlipping();

    return () => clearInterval(interval);
  }, [isPaused]);

  const startFlipping = () => {
    interval = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const handleNext = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!); // move the first element to the back
      return newArray;
    });
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative">
      <div
        className="relative min-h-60 min-w-60 md:min-h-80 lg:min-h-90 2xl:h-[417px] 2xl:min-w-100 md:min-w-80"
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
      >
        {cards.map((card, index) => {
          // Conditional tilting based on card index
          let rotationAngle = 0;
          if (index === 0) rotationAngle = -14; // First card, more tilt
          if (index === 1) rotationAngle = -6; // Second card, slight tilt
          return (
            <motion.div
              key={card.id}
              className="absolute auth-card min-h-60 min-w-60 2xl:min-h-[417px] 2xl:min-w-100 lg:min-h-90 lg:min-w-80 p-4  dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index < 3 ? index * -CARD_OFFSET : -33, 
                scale: 1 - index * SCALE_FACTOR,
                rotate: rotationAngle,
                zIndex: cards.length - index,
                translateX: index === 0 ? '-25%' : index === 1 ? '-10%' : '0%',
                translateY: index === 0 ? '5%' : '0'
              }}
            >
              <div className="font-normal text-neutral-700 dark:text-neutral-200">
                {card.content}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="relative mt-24 flex items-center justify-between">
        {/* Controls */}
        <button
          className=" text-white bg-white/30 rounded-full h-10 w-10 text-lg flex justify-center items-center  z-10"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>
        {/* Dot Indicators */}
        <div className=" flex space-x-2">
          {items.map((_, idx) => (
            <span
              key={idx}
              className={`h-3 rounded-full ${
                currentIndex === idx ? "bg-white w-8" : "bg-[#B0ADAD] w-3"
              }`}
            />
          ))}
        </div>
        <button
          className=" bg-white/30 p-2 rounded-full h-10 w-10 text-lg flex justify-center items-center text-white z-10"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
