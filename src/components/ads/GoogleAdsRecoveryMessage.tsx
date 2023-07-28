import React, { useEffect } from "react";

const GoogleAdsRecoveryMessage: React.FC = () => {
  useEffect(() => {
    function signalGooglefcPresent() {
      if (!(window.frames as any)["googlefcPresent"]) {
        if (document.body) {
          const iframe = document.createElement("iframe");
          iframe.style.width = "0";
          iframe.style.height = "0";
          iframe.style.border = "none";
          iframe.style.zIndex = "-1000";
          iframe.style.left = "-1000px";
          iframe.style.top = "-1000px";
          iframe.style.display = "none";
          iframe.name = "googlefcPresent";
          document.body.appendChild(iframe);
        } else {
          setTimeout(signalGooglefcPresent, 0);
        }
      }
    }
    signalGooglefcPresent();
  }, []);

  return (
    <>
      <script
        async
        src={`https://fundingchoicesmessages.google.com/i/${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}?ers=1`}
        nonce="nul2Cq-Q9GyfwfHsRpI4tw"
      ></script>
      <script nonce="nul2Cq-Q9GyfwfHsRpI4tw"></script>
    </>
  );
};

export default GoogleAdsRecoveryMessage;
