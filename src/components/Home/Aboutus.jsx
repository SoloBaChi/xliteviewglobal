import React from 'react'

function Aboutus() {
  return (
    <section className='mt-20'>
       <div className="lg:flex items-center gap-8">
        <div className="flex-item mb-12">
        <h3>About Xlite View Global</h3>
        <p>Welcome to Xliteviewglobal, your premier destination for high-quality CCTV cameras and lighting accessories. Founded with a passion for innovation and security, we are dedicated to providing cutting-edge solutions that meet the diverse needs of our clients.</p>
        <p>At Xliteviewglobal, we understand the importance of safety and efficiency in today’s fast-paced world. Our team of experts is committed to sourcing and supplying a comprehensive range of CCTV cameras and lighting products that enhance security, visibility, and convenience. Whether you’re looking to safeguard your home, business, or industrial space, our products are designed to deliver unparalleled performance and reliability.</p>
        <p>Our commitment to excellence extends beyond our products. We pride ourselves on offering exceptional customer service, ensuring that each client receives personalized attention and support. Our knowledgeable team is here to assist with everything from product selection to installation guidance, ensuring that you make informed decisions and achieve optimal results</p>
        <p>Join us in our mission to illuminate and secure spaces around the globe. At Xliteviewglobal, we don’t just provide products; we provide peace of mind.</p>
        </div>
        <div className="flex-item">
            <div className="img-container">
                <img src={`/assets/aboutus.png`} alt="about us" />
            </div>
        </div>
       </div>
    </section>
  )
}

export default Aboutus