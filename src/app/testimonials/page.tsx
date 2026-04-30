export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          What People Are Saying
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Don't just take our word for it. Here is what our partners and clients have to say about their experience working with us.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
          <div className="flex text-yellow-400 mb-4">
            ★★★★★
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic mb-6">
            "This is an amazing service. It completely changed the way we work and brought incredible value to our team."
          </p>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">Jane Doe</div>
            <div className="text-sm text-gray-500">Director of Operations</div>
          </div>
        </div>

        <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
          <div className="flex text-yellow-400 mb-4">
            ★★★★★
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic mb-6">
            "I highly recommend PBJT. The team is fantastic, highly communicative, and the results are simply stellar."
          </p>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">John Smith</div>
            <div className="text-sm text-gray-500">CEO, Tech Innovators</div>
          </div>
        </div>

        <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
          <div className="flex text-yellow-400 mb-4">
            ★★★★★
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic mb-6">
            "A truly wonderful experience from start to finish. They understood our needs perfectly and delivered on time."
          </p>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">Sarah Jenkins</div>
            <div className="text-sm text-gray-500">Product Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}
