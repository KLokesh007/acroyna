"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TeaxtRevealCard() {
  return (
    <div className="">
      <TextRevealCard
        text="Building innovative digital experiences..."
        revealText="Tailored for your success!"
      ></TextRevealCard>
      <TextRevealCardTitle>
        <p>
        From concept to code, we’ve got you covered
        </p>
      </TextRevealCardTitle>
      
    </div>
  );
}
