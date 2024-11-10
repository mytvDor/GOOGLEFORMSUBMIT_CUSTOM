// import React, { useState } from 'react';

// const App: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Google Form submission URL
//     const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfisJzI-kpJS2rc5wUr7LL7BJfDnDgulhApeVO2t71BDel_Bw/formResponse';

//     // Form data with Google Form entry IDs
//     const formData = new URLSearchParams();
//     formData.append('entry.1554023261', name);
//     formData.append('entry.275592230', email);
//     formData.append('entry.1061567685', message);

//     const response = await fetch(googleFormURL, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });
//       if (response.ok) {
//         setStatus('Form submitted successfully!');
//         setName('');
//         setEmail('');
//         setMessage('');
//       } else {
//         setStatus('Error submitting form.');
//       }
    
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form 
//         onSubmit={handleSubmit} 
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
        
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             rows={4}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Submit
//         </button>

//         {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
//       </form>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';

// const ContactForm: React.FC = () => {
//   const [status, setStatus] = useState<string | null>(null);

//   // Google Form submission URL
//   const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfisJzI-kpJS2rc5wUr7LL7BJfDnDgulhApeVO2t71BDel_Bw/formResponse';

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form 
//         action={googleFormURL} 
//         method="POST" 
//         target="_self"
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
//         onSubmit={() => setStatus('Form submitted successfully!')}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
        
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="entry.1554023261"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="entry.275592230"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//           <textarea
//             id="message"
//             name="entry.1061567685"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             rows={4}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Submit
//         </button>

//         {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';

const App: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const googleFormAction =
    'https://docs.google.com/forms/d/e/1FAIpQLSfisJzI-kpJS2rc5wUr7LL7BJfDnDgulhApeVO2t71BDel_Bw/formResponse';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatusMessage('Form Submitted! Thank you for contacting us.');

    const form = e.target as HTMLFormElement;
    form.reset();

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none'; 
    iframe.src = googleFormAction; 

    document.body.appendChild(iframe);

    const formData = new FormData(form);

    const submitForm = (data: FormData) => {
      const hiddenForm = document.createElement('form');
      hiddenForm.style.display = 'none'; 
      hiddenForm.action = googleFormAction;
      hiddenForm.method = 'POST';

      data.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value.toString();
        hiddenForm.appendChild(input);
      });

      iframe.contentWindow?.document.body.appendChild(hiddenForm);
      hiddenForm.submit();
    };

    submitForm(formData)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>

        {statusMessage && (
          <div className="mb-4 text-green-500 text-sm font-semibold">
            {statusMessage}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="entry.1554023261" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="entry.275592230" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="entry.1061567685" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
