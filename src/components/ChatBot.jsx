import { useState, useRef, useEffect } from 'react';

// Simple pattern-based responses about Chiran
const getBotResponse = (input) => {
  const q = input.toLowerCase().trim();

  if (!q) return null;

  if (/hi|hello|hey|ayubowan|කොහොමද|hola/.test(q))
    return "Hello! 👋 I'm Chiran's portfolio assistant. Ask me anything about Chiran — his skills, projects, education, or how to contact him!";

  if (/who|chiran|about|you/.test(q))
    return "Chiran Randika is a passionate tech enthusiast from Ratnapura, Sri Lanka 🇱🇰. He's pursuing a Diploma in Software Engineering at SUSL and a Degree in Cyber Security at ICBT Campus simultaneously!";

  if (/skill|tech|stack|language|tool/.test(q))
    return "Chiran's skill set includes:\n⚛️ React  🐘 PHP  🎨 HTML/CSS\n🗄️ MySQL  🐧 Linux (Kali/Tails)\n🔐 Penetration Testing  🎬 Video Editing  ✏️ UI Design";

  if (/project|work|built|lankaskill|restaurant/.test(q))
    return "Chiran has built:\n\n🔹 **LankaSkill** — A freelance marketplace for Sri Lankan talent built with PHP, MySQL & JavaScript.\n\n🔹 **Restaurant Website** — A full-featured restaurant site with digital menu, about page & contact form.";

  if (/youtube|video|channel|hela|tech root|sinhala/.test(q))
    return "Chiran runs 2 YouTube channels 🎬\n\n📺 **Hela Tuber SL** — Sinhala-medium cyber security, Tails OS & Dark Web guides.\n\n📺 **Tech Roots** — Full-stack dev tutorials & UI/UX walkthroughs in Sinhala.";

  if (/study|education|university|degree|diploma|icbt|susl|course/.test(q))
    return "🎓 Chiran is currently enrolled in:\n\n📘 Diploma in Software Engineering — Sabaragamuwa University of Sri Lanka (SUSL)\n\n🔐 Degree in Cyber Security — ICBT Campus\n\nA unique dual-academic path! 🚀";

  if (/contact|email|reach|hire|message/.test(q))
    return "You can reach Chiran through the 📬 Contact form at the bottom of this page! He's also on GitHub, LinkedIn & Facebook — check the links in the Hero section.";

  if (/location|hometown|ratnapura|city|live|from/.test(q))
    return "Chiran is from 📍 Ratnapura — the famous 'City of Gems' in the Sabaragamuwa Province of Sri Lanka 🇱🇰";

  if (/open|work|hire|job|available|freelance/.test(q))
    return "Yes! 🟢 Chiran is currently **open to work** — whether it's a freelance project, internship, or full-time opportunity. Use the Contact form to get in touch!";

  if (/thanks|thank you|bye|goodbye/.test(q))
    return "You're welcome! 😊 Feel free to ask anything else about Chiran's portfolio. Have a great day! 👋";

  return "Hmm, I'm not sure about that 🤔 Try asking about Chiran's skills, projects, education, YouTube channels, or how to contact him!";
};

const ChatBot = () => {
  const [open,     setOpen]    = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi there! 👋 I'm Chiran's AI assistant. Ask me about his skills, projects, education, or anything else!" }
  ]);
  const [input,   setInput]   = useState('');
  const [typing,  setTyping]  = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef       = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { from: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(trimmed);
      setTyping(false);
      if (response) {
        setMessages(prev => [...prev, { from: 'bot', text: response }]);
      }
    }, 800 + Math.random() * 400);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Floating toggle button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open AI chat'}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none
          ${open
            ? 'bg-gray-800 dark:bg-gray-700 rotate-0 scale-95'
            : 'bg-gradient-to-br from-cyan-500 to-blue-600 hover:scale-110 hover:shadow-cyan-500/40'
          }`}
      >
        {open ? (
          /* X icon */
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* ── Chat panel ── */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm
          bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700
          flex flex-col overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ maxHeight: '70vh', minHeight: '420px' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.591 2.25M14.25 3.104c.251.023.501.05.75.082M19.5 14.25v-2.625a4.5 4.5 0 00-1.242-3.105" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Chiran's AI Assistant</p>
            <p className="text-cyan-100 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block animate-pulse" />
              Online · Ask me anything
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-white/70 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.from === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              )}
              <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-br-sm'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick suggestions */}
        <div className="px-4 pb-2 flex gap-2 flex-wrap flex-shrink-0">
          {['Skills', 'Projects', 'YouTube', 'Contact'].map((s) => (
            <button
              key={s}
              onClick={() => {
                const response = getBotResponse(s);
                setMessages(prev => [...prev, { from: 'user', text: s }]);
                setTyping(true);
                setTimeout(() => {
                  setTyping(false);
                  if (response) setMessages(prev => [...prev, { from: 'bot', text: response }]);
                }, 700);
              }}
              className="text-xs px-3 py-1 rounded-full border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 pb-4 pt-2 flex items-center gap-2 border-t border-gray-100 dark:border-gray-800 flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about Chiran..."
            className="flex-1 text-sm px-4 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || typing}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md hover:shadow-cyan-500/40 hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
