export type SeoNameIdea = {
  name: string;
  meaning: string;
};

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  listIntro: string;
  ctaTitle: string;
  tips: [string, string, string];
  examples: string[];
  names: SeoNameIdea[];
  related: string[];
};

type Seed = {
  slug: string;
  subject: string;
  qualifier?: string;
  examples: string[];
  related: string[];
};

const seeds: Seed[] = [
  { slug: "dog-names", subject: "dog", examples: ["Milo", "Daisy", "Scout", "Maple", "Teddy", "Winnie"], related: ["cute-dog-names", "male-dog-names", "female-dog-names", "puppy-names"] },
  { slug: "cute-dog-names", subject: "dog", qualifier: "cute", examples: ["Mochi", "Peanut", "Poppy", "Biscuit", "Teddy", "Noodle"], related: ["dog-names", "small-dog-names", "puppy-names", "female-dog-names"] },
  { slug: "male-dog-names", subject: "dog", qualifier: "male", examples: ["Cooper", "Finn", "Bear", "Archie", "Ranger", "Ollie"], related: ["dog-names", "female-dog-names", "cool-pet-names", "husky-names"] },
  { slug: "female-dog-names", subject: "dog", qualifier: "female", examples: ["Luna", "Rosie", "Willow", "Mabel", "Nala", "Millie"], related: ["dog-names", "cute-dog-names", "luxury-pet-names", "golden-retriever-names"] },
  { slug: "small-dog-names", subject: "small dog", examples: ["Bean", "Pixie", "Pip", "Dottie", "Mochi", "Tinker"], related: ["cute-dog-names", "puppy-names", "dog-names", "funny-pet-names"] },
  { slug: "large-dog-names", subject: "large dog", examples: ["Atlas", "Moose", "Duke", "Aspen", "Ranger", "Nova"], related: ["dog-names", "cool-pet-names", "husky-names", "pitbull-names"] },
  { slug: "black-dog-names", subject: "black dog", examples: ["Onyx", "Raven", "Shadow", "Jet", "Licorice", "Sable"], related: ["white-dog-names", "brown-dog-names", "dog-names", "black-cat-names"] },
  { slug: "white-dog-names", subject: "white dog", examples: ["Snowy", "Pearl", "Cloud", "Casper", "Marshmallow", "Ivory"], related: ["black-dog-names", "brown-dog-names", "small-dog-names", "dog-names"] },
  { slug: "brown-dog-names", subject: "brown dog", examples: ["Cocoa", "Chestnut", "Maple", "Bruno", "Toffee", "Hazel"], related: ["black-dog-names", "white-dog-names", "golden-retriever-names", "dog-names"] },
  { slug: "golden-retriever-names", subject: "Golden Retriever", examples: ["Sunny", "Honey", "Biscuit", "Maple", "Bailey", "Goldie"], related: ["dog-names", "brown-dog-names", "female-dog-names", "puppy-names"] },
  { slug: "husky-names", subject: "Husky", examples: ["Koda", "Aurora", "Denali", "Storm", "Niko", "Skye"], related: ["dog-names", "cool-pet-names", "mythology-pet-names", "large-dog-names"] },
  { slug: "pitbull-names", subject: "Pitbull", examples: ["Rocky", "Zara", "Tank", "Nala", "Ace", "Cleo"], related: ["dog-names", "cool-pet-names", "male-dog-names", "female-dog-names"] },
  { slug: "puppy-names", subject: "puppy", examples: ["Benny", "Poppy", "Teddy", "Milo", "Clover", "Waffles"], related: ["dog-names", "cute-dog-names", "small-dog-names", "golden-retriever-names"] },
  { slug: "cat-names", subject: "cat", examples: ["Luna", "Oliver", "Cleo", "Mochi", "Jasper", "Willow"], related: ["cute-cat-names", "male-cat-names", "female-cat-names", "black-cat-names"] },
  { slug: "cute-cat-names", subject: "cat", qualifier: "cute", examples: ["Mochi", "Boba", "Miso", "Pudding", "Poppy", "Tofu"], related: ["cat-names", "orange-cat-names", "female-cat-names", "funny-pet-names"] },
  { slug: "black-cat-names", subject: "black cat", examples: ["Salem", "Onyx", "Luna", "Midnight", "Raven", "Ink"], related: ["white-cat-names", "orange-cat-names", "cat-names", "mythology-pet-names"] },
  { slug: "orange-cat-names", subject: "orange cat", examples: ["Marmalade", "Ginger", "Pumpkin", "Sunny", "Tango", "Cheeto"], related: ["cat-names", "cute-cat-names", "calico-cat-names", "black-cat-names"] },
  { slug: "white-cat-names", subject: "white cat", examples: ["Pearl", "Snowdrop", "Cloud", "Miso", "Ivory", "Dove"], related: ["cat-names", "black-cat-names", "female-cat-names", "cute-cat-names"] },
  { slug: "calico-cat-names", subject: "calico cat", examples: ["Patches", "Freckle", "Clover", "Marmalade", "Pixel", "Trixie"], related: ["cat-names", "orange-cat-names", "cute-cat-names", "funny-pet-names"] },
  { slug: "female-cat-names", subject: "cat", qualifier: "female", examples: ["Luna", "Cleo", "Mabel", "Ivy", "Nala", "Pippa"], related: ["cat-names", "male-cat-names", "cute-cat-names", "luxury-pet-names"] },
  { slug: "male-cat-names", subject: "cat", qualifier: "male", examples: ["Oliver", "Leo", "Jasper", "Milo", "Theo", "Felix"], related: ["cat-names", "female-cat-names", "cool-pet-names", "black-cat-names"] },
  { slug: "warrior-cat-names", subject: "warrior cat", examples: ["Brackenclaw", "Silverfern", "Emberstripe", "Stormwhisker", "Sageheart", "Hollowstar"], related: ["cat-names", "mythology-pet-names", "anime-pet-names", "unique-pet-names"] },
  { slug: "unique-pet-names", subject: "pet", qualifier: "unique", examples: ["Solstice", "Zephyr", "Juniper", "Echo", "Marlow", "Indigo"], related: ["cool-pet-names", "funny-pet-names", "mythology-pet-names", "anime-pet-names"] },
  { slug: "funny-pet-names", subject: "pet", qualifier: "funny", examples: ["Sir Waggington", "Meowzart", "Waffles", "Pickles", "Nugget", "Professor Paws"], related: ["cute-dog-names", "cute-cat-names", "unique-pet-names", "disney-pet-names"] },
  { slug: "cool-pet-names", subject: "pet", qualifier: "cool", examples: ["Nova", "Ace", "Jett", "Rogue", "Zion", "Sage"], related: ["unique-pet-names", "husky-names", "pitbull-names", "anime-pet-names"] },
  { slug: "luxury-pet-names", subject: "pet", qualifier: "luxury", examples: ["Chanel", "Bentley", "Velvet", "Monaco", "Bijou", "Versailles"], related: ["unique-pet-names", "female-dog-names", "female-cat-names", "mythology-pet-names"] },
  { slug: "anime-pet-names", subject: "pet", qualifier: "anime-inspired", examples: ["Yuki", "Sora", "Kiki", "Haru", "Nami", "Momo"], related: ["unique-pet-names", "warrior-cat-names", "mythology-pet-names", "cool-pet-names"] },
  { slug: "mythology-pet-names", subject: "pet", qualifier: "mythology-inspired", examples: ["Apollo", "Freya", "Atlas", "Nyx", "Odin", "Iris"], related: ["unique-pet-names", "husky-names", "warrior-cat-names", "disney-pet-names"] },
  { slug: "disney-pet-names", subject: "pet", qualifier: "Disney-inspired", examples: ["Nala", "Simba", "Dory", "Stitch", "Remy", "Belle"], related: ["funny-pet-names", "cute-dog-names", "cute-cat-names", "mythology-pet-names"] },
];

