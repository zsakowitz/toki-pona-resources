// Modified from https://bost.ocks.org/mike/shuffle/compare.html
export function shuffle<T>(array: readonly T[]): T[] {
  const output = array.slice()
  let currentIndex = output.length
  let randomIndex

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex--)
    ;[output[randomIndex], output[currentIndex]] = [
      output[currentIndex]!,
      output[randomIndex]!,
    ]
  }

  return output
}
