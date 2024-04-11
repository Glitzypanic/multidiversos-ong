export default function Check({ stroke, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke || "currentColor"}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check alert-check"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}
