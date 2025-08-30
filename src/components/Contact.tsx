import React from "react";

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance my-2">
        Get in Touch
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        I would love to hear from you! Whether you have a question, feedback, or
        just want to say hi, feel free to reach out.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 justify-center">
        {/* Twitter Card */}
        <a
          href="https://x.com/YBTopaz8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 bg-[#1DA1F2] text-white"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mb-2"
          >
            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
          </svg>
          <span className="font-semibold">Twitter</span>
        </a>
        {/* GitHub Card */}
        <a
          href="https://github.com/YBTopaz8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 bg-[#333] text-white"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mb-2"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="font-semibold">GitHub</span>
        </a>
        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/yvan-brunel-a5257816b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 bg-[#0A66C2] text-white"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mb-2"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 01-2.062-2.062c0-1.139.924-2.062 2.062-2.062 1.139 0 2.062.923 2.062 2.062 0 1.138-.923 2.062-2.062 2.062zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.272V1.723C24 .771 23.2 0 22.225 0z" />
          </svg>
          <span className="font-semibold">LinkedIn</span>
        </a>
        {/* Send Mail Card */}
        <a
          href="mailto:8brunel@gmail.com"
          className="flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white"
        >
          <svg
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mb-2"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
          <span className="font-semibold">Send Mail</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
