const tones = {
  1: "7d=3p-45P=5w=6b-6p-5p-4p=5p=;=5w-4p-3p-45P-4v'3n2n1n=||=",
  '1b': "7d=3p-45P=5w=6b-6p-5p-4p=5p=;=5w-4p-3p-45P-4p=||=",
  4: "7d=5p-45P=5w=4p-5p-6p-5p=;=5w-4p-5p-6p-4p-2p=||=",
  5: "7d=1p-3p-5p=5w=6p-5p=;=5w-6p-4p-5p-3p=||=",
  6: "7d=3p-45P=5w=6b-6p-5p-4p=5p=;=5w=3p-45P-4p-3p=||=",
  7: "5d=5p-56P=6w=8p-7p-6p-7p=;=6w-7p-6p-5p-46P=||=",
  8: "5d=4p-5p=7w=8p-7p=;=7w=6p-7p-5p-4p=||=",
};

export default ({ no }) => <div className="chant">{tones[no]}</div>;
