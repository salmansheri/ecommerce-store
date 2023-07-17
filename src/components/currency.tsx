import React from "react";
import { formatter } from "@/lib/utils";
import { UseMounted } from "@/hooks/use-mouted";

interface CurrencyProps {
  value: number | string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const isMounted = UseMounted();

  if (!isMounted) {
    return null;
  }

  return <div className="font-bold">{formatter.format(Number(value))}</div>;
};

export default Currency;
