import React from 'react';
import Link from 'next/link';
import moment from 'moment';

const VlogCard = ({ vlog }) => {
  console.log(vlog);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={vlog.featuredImage.url}
          alt={vlog.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transistion duration-100 text-center mb-8 cursor-pointer hover:text-blue-400 font-semibold">
        <Link href={`/vlog/${vlog.vlogUrl}`}>{vlog.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center align-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={vlog.influencer.photo.url}
            alt={vlog.influencer.name}
            className="align-middle rounded-full border-2"
            height="35px"
            width="35px"
          />
          <p className="inline font-bold align-middle text-blue ml-2">
            {vlog.influencer.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <span className="ml-4">
            {moment(vlog.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {vlog.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/vlog/${vlog.vlogUrl}`}>
          <span className="transistion duration-500 transform hover:translate-x-1 inline-block bg-gray-400 rounded text-white px-4 py-2 cursor-pointer">
            Read more &nbsp;<i className="fas fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VlogCard;
