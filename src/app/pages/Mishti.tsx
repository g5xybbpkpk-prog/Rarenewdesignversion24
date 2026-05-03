import { useState } from "react";
import { Sparkles, Upload, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Mishti() {
  const [step, setStep] = useState<"intro" | "upload" | "loading" | "results">("intro");

  const handleAnalyze = () => {
    setStep("loading");
    setTimeout(() => setStep("results"), 3000);
  };

  return (
    <div className="bg-cream pt-32 pb-24">
      {step === "intro" && (
        <div className="max-w-4xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-full border-2 border-rose/30 overflow-hidden mx-auto mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNraW4lMjBhbmFseXNpcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDA0NTkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Skin Analysis Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3">
              Meet Mishti
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl text-dark mb-6">
              Your AI Skin <em className="text-rose">Companion</em>
            </h1>
            <p className="text-mauve text-sm max-w-2xl mx-auto leading-relaxed">
              Upload a selfie and receive a personalized analysis of your skin type, concerns, and
              recommended ingredients. Mishti matches you with products designed for your unique needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-linen p-8 text-center">
              <p className="font-playfair text-4xl text-dark mb-2">98%</p>
              <p className="text-muted text-xs uppercase tracking-[3px]">Accuracy</p>
            </div>
            <div className="bg-linen p-8 text-center">
              <p className="font-playfair text-4xl text-dark mb-2">45s</p>
              <p className="text-muted text-xs uppercase tracking-[3px]">Analysis Time</p>
            </div>
            <div className="bg-linen p-8 text-center">
              <p className="font-playfair text-4xl text-dark mb-2">12K+</p>
              <p className="text-muted text-xs uppercase tracking-[3px]">Products Matched</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl text-dark text-center mb-12">
              How It <em className="text-rose">Works</em>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Upload Photo", desc: "Take a clear selfie in natural light" },
                { step: "02", title: "AI Analysis", desc: "Mishti detects skin type & concerns" },
                { step: "03", title: "Get Results", desc: "Receive personalized recommendations" },
                { step: "04", title: "Shop Matches", desc: "Browse products tailored for you" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-rose text-xs">{item.step}</span>
                  </div>
                  <h3 className="text-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => setStep("upload")}
              className="bg-dark text-cream px-12 py-4 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
            >
              Begin Analysis →
            </button>
          </div>
        </div>
      )}

      {step === "upload" && (
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl text-dark mb-4">
              Upload Your <em className="text-rose">Selfie</em>
            </h1>
            <p className="text-mauve text-sm">
              For best results, use natural lighting and ensure your face is clearly visible.
            </p>
          </div>

          {/* Upload Card */}
          <div className="bg-linen p-12 mb-8">
            <div className="border-2 border-dashed border-rose/30 p-16 text-center hover:border-rose/50 transition-colors duration-300 cursor-pointer">
              <Upload size={48} className="text-rose mx-auto mb-6" strokeWidth={1.3} />
              <p className="text-dark text-sm mb-2">
                Drag and drop your photo here, or click to browse
              </p>
              <p className="text-muted text-xs">
                Supported formats: JPG, PNG (max 5MB)
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-gold text-[9px] uppercase tracking-[4px] mb-4">Tips for Best Results</p>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-rose flex-shrink-0 mt-0.5" strokeWidth={1.3} />
                <p className="text-mauve text-xs">Use natural daylight (avoid harsh direct sunlight)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-rose flex-shrink-0 mt-0.5" strokeWidth={1.3} />
                <p className="text-mauve text-xs">Remove makeup for accurate skin analysis</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-rose flex-shrink-0 mt-0.5" strokeWidth={1.3} />
                <p className="text-mauve text-xs">Face camera directly with neutral expression</p>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-dark p-6 mb-8">
            <p className="text-cream/70 text-xs leading-relaxed">
              Your privacy matters. Photos are analyzed securely and never shared. Analysis data is
              encrypted and used only to personalize your RARE experience.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setStep("intro")}
              className="border border-rose text-rose px-10 py-3 text-[10px] uppercase tracking-[3px] hover:bg-rose/10 transition-all duration-300"
            >
              Back
            </button>
            <button
              onClick={handleAnalyze}
              className="bg-dark text-cream px-10 py-3 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
            >
              Analyse My Skin
            </button>
          </div>
        </div>
      )}

      {step === "loading" && (
        <div className="max-w-2xl mx-auto px-8 text-center">
          <div className="w-24 h-24 rounded-full bg-rose/10 border-2 border-rose/30 flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Sparkles size={48} className="text-rose" strokeWidth={1.3} />
          </div>
          <h2 className="font-playfair text-3xl text-dark mb-4">
            Mishti is analyzing your skin...
          </h2>
          <p className="text-mauve text-sm mb-8">This will only take a moment</p>
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-rose animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {step === "results" && (
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-rose/10 border-2 border-rose/30 flex items-center justify-center mx-auto mb-6">
              <Sparkles size={32} className="text-rose" strokeWidth={1.3} />
            </div>
            <h1 className="font-playfair text-4xl text-dark mb-4">
              Your Skin <em className="text-rose">Analysis</em>
            </h1>
            <p className="text-muted text-xs uppercase tracking-[3px]">
              Analyzed on March 20, 2026
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Skin Type */}
            <div className="bg-linen p-8">
              <p className="text-gold text-[9px] uppercase tracking-[4px] mb-4">Skin Type</p>
              <p className="font-playfair text-2xl text-dark mb-3">Combination</p>
              <p className="text-mauve text-xs leading-relaxed">
                Your skin exhibits both oily and dry characteristics. Focus on balancing hydration
                while controlling shine in the T-zone.
              </p>
            </div>

            {/* Detected Concerns */}
            <div className="bg-linen p-8">
              <p className="text-gold text-[9px] uppercase tracking-[4px] mb-4">
                Detected Concerns
              </p>
              <div className="flex flex-wrap gap-2">
                {["Fine Lines", "Uneven Texture", "Mild Redness"].map((concern) => (
                  <span
                    key={concern}
                    className="text-[9px] uppercase tracking-[2px] text-rose bg-rose/10 px-3 py-2"
                  >
                    {concern}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Ingredients */}
          <div className="bg-dark p-8 mb-8">
            <p className="text-gold text-[9px] uppercase tracking-[4px] mb-6">
              Recommended Ingredients
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Hyaluronic Acid", strength: "High" },
                { name: "Niacinamide", strength: "Medium" },
                { name: "Vitamin C", strength: "Medium" },
              ].map((ingredient) => (
                <div key={ingredient.name}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-cream text-sm">{ingredient.name}</p>
                    <p className="text-rose text-xs">{ingredient.strength}</p>
                  </div>
                  <div className="h-1 bg-cream/20 overflow-hidden">
                    <div
                      className="h-full bg-rose"
                      style={{
                        width:
                          ingredient.strength === "High"
                            ? "90%"
                            : ingredient.strength === "Medium"
                            ? "60%"
                            : "30%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setStep("intro")}
              className="border border-rose text-rose px-10 py-3 text-[10px] uppercase tracking-[3px] hover:bg-rose/10 transition-all duration-300"
            >
              Start Over
            </button>
            <button className="bg-dark text-cream px-10 py-3 text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300">
              View Matched Products →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}