import { ClassAttributes, InsHTMLAttributes, JSX, useEffect } from "react";

const AdBanner = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLModElement> &
    InsHTMLAttributes<HTMLModElement>
) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err: any) {
      throw new Error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block",
        overflow: "hidden",
      }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      {...props}
    />
  );
};

export default AdBanner;
