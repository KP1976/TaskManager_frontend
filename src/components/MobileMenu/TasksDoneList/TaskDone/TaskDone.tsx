import { formatedDate } from "../../../../utils/formatedDate";

import "./TaskDone.css";

interface Props {
  id: string;
  createdAt: Date;
  title: string;
}

export const TaskDone = (props: Props) => {
  const { title, createdAt } = props;

  return (
    <li className="TaskDone">
      <h3 className="TaskDone__title">{title}</h3>
      <span className="TaskDone__date">{formatedDate(createdAt)}</span>
      <svg
        className="TaskDone__icon"
        viewBox="0 0 32 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_835_493)">
          <path
            d="M27.4964 1.34302C28.1661 2.2085 28.1661 3.60711 27.4964 4.47259L13.7821 22.1976C13.1125 23.0631 12.0304 23.0631 11.3607 22.1976L4.50207 13.3351C3.83264 12.4696 3.83264 11.071 4.50207 10.2055C5.17161 9.34005 6.25696 9.34005 6.92661 10.2055L12.5232 17.4963L25.075 1.34302C25.7446 0.476155 26.8268 0.476155 27.4964 1.34302Z"
            fill="#6D9AB1"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_835_493"
            x="0"
            y="0.692871"
            width="31.9987"
            height="30.1538"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_835_493"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_835_493"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </li>
  );
};
