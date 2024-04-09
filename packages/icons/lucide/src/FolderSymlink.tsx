
      /* eslint-disable no-shadow-restricted-names */
      import { SvgIconFromText, ComponentInternals } from "@react-three/uikit";
      import { ComponentPropsWithoutRef, forwardRef } from "react"; 
      export type FolderSymlinkProps = Omit<ComponentPropsWithoutRef<typeof SvgIconFromText>, "text" | "svgWidth" | "svgHeight">;
      const text = `<svg class="lucide lucide-folder-symlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.499 2.042 C 2.376 2.236,1.461 3.048,1.114 4.160 L 1.020 4.460 1.020 6.883 L 1.020 9.306 1.141 9.503 C 1.543 10.156,2.457 10.156,2.859 9.503 L 2.980 9.306 3.000 7.023 C 3.022 4.464,3.008 4.587,3.321 4.283 C 3.612 4.001,3.621 4.000,5.961 4.000 C 8.158 4.000,8.249 4.007,8.513 4.195 C 8.579 4.242,8.819 4.554,9.046 4.890 C 9.684 5.829,9.891 6.093,10.166 6.316 C 10.497 6.583,10.975 6.817,11.400 6.918 C 11.730 6.997,11.861 6.999,15.923 7.000 C 20.649 7.000,20.376 6.983,20.697 7.303 C 21.020 7.627,21.000 7.243,21.000 13.001 C 21.000 17.212,20.990 18.139,20.945 18.290 C 20.872 18.533,20.707 18.740,20.484 18.872 L 20.300 18.980 12.000 18.980 L 3.700 18.980 3.516 18.872 C 3.415 18.813,3.284 18.700,3.225 18.623 C 3.005 18.335,3.000 18.288,3.000 16.522 C 3.000 14.642,3.006 14.601,3.303 14.303 C 3.611 13.995,3.562 14.000,6.236 14.000 L 8.577 14.000 7.873 14.710 C 7.486 15.101,7.136 15.483,7.096 15.560 C 7.043 15.660,7.021 15.787,7.021 16.000 C 7.020 16.258,7.036 16.327,7.133 16.492 C 7.263 16.714,7.502 16.901,7.736 16.965 C 7.939 17.019,8.267 16.989,8.445 16.899 C 8.519 16.862,9.306 16.109,10.194 15.226 C 11.957 13.472,11.999 13.420,11.999 13.000 C 11.999 12.578,11.960 12.530,10.175 10.756 C 8.716 9.307,8.519 9.124,8.343 9.066 C 7.863 8.906,7.382 9.084,7.128 9.516 C 7.036 9.672,7.020 9.745,7.021 10.000 C 7.021 10.213,7.043 10.340,7.096 10.440 C 7.136 10.517,7.485 10.899,7.871 11.288 L 8.573 11.996 6.017 12.009 L 3.460 12.022 3.139 12.122 C 2.171 12.425,1.419 13.181,1.114 14.160 C 1.021 14.458,1.020 14.473,1.020 16.500 C 1.020 18.527,1.021 18.542,1.114 18.840 C 1.422 19.827,2.173 20.578,3.160 20.886 L 3.460 20.980 12.000 20.980 L 20.540 20.980 20.840 20.886 C 21.827 20.578,22.578 19.827,22.886 18.840 L 22.980 18.540 22.980 13.000 L 22.980 7.460 22.886 7.160 C 22.581 6.182,21.831 5.427,20.861 5.122 L 20.540 5.021 16.160 5.000 L 11.780 4.980 11.613 4.891 C 11.409 4.781,11.285 4.629,10.759 3.840 C 10.204 3.007,9.805 2.605,9.278 2.346 C 8.596 2.011,8.723 2.024,6.060 2.015 C 4.762 2.011,3.609 2.023,3.499 2.042 " stroke="none" fill-rule="evenodd" fill="black"></path></svg>`;
      export const FolderSymlink = /*@__PURE__*/ forwardRef<ComponentInternals, FolderSymlinkProps>((props, ref) => {
        return <SvgIconFromText {...props} ref={ref} text={text} svgWidth={24} svgHeight={24} />
      })
    