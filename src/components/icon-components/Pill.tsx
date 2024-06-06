// import React, { useRef } from "react";

// interface PillProps {
//   dose: number;
// }

// const Pill: React.FC<PillProps> = ({ dose }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const canvas = canvasRef.current;
//   if (canvas) {
//     const context = canvas.getContext("2d");
//     if (context) {
//       const radius = 37.5;
//       const centerY = 45;
//       const totalCircles = Math.ceil(dose);
//       const totalWidth = totalCircles * (radius * 2 + 10) - 10;
//       const canvasWidth = 300;
//       const centerX = canvasWidth / 2;
//       const startX = centerX - totalWidth / 2 + radius;

//       context.clearRect(0, 0, canvas.width, canvas.height);
//       context.fillStyle = "lightgrey";
//       context.strokeStyle = "white";
//       context.lineWidth = 2;

//       let currentFraction = dose;
//       let offsetX = startX - radius;

//       const drawQuarterLines = (centerX: number, centerY: number) => {
//         context.beginPath();
//         context.moveTo(centerX, centerY);
//         context.lineTo(centerX, centerY - radius);
//         context.moveTo(centerX, centerY);
//         context.lineTo(centerX + radius, centerY);
//         context.moveTo(centerX, centerY);
//         context.lineTo(centerX, centerY + radius);
//         context.moveTo(centerX, centerY);
//         context.lineTo(centerX - radius, centerY);
//         context.stroke();
//       };

//       while (currentFraction > 0) {
//         const drawFraction = Math.min(currentFraction, 1);
//         const startAngle = 1.5 * Math.PI;
//         const endAngle = startAngle + drawFraction * 2 * Math.PI;

//         context.beginPath();
//         context.moveTo(centerX + offsetX, centerY);
//         context.arc(centerX + offsetX, centerY, radius, startAngle, endAngle);
//         context.lineTo(centerX + offsetX, centerY);
//         context.fill();
//         context.stroke();

//         drawQuarterLines(centerX + offsetX, centerY);

//         currentFraction -= 1;
//         offsetX += radius * 2 + 10;
//       }
//     }
//   }

//   return (
//     <canvas
//       ref={canvasRef}
//       width={300}
//       height={90}
//       style={{ background: "transparent" }}
//     />
//   );
// };

// export default Pill;

import React, { useRef, useEffect } from "react";

interface PillProps {
  dose: number;
}

const Pill: React.FC<PillProps> = ({ dose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const radius = 37.5;
        const centerY = 45;
        const totalCircles = Math.ceil(dose);
        const totalWidth = totalCircles * (radius * 2 + 10) - 10;
        const canvasWidth = 300;
        const centerX = canvasWidth / 2;
        const startX = centerX - totalWidth / 2 + radius;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "lightgrey";
        context.strokeStyle = "white";
        context.lineWidth = 2;

        let currentFraction = dose;
        let offsetX = startX;

        const drawQuarterLines = (centerX: number, centerY: number) => {
          context.beginPath();
          context.moveTo(centerX, centerY);
          context.lineTo(centerX, centerY - radius);
          context.moveTo(centerX, centerY);
          context.lineTo(centerX + radius, centerY);
          context.moveTo(centerX, centerY);
          context.lineTo(centerX, centerY + radius);
          context.moveTo(centerX, centerY);
          context.lineTo(centerX - radius, centerY);
          context.stroke();
        };

        while (currentFraction > 0) {
          const drawFraction = Math.min(currentFraction, 1);
          const startAngle = 1.5 * Math.PI;
          const endAngle = startAngle + drawFraction * 2 * Math.PI;

          context.beginPath();
          context.moveTo(offsetX, centerY);
          context.arc(offsetX, centerY, radius, startAngle, endAngle);
          context.lineTo(offsetX, centerY);
          context.fill();
          context.stroke();

          drawQuarterLines(offsetX, centerY);

          currentFraction -= 1;
          offsetX += radius * 2 + 10;
        }
      }
    }
  }, [dose]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={90}
      style={{ background: "transparent" }}
    />
  );
};

export default Pill;
