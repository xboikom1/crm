export default function StatsPreview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl w-full">
      <div className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-lg text-center border border-purple-500/30">
        <p className="text-3xl font-bold text-purple-200">24/7</p>
        <p className="text-sm text-gray-400 mt-1">Availability</p>
      </div>
      <div className="p-6 bg-gradient-to-br from-lime-500/20 to-lime-900/20 rounded-lg text-center border border-lime-500/30">
        <p className="text-3xl font-bold text-lime-200">100%</p>
        <p className="text-sm text-gray-400 mt-1">Security</p>
      </div>
      <div className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-900/20 rounded-lg text-center border border-blue-500/30">
        <p className="text-3xl font-bold text-blue-200">600+</p>
        <p className="text-sm text-gray-400 mt-1">Companies</p>
      </div>
      <div className="p-6 bg-gradient-to-br from-pink-500/20 to-pink-900/20 rounded-lg text-center border border-pink-500/30">
        <p className="text-3xl font-bold text-pink-200">Fast</p>
        <p className="text-sm text-gray-400 mt-1">Performance</p>
      </div>
    </div>
  );
}
