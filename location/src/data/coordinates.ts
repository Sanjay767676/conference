export interface Coordinate {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  instruction: string;
}

export const campusLocations: Record<string, Coordinate> = {
  mainGate: {
    id: "mainGate",
    name: "Main Gate",
    latitude: 11.100752,
    longitude: 77.025918,
    instruction: "Enter through the main gate."
  },
  lawn: {
    id: "lawn",
    name: "Lawn",
    latitude: 11.100652,
    longitude: 77.026441,
    instruction: "Walk straight across the lawn pathway."
  },
  lawnStraight: {
    id: "lawnStraight",
    name: "After Lawn",
    latitude: 11.100756,
    longitude: 77.026950,
    instruction: "Continue straight past the lawn."
  },
  foodCourt: {
    id: "foodCourt",
    name: "Food Court",
    latitude: 11.100616,
    longitude: 77.027530,
    instruction: "Cross through the Food Court area."
  },
  roadTurn: {
    id: "roadTurn",
    name: "Road to AI Campus",
    latitude: 11.100907,
    longitude: 77.027828,
    instruction: "Turn left into the road towards SNS College of Technology AI Campus."
  },
  playground: {
    id: "playground",
    name: "SNS Playground",
    latitude: 11.101520,
    longitude: 77.027805,
    instruction: "Go straight along the road past the SNS Playground."
  },
  auditorium: {
    id: "auditorium",
    name: "Open Auditorium",
    latitude: 11.103018,
    longitude: 77.027508,
    instruction: "Pass the Open Auditorium on your left."
  },
  aiCampus: {
    id: "aiCampus",
    name: "AI Campus Entrance (Conference Venue)",
    latitude: 11.103200,
    longitude: 77.027400,
    instruction: "Turn left. Opposite Saibaba Temple is the SNS AI Campus Entrance."
  }
};
