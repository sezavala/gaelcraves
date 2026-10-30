// Empty values in site.json show as a dash until Christian fills them in.
export const orDash = (value: string | number | undefined | null) =>
  value === "" || value == null ? "—" : String(value);

// 1 -> "01"
export const pad2 = (n: number) => String(n).padStart(2, "0");
