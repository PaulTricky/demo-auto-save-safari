import React from 'react';

function IconFacebookCustom({ color = 'url(#FacebookCustom)' }: { color?: string }) {
  return (
    <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="45" height="45" fill={color} />
      <defs>
        <pattern id="FacebookCustom" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0_3982_45334" transform="scale(0.00833333)" />
        </pattern>
        <image
          id="image0_3982_45334"
          width="120"
          height="120"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default IconFacebookCustom;
