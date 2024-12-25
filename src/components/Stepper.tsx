import React from "react";

interface Step {
  stepNumber: number;
  label: string;
  icon: React.ReactNode;
}

interface StepperProps {
  activeStep: number;
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ activeStep, steps }) => {
  return (
    <div className="w-full lg:px-3">
      <div className="flex flex-wrap items-center justify-evenly mb-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex-1 w-1/2 sm:w-auto mb-3 sm:mb-0"
          >
            <div className="flex items-center justify-center  gap-3">
              <div>
                <div
                  className={` flex items-center justify-center ${
                    index === activeStep ? "text-white" : "text-zinc-600"
                  }`}
                >
                  <span
                    className={`w-8 h-8 flex items-center text-white justify-center rounded-full ${
                      index === activeStep || index < activeStep
                        ? "bg-primary"
                        : "bg-[#999fa7]"
                    }`}
                  >
                    {step.icon}
                  </span>
                </div>

                <div
                  className={`step-label text-sm font-medium ${
                    index === activeStep || index < activeStep
                      ? "text-primary"
                      : "text-zinc-600"
                  }`}
                >
                  {step.label}
                </div>
              </div>
              {index !== 0 - 0 && (
                <span className="hidden sm:inline-block">
                  <div
                    className={` connector absolute h-0.5 -mt-3 mr-5  ${
                      index < activeStep ? "bg-primary" : "bg-stroke"
                    } `}
                  />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
