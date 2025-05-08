import getAQuoteImage from '../assets/formbg.png';


const ContactFormRightCard = () => {
  return (
    <div className={`p-8 rounded-lg bg-blue-600 text-white shadow-md h-full flex flex-col justify-center`}>
        <div className="m-auto w-xs p-4 rounded-lg mb-6">
            <img
                src={getAQuoteImage}
                alt="Get a Quote"
                className="-translate-y-7 w-full h-auto rounded-lg"
            />
        </div>
        <h3 className="text-3xl text-center font-bold -mt-12 mb-4">Our Simple Process</h3>
        <ol className="space-y-5">
            <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                    <h4 className="font-bold">Fill Out the Form</h4>
                    <p className='text-gray-200'>Provide basic details about your licenses</p>
                </div>
            </li>
            <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                    <h4 className="font-bold">Quick Response</h4>
                    <p className='text-gray-200'>We'll call you within 15-30 minutes</p>
                </div>
            </li>
            <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                    <h4 className="font-bold">Price Agreement</h4>
                    <p className='text-gray-200'>We'll agree on a fair price for your licenses</p>
                </div>
            </li>
            <li className="flex items-start">
                <div className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                    <h4 className="font-bold">Fast Payment</h4>
                    <p className='text-gray-200'>Receive payment within 1 business day</p>
                </div>
            </li>
        </ol>
    </div>
  )
}

export default ContactFormRightCard
