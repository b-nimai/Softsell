import React from 'react'

const ContactFormSubmited = ({darkMode}) => {
  return (
    <div className="text-center py-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We've received your inquiry and will contact you shortly.
        </p>
    </div>
  )
}

export default ContactFormSubmited
