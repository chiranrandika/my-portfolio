import { useState } from 'react';

const LoginPage = ({ onBack }) => {
  const [tab,       setTab]      = useState('login');
  const [form,      setForm]     = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPass,  setShowPass] = useState(false);
  const [submitted, setSubmitted]= useState(false);
  const [errors,    setErrors]   = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const errs = {};
    if (tab === 'signup' && !form.name.trim())              errs.name     = 'Name is required';
    if (!form.email.trim())                                  errs.email    = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))              errs.email    = 'Enter a valid email';
    if (!form.password)                                      errs.password = 'Password is required';
    else if (form.password.length < 6)                       errs.password = 'Minimum 6 characters';
    if (tab === 'signup' && form.confirm !== form.password)  errs.confirm  = 'Passwords do not match';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', password: '', confirm: '' });
    }, 3000);
  };

  const switchTab = (t) => { setTab(t); setErrors({}); setSubmitted(false); };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-blue-50 to-white dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden">

      <div className="absolute top-[-120px] left-[-100px] w-80 h-80 rounded-full bg-cyan-300/20 dark:bg-cyan-700/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 rounded-full bg-blue-300/20 dark:bg-blue-800/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-100/30 dark:bg-cyan-900/10 blur-3xl pointer-events-none" />

      {/* Top bar */}
      <header className="w-full px-6 py-4 flex items-center relative z-10 border-b border-gray-200/60 dark:border-gray-800/40 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>
        <span className="ml-auto text-base font-extrabold text-gray-900 dark:text-white">
          chiranrandika.me
        </span>
      </header>

      {/* Centered card area */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:py-16 relative z-10">
        <div className="w-full max-w-md">

          {/* Embossed glass card */}
          <div className="relative rounded-3xl px-8 py-10 sm:px-10 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-white/80 dark:border-gray-700/50 shadow-[0_8px_40px_-8px_rgba(6,182,212,0.2),0_2px_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_-8px_rgba(6,182,212,0.15),0_2px_8px_-2px_rgba(0,0,0,0.4)]">

            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />

            {/* Avatar + heading */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">
                {tab === 'login' ? 'Welcome back' : 'Create an account'}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {tab === 'login' ? 'Sign in to continue' : "Join Chiran's space"}
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex p-1 bg-gray-100/80 dark:bg-gray-800/80 rounded-xl mb-7 backdrop-blur-sm">
              {['login', 'signup'].map((t) => (
                <button
                  key={t}
                  onClick={() => switchTab(t)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    tab === t
                      ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {t === 'login' ? 'Log In' : 'Sign Up'}
                </button>
              ))}
            </div>

            {/* Success state */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-xl">
                    {tab === 'login' ? 'Logged in!' : 'Account created!'}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {tab === 'login' ? 'Welcome back 👋' : 'Welcome aboard! 🚀'}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                {tab === 'signup' && (
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      id="name" name="name" type="text"
                      value={form.name} onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition backdrop-blur-sm ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'}`}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition backdrop-blur-sm ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'}`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password" name="password" type={showPass ? 'text' : 'password'}
                      value={form.password} onChange={handleChange}
                      placeholder="Min. 6 characters"
                      className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition backdrop-blur-sm ${errors.password ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(p => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      {showPass ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                </div>

                {tab === 'signup' && (
                  <div className="space-y-1.5">
                    <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Confirm Password
                    </label>
                    <input
                      id="confirm" name="confirm" type={showPass ? 'text' : 'password'}
                      value={form.confirm} onChange={handleChange}
                      placeholder="Re-enter password"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition backdrop-blur-sm ${errors.confirm ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'}`}
                    />
                    {errors.confirm && <p className="text-xs text-red-500">{errors.confirm}</p>}
                  </div>
                )}

                {tab === 'login' && (
                  <div className="flex justify-end -mt-1">
                    <button type="button" className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 mt-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  {tab === 'login' ? 'Log In' : 'Create Account'}
                </button>

                <div className="relative my-1">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-transparent text-gray-400">or</span>
                  </div>
                </div>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    type="button"
                    onClick={() => switchTab(tab === 'login' ? 'signup' : 'login')}
                    className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                  >
                    {tab === 'login' ? 'Sign Up' : 'Log In'}
                  </button>
                </p>

              </form>
            )}

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
