export type SeoPage = { slug: string; title: string; description: string; eyebrow: string; intro: string; tips: [string, string, string]; examples: string[]; related: string[] };

type Seed = { slug: string; subject: string; qualifier?: string; examples: string[]; related: string[] };

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

function titleCase(value: string) { return value.replace(/\b\w/g, (letter) => letter.toUpperCase()); }
function createPage(seed: Seed): SeoPage {
  const phrase = `${seed.qualifier ? `${seed.qualifier} ` : ""}${seed.subject}`;
  const display = titleCase(phrase);
  return { slug: seed.slug, title: `${display} Names: Find a Meaningful Name for Your Pet`, description: `Explore ${phrase} names with ideas, simple naming tips, and a personal name generator for your companion.`, eyebrow: `${display.toUpperCase()} NAME IDEAS`, intro: `A name is one of the first little gifts you give a ${seed.subject}. Browse these ${phrase} name ideas, then use the details you love most—personality, colour, habits, and your story together—to discover a name that feels truly theirs.`, tips: [`Start with the feeling you want your ${seed.subject}'s name to carry.`, "Choose a name that is easy for your household to say and remember.", "Try a few favorites out loud before making the final choice."], examples: seed.examples, related: seed.related };
}
export const seoPages = seeds.map(createPage);
export const seoPageBySlug = new Map(seoPages.map((page) => [page.slug, page]));
export function getSeoPage(slug: string) { return seoPageBySlug.get(slug); }
