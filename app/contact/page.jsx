import React from 'react'

const Contact = () => {
    return (
        <section className="bg-white">
            <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md border border-b-black shadow shadow-cyan-600 rounded-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact
                    Us</h2>
                <p className="mb-4 lg:mb-8 font-light text-center text-gray-700 sm:text-xl">Got a
                    technical issue? Want to send feedback about a beta feature? Need details about our Business plan?
                    Let us know.</p>
                <form action="#" className="space-y-4">
                    <div>
                        <label htmlFor="name"
                               className="block mb-2 text-sm font-medium text-gray-900">Your
                            name</label>
                        <input type="text" id="name"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="Let us know your name" />
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900">Your
                            email</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                               placeholder="name@flowbite.com" />
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-gray-900">Your website</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                               placeholder="Let us know your website url" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900">Your
                            message</label>
                        <textarea id="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
