/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white': 'rgb(229 231 235)',
      'anchor':"hsl(228, 45%, 44%)",
      "work":"hsl(15, 100%, 70%)",
      "play": "hsl(195, 74%, 62%)",
      "study": "hsl(348, 100%, 68%)",
      "exercise": "hsl(145, 58%, 55%)",
      "social": "hsl(264, 64%, 52%)",
      "self-care": "hsl(43, 84%, 65%)",
      "Blue-0":"hsl(246, 80%, 60%)",
      "Blue-1": "hsl(226, 43%, 10%)",
      "Blue-2": "hsl(235, 46%, 20%)",
      "Blue-3": "hsl(235, 45%, 61%)",
      "Blue-4": "hsl(236, 100%, 87%)",
    },
    fontFamily:{
      "Rubik": ["Rubik", "sans-serif"]
    },
    fontWeight:{
      sm: '300',
      md: '400',
      lg: '500',
    },
  },
  plugins: [],
}

