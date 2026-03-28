import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting"); // Changed from setSubmitting(true) to match state variable
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string; // Get email for body
    const subject = formData.get("subject") as string; // Get subject for mailto subject
    const bodyMessage = formData.get("message") as string;
    
    // Construct the mailto subject and body
    const mailtoSubject = `Portfolio Contact from ${encodeURIComponent(name)} - ${encodeURIComponent(subject)}`;
    const mailtoBody = `Sender Name: ${encodeURIComponent(name)}\nSender Email: ${encodeURIComponent(email)}\n\nMessage:\n${encodeURIComponent(bodyMessage)}`;

    // Trigger the mailing app immediately
    window.location.href = `mailto:manassingh9220@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Simulate API call for UI feedback
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 lg:p-10 shadow-lg dark:shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 dark:bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-20 dark:opacity-10 pointer-events-none"></div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-400">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Manas Singh"
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-sans"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-400">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="manas@example.com"
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-sans"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-slate-600 dark:text-slate-400">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="Project Inquiry"
            className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-sans"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-sans resize-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={status !== "idle"}
          className="w-full py-4 rounded-xl bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {status === "idle" && "Send Message"}
          {status === "submitting" && (
            <svg className="animate-spin h-5 w-5 text-white dark:text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {status === "success" && "Message Sent!"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
