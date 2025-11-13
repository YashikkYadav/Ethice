import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-[#f1f5f1] py-10 px-4 border-t border-gray-300">
      <div className="max-w-6xl mx-auto text-center sm:text-left text-gray-600 text-sm leading-relaxed space-y-3 px-4">
        <p className="text-[13px] sm:text-[14px] text-gray-700">
          <strong className="text-gray-900">Disclaimer:</strong> Ethice Capital
          is a registered participant with
          <strong className="text-gray-900"> CBRICS & BSE (ICCL)</strong> and
          does not hold SEBI registration. We do not offer investment advisory,
          broking, or portfolio management services.
        </p>
        <p className="text-[13px] sm:text-[14px] text-gray-700">
          <strong className="text-gray-900">Depository Partner:</strong> SMC{" "}
          <span className="text-gray-500 mx-1">|</span>
          <strong className="text-gray-900">Banking Partner:</strong> ICICI Bank
        </p>
      </div>
    </section>
  );
};

export default SubscribeSection;
