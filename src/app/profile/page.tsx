export default function ProfilePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 space-y-8">
      <h1 className="text-4xl font-bold text-cyan-400">Full Profile Page</h1>
      
      <div className="flex flex-col items-center space-y-4">
        <a
          href="/Raj Joshi_Resume(1).pdf"
          download
          className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg
                     hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-cyan-500/50"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
        <p className="text-gray-400 text-sm">Click to download my latest resume in PDF format</p>
      </div>
    </div>
  );
}
