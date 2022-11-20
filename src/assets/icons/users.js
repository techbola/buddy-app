import React from "react";

const users = ({ color = "#818187", className = "" }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.225 9.665C9.62518 9.3186 9.94616 8.89016 10.1662 8.40877C10.3861 7.92737 10.5 7.40428 10.5 6.875C10.5 5.88044 10.1049 4.92661 9.40165 4.22335C8.69839 3.52009 7.74456 3.125 6.75 3.125C5.75544 3.125 4.80161 3.52009 4.09835 4.22335C3.39509 4.92661 3 5.88044 3 6.875C2.99999 7.40428 3.11385 7.92737 3.33384 8.40877C3.55384 8.89016 3.87482 9.3186 4.275 9.665C3.22511 10.1404 2.33435 10.9081 1.70924 11.8764C1.08412 12.8447 0.751104 13.9725 0.75 15.125C0.75 15.3239 0.829018 15.5147 0.96967 15.6553C1.11032 15.796 1.30109 15.875 1.5 15.875C1.69891 15.875 1.88968 15.796 2.03033 15.6553C2.17098 15.5147 2.25 15.3239 2.25 15.125C2.25 13.9315 2.72411 12.7869 3.56802 11.943C4.41193 11.0991 5.55653 10.625 6.75 10.625C7.94347 10.625 9.08807 11.0991 9.93198 11.943C10.7759 12.7869 11.25 13.9315 11.25 15.125C11.25 15.3239 11.329 15.5147 11.4697 15.6553C11.6103 15.796 11.8011 15.875 12 15.875C12.1989 15.875 12.3897 15.796 12.5303 15.6553C12.671 15.5147 12.75 15.3239 12.75 15.125C12.7489 13.9725 12.4159 12.8447 11.7908 11.8764C11.1657 10.9081 10.2749 10.1404 9.225 9.665ZM6.75 9.125C6.30499 9.125 5.86998 8.99304 5.49997 8.74581C5.12996 8.49857 4.84157 8.14717 4.67127 7.73604C4.50097 7.3249 4.45642 6.8725 4.54323 6.43605C4.63005 5.99959 4.84434 5.59868 5.15901 5.28401C5.47368 4.96934 5.87459 4.75505 6.31105 4.66823C6.7475 4.58142 7.1999 4.62597 7.61104 4.79627C8.02217 4.96657 8.37357 5.25496 8.62081 5.62497C8.86804 5.99498 9 6.42999 9 6.875C9 7.47174 8.76295 8.04403 8.34099 8.46599C7.91903 8.88795 7.34674 9.125 6.75 9.125ZM14.055 9.365C14.535 8.8245 14.8485 8.15679 14.9579 7.44225C15.0672 6.72772 14.9677 5.99681 14.6713 5.3375C14.375 4.67819 13.8943 4.1186 13.2874 3.72607C12.6804 3.33354 11.9729 3.12481 11.25 3.125C11.0511 3.125 10.8603 3.20402 10.7197 3.34467C10.579 3.48532 10.5 3.67609 10.5 3.875C10.5 4.07391 10.579 4.26468 10.7197 4.40533C10.8603 4.54598 11.0511 4.625 11.25 4.625C11.8467 4.625 12.419 4.86205 12.841 5.28401C13.2629 5.70597 13.5 6.27826 13.5 6.875C13.4989 7.26893 13.3945 7.65568 13.197 7.99657C12.9996 8.33745 12.7162 8.62054 12.375 8.8175C12.2638 8.88164 12.1709 8.97325 12.1053 9.08356C12.0396 9.19386 12.0034 9.31918 12 9.4475C11.9969 9.57482 12.0262 9.70085 12.0852 9.81369C12.1443 9.92654 12.2311 10.0225 12.3375 10.0925L12.63 10.2875L12.7275 10.34C13.6315 10.7688 14.3942 11.447 14.9257 12.2947C15.4572 13.1425 15.7354 14.1245 15.7275 15.125C15.7275 15.3239 15.8065 15.5147 15.9472 15.6553C16.0878 15.796 16.2786 15.875 16.4775 15.875C16.6764 15.875 16.8672 15.796 17.0078 15.6553C17.1485 15.5147 17.2275 15.3239 17.2275 15.125C17.2336 13.9741 16.9454 12.8407 16.3901 11.8325C15.8348 10.8244 15.031 9.97498 14.055 9.365Z"
        fill={color}
      />
    </svg>
  );
};

export default users;