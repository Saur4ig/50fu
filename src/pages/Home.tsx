import React, { useState, useEffect } from "react";
import phrases, { Phrase } from "../data/phrases";
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import LanguageCard from "../components/home/LanguageCard";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState<{[key: string]: boolean}>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('phraseProgress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(index);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    localStorage.removeItem('phraseProgress');
    setProgress({});
  };

  const filteredPhrases = phrases.filter(
    (item: Phrase) =>
      item.language.toLowerCase().includes(search.toLowerCase()) ||
      item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <SearchBar 
          search={search}
          onSearchChange={setSearch}
          onReset={handleReset}
        />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhrases.map((item, index) => (
            <LanguageCard
              key={index}
              item={item}
              index={index}
              isLearned={!!progress[item.language]}
              isCopied={copiedId === index}
              onCopy={handleCopy}
            />
          ))}
        </div>

        {filteredPhrases.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              No matching languages or phrases found.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
