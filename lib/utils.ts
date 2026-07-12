export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatNaira(amount: number) {
  return `NGN ${amount.toLocaleString("en-NG")}`;
}
