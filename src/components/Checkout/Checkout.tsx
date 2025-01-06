import React from "react";
import Image from "next/image";
import Link from "next/link";
const Checkout = () => {
  return (
    <div className="min-h-full w-full flex flex-col  bg-white items-center  ">
      {/* banner */}
      <div className="h-full md:h-[316px] w-[90%] md:w-[1440px] flex flex-col  items-center justify-center">
        <div className=" md:h-[316px] relative w-[90%] md:w-[1440px] ">
          <Image
            src={"/images/shopbenner.png"}
            alt="hero"
            width={1440}
            height={316}
          />
          <div className="w-[150px] md:w-[124px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] h-[90%] flex flex-col justify-center items-center md:h-[84px] ">
            <h1 className="font-medium text-4xl text-black">Checkout</h1>
            <p className="font-normal text-[16px] text-mygray">home&gt;Checkout</p>
          </div>
        </div>
      </div>
      <div className="h-full w-full md:w-[1440px] flex justify-center items-center   ">
        <div className="h-full  md:py-24  py-0 w-[90%] md:w-[1242px] flex  md:flex-row gap-16 md:items-start items-center flex-col-reverse justify-between ">
          {/* Billing Deatils */}
            <div className="h-full flex gap-2 flex-col   items-center w-[90%] md:w-[608px] ">
              <h1 className="font-medium text-2xl text-black">Billing Deatils</h1>
              <div className="md:w-[453px] justify-between gap-2 flex  h-[75px] ">
                <div className="flex flex-col ">
                <label htmlFor="fname" className="text-start text-black">First Name</label>
                <input type="text" id='fname' className="md:w-[211px]  p-4 w-[172px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
                </div>
                <div className="flex flex-col">
                <label htmlFor="lname" className="text-start text-black">Last Name</label>
                <input type="text" id="lname" className="md:w-[211px] p-4 w-[172px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
                </div>
              </div>
              <label htmlFor="companyname" className="text-start  text-black">Company Name(Optional)</label>
               <input type="text" id="companyname" className="w-full p-4 md:w-[453px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
              <label htmlFor="country" className="text-start  text-black">Country / Region</label>
               <input type="text" id="country" className="w-full p-4 md:w-[453px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
              <label htmlFor="street" className="text-start text-black">Street Address</label>
               <input type="text" id="street" className="w-full p-4 md:w-[453px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
              <label htmlFor="city" className="text-start text-black">Town / City</label>
               <input type="text" id="city" className="w-full p-4 md:w-[453px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
              <label htmlFor="province" className="text-start text-black">Province</label>
               <input type="text" id="province" className="w-full p-4 md:w-[453px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
               <label htmlFor="phone" className="text-start text-black">Phone</label>
               <input type="text" id="phone" className="w-full p-4 md:w-[453px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
              <label htmlFor="email" className="text-start text-black">Email Address(Optional)</label>
               <input type="text" id="email" className="w-full  p-4 md:w-[453px] h-[75px] bg-white rounded-lg  border-gray-400 border" />
               <input type="text" className="w-full md:w-[453px] h-[75px] p-4 bg-white rounded-lg  border-gray-400 border mt-8"  placeholder="Additional information"/>
            </div>
            {/* Order Summary */}
       

            <div className="w-[90%] md:w-[608px] h-[900px] md:h-[789px] ">
        <div className="md:w-[533px] flex flex-col gap-6 h-full items-center justify-center w-full md:h-[616px] ">
            <table className="w-full h-56  gap-6 flex flex-col  border-b border-mygray ">
                <thead className="flex flex-row justify-between">
                    <tr>
                        <td className="font-medium text-2xl  text-black">Product</td>
                    </tr>
                    <tr>
                        <td className="font-medium text-2xl text-black">Subtotal</td>
                    </tr>
                </thead>
                <tbody  className=" w-full h-full flex gap-6 flex-col " >
                    <tr className="flex flex-row justify-between">
                        <td className="font-normal text-[16px] text-mygray">Asgaard sofa</td>
                        <td className="font-light text-[16px] text-black">Rs. 250,000.00</td>
                    </tr>
                    <tr className="flex flex-row justify-between">

                        <td className="font-normal text-[16px] text-black">Subtotal</td>
                        <td className="font-light text-[16px] text-black">Rs. 250,000.00</td>
                    </tr >
                    <tr className="flex flex-row justify-between">

                        <td className="font-normal text-[16px] text-black">Total</td>
                        <td className="font-bold text-2xl text-golden">Rs. 250,000.00</td>
                    </tr>
                </tbody>
            </table>

            <div className="w-full min-h-[107px]">
              <h1 className="font-normal text-[16px] text-black">Direct Bank Transfer</h1>
              <p className="font-light text-[16px] text-mygray">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            </div>

            <div className="w-full min-h-[50px]">
              <div className="flex flex-row gap-4">
              <input type="radio" name="payment" id="" className="h-4 w-4"/> 
              <label htmlFor="payment" className="font-normal text-[16px] text-mygray">Direct Bank Transfer</label>
              </div>
              <div className="flex flex-row gap-4">
              <input type="radio" name="cashondelivery" id="" className="h-4 w-4" />
              <label htmlFor="cashondelivery" className="font-normal text-[16px] text-mygray">Cash on Delivery</label>
              </div>
            </div>

            <p className="font-light text-[16px] text-black">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          
            <button className='w-[318px] h-[50px]  rounded-xl border-2 border-myblack text-black text-[16px] hover:bg-golden hover:text-white  font-medium'> <Link href={'/'}> Place Order</Link></button> 

        </div>
              
            </div>
        </div>
       </div>
    </div>
  );
};

export default Checkout;
