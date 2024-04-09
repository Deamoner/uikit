
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type SquareUserProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-square-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.499 2.043 C 3.380 2.232,2.461 3.048,2.114 4.160 L 2.020 4.460 2.020 12.000 L 2.020 19.540 2.114 19.840 C 2.422 20.827,3.173 21.578,4.160 21.886 L 4.460 21.980 12.000 21.980 L 19.540 21.980 19.840 21.886 C 20.827 21.578,21.578 20.827,21.886 19.840 L 21.980 19.540 21.980 12.000 L 21.980 4.460 21.886 4.160 C 21.581 3.182,20.832 2.428,19.861 2.121 L 19.540 2.020 12.120 2.014 C 8.039 2.011,4.609 2.024,4.499 2.043 M19.310 4.061 C 19.589 4.144,19.856 4.411,19.939 4.690 C 19.993 4.870,20.000 5.755,20.000 12.001 C 20.000 17.907,19.991 19.138,19.945 19.290 C 19.872 19.533,19.707 19.740,19.484 19.872 C 19.308 19.975,19.272 19.981,18.655 19.993 L 18.009 20.007 17.990 19.213 C 17.974 18.536,17.958 18.379,17.882 18.140 C 17.569 17.161,16.783 16.387,15.822 16.112 L 15.500 16.020 12.000 16.020 L 8.500 16.020 8.178 16.112 C 7.217 16.387,6.431 17.161,6.118 18.140 C 6.042 18.379,6.026 18.536,6.010 19.213 L 5.991 20.007 5.345 19.993 C 4.728 19.981,4.692 19.975,4.516 19.872 C 4.415 19.813,4.284 19.700,4.225 19.623 C 3.986 19.309,4.000 19.795,4.000 12.022 C 4.000 5.758,4.007 4.870,4.061 4.690 C 4.140 4.421,4.412 4.143,4.673 4.063 C 4.964 3.974,19.009 3.971,19.310 4.061 M11.358 6.061 C 10.230 6.237,9.143 6.974,8.569 7.953 C 7.320 10.083,8.233 12.785,10.512 13.704 C 12.558 14.528,14.877 13.538,15.704 11.488 C 16.090 10.530,16.090 9.469,15.705 8.516 C 15.172 7.197,14.001 6.269,12.605 6.058 C 12.144 5.989,11.816 5.990,11.358 6.061 M12.523 8.073 C 13.262 8.266,13.850 8.924,13.967 9.690 C 14.067 10.343,13.873 10.933,13.403 11.404 C 13.002 11.807,12.547 12.000,12.000 12.000 C 11.485 12.000,11.038 11.822,10.653 11.465 C 9.323 10.229,10.189 8.005,12.000 8.005 C 12.143 8.005,12.378 8.036,12.523 8.073 M15.310 18.061 C 15.452 18.103,15.571 18.178,15.697 18.303 C 15.948 18.554,16.000 18.751,16.000 19.447 L 16.000 20.000 12.000 20.000 L 8.000 20.000 8.000 19.447 C 8.000 18.750,8.052 18.554,8.304 18.303 C 8.613 17.993,8.459 18.006,11.983 18.003 C 14.668 18.000,15.134 18.009,15.310 18.061 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const SquareUser = /*@__PURE__*/ forwardRef<ComponentInternals, SquareUserProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    