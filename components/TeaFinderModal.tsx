"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "./context/CartContext";
import { X, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

interface TeaFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TeaFinderModal({ isOpen, onClose }: TeaFinderModalProps) {
  const { addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    style: "",
    time: "",
    flavor: "",
  });

  const handleReset = () => {
    setStep(1);
    setAnswers({ style: "", time: "", flavor: "" });
  };

  const getRecommendation = () => {
    if (answers.style === "big" || answers.flavor === "sky") {
      return {
        id: "siliguri-super-bumper-family-hamper",
        title: "Siliguri Super Bumper Family Hamper",
        reason: "A grand pack with sky shot cakes, rockets, anars and sparklers for a big celebration.",
        price: 4999,
        weight: "1 Jumbo Hamper (65 Pcs)",
        image: "/assets/combo-super-bumper.webp",
      };
    }
    if (answers.style === "gift" || answers.flavor === "sweet") {
      return {
        id: "pataka-mithai-diwali-combo",
        title: "Pataka + Mithai Diwali Combo",
        reason: "Crackers, mithai and clay diyas in one order. An easy, complete Diwali gift.",
        price: 2299,
        weight: "1 Combo",
        image: "/assets/combo-pataka-mithai.webp",
      };
    }
    return {
      id: "royal-diwali-mega-gift-box",
      title: "Royal Diwali Mega Gift Box",
      reason: "45 assorted items with sparklers, flower pots, chakkars and more for the whole family.",
      price: 2499,
      weight: "1 Deluxe Box",
      image: "/assets/combo-royal-mega.webp",
    };
  };

  const rec = getRecommendation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-[540px] bg-white rounded-2xl shadow-2xl border border-[#f0dfc6] overflow-hidden z-10"
          >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-[#f0dfc6] flex items-center justify-between bg-[#fff9ef]">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-[#e65100]" />
            <h3 className="text-[18px] font-bold text-[#2b1215]">
              Find Your Perfect Diwali Box
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#5c5a52] hover:text-[#2b1215] rounded-full hover:bg-[#f0dfc6]/60 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-150">
              <span className="text-[12px] font-bold tracking-wider uppercase text-[#b3261e]">
                Question 1 of 3
              </span>
              <h4 className="text-[18px] font-bold text-[#2b1215]">
                Who is celebrating with you?
              </h4>
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {[
                  { id: "family", label: "My family, with kids at home" },
                  { id: "friends", label: "Adults and friends" },
                  { id: "big", label: "A big group, club or housing society" },
                  { id: "gift", label: "I am buying a gift" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setAnswers({ ...answers, style: opt.id });
                      setStep(2);
                    }}
                    className="p-3.5 text-left rounded-lg border border-[#f0dfc6] hover:border-[#f9a825] hover:bg-[#fff9ef] font-medium text-[15px] text-[#2b1215] transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-150">
              <span className="text-[12px] font-bold tracking-wider uppercase text-[#b3261e]">
                Question 2 of 3
              </span>
              <h4 className="text-[18px] font-bold text-[#2b1215]">
                Where will you light your crackers?
              </h4>
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {[
                  { id: "courtyard", label: "Courtyard or lane outside the house" },
                  { id: "terrace", label: "Open terrace or rooftop" },
                  { id: "ground", label: "Open ground or field" },
                  { id: "unsure", label: "Not sure yet" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setAnswers({ ...answers, time: opt.id });
                      setStep(3);
                    }}
                    className="p-3.5 text-left rounded-lg border border-[#f0dfc6] hover:border-[#f9a825] hover:bg-[#fff9ef] font-medium text-[15px] text-[#2b1215] transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-150">
              <span className="text-[12px] font-bold tracking-wider uppercase text-[#b3261e]">
                Question 3 of 3
              </span>
              <h4 className="text-[18px] font-bold text-[#2b1215]">
                What do you enjoy most?
              </h4>
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {[
                  { id: "sparks", label: "Sparklers and flower pots" },
                  { id: "sky", label: "Big sky shots and rockets" },
                  { id: "sweet", label: "Crackers with sweets and diyas" },
                  { id: "mix", label: "A bit of everything" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setAnswers({ ...answers, flavor: opt.id });
                      setStep(4);
                    }}
                    className="p-3.5 text-left rounded-lg border border-[#f0dfc6] hover:border-[#f9a825] hover:bg-[#fff9ef] font-medium text-[15px] text-[#2b1215] transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col gap-5 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-[#b3261e]">
                <CheckCircle size={20} />
                <span className="text-[13px] font-bold tracking-wider uppercase">
                  Your Custom Recommendation
                </span>
              </div>

              <div className="p-4 bg-[#fff9ef] border border-[#f0dfc6] rounded-xl flex gap-4 items-center">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white border border-[#f0dfc6] flex-shrink-0">
                  <Image
                    src={rec.image}
                    alt={rec.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[#2b1215]">
                    {rec.title}
                  </h4>
                  <p className="text-[13px] text-[#5c5a52] mt-1 leading-snug">
                    {rec.reason}
                  </p>
                  <div className="text-[15px] font-bold text-[#4a0e14] mt-1.5">
                    ₹{rec.price} ({rec.weight})
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    addToCart({
                      id: rec.id,
                      title: rec.title,
                      price: rec.price,
                      image: rec.image,
                      weight: rec.weight,
                    });
                    onClose();
                  }}
                  className="w-full bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold py-3.5 px-4 rounded-lg tracking-wider uppercase text-[15px] flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>Add To Cart — ₹{rec.price}</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[13px] text-[#5c5a52] hover:text-[#2b1215] text-center underline font-medium"
                >
                  Retake quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
  );
}