const nameBank = [
  "Milo", "Teddy", "Luna", "Daisy", "Charlie", "Bella", "Cooper", "Lucy", "Max", "Rosie",
  "Bailey", "Nala", "Finn", "Willow", "Oliver", "Ruby", "Leo", "Poppy", "Scout", "Mochi",
  "Maple", "Winnie", "Archie", "Coco", "Jasper", "Millie", "Theo", "Hazel", "Ollie", "Ivy",
  "Riley", "Cleo", "Biscuit", "Sunny", "Honey", "Pepper", "Nova", "Bean", "Koda", "Mabel",
  "Pip", "Remy", "Sage", "Cookie", "Bruno", "Miso", "Pippa", "Benny", "Toffee", "Clover",
  "Pumpkin", "Ziggy", "Pearl", "Niko", "Skye", "Moose", "Aspen", "Ranger", "Jet", "Onyx",
  "Raven", "Shadow", "Snowy", "Cloud", "Ivory", "Chestnut", "Cocoa", "Goldie", "Aurora", "Storm",
  "Rocky", "Ace", "Zara", "Tank", "Tango", "Salem", "Midnight", "Ink", "Ginger", "Marmalade",
  "Pixel", "Freckle", "Tofu", "Boba", "Yuki", "Sora", "Kiki", "Haru", "Nami", "Momo",
  "Apollo", "Freya", "Atlas", "Nyx", "Odin", "Iris", "Simba", "Stitch", "Belle", "Pickles",
  "Waffles", "Nugget", "Juniper", "Echo", "Indigo", "Zephyr", "Solstice", "Velvet", "Monaco", "Bijou",
];

