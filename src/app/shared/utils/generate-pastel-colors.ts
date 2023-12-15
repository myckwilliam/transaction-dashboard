export function generatePastelColors(arrayLength: number): string[] {
  const randomColors: string[] = [];

  for (let i = 0; i < arrayLength; i++) {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 101);
    const lightness = Math.floor(Math.random() * 41) + 40;

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    randomColors.push(color);
  }

  return randomColors;
}

export function generatePastelColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 101);
  const lightness = Math.floor(Math.random() * 41) + 40;

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return color;
}
