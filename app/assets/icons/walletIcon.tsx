import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#F39C12"
      d="M22 12.693v5c0 3-2 5-5 5H7c-3 0-5-2-5-5v-5c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05 2.58.3 4.25 2.21 4.25 4.95Z"
    />
    <path
      fill="#E6E9EE"
      d="M17.75 7.743c-.24-.04-.49-.05-.75-.05H7c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26Z"
    />
    <path fill="#042656" d="M22 13.193h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3" />
  </svg>
)
export default SvgComponent
