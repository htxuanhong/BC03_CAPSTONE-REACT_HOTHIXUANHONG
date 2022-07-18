import React from "react";
import HeaderTheme from "../components/HeaderTheme/HeaderTheme";

export function LayoutTheme(props) {
  const { Component } = props;
  return (
    <div>
      <HeaderTheme />
      <div>
        <Component />
      </div>
    </div>
  );
}
