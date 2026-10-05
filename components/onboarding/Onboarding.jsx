"use client";

import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

import onboardingData from "@/data/onboarding/onboardingData";
import ProgressBar from "./ProgressBar";
import OptionCard from "./OptionCard";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const totalSteps = onboardingData.length;

  const currentQuestion =
    onboardingData[currentStep - 1];

  const selectedAnswer =
    answers[currentQuestion.id];

  const handleOptionSelect = (optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));

    if (currentStep < totalSteps) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 250);
    }
  };

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen bg-[#1d1f22] px-6 py-6 text-white">

      <div className="mx-auto max-w-[540px]">

        {/* Top Bar */}
        <div className="relative flex items-center justify-center">

          {/* Back Button */}
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="absolute left-0 text-3xl text-white hover:text-gray-400"
            >
              <FiChevronLeft />
            </button>
          )}

          {/* Logo */}
          <h2 className="text-3xl font-bold text-gray-300">
            Planfit
          </h2>

        </div>

        {/* Progress Bar */}
    {currentStep > 1 && (
  <div className="mt-8 ">
    <ProgressBar
      currentStep={currentStep}
      totalSteps={totalSteps}
    />
  </div>
)}

        {/* ========================= */}
        {/* INTRO / CONTINUE SCREEN */}
        {/* ========================= */}

        {currentQuestion.type === "intro" ? (
        <section className="flex min-h-[600px] flex-col items-center text-center">

            {/* Reviews / Achievement */}
            <div className="mt-14">

              <div className="flex items-center justify-center gap-8">

                {/* Left Leaves */}
                <div className="text-4xl text-[#1de9b6]">
                  ❮
                </div>

                {/* Center */}
                <div>

                  <p className="text-lg font-bold text-white">
                    120+ Countries
                  </p>

                  <div className="mt-1 flex items-center justify-center gap-2">
                    <FaApple className="text-4xl text-white" />

                    <p className="text-lg font-bold text-white">
                      App of the Day
                    </p>
                  </div>

                  <p className="mt-4 text-lg font-bold text-[#1de9b6]">
                    50,000+ Reviews
                  </p>

                  <div className="mt-1 flex justify-center gap-1 text-xl text-[#1de9b6]">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>

                </div>

                {/* Right Leaves */}
                <div className="text-4xl text-[#1de9b6]">
                  ❯
                </div>

              </div>

            </div>

            {/* Heading */}
            <div className="mt-14">

              <h1 className="text-4xl font-bold leading-tight">
                {currentQuestion.title}
              </h1>

              <p className="mx-auto mt-6 max-w-[420px] text-lg leading-8 text-gray-300">
                {currentQuestion.description}
              </p>

            </div>

            {/* Continue Button */}
            <div className="mt-auto w-full ">

              <button
                type="button"
                onClick={handleContinue}
                className="w-full rounded-xl bg-[#1de9b6] px-6 py-5 text-xl font-bold text-black transition hover:bg-[#15c99d]"
              >
                {currentQuestion.buttonText}
              </button>

            </div>

          </section>
        ) : (

          /* ========================= */
          /* NORMAL QUESTIONS */
          /* ========================= */

          <section className="mt-12">

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              {currentQuestion.question}
            </h1>

            <p className="mt-2 text-base text-gray-300">
              {currentQuestion.subtitle}
            </p>

            {/* Options */}
            <div
              className={`
                mt-8 w-full
                ${
                  currentQuestion.type === "age"
                    ? "grid grid-cols-2 gap-4"
                    : "flex flex-col gap-4"
                }
              `}
            >
              {currentQuestion.options.map((option) => (
                <OptionCard
                  key={option.id}
                  option={option}
                  type={currentQuestion.type}
                  selected={
                    selectedAnswer === option.id
                  }
                  onClick={() =>
                    handleOptionSelect(option.id)
                  }
                />
              ))}
            </div>

          </section>
        )}

        {/* Terms */}
        {currentStep === 1 && (
          <p className="mt-8 text-center text-sm text-gray-400">
            By continuing, you agree to our{" "}
            <span className="underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline">
              Privacy Policy
            </span>
          </p>
        )}

      </div>

    </main>
  );
}