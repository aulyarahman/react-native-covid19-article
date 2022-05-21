export const CombineText = (id: number): string => {
  let text: string = "";

  {
    id === 0
      ? (text = "Varain Alfat")
      : id === 1
      ? (text = "Varian Beta")
      : id === 2
      ? (text = "Varian Delta")
      : id === 3
      ? (text = "Varian Gamma")
      : id === 4
      ? (text = "Varian Epsilon")
      : id === 5
      ? (text = "Varian Lambda")
      : id === 6
      ? (text = "Varian Zeta")
      : id === 7
      ? (text = "Varian Eta")
      : id === 8
      ? (text = "Varian Theta")
      : id === 9
      ? (text = "Varian Lota")
      : id === 10
      ? (text = "Varian Mu")
      : id === 11
      ? (text = "Varian Kappa")
      : id === 12
      ? (text = "Varian Omicron")
      : id === 13
      ? (text = "Varian Flurona")
      : null;
  }

  return text;
};
