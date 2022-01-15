import React, { useContext } from 'react';
import Link from 'next/link';
import Categories from './Categories';

const CategoriesOptions = [
  { name: 'Cardio', slug: 'react' },
  { name: 'Push-Ups', slug: 'react1' },
];

const Header = () => {
  return (
    <div className="container mx-auto px-5 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Boat
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {CategoriesOptions.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
