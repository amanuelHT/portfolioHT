export default function Remarks() {
  return (
   <section className="px-6 py-16 max-w-4xl mx-auto">
  <h2 className="text-xl font-bold mb-10">Remarks</h2>

  <div className="relative ml-4 pl-6 border-l-2 border-dashed border-gray-300">
    {/* Dot */}
    <div className="absolute left-0 top-0 w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-900 shadow-md"></div>

    {/* Remark text */}
    <p className="ml-4 text-sm text-gray-700 dark:text-gray-300">
      This portfolio is a work in progress.
    </p>

    <p className="ml-4 text-sm italic text-gray-500 mt-2">
      ... so much more to come!
    </p>
  </div>
</section>

  );
}
