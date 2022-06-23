import React, { useState } from "react";
import { useAppThemeContext } from "../AppThemeProvider";
import classes from "./logo.module.css";

const Logo = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {width = windowWidth <= 770 ? "24" : "156", height = windowWidth <= 770 ? "34" : "36"} = props;
  const {appTheme} = useAppThemeContext();
  const mainFillColor = appTheme === "dark" ? "white" : "#0A2C40";

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <img className={classes.logoImg} src="/images/ui/logo.svg" width="40" height="40" />
      <span className={classes.logoText}>TETRAEDER</span>
      {/* {windowWidth > 770 &&
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48.7223 13.8168C48.4222 13.0245 47.9503 12.3048 47.3356 11.7071C46.7306 11.1609 46.0167 10.739 45.2399 10.467C44.451 10.1693 43.6258 9.96305 42.786 9.85522C41.9027 9.75443 41.0146 9.70755 40.124 9.71223H34.27V24.2879H40.1167C41.0073 24.2926 41.8955 24.2433 42.7788 24.1425C43.6209 24.0347 44.4437 23.8261 45.2326 23.5214C46.0095 23.2424 46.7209 22.8181 47.3284 22.2719C47.943 21.6742 48.4149 20.9546 48.715 20.1623C49.4459 18.1112 49.4459 15.8843 48.715 13.8332L48.7223 13.8168ZM46.3628 19.5504C46.3241 19.6489 46.2853 19.7403 46.2442 19.827C46.0288 20.2607 45.7287 20.6498 45.3585 20.971C44.9205 21.3812 44.3881 21.6906 43.8073 21.8711C43.241 22.0704 42.6529 22.2016 42.0552 22.2626C41.5204 22.3118 40.8766 22.3376 40.1192 22.3352H36.7312V11.5524H40.1192C40.8815 11.5524 41.53 11.5781 42.0552 11.625C42.6529 11.6883 43.241 11.8219 43.8073 12.0188C44.3856 12.1993 44.9156 12.5017 45.3585 12.9072C45.7191 13.2471 46.0095 13.648 46.2152 14.0934C46.266 14.2012 46.3168 14.3137 46.3628 14.4379C46.9049 16.0999 46.9049 17.8838 46.3628 19.5458"
            fill={mainFillColor}/>
          <path
            d="M57.8083 16.6192V17.92H57.1121V16.6192L52.2972 9.71191H49.6201L56.2123 18.9958V24.2882H58.5952V18.9958L65.3272 9.71191H62.6501L57.8083 16.6192Z"
            fill={mainFillColor}/>
          <path d="M82.8192 11.4247H89.0881V24.2882H91.1193V11.4247H97.4554V9.71191H82.8192V11.4247Z"
                fill={mainFillColor}/>
          <path
            d="M112.998 11.7639C111.462 10.3959 109.38 9.71191 106.749 9.71191C104.118 9.71191 102.029 10.3959 100.476 11.7639C98.9373 13.132 98.1693 14.8739 98.1693 16.9921C98.1693 19.1102 98.9373 20.8567 100.476 22.2362C102.012 23.6042 104.104 24.2882 106.749 24.2882C109.394 24.2882 111.479 23.6042 112.998 22.2362C114.536 20.8681 115.304 19.1193 115.304 16.9921C115.304 14.8648 114.536 13.1206 112.998 11.7639ZM111.269 21.0756C110.235 22.0948 108.729 22.6055 106.749 22.6032H106.581C104.684 22.5736 103.226 22.0697 102.217 21.0802C101.207 20.0906 100.654 18.6998 100.654 16.9966C100.654 15.2934 101.175 13.9551 102.217 12.9359C103.258 11.9167 104.684 11.4425 106.581 11.4128H106.749C108.731 11.4128 110.238 11.9235 111.269 12.9427C112.301 13.9619 112.817 15.3162 112.82 17.0035C112.82 18.7067 112.303 20.0678 111.269 21.087"
            fill={mainFillColor}/>
          <path
            d="M130.108 12.151C129.753 11.5064 129.192 10.9813 128.504 10.6531C127.752 10.2898 126.943 10.0414 126.106 9.91948C125.053 9.76946 123.988 9.70149 122.923 9.71321H117.803V24.2882H120.038V19.3869H122.933C123.998 19.3986 125.063 19.3306 126.116 19.1806C126.95 19.0587 127.762 18.8103 128.514 18.4469C129.202 18.1188 129.763 17.5937 130.118 16.9491C130.833 15.4208 130.833 13.6793 130.118 12.151H130.108ZM127.772 16.1733C127.531 16.5952 127.146 16.9257 126.677 17.1109C126.173 17.3195 125.642 17.4625 125.098 17.5351C124.405 17.6172 123.71 17.6547 123.012 17.6476H120.038V11.4478H123.017C123.715 11.4407 124.41 11.4782 125.103 11.5626C125.647 11.6353 126.178 11.7783 126.682 11.9869C127.151 12.1721 127.536 12.5026 127.777 12.9245C128.246 13.9605 128.246 15.1349 127.777 16.1709"
            fill={mainFillColor}/>
          <path
            d="M150.341 9.71191H145.228L139.579 24.2882H142.057L144.169 18.7872H151.419L153.532 24.2882H156L150.341 9.71191ZM144.821 17.0528L147.442 10.2721H148.127L150.748 17.0528H144.821Z"
            fill={mainFillColor}/>
          <path d="M136.723 9.71191H134.581V24.2882H136.723V9.71191Z" fill={mainFillColor}/>
          <path
            d="M75.3914 16.1394H72.0339V16.1233C70.101 16.1233 68.5278 15.072 68.5278 13.7805C68.5278 12.489 70.101 11.4401 72.0339 11.4401V11.4239H80.3773V9.71191H72.0411C68.9235 9.71191 66.3982 11.5325 66.3982 13.7805C66.3982 16.0285 68.9259 17.8514 72.0411 17.8514H75.3986V17.8768C77.3315 17.8768 78.9048 18.9258 78.9048 20.2173C78.9048 21.5088 77.3315 22.56 75.3986 22.56V22.5762H66.9786V24.2882H75.3914C78.5091 24.2882 81.0344 22.4653 81.0344 20.2173C81.0344 17.9693 78.5091 16.1464 75.3914 16.1464"
            fill={mainFillColor}/>
          <path
            d="M13.0264 7H0L6.92003 14.8565C7.33584 15.3313 7.95239 15.6046 8.60119 15.6046H11.3649L6.21207 9.7532H12.8901C16.9927 9.7532 20.4572 12.8019 20.6113 16.7079C20.7063 19.0564 19.5969 21.3006 17.6361 22.7267L14.4566 19.1161C14.0408 18.6413 13.4242 18.3681 12.7754 18.3681H10.0117L14.9549 23.9991C14.3258 24.1563 13.677 24.2365 13.0264 24.2365H3.45733C2.80852 24.2365 2.19376 24.5098 1.77616 24.9829L0 27H12.8686C18.6344 27 23.4431 22.6311 23.5166 17.1383C23.5901 11.6132 18.9499 7.07686 13.15 7.00683C13.1088 7.00683 13.0676 7.00683 13.0264 7.00512"
            fill="#0B5E8E"/>
        </svg>
      }

      {windowWidth <= 770 &&
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.0264 7H0L6.92003 14.8565C7.33584 15.3313 7.95239 15.6046 8.60119 15.6046H11.3649L6.21207 9.7532H12.8901C16.9927 9.7532 20.4572 12.8019 20.6113 16.7079C20.7063 19.0564 19.5969 21.3006 17.6361 22.7267L14.4566 19.1161C14.0408 18.6413 13.4242 18.3681 12.7754 18.3681H10.0117L14.9549 23.9991C14.3258 24.1563 13.677 24.2365 13.0264 24.2365H3.45733C2.80852 24.2365 2.19376 24.5098 1.77616 24.9829L0 27H12.8686C18.6344 27 23.4431 22.6311 23.5166 17.1383C23.5901 11.6132 18.9499 7.07686 13.15 7.00683C13.1088 7.00683 13.0676 7.00683 13.0264 7.00512"
            fill="#0B5E8E"/>
        </svg>
      } */}
    </>
  );
};

export default Logo;
