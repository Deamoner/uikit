
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type GitCommitHorizontalProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-git-commit-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.358 8.061 C 9.851 8.296,8.597 9.415,8.143 10.930 C 8.124 10.996,7.963 11.000,5.508 11.000 C 2.670 11.000,2.672 11.000,2.382 11.221 C 2.302 11.282,2.187 11.415,2.128 11.516 C 2.037 11.672,2.020 11.746,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.256 12.702,2.449 12.864,2.670 12.943 C 2.789 12.986,3.361 12.997,5.471 12.998 C 7.961 13.000,8.124 13.004,8.143 13.070 C 8.510 14.292,9.362 15.240,10.512 15.704 C 11.471 16.090,12.529 16.090,13.488 15.704 C 14.522 15.287,15.323 14.478,15.711 13.460 C 15.778 13.284,15.843 13.109,15.855 13.070 C 15.876 13.004,16.040 13.000,18.529 12.998 C 20.639 12.997,21.211 12.986,21.330 12.943 C 21.551 12.864,21.744 12.702,21.869 12.489 C 21.964 12.328,21.980 12.256,21.980 12.000 C 21.980 11.746,21.963 11.672,21.872 11.516 C 21.813 11.415,21.698 11.282,21.618 11.221 C 21.328 11.000,21.330 11.000,18.492 11.000 C 16.037 11.000,15.876 10.996,15.855 10.930 C 15.843 10.892,15.778 10.716,15.711 10.540 C 15.213 9.232,14.008 8.270,12.605 8.058 C 12.144 7.989,11.816 7.990,11.358 8.061 M12.523 10.073 C 13.262 10.266,13.850 10.924,13.967 11.690 C 14.067 12.343,13.873 12.933,13.403 13.404 C 13.002 13.807,12.547 14.000,12.000 14.000 C 11.485 14.000,11.038 13.822,10.653 13.465 C 9.323 12.229,10.189 10.005,12.000 10.005 C 12.143 10.005,12.378 10.036,12.523 10.073 " stroke="none" fill="black" fill-rule="evenodd"></path></svg>`;
      export const GitCommitHorizontal = /*@__PURE__*/ forwardRef<ComponentInternals, GitCommitHorizontalProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    