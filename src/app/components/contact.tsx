// 'use client'; // Ensure this is a client component

// import React from "react";
// import { useForm, ValidationError } from '@formspree/react';

// //      <form action="https://formspree.io/f/mjkvlkgk" method="POST">



// function Form() {
//   const [state, handleSubmit] = useForm(process.env.FORMSPREE_KEY); // Replace "mjkvlkgk" with your Formspree endpoint

//   if (state.succeeded) {
//     return <p>Thanks for reaching out! We'll get back to you soon.</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="email" className="block font-medium text-gray-700">
//           Email Address
//         </label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//         />
//         <ValidationError prefix="Email" field="email" errors={state.errors} />
//       </div>

//       <div>
//         <label htmlFor="message" className="block font-medium text-gray-700">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           required
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//         />
//         <ValidationError prefix="Message" field="message" errors={state.errors} />
//       </div>

//       <button
//         type="submit"
//         disabled={state.submitting}
//         className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

// export default function ContactForm() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
//         <Form />
//       </div>
//     </main>
//   );
// }

