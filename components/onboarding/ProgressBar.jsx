export default function ProgressBar({
  currentStep,
  totalSteps,
}) {
  // First screen par 0%
  // Age select hone ke baad Step 2 = 25%
  const progress =
    ((currentStep - 1) / totalSteps) * 100;

  return (
    <div className="w-full">

      <div className="h-2 w-full overflow-hidden rounded-full bg-[#303137]">

        <div
          className="h-full rounded-full bg-[#1de9b6] transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}