const meaningTemplates = [
  (name: string, phrase: string) => `${name} has a soft, friendly sound that suits a ${phrase} with a loving personality.`,
  (name: string, phrase: string) => `${name} feels warm and easy to call, making it a sweet choice for a ${phrase} who is part of the family.`,
  (name: string, phrase: string) => `${name} gives a bright, cheerful feeling and works well for a ${phrase} who brings joy into the home.`,
  (name: string, phrase: string) => `${name} has a gentle rhythm, perfect for a ${phrase} with a calm heart and loyal nature.`,
  (name: string, phrase: string) => `${name} feels playful without being too silly, a good match for a ${phrase} with everyday charm.`,
  (name: string, phrase: string) => `${name} sounds affectionate and memorable, which makes it easy for everyone at home to love.`,
  (name: string, phrase: string) => `${name} carries a cozy feeling and fits a ${phrase} who loves attention, cuddles, and familiar voices.`,
  (name: string, phrase: string) => `${name} is short, clear, and full of character, ideal for a ${phrase} who responds to a happy call.`,
  (name: string, phrase: string) => `${name} has a bright name meaning in spirit: comfort, companionship, and a little everyday magic.`,
  (name: string, phrase: string) => `${name} feels personal and kind, a name that can grow with your ${phrase} through every season together.`,
];

function titleCase(value: string) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function uniqueNames(names: string[]) {
  return Array.from(new Set(names));
}

function createNameIdeas(seed: Seed, phrase: string): SeoNameIdea[] {
  return uniqueNames([...seed.examples, ...nameBank])
    .slice(0, 100)
    .map((name, index) => ({
      name,
      meaning: meaningTemplates[index % meaningTemplates.length](name, phrase),
    }));
}

function createPage(seed: Seed): SeoPage {
  const phrase = `${seed.qualifier ? `${seed.qualifier} ` : ""}${seed.subject}`;
  const display = titleCase(phrase);

  return {
    slug: seed.slug,
    title: `${display} Names`,
    description: `Browse 100 ${phrase} names with simple meanings, then create a personalized pet name from your own story.`,
    eyebrow: `${display.toUpperCase()} NAME IDEAS`,
    intro: `Looking for a name that feels sweet, memorable, and right at home? Start with this list of ${phrase} names, then use your pet's personality and your story together to create something more personal.`,
    listIntro: `Here are 100 ${phrase} names:`,
    ctaTitle: "Need a personalized name?",
    tips: [
      `Start with the feeling you want your ${seed.subject}'s name to carry.`,
      "Choose a name that is easy for your household to say and remember.",
      "Try a few favorites out loud before making the final choice.",
    ],
    examples: seed.examples,
    names: createNameIdeas(seed, phrase),
    related: seed.related,
  };
}

export const seoPages = seeds.map(createPage);
export const seoPageBySlug = new Map(seoPages.map((page) => [page.slug, page]));

export function getSeoPage(slug: string) {
  return seoPageBySlug.get(slug);
}
