'use client'

import Image from 'next/image';
import { ReactNode, forwardRef } from 'react';
import CCarousel, { ReactElasticCarouselProps } from 'react-elastic-carousel'
import { FaUserCircle } from 'react-icons/fa';

// eslint-disable-next-line react/display-name
const CustomCarousel = forwardRef<
  any,
  ReactElasticCarouselProps & { children: ReactNode[] }
>((props, ref) => <CCarousel ref={ref} {...props} />);

const Carousel = ({ data = [] }: { data: { name: string; photo: string; description: string }[] }) => {
  return (
    <CustomCarousel itemsToShow={3} isRTL={false} showArrows={false} breakPoints={[
      { width: 1, itemsToShow: 1 },
      { width: 640, itemsToShow: 2 },
      { width: 1024, itemsToShow: 3 },
    ]}>
      {data.map((item, index) => (
        <div key={index} className="text-center relative p-7">
          <div className="absolute text-primary left-0 top-0 text-6xl font-black italic">“</div>
          <p className="text-sm italic mb-4">{item.description}</p>
          {!item.photo ? (
            <FaUserCircle className="w-9 h-9 mx-auto" />
          ) : (
            <Image src={item.photo} alt={item.name} />
          )}
          <h5 className="text-xs uppercase italic font-bold mt-3">{item.name}</h5>
        </div>
      ))}
    </CustomCarousel>
  )
}

export default Carousel