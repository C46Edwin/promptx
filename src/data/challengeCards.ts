export type CardCategoryId = 'mission' | 'vibe' | 'chaos';

export interface CardCategory {
  id: CardCategoryId;
  index: string;
  title: string;
  label: string;
  description: string;
  deck: readonly string[];
}

export const missionDeck = [
  'Advertise a college hackathon',
  'Invent a futuristic product',
  'Design a superhero',
  'Create a movie poster',
  'Build a fictional brand',
  'Create a tourism campaign for an imaginary planet',
  'Design an impossible invention',
  'Create a campaign for a fictional event',
  'Invent a new entertainment experience',
  'Advertise an absurd product',
] as const;

export const vibeDeck = [
  'Dramatic Bollywood blockbuster',
  'Cyberpunk dystopian future',
  'Royal Indian aesthetic',
  'Horror movie trailer',
  'Cartoon comedy',
  'Luxury brand advertisement',
  'Retro-futuristic science fiction',
  'Vintage magazine advertisement',
  'Mythological epic',
  'Futuristic space opera',
] as const;

export const chaosDeck = [
  'Include a talking coconut',
  'Use no more than five words',
  'Make the villain the hero',
  'Add an unnecessary plot twist',
  'Make something expensive with a budget of zero',
  'Appeal to both a five-year-old and a CEO',
  'Include an object that has no reason to be there',
  'Make something terrifying sound wholesome',
  'Include an unexpected fictional character',
  'Explain something complex using only simple words',
] as const;

export const categories: readonly CardCategory[] = [
  {
    id: 'mission',
    index: '01',
    title: 'The Mission',
    label: 'What are you creating?',
    description: 'The Mission card defines your objective.',
    deck: missionDeck,
  },
  {
    id: 'vibe',
    index: '02',
    title: 'The Vibe',
    label: 'What is the aesthetic?',
    description:
      'The Vibe card determines the visual style or creative direction of your final creation.',
    deck: vibeDeck,
  },
  {
    id: 'chaos',
    index: '03',
    title: 'The Chaos',
    label: 'What could possibly go wrong?',
    description:
      'The Chaos card introduces a strange restriction that makes the challenge unpredictable.',
    deck: chaosDeck,
  },
];

export const stages = [
  { n: '01', title: 'Draw your cards', body: 'Receive one random instruction from each deck.' },
  { n: '02', title: 'Engineer your prompt', body: 'Combine all three instructions into one precise prompt.' },
  {
    n: '03',
    title: 'Refine the output',
    body: 'Experiment with AI and improve your prompt until the result satisfies the challenge.',
  },
  { n: '04', title: 'Submit your creation', body: 'Submit your final output and the prompt that generated it.' },
] as const;

export const scoring = [
  { label: 'Creativity and originality', points: 30 },
  { label: 'Prompt engineering', points: 25 },
  { label: 'Instruction compliance', points: 25 },
  { label: 'Presentation and impact', points: 20 },
] as const;

export const totalPoints = scoring.reduce((sum, s) => sum + s.points, 0); // 100

export const twistExamples = [
  'Add an unexpected character.',
  'Appeal to two completely different audiences.',
  'Include an impossible feature.',
  'Communicate the message using half as many words.',
] as const;
