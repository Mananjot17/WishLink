import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const CreatorCard = ({ MouseMove, MouseLeave, Ref, flippable, cardData }) => {
  return (
    <div
      className='aspect-square w-44 h-48 flex relative perspective-[1000px]'
      onMouseMove={flippable ? MouseMove : null} // Only flip if the card is flippable
      onMouseLeave={flippable ? MouseLeave : null}
      style={{
        pointerEvents: flippable ? 'auto' : 'none', // Disable hover if not flippable
      }}
    >
      <div
        ref={Ref}
        className='relative w-full h-full transition-transform duration-700'
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Card */}
        <div
          className='absolute inset-0 rounded-3xl border overflow-hidden flex items-center justify-center'
          style={{ backgroundImage: cardData.backgroundImage}}
        >
          <div className='w-full h-full'>
            <img
              src={cardData.imageUrl} // Use dynamic image URL
              alt={cardData.name} // Use dynamic alt text
              className='object-cover object-center w-full h-full rounded-3xl'
            />
          </div>
        </div>

        {/* Back Card */}
        <div
          className='absolute inset-0 rounded-3xl border-white flex flex-col items-center justify-center p-2'
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundImage: cardData.backgroundImage,
          }}
        >
          <div className='font-semibold text-xl text-black'>{cardData.name}</div>
          <div className='w-full pt-2'></div>
          <Link to={cardData.instagramUrl} className='flex gap-1 items-center'>
            <FaInstagram className='text-black' />
            <span className='text-xs text-black'>@{cardData.instagramHandle}</span>
          </Link>
          <div className='text-xs text-black text-center'>{cardData.followers} Followers</div>
          <div className='w-full pt-4'></div>
          <Link to={cardData.shopUrl} className='border border-white bg-white text-black px-2 py-1 rounded'>
            <span className='text-sm text-black'>My Wishlink shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
