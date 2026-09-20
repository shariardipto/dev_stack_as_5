import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StackPanel from "./components/StackPanel";
import TechnologyGrid from "./components/TechnologyGrid";
import type { Technology } from "./types/technology";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setIsLoading(true);
        setLoadError("");

        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Could not load technology data.");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        setLoadError(
          error instanceof Error ? error.message : "Something went wrong."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: string) => {
    const technology = selectedTechnologies.find((item) => item.id === id);

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
            <div className="mb-10 max-w-2xl">
              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Explore the <span className="brand-gradient-text-alt">Technologies</span>
              </h1>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {isLoading ? (
              <div className="grid min-h-72 place-items-center rounded-2xl border border-slate-200 bg-white">
                <div className="text-center">
                  <div className="brand-spinner mx-auto h-10 w-10 rounded-full border-4 border-slate-200" />
                  <p className="mt-4 text-sm font-bold text-slate-700">
                    Loading technologies...
                  </p>
                </div>
              </div>
            ) : loadError ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm font-semibold text-red-700">
                {loadError}
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <TechnologyGrid
                  technologies={technologies}
                  selectedTechnologies={selectedTechnologies}
                  onAdd={handleAddToStack}
                />

                <StackPanel
                  selectedTechnologies={selectedTechnologies}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
