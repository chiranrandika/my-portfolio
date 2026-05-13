const Hometown = () => {
  return (
    <section className="py-16 sm:py-20 px-6 bg-gray-100 dark:bg-gray-900/40 border-t border-gray-200 dark:border-gray-800/60 transition-colors duration-300">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-4">
            <span>📍</span> My Hometown
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Ratnapura, Sri Lanka
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm">
            City of Gems — Sabaragamuwa Province 🇱🇰
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl shadow-black/5 dark:shadow-black/40">
          <iframe
            title="Ratnapura, Sri Lanka"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.37753844963!2d80.35291!3d6.68233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3887f46f7af17%3A0x36af5e0b7e534e4d!2sRatnapura!5e0!3m2!1sen!2slk!4v1715000000000!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 sm:h-80 md:h-96"
          />
        </div>

      </div>
    </section>
  );
};

export default Hometown;
