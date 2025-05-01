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
      fill="#C8C6C9"
      d="m20.83 8.703-6.55-5.24C13 2.443 11 2.433 9.73 3.453l-6.55 5.25c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54c.29 1.69 1.86 3.02 3.57 3.02h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42Z"
    />
    <path
      fill="#F39C12"
      d="M12 19.443c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
    />
  </svg>
)
export default SvgComponent
