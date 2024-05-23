"use strict";

function getElementWidth(content, padding, border) {
  //  1. перетворити рядки на числа за допомогою методу parseFloat або parseInt
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);
  // 2. ширину елементу = ширина контенту + верхній і нижній відступи * 2 (падінг*2) + бордер*2
  return contentWidth + paddingWidth * 2 + borderWidth * 2;
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
