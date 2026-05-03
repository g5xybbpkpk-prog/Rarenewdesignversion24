import { useState, useEffect, useRef } from "react";
import { Upload, Camera, Sparkles, Check, ChevronRight, ChevronLeft, Info, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

type Screen = "welcome" | "questionnaire" | "loading" | "results" | "returning";
type QuestionnaireStep = 1 | 2 | 3 | 4;

interface Answer {
  [key: string]: string | string[];
}

export function MishtiNew() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentStep, setCurrentStep] = useState<QuestionnaireStep>(1);
  const [answers, setAnswers] = useState<Answer>({});
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [customIngredient, setCustomIngredient] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulate loading progress
  useEffect(() => {
    if (screen === "loading") {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 5) {
            clearInterval(interval);
            setTimeout(() => setScreen("results"), 500);
            return 5;
          }
          return prev + 1;
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [screen]);

  const handleAnswer = (questionId: string, value: string | string[], multiSelect = false) => {
    if (multiSelect) {
      const current = (answers[questionId] as string[]) || [];
      const newValue = current.includes(value as string)
        ? current.filter((v) => v !== value)
        : [...current, value as string];
      setAnswers({ ...answers, [questionId]: newValue });
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }
  };

  const isSelected = (questionId: string, value: string) => {
    const answer = answers[questionId];
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as QuestionnaireStep);
    } else {
      setScreen("loading");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as QuestionnaireStep);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setPhotoUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    setPhotoUploaded(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAddCustomIngredient = (questionId: string) => {
    if (customIngredient.trim()) {
      const current = (answers[questionId] as string[]) || [];
      if (!current.includes(customIngredient.trim())) {
        setAnswers({ ...answers, [questionId]: [...current, customIngredient.trim()] });
      }
      setCustomIngredient("");
    }
  };

  // Welcome Screen
  if (screen === "welcome") {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full text-center">
          <div className="w-12 h-12 mx-auto mb-8 text-rose">
            <Sparkles size={48} strokeWidth={1.3} />
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl text-dark mb-6">
            Hi, I'm <em className="text-rose">Mishti</em>.
          </h1>

          <p className="text-mauve text-sm sm:text-base leading-relaxed mb-12 max-w-md mx-auto" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
            Your personal skin guide. To begin, share a bare-faced photo in soft light.
            I'll keep it private — it's just for this moment.
          </p>

          {/* Upload Box */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {!photoPreview ? (
            <div
              onClick={handleUploadClick}
              className="border border-dashed border-gold rounded-2xl p-12 sm:p-20 mb-6 hover:border-rose transition-colors duration-300 cursor-pointer bg-cream"
            >
              <Camera size={32} className="text-rose mx-auto mb-4" strokeWidth={1.3} />
              <p className="text-gold text-[9px] uppercase tracking-[5px]" style={{ fontFamily: "Jost, sans-serif" }}>
                Upload your photo
              </p>
              <p className="text-mauve/60 text-xs mt-2" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                JPG or PNG, soft natural lighting
              </p>
            </div>
          ) : (
            <div className="relative border border-gold rounded-2xl p-6 mb-6 bg-cream">
              <button
                onClick={handleRemovePhoto}
                className="absolute top-4 right-4 w-8 h-8 bg-dark/80 hover:bg-dark rounded-full flex items-center justify-center text-cream transition-colors duration-300"
                aria-label="Remove photo"
              >
                <X size={16} strokeWidth={1.3} />
              </button>
              <img
                src={photoPreview}
                alt="Uploaded photo"
                className="w-48 h-48 object-cover rounded-full mx-auto"
              />
              <p className="text-gold text-[9px] uppercase tracking-[5px] mt-4" style={{ fontFamily: "Jost, sans-serif" }}>
                Photo uploaded
              </p>
              <button
                onClick={() => setScreen("questionnaire")}
                className="mt-6 bg-dark text-cream px-10 py-3 rounded-full text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                Continue to Questions
              </button>
            </div>
          )}

          <button
            onClick={() => setScreen("questionnaire")}
            className="text-rose text-sm hover:text-terra transition-colors duration-300"
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
          >
            or continue with questionnaire only
          </button>
        </div>
      </div>
    );
  }

  // Questionnaire Screen
  if (screen === "questionnaire") {
    return (
      <div className="min-h-screen bg-cream px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  step === currentStep ? "bg-rose w-8" : "bg-linen"
                }`}
              />
            ))}
          </div>

          {/* Step Title */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl text-dark mb-3">
              {currentStep === 1 && (
                <>Your Skin <em className="text-rose">Rhythm</em></>
              )}
              {currentStep === 2 && (
                <>Your Glow & <em className="text-rose">Flow</em></>
              )}
              {currentStep === 3 && (
                <>Skin <em className="text-rose">Language</em></>
              )}
              {currentStep === 4 && (
                <>Your Routine, <em className="text-rose">Your Way</em></>
              )}
            </h2>
            <p className="text-mauve text-sm" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
              {currentStep === 1 && "Let's understand how your skin behaves throughout the day"}
              {currentStep === 2 && "Tell us about your skin tone, texture, and natural glow"}
              {currentStep === 3 && "Help us decode your skin's unique signals"}
              {currentStep === 4 && "Share your habits so we can personalize your ritual"}
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-6 mb-12">
            <QuestionnaireContent
              step={currentStep}
              answers={answers}
              onAnswer={handleAnswer}
              isSelected={isSelected}
              customIngredient={customIngredient}
              setCustomIngredient={setCustomIngredient}
              onAddCustomIngredient={handleAddCustomIngredient}
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                onClick={handleBack}
                className="border border-rose text-rose px-8 py-3 rounded-full text-[10px] uppercase tracking-[3px] hover:bg-rose/10 transition-all duration-300"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                <ChevronLeft size={14} className="inline mr-2" strokeWidth={1.3} />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleContinue}
              className="bg-dark text-cream px-10 py-3 rounded-full text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {currentStep === 4 ? "Complete" : "Continue"}
              <ChevronRight size={14} className="inline ml-2" strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (screen === "loading") {
    const steps = [
      "Mapping your skin type…",
      "Filtering ingredients…",
      "Finding best actives…",
      "Matching products…",
      "Finalising…",
    ];

    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-rose/5 flex items-center justify-center">
            <Sparkles size={64} className="text-rose animate-pulse" strokeWidth={1.3} />
          </div>

          <h2 className="font-playfair text-3xl text-dark mb-12">
            Mishti is building your <em className="text-rose">skin profile</em>…
          </h2>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 transition-opacity duration-500 ${
                  index < loadingProgress ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  index < loadingProgress ? "bg-rose" : "border border-rose/30"
                }`}>
                  {index < loadingProgress && (
                    <Check size={12} className="text-cream" strokeWidth={2} />
                  )}
                </div>
                <span className="text-mauve text-sm" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Results Dashboard
  if (screen === "results") {
    return (
      <ResultsDashboard />
    );
  }

  return null;
}

