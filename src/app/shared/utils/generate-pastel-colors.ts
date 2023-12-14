export function generatePastelColors(arrayLength: number): string[] {
  const randomColors: string[] = [];

  for (let i = 0; i < arrayLength; i++) {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 101); // 0 to 100
    const lightness = Math.floor(Math.random() * 41) + 40; // 60 to 100 for pastel shades

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    randomColors.push(color);
  }

  return randomColors;
}
