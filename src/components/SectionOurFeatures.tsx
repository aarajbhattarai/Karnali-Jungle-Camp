import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENnefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Happening cities </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Wildlife" />
            <span className="block text-xl font-semibold">
              Explore the Wild
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              At Karnali Jungle Camp, tiger sight-seeing is our crown jewel. As
              one of the best places in Nepal to spot the elusive Bengal tiger,
              every visit promises a thrilling encounter with one of nature's
              most majestic creatures. You'll also witness an abundance of
              wildlife, from deer, one-horned rhinos to playful river dolphins,
              all within their natural habitats.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Travel" />
            <span className="block text-xl font-semibold">
              Pioneers in Wildlife Tourism
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Across Nepal, we have pioneered responsible wildlife tourism,
              offering authentic and immersive experiences for travelers seeking
              more than just a vacation. Our knowledgeable guides take you on an
              unforgettable journey through the jungle, where every step unveils
              the magic of the wild.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name=" Sustainable" />
            <span className="block text-xl font-semibold">
              Sustainable Eco-Tourism
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Sustainability lies at the core of everything we do. From our
              eco-friendly accommodations to the sustainable practices
              implemented across our operations, we are dedicated to preserving
              the environment. Our efforts ensure that the beauty of Bardiya
              remains untouched for generations to come.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
