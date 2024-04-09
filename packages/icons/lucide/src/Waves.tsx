
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type WavesProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-waves" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.915 4.043 C 8.351 4.103,7.803 4.282,7.307 4.569 C 7.157 4.656,6.761 4.933,6.427 5.185 C 6.093 5.436,5.712 5.696,5.580 5.761 C 4.965 6.066,4.045 6.076,3.433 5.784 C 3.316 5.727,3.103 5.590,2.960 5.479 C 2.370 5.018,2.179 4.947,1.778 5.037 C 1.002 5.211,0.743 6.159,1.319 6.718 C 1.565 6.958,2.199 7.407,2.500 7.556 C 3.850 8.224,5.688 8.124,6.885 7.318 C 7.025 7.223,7.387 6.961,7.690 6.734 C 8.543 6.095,8.736 6.021,9.540 6.024 C 10.324 6.027,10.500 6.100,11.400 6.801 C 11.675 7.015,12.028 7.272,12.185 7.373 C 13.508 8.227,15.572 8.203,16.885 7.318 C 17.025 7.223,17.387 6.961,17.690 6.734 C 18.543 6.095,18.736 6.021,19.540 6.024 C 20.283 6.026,20.501 6.109,21.230 6.665 C 21.675 7.004,21.946 7.072,22.322 6.939 C 22.953 6.717,23.186 6.008,22.818 5.434 C 22.681 5.221,21.923 4.666,21.460 4.439 C 20.981 4.205,20.579 4.096,19.976 4.034 C 19.135 3.949,18.230 4.100,17.555 4.438 C 17.197 4.617,16.955 4.779,16.300 5.278 C 16.036 5.479,15.712 5.697,15.580 5.762 C 14.964 6.066,14.044 6.076,13.433 5.784 C 13.316 5.727,13.103 5.591,12.960 5.480 C 12.046 4.772,11.822 4.616,11.460 4.439 C 10.708 4.071,9.874 3.941,8.915 4.043 M8.915 10.043 C 8.351 10.103,7.803 10.282,7.307 10.569 C 7.157 10.656,6.761 10.933,6.427 11.185 C 6.093 11.436,5.712 11.696,5.580 11.761 C 4.965 12.066,4.045 12.076,3.433 11.784 C 3.316 11.727,3.103 11.590,2.960 11.479 C 2.370 11.018,2.179 10.947,1.778 11.037 C 1.002 11.211,0.743 12.159,1.319 12.718 C 1.565 12.958,2.199 13.407,2.500 13.556 C 3.850 14.224,5.688 14.124,6.885 13.318 C 7.025 13.223,7.387 12.961,7.690 12.734 C 8.543 12.095,8.736 12.021,9.540 12.024 C 10.324 12.027,10.500 12.100,11.400 12.801 C 11.675 13.015,12.028 13.272,12.185 13.373 C 13.508 14.227,15.572 14.203,16.885 13.318 C 17.025 13.223,17.387 12.961,17.690 12.734 C 18.543 12.095,18.736 12.021,19.540 12.024 C 20.283 12.026,20.501 12.109,21.230 12.665 C 21.675 13.004,21.946 13.072,22.322 12.939 C 22.953 12.717,23.186 12.008,22.818 11.434 C 22.681 11.221,21.923 10.666,21.460 10.439 C 20.981 10.205,20.579 10.096,19.976 10.034 C 19.135 9.949,18.230 10.100,17.555 10.438 C 17.197 10.617,16.955 10.779,16.300 11.278 C 16.036 11.479,15.712 11.697,15.580 11.762 C 14.964 12.066,14.044 12.076,13.433 11.784 C 13.316 11.727,13.103 11.591,12.960 11.480 C 12.046 10.772,11.822 10.616,11.460 10.439 C 10.708 10.071,9.874 9.941,8.915 10.043 M8.915 16.043 C 8.351 16.103,7.803 16.282,7.307 16.569 C 7.157 16.656,6.761 16.933,6.427 17.185 C 6.093 17.436,5.712 17.696,5.580 17.761 C 4.965 18.066,4.045 18.076,3.433 17.784 C 3.316 17.727,3.103 17.590,2.960 17.479 C 2.370 17.018,2.179 16.947,1.778 17.037 C 1.002 17.211,0.743 18.159,1.319 18.718 C 1.565 18.958,2.199 19.407,2.500 19.556 C 3.850 20.224,5.688 20.124,6.885 19.318 C 7.025 19.223,7.387 18.961,7.690 18.734 C 8.543 18.095,8.736 18.021,9.540 18.024 C 10.324 18.027,10.500 18.100,11.400 18.801 C 11.675 19.015,12.028 19.272,12.185 19.373 C 13.508 20.227,15.572 20.203,16.885 19.318 C 17.025 19.223,17.387 18.961,17.690 18.734 C 18.543 18.095,18.736 18.021,19.540 18.024 C 20.283 18.026,20.501 18.109,21.230 18.665 C 21.675 19.004,21.946 19.072,22.322 18.939 C 22.953 18.717,23.186 18.008,22.818 17.434 C 22.681 17.221,21.923 16.666,21.460 16.439 C 20.981 16.205,20.579 16.096,19.976 16.034 C 19.135 15.949,18.230 16.100,17.555 16.438 C 17.197 16.617,16.955 16.779,16.300 17.278 C 16.036 17.479,15.712 17.697,15.580 17.762 C 14.964 18.066,14.044 18.076,13.433 17.784 C 13.316 17.727,13.103 17.591,12.960 17.480 C 12.046 16.772,11.822 16.616,11.460 16.439 C 10.708 16.071,9.874 15.941,8.915 16.043 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const Waves = /*@__PURE__*/ forwardRef<ComponentInternals, WavesProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    