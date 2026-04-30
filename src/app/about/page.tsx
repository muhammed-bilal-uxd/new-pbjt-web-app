export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About PBJT
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
          <p className="text-xl leading-relaxed">
            Welcome to PBJT. We are dedicated to providing the best service possible to our clients, with a focus on innovation, impact, and excellence.
          </p>
          
          <p>
            Founded with a vision to redefine how value is delivered, our mission is to create impactful solutions that drive real results. 
            We believe in strong partnerships, transparent communication, and continuous improvement.
          </p>
          
          <div className="my-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="m-0">
              To be the leading provider of innovative solutions in our field, recognized globally for our commitment to excellence, sustainable practices, and unwavering client satisfaction.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Team</h2>
          <p>
            With years of experience across various industries, our multidisciplinary team brings a wealth of knowledge and technical expertise to every project we undertake. We are passionate about what we do and are always looking for the next big challenge.
          </p>
        </div>
      </div>
    </div>
  );
}
