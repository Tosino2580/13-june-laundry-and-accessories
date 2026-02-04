import React from 'react';
import image from '../../../assets/images/Laundry/Laundry.jpeg'
import { Link } from 'react-router-dom';
import WhatsAppButton from '../../WhatsappButon';
const Collections = () => {



  return (
    <div className="bg-white text-gray-800 mt-25 ">
      <div className='flex flex-col md:flex-row gap-4 px-2  md:px-5 py-2 md:py-6'>
        <img src={image} alt="" className='w-[700px] rounded-2xl' />
        <div className='flex flex-col items-center justify-center'>

          {/* Hero Section */}
          <section className=" text-black py-4 px-10 text-center">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">13-JUNE LAUNDRY SERVICE</h1>
            <p className="text-sm md:text-xl max-w-2xl mx-auto">
              At 13-June Laundry, we make caring for your clothes simple, fast, and stress-free. Our mission is to deliver spotless cleaning with the highest level of professionalism, so you can focus on the things that matter most.
            </p>
          </section>


          {/* Event Info */}
          <section className="py-5 md:py-10 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">We offer a full range of reliable laundry and dry-cleaning services, including:</h2>
            <ul className="space-y-4 text-lg font-bold">
              <li><b>✔️ Regular Laundry (Wash, Dry & Fold)</b> <br /> We wash your clothes with premium detergents, dry them carefully, and fold them neatly—ready to wear. Perfect for everyday clothing and weekly household laundry.</li>
              <li><b>✔️ Dry Cleaning</b> <br />

                Delicate fabrics and special outfits require expert care. We use tried-and-trusted methods to clean suits, gowns, native wear, and other sensitive materials without damage.</li>
              <li><b>✔️ Ironing / Pressing</b> <br />

                From shirts and trousers to full outfits, our professional pressing service gives your clothes a crisp, polished, ready-to-wear finish.</li>
              <li><b>✔️ Stain Removal</b> <br />

                Tough stains don’t stand a chance. Our trained team uses advanced stain-treatment methods to safely restore your garments.</li>
              <li><b>✔️ Bedding & Household Items</b> <br />

                We clean duvets, bedsheets, pillowcases, towels, curtains, and more, leaving them fresh, soft, and hygienic.</li>
              <li><b>✔️ Pickup & Delivery</b> <br />

                Busy schedule? No problem. We offer convenient door-to-door pickup and delivery so you don’t have to leave your home or office.</li>
            </ul>
            <WhatsAppButton  service='Laundry Service'/>

            {/* <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold">🗓️ Saturday, 21st September</h3>
              <p className="text-lg mt-1">📍 Freedom Park, Lagos — 4PM till late</p>
            </div> */}
          </section>



          {/* Contact & Sponsorship
          <section className="py-10 px-6 text-center">
            <h3 className="text-xl font-semibold mb-2">📞 Sponsorships or Partnerships?</h3>
            <p className="text-lg">Call us: <Link to="tel:+2348144893978"><span className="font-medium">0814 489 3978</span></Link>  or <Link to="tel:+2349066065870"><span className="font-medium">0906 606 5870</span></Link></p>
          </section> */}
        </div>

      </div>

    </div>
  );
};

export default Collections;
