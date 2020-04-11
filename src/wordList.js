import shuffle from "lodash.shuffle";

const wordCards = [
  { front: "Hollywood", back: "Well" },
  { front: "Screen", back: "Fair" },
  { front: "Play", back: "Tooth" },
  { front: "Marble", back: "Staff" },
  { front: "Dinosaur", back: "Bill" },
  { front: "Cat", back: "Shot" },
  { front: "Pitch", back: "King" },
  { front: "Bond", back: "Pan" },
  { front: "Greece", back: "Square" },
  { front: "Deck", back: "Buffalo" },
  { front: "Spike", back: "Scientist" },
  { front: "Center", back: "Chick" },
  { front: "Vacuum", back: "Atlantis" },
  { front: "Unicorn", back: "Spy" },
  { front: "Undertaker", back: "Mail" },
  { front: "Sock", back: "Nut" },
  { front: "Loch Ness", back: "Log" },
  { front: "Horse", back: "Pirate" },
  { front: "Berlin", back: "Face" },
  { front: "Platypus", back: "Stick" },
  { front: "Port", back: "Disease" },
  { front: "Chest", back: "Yard" },
  { front: "Box", back: "Mount" },
  { front: "Compound", back: "Slug" },
  { front: "Ship", back: "Dice" },
  { front: "Watch", back: "Lead" },
  { front: "Space", back: "Hook" },
  { front: "Flute", back: "Carrot" },
  { front: "Tower", back: "Poison" },
  { front: "Death", back: "Stock" },
  { front: "Foot", back: "New York" },
  { front: "Torch", back: "State" },
  { front: "Arm", back: "Bermuda" },
  { front: "Figure", back: "Park" },
  { front: "Mine", back: "Turkey" },
  { front: "Suit", back: "Chocolate" },
  { front: "Crane", back: "Trip" },
  { front: "Beijing", back: "Racket" },
  { front: "Mass", back: "Bat" },
  { front: "Microscope", back: "Jet" },
  { front: "Engine", back: "Shakespeare" },
  { front: "China", back: "Bolt" },
  { front: "Straw", back: "Switch" },
  { front: "Pants", back: "Wall" },
  { front: "Europe", back: "Soul" },
  { front: "Boot", back: "Ghost" },
  { front: "Princess", back: "Time" },
  { front: "Link", back: "Dance" },
  { front: "Luck", back: "Amazon" },
  { front: "Olive", back: "Grace" },
  { front: "Palm", back: "Moscow" },
  { front: "Teacher", back: "Pumpkin" },
  { front: "Thumb", back: "Antactica" },
  { front: "Octopus", back: "Whip" },
  { front: "Hood", back: "Heart" },
  { front: "Tie", back: "Table" },
  { front: "Doctor", back: "Ball" },
  { front: "Wake", back: "Fighter" },
  { front: "Cricket", back: "Cold" },
  { front: "Millionarie", back: "Day" },
  { front: "Spring", back: "Court" },
  { front: "Match", back: "Iron" },
  { front: "Diamond", back: "Whale" },
  { front: "Centaur", back: "Shadow" },
  { front: "March", back: "Contract" },
  { front: "Roulette", back: "Mercury" },
  { front: "Dog", back: "Conductor" },
  { front: "Cross", back: "Seal" },
  { front: "Wave", back: "Car" },
  { front: "Duck", back: "Ring" },
  { front: "Wind", back: "Kid" },
  { front: "Spot", back: "Piano" },
  { front: "Skyscraper", back: "Laser" },
  { front: "Paper", back: "Sound" },
  { front: "Apple", back: "Pole" },
  { front: "Oil", back: "Superhero" },
  { front: "Cook", back: "Revolution" },
  { front: "Fly", back: "Pit" },
  { front: "Cast", back: "Gas" },
  { front: "Bear", back: "Glass" },
  { front: "Pin", back: "Washington" },
  { front: "Thief", back: "Bark" },
  { front: "Trunk", back: "Snow" },
  { front: "America", back: "Ivory" },
  { front: "Novel", back: "Pipe" },
  { front: "Cell", back: "Cover" },
  { front: "Bow", back: "Degree" },
  { front: "Model", back: "Tokyo" },
  { front: "Knife", back: "Church" },
  { front: "Knight", back: "Pie" },
  { front: "Tube", back: "Point" },
  { front: "Block", back: "France" },
  { front: "Comic", back: "Mammoth" },
  { front: "Fish", back: "Cotton" },
  { front: "Bridge", back: "Robin" },
  { front: "Moon", back: "Net" },
  { front: "Part", back: "Bugle" },
  { front: "Aztec", back: "Maple" },
  { front: "Smuggler", back: "England" },
  { front: "Train", back: "Field" },
  { front: "Embassy", back: "Robot" },
  { front: "Pupil", back: "Plot" },
  { front: "Scuba Diver", back: "Africa" },
  { front: "Ice", back: "Tag" },
  { front: "Tap", back: "Mouth" },
  { front: "Code", back: "Kiwi" },
  { front: "Shoe", back: "Mole" },
  { front: "Server", back: "School" },
  { front: "Club", back: "Sink" },
  { front: "Row", back: "Pistol" },
  { front: "Pyramid", back: "Opera" },
  { front: "Bug", back: "Mint" },
  { front: "Penguin", back: "Root" },
  { front: "Pound", back: "Sub" },
  { front: "Himalayas", back: "Crown" },
  { front: "Czech", back: "Back" },
  { front: "Rome", back: "Plane" },
  { front: "Eye", back: "Mexico" },
  { front: "Board", back: "Cloak" },
  { front: "Bed", back: "Circle" },
  { front: "Tablet", back: "Slip" },
  { front: "Australia", back: "Limousine" },
  { front: "Green", back: "Pass" },
  { front: "Egypt", back: "Theater" },
  { front: "Line", back: "Plate" },
  { front: "Lawyer", back: "Satellite" },
  { front: "Witch", back: "Ketchup" },
  { front: "Parachute", back: "Hotel" },
  { front: "Crash", back: "Tail" },
  { front: "Gold", back: "Tick" },
  { front: "Note", back: "Ground" },
  { front: "Lion", back: "Police" },
  { front: "Plastic", back: "Dwarf" },
  { front: "Web", back: "Fan" },
  { front: "Ambulance", back: "Dress" },
  { front: "Hospital", back: "Saturn" },
  { front: "Spell", back: "Grass" },
  { front: "Lock", back: "Brush" },
  { front: "Water", back: "Chair" },
  { front: "London", back: "Rock" },
  { front: "Casino", back: "Pilot" },
  { front: "Cycle", back: "Telescope" },
  { front: "Bar", back: "File" },
  { front: "Cliff", back: "Lab" },
  { front: "Round", back: "India" },
  { front: "Bomb", back: "Ruler" },
  { front: "Giant", back: "Nail" },
  { front: "Hand", back: "Swing" },
  { front: "Ninja", back: "Olympus" },
  { front: "Rose", back: "Change" },
  { front: "Date", back: "Drill" },
  { front: "Stream", back: "Glove" },
  { front: "Missile", back: "Paste" },
  { front: "Scale", back: "Fall" },
  { front: "Band", back: "Fire" },
  { front: "Angel", back: "Spider" },
  { front: "Press", back: "Spine" },
  { front: "Berry", back: "Soldier" },
  { front: "Card", back: "Horn" },
  { front: "Check", back: "Queen" },
  { front: "Draft", back: "Ham" },
  { front: "Head", back: "Litter" },
  { front: "Lap", back: "Life" },
  { front: "Orange", back: "Temple" },
  { front: "Ice Cream", back: "Rabbit" },
  { front: "Film", back: "Button" },
  { front: "Washer", back: "Game" },
  { front: "Pool", back: "Star" },
  { front: "Shark", back: "Jupiter" },
  { front: "Van", back: "Vet" },
  { front: "String", back: "Night" },
  { front: "Calf", back: "Air" },
  { front: "Hawk", back: "Battery" },
  { front: "Eagle", back: "Genious" },
  { front: "Needle", back: "Shop" },
  { front: "Forest", back: "Bottle" },
  { front: "Dragon", back: "Stadium" },
  { front: "Key", back: "Alien" },
  { front: "Belt", back: "Light" },
  { front: "Cap", back: "Triangle" },
  { front: "Lemon", back: "Bell" },
  { front: "Nurse", back: "Leprechaun" },
  { front: "Drop", back: "Pheonix" },
  { front: "Track", back: "Force" },
  { front: "Bank", back: "Boom" },
  { front: "Germany", back: "Fork" },
  { front: "Worm", back: "Alps" },
  { front: "Ray", back: "Post" },
  { front: "Capital", back: "Fence" },
  { front: "Strike", back: "Kangaroo" },
  { front: "War", back: "Mouse" },
  { front: "Concert", back: "Mug" },
  { front: "Honey", back: "Horseshoe" },
  { front: "Canada", back: "Scorpion" },
  { front: "Buck", back: "Agent" },
  { front: "Snowman", back: "Helicopter" },
  { front: "Beat", back: "Hole" },
  { front: "Jam", back: "Organ" },
  { front: "Copper", back: "Jack" },
  { front: "Beach", back: "Charge" },
];

export const chooseRandomWords = (seed, words = wordCards) => {
  return shuffle(words)
    .slice(0, 25)
    .map(({ front, back }) => (Math.random() < 0.5 ? front : back));
};
