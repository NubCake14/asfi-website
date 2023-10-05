const { Splitting } = window
const RESULTS = Splitting()
// Set of characters we can use to glitch through
const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('')
// Loop through our Splitting results and apply CSS variables.
// The results contain an Array of spans that are the characters.
for (let r = 0; r < RESULTS.length; r++) {
  const CHARS = RESULTS[r].chars
  for (let c = 0; c < CHARS.length; c++) {
    // We are going to inline 10 CSS variables
    for (let g = 0; g < 10; g++) {
      CHARS[c].style.setProperty(
        `--char-${g}`,
        `"${GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]}"`
      )
    }
  }
}