// Questionnaire Content Component
function QuestionnaireContent({
  step,
  answers,
  onAnswer,
  isSelected,
  customIngredient,
  setCustomIngredient,
  onAddCustomIngredient,
}: {
  step: QuestionnaireStep;
  answers: Answer;
  onAnswer: (id: string, value: string | string[], multi?: boolean) => void;
  isSelected: (id: string, value: string) => boolean;
  customIngredient: string;
  setCustomIngredient: (value: string) => void;
  onAddCustomIngredient: (id: string) => void;
}) {
  const Question = ({ id, text, options, type = "single", note, showCustomInput }: any) => {
    // Get custom ingredients that aren't in the predefined options
    const currentAnswers = (answers[id] as string[]) || [];
    const customAnswers = currentAnswers.filter((ans) => !options.includes(ans));

    return (
      <div className="bg-linen rounded-2xl p-6 sm:p-8">
        <p className="text-gold text-[9px] uppercase tracking-[5px] mb-2" style={{ fontFamily: "Jost, sans-serif" }}>
          {id}
        </p>
        <h3 className="font-playfair text-xl text-dark mb-4">{text}</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {options.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() => onAnswer(id, option, type === "multi")}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
                isSelected(id, option)
                  ? "bg-rose/10 border-rose text-dark"
                  : "border-gold/50 text-mauve hover:border-rose"
              }`}
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
            >
              {option}
            </button>
          ))}
          {/* Show custom ingredients */}
          {customAnswers.map((custom: string, idx: number) => (
            <button
              key={`custom-${idx}`}
              onClick={() => onAnswer(id, custom, type === "multi")}
              className="px-4 py-2 rounded-full border bg-gold/10 border-gold text-dark text-sm transition-all duration-300 hover:bg-gold/20"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
            >
              {custom} ✕
            </button>
          ))}
        </div>
      {showCustomInput && (
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={customIngredient}
            onChange={(e) => setCustomIngredient(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onAddCustomIngredient(id);
              }
            }}
            placeholder="+ Add another ingredient…"
            className="flex-1 bg-cream border border-gold/30 rounded-full px-4 py-2 text-sm text-mauve placeholder:text-mauve/40 outline-none focus:border-rose transition-colors duration-300"
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}
          />
          <button
            onClick={() => onAddCustomIngredient(id)}
            className="px-6 py-2 bg-dark text-cream rounded-full text-[10px] uppercase tracking-[2px] hover:bg-terra transition-all duration-300"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Add
          </button>
        </div>
      )}
      {note && (
        <p className="text-mauve/60 text-xs mt-4 italic" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
          {note}
        </p>
      )}
    </div>
    );
  };

  // Step 1: Your Skin Rhythm (Q4-Q8)
  if (step === 1) {
    return (
      <>
        <Question
          id="Q4"
          text="After washing your face, how does it feel within 15 minutes?"
          options={[
            "Tight and dry — needs moisturiser immediately",
            "Comfortable and balanced",
            "Dry on cheeks, normal elsewhere",
            "Gets oily quickly all over",
            "Oily on forehead/nose, dry on cheeks",
          ]}
        />
        <Question
          id="Q5"
          text="How quickly does your T-zone get shiny after washing?"
          options={["Within 30 mins", "After 1–2 hours", "By end of day", "Rarely or never"]}
        />
        <Question
          id="Q6"
          text="How does your skin feel in AC rooms or cold weather?"
          options={["Gets flaky or very dry", "Feels tight but okay", "No change at all", "Gets itchy or irritated"]}
        />
        <Question
          id="Q7"
          text="After applying moisturiser, does your skin still feel tight after 30 minutes?"
          options={["Yes, always", "Sometimes", "No, feels fine", "I don't use moisturiser"]}
        />
        <Question
          id="Q8"
          text="How much water do you drink daily?"
          options={["Less than 4 glasses", "4–6 glasses", "6–8 glasses", "8+ glasses"]}
        />
      </>
    );
  }

  // Step 2: Your Glow & Flow (Q1-Q3, Q13-Q16)
  if (step === 2) {
    return (
      <>
        <Question
          id="Q1"
          text="What is your gender?"
          options={["Female", "Male", "Prefer not to say"]}
        />
        <Question
          id="Q2"
          text="What is your age range?"
          options={["Under 18", "18–24", "25–34", "35–44", "45+"]}
        />
        <Question
          id="Q3"
          text="What is your skin tone?"
          options={["Fair / Light", "Medium / Wheatish", "Olive / Tan", "Deep / Dark"]}
          note="This helps calibrate recommendations for your skin tone"
        />
        <Question
          id="Q13"
          text="Do you have dark spots, sun spots, or uneven patches?"
          options={["Yes, very noticeable", "A few spots", "Very faint / minor", "No, my tone is even"]}
        />
        <Question
          id="Q14"
          text="Does your skin look dull or tired even after sleeping well?"
          options={["Yes, almost always looks dull", "Sometimes, especially in the evening", "Rarely", "No, my skin looks bright"]}
        />
        <Question
          id="Q15"
          text="Does your skin feel rough or look uneven in texture?"
          options={["Yes, rough and bumpy", "Slightly uneven in some areas", "Mostly smooth", "Very smooth"]}
        />
        <Question
          id="Q16"
          text="How much direct sunlight do you get on your face daily?"
          options={["Mostly indoors", "30 mins or less", "1–2 hours", "3+ hours outdoors"]}
        />
      </>
    );
  }

  // Step 3: Skin Language (Q9-Q12, Q17-Q20)
  if (step === 3) {
    return (
      <>
        <Question
          id="Q9"
          text="How often do you get pimples or blackheads?"
          options={["Almost never", "Once a month or less", "Few times a month", "Every week", "Almost always have some"]}
        />
        <Question
          id="Q10"
          text="When do breakouts usually happen for you?"
          type="multi"
          options={["Stress or poor sleep", "Oily / junk food", "Before my period", "After trying new products", "Random — no clear trigger", "I rarely break out"]}
        />
        <Question
          id="Q11"
          text="Do pimples leave dark marks that take a long time to fade?"
          options={["Yes, they stay for months", "Yes, but they fade in weeks", "Rarely", "No, they fade quickly"]}
        />
        <Question
          id="Q12"
          text="What does your acne mostly look like?"
          type="multi"
          options={["Blackheads / open pores", "Whiteheads / closed bumps", "Red inflamed pimples", "Deep painful cysts", "Tiny flesh-coloured bumps all over", "I don't have acne"]}
          note="Tiny flesh-coloured bumps may indicate fungal acne"
        />
        <Question
          id="Q17"
          text="Does your skin sting, itch, or turn red after applying new products?"
          options={["Yes, very easily", "Sometimes with certain products", "Rarely", "Never"]}
        />
        <Question
          id="Q18"
          text="Do you have any diagnosed skin conditions?"
          type="multi"
          options={["Eczema", "Rosacea", "Psoriasis", "Seborrheic dermatitis", "Melasma", "None of these"]}
        />
        <Question
          id="Q19"
          text="Are there ingredients you know cause a reaction for you?"
          type="multi"
          options={["Fragrance / Parfum", "Alcohol", "Retinol", "AHAs / BHAs", "Essential oils", "Sulphates", "None that I know of"]}
          showCustomInput={true}
        />
        <Question
          id="Q20"
          text="When you switch skincare products, how does your skin usually react?"
          options={["Fine — adapts quickly", "Needs a few days to settle", "Often breaks out or gets irritated", "I rarely switch products"]}
        />
      </>
    );
  }

  // Step 4: Your Routine, Your Way (Q21-Q25)
  if (step === 4) {
    return (
      <>
        <Question
          id="Q21"
          text="How often do you currently use skincare products?"
          options={["Morning and night, daily", "Once a day", "A few times a week", "Rarely", "I'm just starting out"]}
        />
        <Question
          id="Q22"
          text="Do you use sunscreen daily?"
          options={["Yes, every single day", "Only when going outside", "Occasionally", "Never"]}
        />
        <Question
          id="Q23"
          text="What is your monthly skincare budget?"
          options={["Under $50", "$50 – $150", "$150 – $300", "$300+"]}
        />
        <Question
          id="Q24"
          text="What is your biggest skincare concern right now?"
          options={["Acne & breakouts", "Dark spots & pigmentation", "Dryness & dehydration", "Oiliness & shine", "Dullness — want more glow", "Anti-ageing & fine lines", "Sensitive / reactive skin"]}
        />
        <Question
          id="Q25"
          text="What influences your product choice the most?"
          options={["Ingredient list", "Customer reviews", "Dermatologist recommended", "Brand name", "Price / value for money"]}
        />
      </>
    );
  }

  return null;
}

// Results Dashboard Component
function ResultsDashboard() {
  const products = [
    {
      step: "Step 1",
      name: "Gentle Hydrating Cleanser",
      brand: "CeraVe",
      price: "$14.99",
      ingredient: "Ceramides",
      reason: "to repair your skin barrier and lock in moisture",
      match: 94,
    },
    {
      step: "Step 2",
      name: "Niacinamide 10% + Zinc 1%",
      brand: "The Ordinary",
      price: "$5.90",
      ingredient: "Niacinamide",
      reason: "to fade dark marks and control oil production",
      match: 96,
    },
    {
      step: "Step 3",
      name: "Ultra Facial Cream",
      brand: "Kiehl's",
      price: "$34.00",
      ingredient: "Squalane",
      reason: "to deeply hydrate without feeling heavy",
      match: 91,
    },
    {
      step: "Step 4",
      name: "Mineral Sunscreen SPF 50",
      brand: "La Roche-Posay",
      price: "$36.00",
      ingredient: "Zinc Oxide",
      reason: "to protect against UV damage and prevent dark spots",
      match: 93,
    },
  ];

  return (
    <div className="min-h-screen bg-cream px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Skin Summary */}
        <div className="bg-linen rounded-2xl p-8 sm:p-12 mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl text-dark mb-4">
            Your skin is <em className="text-rose">combination</em>, with a few dark spots.
          </h2>
          <p className="text-mauve text-sm mb-8" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
            Here are your top 3 concerns, prioritised just for you.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Post-acne pigmentation", severity: "Moderate" },
              { name: "Hormonal acne", severity: "Mild" },
              { name: "Dullness & texture", severity: "Mild" },
            ].map((concern, idx) => (
              <div key={idx} className="bg-cream rounded-xl p-6 border border-gold/30">
                <h4 className="text-dark text-sm mb-2" style={{ fontFamily: "Jost, sans-serif" }}>
                  {concern.name}
                </h4>
                <span className="inline-block px-3 py-1 rounded-full bg-rose/10 text-rose text-[9px] uppercase tracking-[2px]">
                  {concern.severity}
                </span>
                <p className="text-mauve/60 text-xs mt-2" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                  from your answers
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Ritual */}
        <div className="mb-16">
          <p className="text-gold text-[9px] uppercase tracking-[5px] mb-2" style={{ fontFamily: "Jost, sans-serif" }}>
            Your Primary Ritual
          </p>
          <h3 className="font-playfair text-2xl sm:text-3xl text-dark mb-3">
            Recommended by <em className="text-rose">Mishti</em>
          </h3>
          <p className="text-mauve text-sm mb-8" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
            Based on ingredients your skin needs right now.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-linen rounded-2xl p-6 hover:shadow-[0_8px_20px_rgba(46,26,26,0.12)] hover:scale-[1.02] transition-all duration-300"
              >
                <p className="text-gold text-[9px] uppercase tracking-[5px] mb-3" style={{ fontFamily: "Jost, sans-serif" }}>
                  {product.step}
                </p>
                <h4 className="font-playfair text-lg text-dark mb-2">{product.name}</h4>
                <p className="text-mauve text-sm mb-4" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                  Contains <em className="text-rose">{product.ingredient}</em> {product.reason}.
                </p>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-dark/5">
                  <span className="text-muted text-xs">{product.brand}</span>
                  <span className="text-dark text-sm font-playfair">{product.price}</span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-muted text-xs">Match</span>
                    <span className="text-gold text-xs">{product.match}%</span>
                  </div>
                  <div className="w-full bg-cream rounded-full h-1.5">
                    <div
                      className="bg-gold rounded-full h-1.5 transition-all duration-500"
                      style={{ width: `${product.match}%` }}
                    />
                  </div>
                </div>
                <Link
                  to="/shop"
                  className="block w-full bg-dark text-cream text-center py-3 rounded-full text-[10px] uppercase tracking-[3px] hover:bg-terra transition-all duration-300"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  Add to Ritual
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredient Education */}
        <div className="bg-linen rounded-2xl p-8 border-l-4 border-rose mb-12">
          <h4 className="font-playfair text-xl text-dark mb-3">
            Why <em className="text-rose">Niacinamide</em>?
          </h4>
          <p className="text-mauve text-sm mb-6 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}>
            "A master of calm and clarity, Niacinamide helps even skin tone while reducing shine."
          </p>
          <button className="border border-gold/50 text-dark px-8 py-2.5 rounded-full text-[10px] uppercase tracking-[3px] hover:border-rose hover:text-rose transition-all duration-300">
            Learn more
          </button>
        </div>

        {/* Back to Shop */}
        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block border border-rose text-rose px-10 py-3 rounded-full text-[10px] uppercase tracking-[3px] hover:bg-rose/10 transition-all duration-300"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
