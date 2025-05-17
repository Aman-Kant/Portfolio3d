import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import MobileFallback from "./components/MobileFallback";

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="fixed inset-0 bg-primary z-50 flex flex-col justify-center items-center p-6 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-red-400 mb-4">{error.message}</p>
        <p className="text-secondary text-lg mb-6">
          There was an issue loading the 3D content. Please try refreshing the page.
        </p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-opacity-80 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

const AppContent = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => {
          console.error('Error in 3D content:', error, info);
        }}
      >
        <Suspense fallback={<div className="flex items-center justify-center h-screen bg-primary">Loading...</div>}>
          <MobileFallback />
          <AppContent />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;