import React from 'react'
import ProductDistributionIcon from '../icons/ProductDistributionIcon'
import SalesIcon from '../icons/SalesIcon'
import SolutionIcon from '../icons/SolutionIcon'
import BookIcon from '../icons/BookIcon'

function Services() {
  return (
   <section className='mt-8'>
    <h3>Our Services</h3>
    <div className="services-container lg:flex flex-row flex-wrap xl:flex-nowrap gap-4">
        {/* card 1 */}
        <figure className="card-container basis-[48%] xl:basis-auto">
            <div className="top-section">
                <div className="icon-container">
                   <span className='block'>
                   <ProductDistributionIcon/>
                   </span>
                </div>
            </div>
            <div className="bottom-section">
                <div className="card-text">
                    <h4>Product Distribution</h4>
                    <p>We provide a seamless distribution network for top-tier cameras, ring lights, and other electronic devices. With a robust supply chain, we ensure that our products reach retailers and consumers swiftly and efficiently.</p>
                </div>
            </div>
        </figure>

        {/* card 2 */}
        <figure className="card-container basis-[48%] xl:basis-auto">
            <div className="top-section">
                <div className="icon-container">
                <span className='block'>
                   <SalesIcon/>
                   </span>
                </div>
            </div>
            <div className="bottom-section">
                <div className="card-text">
                    <h4>Sales &amp; Support </h4>
                    <p>Our team offers personalized sales support, helping you choose the best products tailored to your specific requirements. Post-purchase, we stand by you with exceptional customer service to assist with any inquiries or issues.</p>
                </div>
            </div>
        </figure>

        {/* card 3 */}
        <figure className="card-container basis-[48%] xl:basis-auto">
            <div className="top-section">
                <div className="icon-container">
                <span className='block'>
                   <SolutionIcon/>
                   </span>
                </div>
            </div>
            <div className="bottom-section">
                <div className="card-text">
                    <h4>Custom Solutions</h4>
                    <p>Need something unique? We offer custom solutions to fit your specific needs, whether it's a bulk order for a corporate client or a special configuration of our electronic products.</p>
                </div>
            </div>
        </figure>
        
        {/* card 4 */}
        <figure className="card-container basis-[48%] xl:basis-auto">
            <div className="top-section">
                <div className="icon-container">
                <span className='block'>
                   <BookIcon/>
                   </span>
                </div>
            </div>
            <div className="bottom-section">
                <div className="card-text">
                    <h4>Training and Workshops</h4>
                    <p>We empower our customers with the knowledge to get the most out of their purchases. Our training sessions and workshops cover everything from basic operation to advanced techniques.</p>
                </div>
            </div>
        </figure>
    </div>
   </section>
  )
}

export default Services